import { client } from "@/sanity/lib/client";
import { defineQuery } from "next-sanity";
import GalleryPageContent from "./GalleryPageContent";

export const dynamic = 'force-dynamic';

const GALLERY_QUERY = defineQuery(`*[_type == "galleryImage"]{
  title,
  category,
  "src": image.asset->url
}`);

export default async function GalleryPage() {
  const images = await client.fetch(GALLERY_QUERY, {}, { next: { revalidate: 0 } });

  return <GalleryPageContent images={images} />;
}
