import { client } from "@/sanity/lib/client";
import { defineQuery } from "next-sanity";
import MenuPageContent from "./MenuPageContent";
import { generateBreadcrumbSchema, breadcrumbs } from "@/lib/breadcrumbs";
import "./menu.css";

import { Metadata } from "next";

// The Sanity dataset is kept in sync with Clover (name/price/category) by
// /api/sync-clover, running on a schedule. Refetch here every few minutes so
// the page reflects Clover changes without needing a redeploy.
export const revalidate = 60;

const MENU_QUERY = defineQuery(`*[_type == "menuItem"]{
  name,
  price,
  description,
  category,
  isVegetarian,
  isSpicy,
  featured
}`);

export const metadata: Metadata = {
  title: "A La Carte Indian Menu Las Vegas | Fine Dining | Pure Indian Cuisine",
  description: "View our authentic Indian a la carte menu in Las Vegas. Featuring butter chicken, tandoori, biryani, and vegetarian options. Prepared fresh to order. Located at 1405 E Sunset Rd.",
  keywords: ["Indian Menu Las Vegas", "Authentic Indian Food", "A La Carte Indian Menu", "Butter Chicken Las Vegas", "Vegetarian Indian Food", "Indian Restaurant Menu"],
  openGraph: {
    title: "Indian Restaurant Menu Las Vegas | Authentic A La Carte Dining",
    description: "Explore our extensive a la carte menu of authentic Indian dishes. From butter chicken to lamb vindaloo, every dish is prepared fresh to order.",
    images: [
      {
        url: "/menu-highlight.png",
        width: 1200,
        height: 630,
        alt: "Pure Indian Cuisine Menu - Authentic Indian Dishes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Indian Restaurant Menu Las Vegas | Authentic A La Carte Dining",
    description: "Explore our extensive a la carte menu of authentic Indian dishes. From butter chicken to lamb vindaloo, every dish is prepared fresh to order.",
    images: ["/menu-highlight.png"],
  },
  alternates: {
    canonical: "https://pureindiacuisine.com/menu",
  },
};

// Best-effort display order. Categories Clover adds later that aren't listed
// here just get appended at the end rather than being dropped.
const PREFERRED_ORDER = [
  "APPETIZERS",
  "INDO-CHINESE",
  "NON-VEG CURRY",
  "VEG CURRY",
  "GRILLS",
  "RICE",
  "BREADS",
  "MEDITERRANEAN",
  "DESSERTS",
  "DRINKS",
  "MEAL SPECIALS",
  "TOGO BOX",
];

// Freeform notes shown under a category header. Not part of Clover — purely
// a website presentation detail, so it's kept here rather than in Sanity.
const CATEGORY_NOTES: Record<string, string> = {
  "MEAL SPECIALS":
    "Full-size restaurant portions — separate from our ToGo Boxes. Offers cannot be combined with other promotions or discounts.",
};

export default async function MenuPage() {
  const rawItems: any[] = await client.fetch(MENU_QUERY);

  const byCategory = new Map<string, any[]>();
  for (const item of rawItems) {
    const key = (item.category || "OTHER").trim();
    if (!byCategory.has(key)) byCategory.set(key, []);
    byCategory.get(key)!.push(item);
  }

  const categoryNames = Array.from(byCategory.keys());
  categoryNames.sort((a, b) => {
    const ia = PREFERRED_ORDER.indexOf(a.toUpperCase());
    const ib = PREFERRED_ORDER.indexOf(b.toUpperCase());
    if (ia !== -1 && ib !== -1) return ia - ib;
    if (ia === -1 && ib === -1) return a.localeCompare(b);
    return ia === -1 ? 1 : -1;
  });

  const groupedMenu = categoryNames.map((category) => ({
    category,
    note: CATEGORY_NOTES[category.toUpperCase()],
    items: byCategory.get(category)!,
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Menu",
            "@id": "https://pureindiacuisine.com/menu",
            name: "Pure Indian Cuisine Menu",
            description: "Extensive menu of authentic Indian dishes including butter chicken, lamb vindaloo, biryani, tandoori, and vegetarian options.",
            url: "https://pureindiacuisine.com/menu",
            image: "https://pureindiacuisine.com/menu-highlight.png",
            hasMenuSection: groupedMenu.map((category) => ({
              "@type": "MenuSection",
              name: category.category,
              hasMenuItem: category.items.map((item) => ({
                "@type": "MenuItem",
                name: item.name,
                description: item.description || "",
                offers: {
                  "@type": "Offer",
                  price: item.price || "Contact for pricing"
                }
              }))
            }))
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs.menu))
        }}
      />
      <MenuPageContent groupedMenu={groupedMenu} />
    </>
  );
}
