import { Metadata } from "next";
import ContactPageContent from "./ContactPageContent";
import { generateBreadcrumbSchema, breadcrumbs } from "@/lib/breadcrumbs";

export const metadata: Metadata = {
  title: "Contact Pure Indian Cuisine Las Vegas | Reservations & Phone Number",
  description: "Contact Pure Indian Cuisine in Las Vegas for reservations, banquet bookings, or catering. Located at 1405 E Sunset Rd, Las Vegas, NV 89119. Phone: (702) 897-5555. Open daily 11am-10pm.",
  keywords: ["Contact Pure Indian Cuisine", "Indian Restaurant Reservations Las Vegas", "Banquet Booking Las Vegas", "Catering Inquiry Las Vegas", "Pure Indian Cuisine Phone Number", "Restaurant Near Airport Las Vegas"],
  openGraph: {
    title: "Contact Pure Indian Cuisine | Reservations & Inquiries Las Vegas",
    description: "Contact Pure Indian Cuisine in Las Vegas for reservations, banquet hall bookings, or catering inquiries. Located at 1405 E Sunset Rd.",
    images: [
      {
        url: "/images/restaurant-interior.png",
        width: 1200,
        height: 630,
        alt: "Pure Indian Cuisine Contact Information",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Pure Indian Cuisine | Reservations & Inquiries Las Vegas",
    description: "Contact Pure Indian Cuisine in Las Vegas for reservations, banquet hall bookings, or catering inquiries.",
    images: ["/images/restaurant-interior.png"],
  },
  alternates: {
    canonical: "https://pureindiacuisine.com/contact",
  },
};

export default function ContactPage() {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "@id": "https://pureindiacuisine.com/contact",
              name: "Contact Pure Indian Cuisine",
              description: "Contact Pure Indian Cuisine in Las Vegas for reservations, banquet hall bookings, or catering inquiries.",
              url: "https://pureindiacuisine.com/contact",
              mainEntity: {
                "@type": "Restaurant",
                name: "Pure Indian Cuisine",
                telephone: "+17028975555",
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
                }
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs.contact))
          }}
        />
        <ContactPageContent />
      </>
    );
}
