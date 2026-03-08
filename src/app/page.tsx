import { Metadata } from "next";
import Hero from "@/components/Hero";
import MenuBook from "@/components/MenuBook";
import InfoSection from "@/components/InfoSection";
import Footer from "@/components/Footer";
import FeaturedDish from "@/components/FeaturedDish";
import Testimonials from "@/components/Testimonials";
import MembershipSection from "@/components/MembershipSection";
import OrderSection from "@/components/OrderSection";
// import HookahLoungeSection from "@/components/HookahLoungeSection";
import { client } from "@/sanity/lib/client";
import { defineQuery } from "next-sanity";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Pure Indian Cuisine | Fine Dining Las Vegas | Authentic Indian Restaurant",
  description: "Discover amazing Indian food in Las Vegas! Experience authentic fine dining a la carte. Featuring a premium bar and banquet hall. Near Las Vegas airport.",
  keywords: ["Indian fine dining Las Vegas", "Authentic Indian restaurant Las Vegas", "A La Carte Indian Menu", "Pure Indian Cuisine Las Vegas", "Indian food near me"],
  openGraph: {
    title: "Pure Indian Cuisine Las Vegas | Authentic Indian Food Restaurant Near Airport",
    description: "Amazing Indian food in Las Vegas! Authentic North Indian cuisine, premium a la carte dining, and banquet hall. Located at 1405 E Sunset Rd near Las Vegas airport.",
    images: [
      {
        url: "/icon.jpg",
        width: 512,
        height: 512,
        alt: "Pure Indian Cuisine Logo",
      },
    ],
  },
  alternates: {
    canonical: "https://pureindiacuisine.com",
  },
};


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
      <OrderSection />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["Restaurant", "FoodEstablishment", "LocalBusiness"],
            "@id": "https://pureindiacuisine.com",
            name: "Pure Indian Cuisine",
            image: [
              "https://pureindiacuisine.com/images/hero-background.jpg",
              "https://pureindiacuisine.com/images/restaurant-interior.png",
              "https://pureindiacuisine.com/images/indian-buffet-food-real.png"
            ],
            url: "https://pureindiacuisine.com",
            telephone: "+17029164083",
            menu: "https://pureindiacuisine.com/menu",
            servesCuisine: ["Indian", "North Indian", "Indo-Chinese"],
            priceRange: "$$",
            //             description: "Experience amazing Indian fine dining and all-you-can-eat buffet in Las Vegas. From authentic a la carte curries to our legendary rotating buffet. Featuring a premium bar, banquet hall, and late-night hookah lounge.",
            description: "Experience amazing Indian fine dining in Las Vegas. From authentic a la carte curries to our premium bar and banquet hall.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "1405 E Sunset Rd",
              addressLocality: "Las Vegas",
              addressRegion: "NV",
              postalCode: "89119",
              addressCountry: "US"
            },
            areaServed: {
              "@type": "City",
              name: "Las Vegas",
              "@id": "https://www.wikidata.org/wiki/Q23768"
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 36.0719,
              longitude: -115.1337
            },
            containedInPlace: {
              "@type": "City",
              name: "Las Vegas"
            },
            hasMap: "https://www.google.com/maps/place/1405+E+Sunset+Rd,+Las+Vegas,+NV+89119",
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                opens: "11:00",
                closes: "21:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Sunday"],
                opens: "11:00",
                closes: "20:00"
              }
            ],
            hasMenu: {
              "@type": "Menu",
              "@id": "https://pureindiacuisine.com/menu",
              name: "Pure Indian Cuisine Menu",
              url: "https://pureindiacuisine.com/menu"
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Dining Options",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Fine Dining A La Carte",
                    description: "Premium chef-curated Indian fine dining experience"
                  }
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Banquet Hall Rental",
                    description: "Event space for weddings and parties, capacity 500"
                  }
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Catering Services",
                    description: "Full-service Indian catering for events"
                  }
                }
              ]
            },
            sameAs: [
              "https://www.instagram.com/pureindiancuisinevegas/",
              "https://www.tiktok.com/@pureindiancuisinevegas"
            ],
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              reviewCount: "150"
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is an excellent Indian restaurant in Las Vegas?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Pure Indian Cuisine is a premier Indian restaurant in Las Vegas, offering amazingly authentic North Indian cuisine and premium fine dining. Located at 1405 E Sunset Rd near the Las Vegas airport, we serve traditional dishes like butter chicken, tandoori, biryani, and more."
                }
              },
              {
                "@type": "Question",
                name: "Where can I find Indian food near Las Vegas airport?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Pure Indian Cuisine is located at 1405 E Sunset Rd, Las Vegas, NV 89119, just minutes from the Las Vegas airport. We offer authentic Indian food including a premium a la carte menu and professional catering services."
                }
              },
              {
                "@type": "Question",
                name: "What are the best Indian dishes at Pure Indian Cuisine?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Our most popular dishes include butter chicken, tandoori chicken, lamb vindaloo, chicken biryani, paneer tikka masala, and our extensive selection of vegetarian curries. Every dish is prepared fresh to order."
                }
              },
              {
                "@type": "Question",
                name: "Is Pure Indian Cuisine vegetarian-friendly?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes! Pure Indian Cuisine offers extensive vegetarian options including vegetable curries, paneer dishes, dosa, vegetarian biryani, and many appetizers. We clearly mark all vegetarian items on our menu."
                }
              },
              {
                "@type": "Question",
                name: "Does Pure Indian Cuisine offer catering?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes! Pure Indian Cuisine provides full-service catering for weddings, corporate events, and parties. We offer live tandoor stations, chaat counters, and customized menus. Contact us for catering inquiries."
                }
              },
              {
                "@type": "Question",
                name: "What are Pure Indian Cuisine's hours?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Pure Indian Cuisine is open Monday through Saturday from 11:00 AM to 9:00 PM (Happy Hour 3-5), and Sundays from 11:00 AM to 8:00 PM."
                }
              },
              {
                "@type": "Question",
                name: "Does Pure Indian Cuisine have a banquet hall?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes! Pure Indian Cuisine has an elegant banquet hall that can accommodate up to 500 guests. Perfect for weddings, receptions, corporate events, and parties. We provide full catering services for all events."
                }
              }
            ]
          })
        }}
      />
      <InfoSection />
      {/* <MembershipSection /> */}
      {/* <MenuBook menuItems={menuItems} /> */}
      <FeaturedDish />
      {/* <HookahLoungeSection /> */}
      <Testimonials />

      <Footer />
    </main>
  );
}
