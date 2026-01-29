import { client } from "@/sanity/lib/client";
import { defineQuery } from "next-sanity";
import BuffetPageContent from "./BuffetPageContent";
import { generateBreadcrumbSchema, breadcrumbs } from "@/lib/breadcrumbs";

export const dynamic = 'force-dynamic';

const BUFFET_QUERY = defineQuery(`*[_type == "buffetItem"]{
  name,
  description,
  category,
  "imageUrl": image.asset->url,
  isVegetarian,
  isSpicy
}`);

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Indian Buffet Las Vegas | All-You-Can-Eat Lunch Buffet | Pure Indian Cuisine",
  description: "Best Indian buffet in Las Vegas! All-you-can-eat lunch buffet with unlimited servings of authentic curries, tandoori, biryani, dosa, and desserts. Located at 1405 E Sunset Rd near Las Vegas airport. Open Mon-Sat 11am-9pm, Sun 11am-8pm.",
  keywords: ["Indian Buffet Las Vegas", "All You Can Eat Las Vegas", "Best Buffet Near Airport", "Unlimited Indian Food", "Lunch Buffet Las Vegas", "Indian Lunch Buffet", "Buffet Near Airport Las Vegas", "Vegetarian Buffet Las Vegas"],
  openGraph: {
    title: "Best Indian Buffet in Las Vegas | All-You-Can-Eat Lunch",
    description: "Indulge in Las Vegas's premier Indian buffet. Unlimited servings of authentic curries, tandoori dishes, and desserts. Lunch buffet available daily.",
    images: [
      {
        url: "/buffet-highlight.png",
        width: 1200,
        height: 630,
        alt: "Pure Indian Cuisine Buffet Spread - All-You-Can-Eat Indian Food",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Indian Buffet in Las Vegas | All-You-Can-Eat Lunch",
    description: "Indulge in Las Vegas's premier Indian buffet. Unlimited servings of authentic curries, tandoori dishes, and desserts.",
    images: ["/buffet-highlight.png"],
  },
  alternates: {
    canonical: "https://pureindiacuisine.com/buffet",
  },
};

const PLACEHOLDER_NEW_SECTIONS = [
  // Indo-Chinese
  {
    name: "Veg Manchurian",
    description: "Crispy vegetable balls in tangy Indo-Chinese sauce",
    category: "INDO-CHINESE",
    isVegetarian: true,
    isSpicy: true
  },
  {
    name: "Chicken Manchurian",
    description: "Crispy chicken in tangy Indo-Chinese sauce",
    category: "INDO-CHINESE",
    isVegetarian: false,
    isSpicy: true
  },
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

  // Map old category names to new ones
  const mappedItems = fetchedBuffetItems.map((item: any) => {
    let category = item.category;
    // Combine both appetizer categories into one
    if (category === "APPETIZERS – VEG" || category === "APPETIZERS – NON-VEG") {
      category = "APPETIZERS";
    }
    // Rename BREAD to BREADS
    if (category === "BREAD") {
      category = "BREADS";
    }
    return { ...item, category };
  });

  // Merge with placeholder items for new sections
  const buffetItems = [...mappedItems, ...PLACEHOLDER_NEW_SECTIONS].filter(
    (item: any) => item.category !== "INDIAN BURGERS"
  );

  // Define the preferred order for categories
  const order = [
    "APPETIZERS",
    "INDO-CHINESE",
    "VEG CURRY",
    "NON-VEG CURRY",
    "BIRYANI",
    "RICE",
    "DOSA",
    "BREADS",
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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            "@id": "https://pureindiacuisine.com/buffet",
            name: "Pure Indian Cuisine - Buffet",
            description: "All-you-can-eat Indian buffet in Las Vegas. Unlimited servings of authentic curries, tandoori dishes, biryani, dosa, and desserts.",
            url: "https://pureindiacuisine.com/buffet",
            image: "https://pureindiacuisine.com/buffet-highlight.png",
            servesCuisine: "Indian",
            priceRange: "$$",
            hasMenu: {
              "@type": "Menu",
              name: "Daily Buffet Menu",
              description: "All-you-can-eat Indian buffet with rotating selection of dishes"
            },
            offers: {
              "@type": "Offer",
              name: "Lunch Buffet",
              description: "All-you-can-eat Indian buffet available daily",
              availability: "https://schema.org/InStock"
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs.buffet))
        }}
      />
      <BuffetPageContent groupedBuffet={groupedBuffet} />
    </>
  );
}
