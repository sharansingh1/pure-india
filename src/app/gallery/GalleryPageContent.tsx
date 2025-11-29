"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

interface GalleryImage {
    src: string;
    category: string;
    title: string;
}

export default function GalleryPageContent({ images }: { images: GalleryImage[] }) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <main className="min-h-screen pt-32 pb-20 bg-black text-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20">
                    <h1 className="font-cinzel text-5xl md:text-7xl text-white font-bold mb-4">Gallery</h1>
                    <p className="text-gold font-montserrat tracking-[0.3em] uppercase text-sm">A Glimpse Inside</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative aspect-square group cursor-pointer overflow-hidden border border-white/10"
                            onClick={() => setSelectedImage(img.src)}
                        >
                            <Image
                                src={img.src}
                                alt={img.title || "Gallery Image"}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                                <span className="text-gold font-cinzel text-xl mb-2">{img.title}</span>
                                <span className="text-white/60 text-xs font-montserrat uppercase tracking-widest">{img.category}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Lightbox */}
                <AnimatePresence>
                    {selectedImage && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4"
                            onClick={() => setSelectedImage(null)}
                        >
                            <button className="absolute top-8 right-8 text-white hover:text-gold transition-colors">
                                <X size={40} />
                            </button>
                            <div className="relative w-full max-w-5xl h-[80vh]">
                                <Image
                                    src={selectedImage}
                                    alt="Gallery Preview"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </main>
    );
}

