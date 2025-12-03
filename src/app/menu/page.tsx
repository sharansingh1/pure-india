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

export const metadata = {
  title: "Indian Restaurant Menu Las Vegas | Authentic A La Carte Dining",
  description: "Explore our extensive menu of authentic Indian dishes. From butter chicken to lamb vindaloo, every dish is prepared fresh to order.",
  keywords: ["Indian Menu Las Vegas", "Authentic Indian Food", "Best Butter Chicken Las Vegas", "Vegetarian Indian Food", "Halal Indian Food Las Vegas"],
};

const PLACEHOLDER_KIDS_ITEMS = [
  {
    name: "French Fries",
    price: "$4.99",
    description: "Crispy golden fries",
    category: "KIDS MENU",
    isVegetarian: true,
    isSpicy: false
  },
  {
    name: "Chicken Nuggets",
    price: "$6.99",
    description: "Breaded chicken breast nuggets",
    category: "KIDS MENU",
    isVegetarian: false,
    isSpicy: false
  },
  {
    name: "Cheese Naan",
    price: "$4.99",
    description: "Freshly baked naan stuffed with mild cheese",
    category: "KIDS MENU",
    isVegetarian: true,
    isSpicy: false
  },
  {
    name: "Mac & Cheese",
    price: "$5.99",
    description: "Creamy macaroni and cheese",
    category: "KIDS MENU",
    isVegetarian: true,
    isSpicy: false
  }
];

// Helper to determine meat priority
const getMeatPriority = (name: string) => {
  const lowerName = name.toLowerCase();
  if (lowerName.includes('chicken')) return 1;
  if (lowerName.includes('goat')) return 2;
  if (lowerName.includes('lamb')) return 3;
  if (lowerName.includes('shrimp') || lowerName.includes('prawn')) return 4;
  if (lowerName.includes('fish')) return 5;
  if (lowerName.includes('egg')) return 6;
  return 99; // All others
};

export default async function MenuPage() {
  const fetchedMenuItems = await client.fetch(MENU_QUERY, {}, { next: { revalidate: 0 } });

  // Merge fetched items with placeholder kids items
  const menuItems = [...fetchedMenuItems, ...PLACEHOLDER_KIDS_ITEMS];

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
    "KIDS MENU",
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

  // 3. Build the grouped menu with sorted items for NON-VEG CURRY
  const groupedMenu = existingCategories.map(category => {
    let items = menuItems.filter((item: any) => item.category === category);
    
    // Apply special sorting for NON-VEG CURRY
    if (category === "NON-VEG CURRY") {
      items.sort((a: any, b: any) => {
        return getMeatPriority(a.name) - getMeatPriority(b.name);
      });
    }
    
    return {
      category,
      items
    };
  });

  return (
    <MenuPageContent groupedMenu={groupedMenu} />
  );
}
