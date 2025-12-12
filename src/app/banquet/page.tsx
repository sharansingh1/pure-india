import { Metadata } from "next";
import BanquetPageContent from "./BanquetPageContent";
import { generateBreadcrumbSchema, breadcrumbs } from "@/lib/breadcrumbs";

export const metadata: Metadata = {
  title: "Banquet Hall Las Vegas | Wedding Venue & Event Space | Pure Indian Cuisine",
  description: "Elegant banquet hall in Las Vegas for weddings, corporate events, and parties. Capacity 500 guests with full Indian catering. Located at 1405 E Sunset Rd. Perfect for Indian weddings and celebrations.",
  keywords: ["Banquet Hall Las Vegas", "Wedding Venue Las Vegas", "Party Hall Rental", "Indian Wedding Venue", "Corporate Event Space Las Vegas", "Event Venue Las Vegas", "Wedding Reception Las Vegas", "Party Venue Near Airport"],
  openGraph: {
    title: "Banquet Hall & Party Venue Las Vegas | Pure Indian Cuisine",
    description: "Host your wedding, corporate event, or party at our elegant banquet hall in Las Vegas. Capacity for 500 guests with full catering services.",
    images: [
      {
        url: "/images/banquet-hall.png",
        width: 1200,
        height: 630,
        alt: "Pure Indian Cuisine Banquet Hall - Wedding and Event Venue",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Banquet Hall & Party Venue Las Vegas | Pure Indian Cuisine",
    description: "Host your wedding, corporate event, or party at our elegant banquet hall in Las Vegas. Capacity for 500 guests.",
    images: ["/images/banquet-hall.png"],
  },
  alternates: {
    canonical: "https://pureindiacuisine.com/banquet",
  },
};

export default function BanquetPage() {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EventVenue",
              "@id": "https://pureindiacuisine.com/banquet",
              name: "Pure Indian Cuisine Banquet Hall",
              description: "Elegant banquet hall in Las Vegas perfect for weddings, corporate events, and parties. Capacity for 500 guests with full catering services.",
              url: "https://pureindiacuisine.com/banquet",
              image: "https://pureindiacuisine.com/images/banquet-hall.png",
              address: {
                "@type": "PostalAddress",
                streetAddress: "1405 E Sunset Rd",
                addressLocality: "Las Vegas",
                addressRegion: "NV",
                postalCode: "89119",
                addressCountry: "US"
              },
              maximumAttendeeCapacity: 500,
              amenityFeature: [
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Full Catering Services",
                  value: true
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Parking Available",
                  value: true
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Audio/Visual Equipment",
                  value: true
                }
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs.banquet))
          }}
        />
        <BanquetPageContent />
      </>
    );
}
