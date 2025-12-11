import Hero from "@/components/Hero";
import MenuBook from "@/components/MenuBook";
import InfoSection from "@/components/InfoSection";
import Footer from "@/components/Footer";
import FeaturedDish from "@/components/FeaturedDish";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import { client } from "@/sanity/lib/client";
import { defineQuery } from "next-sanity";

export const dynamic = 'force-dynamic';

const BUFFET_QUERY = defineQuery(`*[_type == "buffetItem"]{
  name,
  description,
  category,
  "imageUrl": image.asset->url,
  isVegetarian,
  isSpicy
}`);

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

export default async function Home() {
  // Fetch buffet items (same as buffet page)
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

  // Merge with placeholder items and filter out INDIAN BURGERS
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

  // Get all unique categories that actually exist in the data
  const existingCategories = Array.from(new Set(buffetItems.map((item: any) => item.category)));

  // Sort these categories based on our preferred order
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

  // Build the grouped menu with sorted items for NON-VEG CURRY
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

  // Transform to menu book format
  const menuItems = groupedBuffet.map(category => ({
    category: category.category,
    items: category.items.map((item: any) => ({
      name: item.name,
      price: "",
      description: item.description || ""
    }))
  }));
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            name: "Pure Indian Cuisine",
    image: "https://pureindiacuisine.com/images/hero-background.jpg",
    "@id": "https://pureindiacuisine.com",
    url: "https://pureindiacuisine.com",
    telephone: "+17028975555",
    menu: "https://pureindiacuisine.com/menu",
            servesCuisine: "Indian",
            priceRange: "$$",
            address: {
              "@type": "PostalAddress",
              streetAddress: "1405 E Sunset Rd",
              addressLocality: "Las Vegas",
              addressRegion: "NV",
              postalCode: "89119",
              addressCountry: "US"
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 36.0719, 
              longitude: -115.1337 
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                opens: "11:00",
                closes: "22:00"
              }
            ],
            sameAs: [
              "https://www.instagram.com/pureindiancuisinevegas/",
              "https://www.tiktok.com/@pureindiancuisinevegas"
            ]
          })
        }}
      />
      <InfoSection />
      <MenuBook menuItems={menuItems} />
      <FeaturedDish />
      <Testimonials />

      <Footer />
    </main>
  );
}
