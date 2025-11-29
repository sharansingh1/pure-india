import type { Metadata } from "next";
import { Cinzel, Montserrat } from "next/font/google";
import "./globals.css";
import NavbarWrapper from "@/components/NavbarWrapper";

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
  title: "Pure Indian Cuisine | Premium Indian Cuisine in Las Vegas",
  description: "Experience the essence of India in the heart of Las Vegas. Authentic flavors, premium dining.",
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
        <NavbarWrapper />
        {children}
      </body>
    </html>
  );
}
