import { menuItems } from "@/data/menu";
import MenuPageContent from "./MenuPageContent";
import { generateBreadcrumbSchema, breadcrumbs } from "@/lib/breadcrumbs";
import "./menu.css";

import { Metadata } from "next";

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

export default function MenuPage() {
  const groupedMenu = menuItems;

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
