import { Metadata } from "next";
import CateringPageContent from "./CateringPageContent";
import { generateBreadcrumbSchema, breadcrumbs } from "@/lib/breadcrumbs";

export const metadata: Metadata = {
  title: "Indian Food Catering Las Vegas | Wedding & Event Catering | Pure Indian Cuisine",
  description: "Best Indian catering in Las Vegas! Live tandoor stations, chaat counters, and customized menus for weddings, corporate events, and parties. Full-service catering. Call (702) 897-5555.",
  keywords: ["Indian Catering Las Vegas", "Wedding Catering Las Vegas", "Live Food Stations Las Vegas", "Corporate Catering Indian Food", "Party Catering Las Vegas", "Event Catering Las Vegas", "Indian Wedding Catering"],
  openGraph: {
    title: "Indian Food Catering Las Vegas | Wedding & Party Catering",
    description: "Premier Indian catering services in Las Vegas. Live tandoor stations, chaat counters, and customized menus for weddings, corporate events, and parties.",
    images: [
      {
        url: "/images/indian-buffet-food-real.png",
        width: 1200,
        height: 630,
        alt: "Pure Indian Cuisine Catering - Live Food Stations and Indian Buffet",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Indian Food Catering Las Vegas | Wedding & Party Catering",
    description: "Premier Indian catering services in Las Vegas. Live tandoor stations, chaat counters, and customized menus.",
    images: ["/images/indian-buffet-food-real.png"],
  },
  alternates: {
    canonical: "https://pureindiacuisine.com/catering",
  },
};

export default function CateringPage() {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FoodEstablishment",
              "@id": "https://pureindiacuisine.com/catering",
              name: "Pure Indian Cuisine Catering",
              description: "Premier Indian catering services in Las Vegas. Live tandoor stations, chaat counters, and customized menus for weddings, corporate events, and parties.",
              url: "https://pureindiacuisine.com/catering",
              image: "https://pureindiacuisine.com/images/indian-buffet-food-real.png",
              servesCuisine: "Indian",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Catering Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Live Tandoor Stations",
                      description: "Fresh tandoori dishes prepared on-site"
                    }
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Chaat Counter",
                      description: "Traditional Indian street food station"
                    }
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Customized Menus",
                      description: "Tailored menus for your event"
                    }
                  }
                ]
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs.catering))
          }}
        />
        <CateringPageContent />
      </>
    );
}
