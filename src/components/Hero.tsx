"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

const carouselImages = [
    {
        src: "/butterchickenmain.jpg",
        alt: "Butter Chicken with Naan"
    },
    {
        src: "/chickenbiryani.jpg",
        alt: "Chicken Biryani"
    },
    {
        src: "/machurian.jpg",
        alt: "Manchurian"
    },
    {
        src: "/dessert.png",
        alt: "Dessert"
    },
    {
        src: "/mithai.png",
        alt: "Mithai - Indian Sweets"
    }
];

export default function Hero() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const scrollToMenu = () => {
        const menuSection = document.getElementById("menu-section");
        menuSection?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-black">
            {/* Hero Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-background.jpg"
                    alt="Pure Indian Cuisine Restaurant - Authentic Indian Food in Las Vegas featuring butter chicken, tandoori, and traditional Indian dishes"
                    fill
                    className="object-cover opacity-75"
                    priority
                    quality={100}
                    sizes="100vw"
                />
                {/* Gradient Fade for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
            </div>

            {/* Main Content Grid */}
            <div className="relative z-10 container mx-auto px-4 min-h-screen flex items-center">
                <div className="grid lg:grid-cols-2 gap-12 items-center w-full py-20 md:py-32">

                    {/* Left Side - Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="space-y-8"
                    >
                        {/* Decorative Border */}
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-[2px] bg-gradient-to-r from-gold to-transparent" />
                            <span className="text-gold text-xs tracking-[0.3em] uppercase font-montserrat">
                                Authentic Indian Cuisine
                            </span>
                        </div>

                        {/* Main Heading */}
                        <div className="space-y-4">
                            <h1 className="font-cinzel text-4xl md:text-6xl lg:text-7xl font-bold leading-none">
                                <span className="text-white">Las Vegas' Premier</span>
                                <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-300 to-gold glow-text">All-Day Indian Buffet</span>
                            </h1>

                            <div className="relative mt-8 pl-8 border-l-4 border-gold/60 py-2">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-black border-2 border-gold/60" />
                                <div className="absolute -left-[9px] bottom-0 w-4 h-4 rounded-full bg-black border-2 border-gold/60" />

                                <p className="text-gray-200 text-base md:text-xl font-montserrat leading-relaxed max-w-lg">
                                    Indulge in an authentic all-you-can-eat Indian buffet experience. From aromatic curries to sizzling tandoori, enjoy unlimited servings of our finest dishes all day long. <br />
                                    <span className="text-sm text-gray-400 mt-2 block">Best Indian food in Las Vegas near the airport. Authentic North Indian cuisine, vegetarian options, and halal certified.</span>
                                </p>
                            </div>
                        </div>

                        {/* Grand Opening Announcement Box */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="inline-block w-full max-w-xl"
                        >
                            <div className="relative overflow-hidden bg-gradient-to-br from-red-900/90 to-black border-2 border-gold rounded-2xl p-8 backdrop-blur-md shadow-[0_0_30px_rgba(212,175,55,0.3)] group hover:shadow-[0_0_50px_rgba(212,175,55,0.5)] transition-all duration-500">
                                {/* Decorative Sparkles */}
                                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                                    <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(255,215,0,0.1)_1px,transparent_1px)] bg-[length:20px_20px] opacity-30 animate-[spin_60s_linear_infinite]" />
                                </div>

                                <div className="relative z-10 flex flex-col gap-6">
                                    {/* Grand Opening Section */}
                                    <div className="flex items-center gap-4">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gold rounded-full flex items-center justify-center shadow-lg shadow-gold/30 border border-gold/50">
                                            <span className="text-black text-xs font-montserrat uppercase font-bold">TBA</span>
                                        </div>
                                        <div>
                                            <h3 className="text-gold font-cinzel text-2xl font-bold leading-tight drop-shadow-md">
                                                GRAND OPENING IN JANUARY
                                            </h3>
                                            <p className="text-gray-300 font-montserrat text-sm mt-1">
                                                Join us for our grand opening celebration!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* CTA Buttons - Moved to Right Column */}
                    </motion.div>

                    {/* Right Side - Food Showcase */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="relative"
                    >
                        {/* Decorative Glow */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-[500px] h-[500px] rounded-full bg-gradient-to-br from-gold/15 via-gold/5 to-transparent blur-3xl" />
                        </div>

                        {/* Rangoli pattern behind dish */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-15">
                            <svg viewBox="0 0 200 200" className="w-[120%] h-[120%]">
                                {/* Geometric rangoli pattern */}
                                <circle cx="100" cy="100" r="80" fill="none" stroke="#D4AF37" strokeWidth="1" />
                                <circle cx="100" cy="100" r="70" fill="none" stroke="#D4AF37" strokeWidth="0.5" />
                                {[...Array(12)].map((_, i) => (
                                    <g key={i} transform={`rotate(${i * 30} 100 100)`}>
                                        <line x1="100" y1="30" x2="100" y2="50" stroke="#D4AF37" strokeWidth="2" />
                                        <circle cx="100" cy="25" r="4" fill="#D4AF37" />
                                        <path d="M 95 50 L 100 60 L 105 50" fill="#D4AF37" opacity="0.6" />
                                    </g>
                                ))}
                            </svg>
                        </div>

                        {/* Main Food Image */}
                        <div className="relative z-10 flex items-center justify-center">
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="relative w-full max-w-lg aspect-square"
                            >
                                {/* Glow Effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-amber-600/10 rounded-full blur-2xl" />

                                {/* Image Container */}
                                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-gold/40 shadow-2xl shadow-gold/20 bg-black">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={currentImageIndex}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 1 }}
                                            className="absolute inset-0 w-full h-full"
                                        >
                                            <Image
                                                src={carouselImages[currentImageIndex].src}
                                                alt={carouselImages[currentImageIndex].alt}
                                                fill
                                                className="object-cover scale-110"
                                                priority
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                                        </motion.div>
                                    </AnimatePresence>
                                </div>

                                {/* Decorative Badge - Top Right (Text) */}
                                <motion.div
                                    className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-gold via-amber-500 to-gold rounded-full flex items-center justify-center shadow-xl shadow-gold/30 border-4 border-black z-20"
                                    animate={{ rotate: [0, 5, -5, 0] }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <div className="text-center transform -rotate-12">
                                        <div className="font-cinzel font-bold text-black text-sm leading-none mb-1">OPENING</div>
                                        <div className="font-black text-black text-xl leading-none">SOON</div>
                                    </div>
                                </motion.div>

                                {/* Decorative Badge - Bottom Left (Diya/Lamp) */}
                                <motion.div
                                    className="absolute -bottom-6 -left-6 w-28 h-28 bg-gradient-to-br from-amber-600 via-gold to-amber-500 rounded-full flex items-center justify-center shadow-xl shadow-gold/30 border-2 border-amber-700"
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                >
                                    <svg viewBox="0 0 100 100" className="w-16 h-16 fill-black/80">
                                        <path d="M10,60 Q50,90 90,60 Q90,50 80,50 L20,50 Q10,50 10,60 Z" />
                                        <path d="M50,10 Q30,30 30,50 L70,50 Q70,30 50,10 Z" fill="#D4AF37" />
                                        <circle cx="50" cy="30" r="5" fill="#FFD700" opacity="0.8" />
                                    </svg>
                                </motion.div>
                            </motion.div>
                        </div>

                        {/* Decorative Corner Elements */}
                        <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-gold/30" />
                        <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-gold/30" />

                        {/* CTA Buttons - Repositioned under image */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.6 }}
                            className="flex flex-col items-center gap-6 pt-12 relative z-30"
                        >
                            <div className="flex justify-center gap-4">
                                <a
                                    href="/contact"
                                    className="group relative px-8 py-4 bg-gold overflow-hidden transition-all duration-500 hover:shadow-lg hover:shadow-gold/30 min-w-[160px] text-center"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <span className="relative z-10 font-montserrat font-bold tracking-[0.2em] uppercase text-black text-sm">
                                        Contact Us
                                    </span>
                                </a>

                                <button
                                    onClick={scrollToMenu}
                                    className="group relative px-8 py-4 bg-transparent overflow-hidden transition-all duration-500 min-w-[160px]"
                                >
                                    <div className="absolute inset-0 border-2 border-gold/50 group-hover:border-gold transition-colors duration-500" />
                                    <div className="absolute inset-0 bg-gold/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                                    <span className="relative z-10 font-montserrat font-medium tracking-[0.2em] uppercase text-gold-light group-hover:text-white transition-colors duration-300 text-sm">
                                        View Buffet
                                    </span>
                                </button>
                            </div>

                            {/* Social Media Links */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                                className="flex items-center gap-6 pt-4"
                            >
                                <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gold/50"></div>
                                <a
                                    href="https://www.instagram.com/pureindiancuisinevegas/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-pink-500/50"
                                    aria-label="Follow us on Instagram"
                                >
                                    <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://www.tiktok.com/@pureindiancuisinevegas"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative w-12 h-12 flex items-center justify-center rounded-full bg-black hover:bg-[#000000] hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-[#00f2ea]/50 border-2 border-[#00f2ea]/30 hover:border-[#00f2ea]"
                                    aria-label="Follow us on TikTok"
                                >
                                    <svg className="w-6 h-6 text-[#00f2ea] group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.07 6.07 0 0 0-1-.05A6.12 6.12 0 0 0 5 20.1a6.12 6.12 0 0 0 10.86-3.94v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                                    </svg>
                                </a>
                                <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-gold/50"></div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 2, duration: 2, repeat: Infinity }}
            >
                <span className="text-[10px] uppercase tracking-widest text-gold/60 font-montserrat">Scroll</span>
                <div className="w-[1px] h-16 bg-gradient-to-b from-gold/20 via-gold to-transparent" />
            </motion.div>
        </section>
    );
}
