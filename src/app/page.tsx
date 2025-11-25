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
      <InfoSection />
      <MenuBook />
      <FeaturedDish />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  );
}
