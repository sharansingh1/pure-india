import { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { defineQuery } from "next-sanity";
import GalleryPageContent from "./GalleryPageContent";
import { generateBreadcrumbSchema, breadcrumbs } from "@/lib/breadcrumbs";

export const dynamic = 'force-dynamic';

const GALLERY_QUERY = defineQuery(`*[_type == "galleryImage"]{
  title,
  category,
  "src": image.asset->url
}`);

export const metadata: Metadata = {
  title: "Photo Gallery | Pure Indian Cuisine Las Vegas | Restaurant Photos",
  description: "View photos of our elegant Indian restaurant interior, delicious food, banquet hall, and events at Pure Indian Cuisine Las Vegas. See our authentic Indian cuisine and beautiful venue.",
  keywords: ["Pure Indian Cuisine Photos", "Indian Restaurant Gallery Las Vegas", "Restaurant Interior Photos", "Indian Food Photos Las Vegas", "Banquet Hall Photos"],
  openGraph: {
    title: "Photo Gallery | Pure Indian Cuisine Las Vegas",
    description: "View photos of our elegant restaurant interior, delicious Indian dishes, banquet hall, and special events.",
    images: [
      {
        url: "/images/restaurant-interior.png",
        width: 1200,
        height: 630,
        alt: "Pure Indian Cuisine Restaurant Interior Gallery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Photo Gallery | Pure Indian Cuisine Las Vegas",
    description: "View photos of our elegant restaurant interior, delicious Indian dishes, banquet hall, and special events.",
    images: ["/images/restaurant-interior.png"],
  },
  alternates: {
    canonical: "https://pureindiacuisine.com/gallery",
  },
};

export default async function GalleryPage() {
  const images = await client.fetch(GALLERY_QUERY, {}, { next: { revalidate: 0 } });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            "@id": "https://pureindiacuisine.com/gallery",
            name: "Pure Indian Cuisine Photo Gallery",
            description: "Photos of our elegant restaurant interior, delicious Indian dishes, banquet hall, and special events.",
            url: "https://pureindiacuisine.com/gallery",
            image: images.map((img: any) => ({
              "@type": "ImageObject",
              url: img.src,
              name: img.title || "Gallery Image",
              description: img.category || "Restaurant Photo"
            }))
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs.gallery))
        }}
      />
      <GalleryPageContent images={images} />
    </>
  );
}
