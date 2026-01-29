import { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Pure Indian Cuisine Las Vegas | Best Indian Food Restaurant Near Airport | Buffet & Banquet Hall",
  description: "Best Indian food in Las Vegas! Authentic North Indian cuisine, all-you-can-eat buffet, family-style dinner, and banquet hall. Located at 1405 E Sunset Rd near Las Vegas airport. Open Mon-Sat 11am-9pm, Sun 11am-8pm. Butter chicken, tandoori, biryani, vegetarian & halal options.",
  keywords: ["Indian food Las Vegas", "Indian restaurant Las Vegas", "Best Indian food Las Vegas", "Indian buffet Las Vegas", "Indian food near me", "Indian restaurant near airport", "Butter chicken Las Vegas", "Tandoori Las Vegas", "Biryani Las Vegas", "Indian food delivery Las Vegas", "Vegetarian Indian food Las Vegas", "Halal Indian food Las Vegas", "North Indian food Las Vegas", "Indian catering Las Vegas", "Banquet hall Las Vegas", "Wedding venue Las Vegas", "Pure Indian Cuisine", "1405 E Sunset Rd", "Indian food 89119"],
  openGraph: {
    title: "Pure Indian Cuisine Las Vegas | Best Indian Food Restaurant Near Airport",
    description: "Best Indian food in Las Vegas! Authentic North Indian cuisine, all-you-can-eat buffet, family-style dinner, and banquet hall. Located at 1405 E Sunset Rd near Las Vegas airport.",
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
            telephone: "+17028975555",
            menu: "https://pureindiacuisine.com/menu",
            servesCuisine: ["Indian", "North Indian", "Indo-Chinese"],
            priceRange: "$$",
            description: "Experience the best Indian food in Las Vegas. All-you-can-eat lunch & dinner buffet, fine dining a la carte menu, and premier banquet hall for weddings and events. Located near the airport.",
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
                    name: "Lunch Buffet",
                    description: "All-you-can-eat Indian buffet available daily"
                  }
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Dinner Buffet",
                    description: "All-you-can-eat dinner buffet from 5pm-closing"
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
                name: "What is the best Indian restaurant in Las Vegas?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Pure Indian Cuisine is one of the best Indian restaurants in Las Vegas, offering authentic North Indian cuisine, an all-you-can-eat buffet, and family-style dining. Located at 1405 E Sunset Rd near the Las Vegas airport, we serve traditional dishes like butter chicken, tandoori, biryani, and more."
                }
              },
              {
                "@type": "Question",
                name: "Where can I find Indian food near Las Vegas airport?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Pure Indian Cuisine is located at 1405 E Sunset Rd, Las Vegas, NV 89119, just minutes from the Las Vegas airport. We offer authentic Indian food including buffet, a la carte menu, and catering services."
                }
              },
              {
                "@type": "Question",
                name: "Does Pure Indian Cuisine have a buffet?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes! Pure Indian Cuisine offers an all-you-can-eat lunch buffet daily from 11am-10pm. Our buffet features a rotating selection of authentic Indian dishes including curries, tandoori, biryani, dosa, and desserts."
                }
              },
              {
                "@type": "Question",
                name: "What are the best Indian dishes at Pure Indian Cuisine?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Our most popular dishes include butter chicken, tandoori chicken, lamb vindaloo, chicken biryani, paneer tikka masala, and our extensive selection of vegetarian curries. We also offer Indo-Chinese dishes like manchurian."
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
                  text: "Yes! Pure Indian Cuisine provides full-service catering for weddings, corporate events, and parties. We offer live tandoor stations, chaat counters, and customized menus. Contact us at (702) 897-5555 for catering inquiries."
                }
              },
              {
                "@type": "Question",
                name: "What are Pure Indian Cuisine's hours?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Pure Indian Cuisine is open Monday through Saturday from 11:00 AM to 9:00 PM, and Sundays from 11:00 AM to 8:00 PM. We serve lunch buffet and dinner service throughout the day."
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
      <MenuBook menuItems={menuItems} />
      <FeaturedDish />
      <Testimonials />

      <Footer />
    </main>
  );
}
