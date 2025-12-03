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

const PLACEHOLDER_KIDS_ITEMS = [
  {
    name: "French Fries",
    description: "Crispy golden fries",
    category: "KIDS MENU",
    isVegetarian: true,
    isSpicy: false
  },
  {
    name: "Chicken Nuggets",
    description: "Breaded chicken breast nuggets",
    category: "KIDS MENU",
    isVegetarian: false,
    isSpicy: false
  },
  {
    name: "Cheese Naan",
    description: "Freshly baked naan stuffed with mild cheese",
    category: "KIDS MENU",
    isVegetarian: true,
    isSpicy: false
  },
  {
    name: "Mac & Cheese",
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

export default async function BuffetPage() {
  const fetchedBuffetItems = await client.fetch(BUFFET_QUERY, {}, { next: { revalidate: 0 } });
  
  // Merge fetched items with placeholder kids items
  const buffetItems = [...fetchedBuffetItems, ...PLACEHOLDER_KIDS_ITEMS];

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

  // 3. Build the grouped menu with sorted items for NON-VEG CURRY
  const groupedBuffet = existingCategories.map(category => {
    let items = buffetItems.filter((item: any) => item.category === category);
    
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
    <BuffetPageContent groupedBuffet={groupedBuffet} />
  );
}
