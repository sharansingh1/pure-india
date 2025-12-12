import { Metadata } from "next";
import AboutPageContent from "./AboutPageContent";
import { generateBreadcrumbSchema, breadcrumbs } from "@/lib/breadcrumbs";

export const metadata: Metadata = {
  title: "About Pure Indian Cuisine Las Vegas | Our Story & Authentic Indian Food",
  description: "Learn about Pure Indian Cuisine's mission to bring authentic Indian flavors to Las Vegas. Established in 2024, we serve traditional North Indian cuisine with modern elegance at 1405 E Sunset Rd.",
  keywords: ["About Pure Indian Cuisine", "Indian Restaurant History Las Vegas", "Our Story Las Vegas", "Authentic Indian Food Las Vegas"],
  openGraph: {
    title: "Our Story | About Pure Indian Cuisine Las Vegas",
    description: "Learn about Pure Indian Cuisine's mission to bring authentic Indian flavors to Las Vegas. Established in 2024.",
    images: [
      {
        url: "/images/restaurant-interior.png",
        width: 1200,
        height: 630,
        alt: "Pure Indian Cuisine Restaurant Interior",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Story | About Pure Indian Cuisine Las Vegas",
    description: "Learn about Pure Indian Cuisine's mission to bring authentic Indian flavors to Las Vegas.",
    images: ["/images/restaurant-interior.png"],
  },
  alternates: {
    canonical: "https://pureindiacuisine.com/about",
  },
};

export default function AboutPage() {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AboutPage",
              "@id": "https://pureindiacuisine.com/about",
              name: "About Pure Indian Cuisine",
              description: "Learn about Pure Indian Cuisine's mission to bring authentic Indian flavors to Las Vegas. Established in 2024.",
              url: "https://pureindiacuisine.com/about",
              mainEntity: {
                "@type": "Restaurant",
                name: "Pure Indian Cuisine",
                foundingDate: "2024",
                description: "Pure Indian Cuisine was born from a desire to redefine the Indian dining experience in Las Vegas. We believe that Indian cuisine is an art form—a delicate balance of spices, textures, and aromas that deserves to be presented with the same elegance and sophistication as the world's finest cuisines."
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs.about))
          }}
        />
        <AboutPageContent />
      </>
    );
}
