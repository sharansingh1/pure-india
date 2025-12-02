import type { Metadata } from "next";
import { Cinzel, Montserrat } from "next/font/google";
import "./globals.css";
import NavbarWrapper from "@/components/NavbarWrapper";
import BuffetBanner from "@/components/BuffetBanner";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Pure Indian Cuisine | Best Indian Buffet & Banquet Hall in Las Vegas",
    template: "%s | Pure Indian Cuisine Las Vegas"
  },
  description: "Experience the best Indian food in Las Vegas. All-you-can-eat lunch & dinner buffet, fine dining a la carte menu, and premier banquet hall for weddings and events. Located near the airport.",
  keywords: ["Indian Buffet Las Vegas", "Best Indian Restaurant Las Vegas", "Banquet Hall Las Vegas", "Indian Food Near Airport", "Wedding Venue Las Vegas", "Pure Indian Cuisine", "All You Can Eat Indian"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pureindiacuisine.com",
    siteName: "Pure Indian Cuisine",
    images: [
      {
        url: "/icon.jpg", // Your brand logo
        width: 1200,
        height: 1200,
        alt: "Pure Indian Cuisine Logo",
      },
    ],
  },
  alternates: {
    canonical: "https://pureindiacuisine.com",
  },
  verification: {
    google: "7eenxrb-UaXIQ4DLnFxcxULAkx959LSRrOj2nN5tX3o",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cinzel.variable} ${montserrat.variable} antialiased bg-black text-white`}
      >
        <BuffetBanner />
        <NavbarWrapper />
        {children}
      </body>
    </html>
  );
}
