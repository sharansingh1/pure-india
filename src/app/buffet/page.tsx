import { client } from "@/sanity/lib/client";
import { defineQuery } from "next-sanity";
import BuffetPageContent from "./BuffetPageContent";

export const dynamic = 'force-dynamic';

const BUFFET_QUERY = defineQuery(`*[_type == "buffetItem"]{
  name,
  description,
  category,
  "imageUrl": image.asset->url,
  isVegetarian,
  isSpicy
}`);

export const metadata = {
  title: "Best Indian Buffet in Las Vegas | All-You-Can-Eat Lunch & Dinner",
  description: "Indulge in Las Vegas's premier Indian buffet. Unlimited servings of authentic curries, tandoori dishes, and desserts. Lunch and dinner options available daily.",
  keywords: ["Indian Buffet Las Vegas", "All You Can Eat Las Vegas", "Best Buffet Near Airport", "Unlimited Indian Food", "Lunch Buffet Las Vegas", "Dinner Buffet Las Vegas"],
};

export default async function BuffetPage() {
  const buffetItems = await client.fetch(BUFFET_QUERY, {}, { next: { revalidate: 0 } });

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
  const existingCategories = Array.from(new Set(buffetItems.map((item: any) => item.category)));

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
  const groupedBuffet = existingCategories.map(category => ({
    category,
    items: buffetItems.filter((item: any) => item.category === category)
  }));

  return (
    <BuffetPageContent groupedBuffet={groupedBuffet} />
  );
}

