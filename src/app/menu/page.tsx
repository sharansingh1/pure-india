import { client } from "@/sanity/lib/client";
import { defineQuery } from "next-sanity";
import MenuPageContent from "./MenuPageContent";

export const dynamic = 'force-dynamic';

const MENU_QUERY = defineQuery(`*[_type == "menuItem"]{
  name,
  price,
  description,
  category,
  "imageUrl": image.asset->url,
  isVegetarian,
  isSpicy
}`);

export default async function MenuPage() {
  const menuItems = await client.fetch(MENU_QUERY, {}, { next: { revalidate: 0 } });

  // Define the preferred order for categories
  const order = [
    "APPETIZERS – VEG",
    "APPETIZERS – NON-VEG",
    "VEG CURRY",
    "NON-VEG CURRY",
    "BIRYANI",
    "RICE",
    "DOSA",
    "BREAD",
    "DRINKS",
    "DESSERT"
  ];

  // 1. Get all unique categories that actually exist in the data
  const existingCategories = Array.from(new Set(menuItems.map((item: any) => item.category)));

  // 2. Sort these categories based on our preferred order
  existingCategories.sort((a: any, b: any) => {
    const indexA = order.indexOf(a);
    const indexB = order.indexOf(b);
    // If both are in the list, sort by index
    if (indexA !== -1 && indexB !== -1) return indexA - indexB;
    // If one is not in the list, put it at the end
    if (indexA === -1) return 1;
    if (indexB === -1) return -1;
    return 0;
  });

  // 3. Build the grouped menu
  const groupedMenu = existingCategories.map(category => ({
    category,
    items: menuItems.filter((item: any) => item.category === category)
  }));

  return (
    <MenuPageContent groupedMenu={groupedMenu} />
  );
}
