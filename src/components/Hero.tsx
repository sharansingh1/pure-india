"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

const carouselImages = [
    {
        src: "/butterchicken.jpg",
        alt: "Butter Chicken with Naan"
    },
    {
        src: "/chickenbiryani.jpg",
        alt: "Chicken Biryani"
    },
    {
        src: "/dosa.jpeg",
        alt: "Masala Dosa"
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
                    alt="Hero Background"
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
                <div className="grid lg:grid-cols-2 gap-12 items-center w-full py-32">

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
                            <h1 className="font-cinzel text-6xl md:text-7xl lg:text-8xl font-bold leading-none">
                                <span className="text-white">Experience</span>
                                <br />
                                <span className="text-gold-gradient">A Grand Indian Buffet</span>
                            </h1>
                            <p className="text-gray-400 text-lg md:text-xl font-montserrat leading-relaxed max-w-lg">
                                The Complete Taste of India, North to South. Indulge in an exquisite, all-you-can-eat journey through the finest flavors.
                            </p>
                        </div>

                        {/* Buffet Promo Box */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="inline-block"
                        >
                            <div className="relative overflow-hidden bg-gradient-to-r from-gold/10 to-transparent border border-gold/30 rounded-xl p-6 backdrop-blur-md group hover:border-gold/50 transition-colors">
                                <div className="absolute top-0 right-0 p-2 opacity-10">
                                    <svg className="w-16 h-16 text-gold" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </div>
                                <div className="flex items-start gap-4 relative z-10">
                                    <div className="p-3 bg-gold/20 rounded-full text-gold animate-pulse">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-gold font-cinzel text-lg font-bold mb-1">
                                            Las Vegas' Only Night Buffet
                                        </h3>
                                        <p className="text-gray-300 text-sm font-montserrat leading-relaxed max-w-xs">
                                            Enjoy our massive all-you-can-eat feast for Lunch AND Dinner!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="flex flex-col sm:flex-row gap-4 pt-4"
                        >
                            <a
                                href="/contact"
                                className="group relative px-8 py-4 bg-gold overflow-hidden transition-all duration-500 hover:shadow-lg hover:shadow-gold/30"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <span className="relative z-10 font-montserrat font-bold tracking-[0.2em] uppercase text-black">
                                    Contact Us
                                </span>
                            </a>

                            <button
                                onClick={scrollToMenu}
                                className="group relative px-8 py-4 bg-transparent overflow-hidden transition-all duration-500"
                            >
                                <div className="absolute inset-0 border-2 border-gold/50 group-hover:border-gold transition-colors duration-500" />
                                <div className="absolute inset-0 bg-gold/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                                <span className="relative z-10 font-montserrat font-medium tracking-[0.2em] uppercase text-gold-light group-hover:text-white transition-colors duration-300">
                                    View Buffet
                                </span>
                            </button>
                        </motion.div>
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
