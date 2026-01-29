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
  metadataBase: new URL("https://pureindiacuisine.com"),
  title: {
    default: "Pure Indian Cuisine Las Vegas | Best Indian Food Restaurant Near Airport | Buffet & Banquet Hall",
    template: "%s | Pure Indian Cuisine Las Vegas"
  },
  description: "Best Indian food in Las Vegas! Authentic North Indian cuisine, all-you-can-eat buffet, family-style dinner, and banquet hall. Located at 1405 E Sunset Rd near Las Vegas airport. Open Mon-Sat 11am-9pm, Sun 11am-8pm. Butter chicken, tandoori, biryani, vegetarian & halal options.",
  keywords: ["Indian food Las Vegas", "Indian restaurant Las Vegas", "Best Indian food Las Vegas", "Indian buffet Las Vegas", "Indian food near me", "Indian restaurant near airport", "Butter chicken Las Vegas", "Tandoori Las Vegas", "Biryani Las Vegas", "Indian food delivery Las Vegas", "Vegetarian Indian food Las Vegas", "Halal Indian food Las Vegas", "North Indian food Las Vegas", "Indian catering Las Vegas", "Banquet hall Las Vegas", "Wedding venue Las Vegas", "Pure Indian Cuisine", "1405 E Sunset Rd", "Indian food 89119"],
  authors: [{ name: "Pure Indian Cuisine" }],
  creator: "Pure Indian Cuisine",
  publisher: "Pure Indian Cuisine",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.jpg", sizes: "any" },
      { url: "/icon.jpg", type: "image/jpeg" },
    ],
    apple: [
      { url: "/icon.jpg", sizes: "180x180" },
    ],
    shortcut: "/icon.jpg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pureindiacuisine.com",
    siteName: "Pure Indian Cuisine",
    title: "Pure Indian Cuisine Las Vegas | Best Indian Food Restaurant Near Airport",
    description: "Best Indian food in Las Vegas! Authentic North Indian cuisine, all-you-can-eat buffet, family-style dinner, and banquet hall. Located at 1405 E Sunset Rd near Las Vegas airport. Open Mon-Sat 11am-9pm, Sun 11am-8pm.",
    images: [
      {
        url: "/icon.jpg",
        width: 512,
        height: 512,
        alt: "Pure Indian Cuisine Logo",
      },
      {
        url: "/images/hero-background.jpg",
        width: 1200,
        height: 630,
        alt: "Pure Indian Cuisine - Authentic Indian Restaurant in Las Vegas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pure Indian Cuisine Las Vegas | Best Indian Food Restaurant Near Airport",
    description: "Best Indian food in Las Vegas! Authentic North Indian cuisine, all-you-can-eat buffet, family-style dinner, and banquet hall. Open Mon-Sat 11am-9pm, Sun 11am-8pm.",
    images: ["/icon.jpg", "/images/hero-background.jpg"],
    creator: "@pureindiancuisinevegas",
    site: "@pureindiancuisinevegas",
  },
  alternates: {
    canonical: "https://pureindiacuisine.com",
  },
  verification: {
    google: "7eenxrb-UaXIQ4DLnFxcxULAkx959LSRrOj2nN5tX3o",
  },
  category: "Restaurant",
  classification: "Indian Restaurant, Buffet, Banquet Hall, Catering",
  other: {
    "geo.region": "US-NV",
    "geo.placename": "Las Vegas",
    "geo.position": "36.0719;-115.1337",
    "ICBM": "36.0719, -115.1337",
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
