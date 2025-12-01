import Hero from "@/components/Hero";
import MenuBook from "@/components/MenuBook";
import InfoSection from "@/components/InfoSection";
import Footer from "@/components/Footer";
import FeaturedDish from "@/components/FeaturedDish";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";

export default function Home() {
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
              "https://www.facebook.com/pureindiancuisinelv",
              "https://www.instagram.com/pureindiancuisinelv"
            ]
          })
        }}
      />
      <InfoSection />
      <MenuBook />
      <FeaturedDish />
      <Testimonials />

      <Footer />
    </main>
  );
}
