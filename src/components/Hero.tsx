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
                            <h1 className="font-cinzel text-5xl md:text-6xl lg:text-7xl font-bold leading-none">
                                <span className="text-white">Las Vegas' Premier</span>
                                <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-300 to-gold glow-text">Family Style Dinner</span>
                                <br />
                                <span className="text-white text-4xl md:text-5xl">&</span>
                                <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-300 to-gold glow-text">Lunch Buffet</span>
                            </h1>
                            
                            <div className="relative mt-8 pl-8 border-l-4 border-gold/60 py-2">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-black border-2 border-gold/60" />
                                <div className="absolute -left-[9px] bottom-0 w-4 h-4 rounded-full bg-black border-2 border-gold/60" />
                                
                                <p className="text-gray-200 text-lg md:text-xl font-montserrat leading-relaxed max-w-lg">
                                    Two unique ways to dine. <br/>
                                    Enjoy our unlimited <strong className="text-gold">Lunch Buffet</strong> by day, or gather for our exclusive <strong className="text-gold">Family Style Dinner</strong> by night featuring massive, shareable portions of our finest a la carte dishes.
                                </p>
                            </div>
                        </div>

                        {/* Grand Opening & Christmas Announcement Box */}
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
                                    <div className="flex items-center gap-4 border-b border-gold/30 pb-4">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gold rounded-full flex items-center justify-center shadow-lg shadow-gold/20">
                                            <span className="text-black font-bold text-2xl font-cinzel">14</span>
                                            <span className="text-black text-[10px] font-montserrat absolute mt-8 uppercase font-bold">DEC</span>
                                        </div>
                                        <div>
                                            <h3 className="text-gold font-cinzel text-2xl font-bold leading-tight">
                                                SOFT OPENING BUFFET
                                            </h3>
                                            <p className="text-white font-montserrat font-semibold text-sm mt-1">
                                                <span className="text-green-400">★ SPECIAL OFFER:</span> First 25 Guests Eat for <span className="text-gold text-lg font-bold">$12!</span>
                                            </p>
                                        </div>
                                    </div>

                                    {/* Christmas Party Section */}
                                    <div className="flex flex-col gap-4">
                                        <div className="flex items-center gap-4">
                                            <div className="flex-shrink-0 w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg shadow-red-600/30 border border-gold/50">
                                                <span className="text-white font-bold text-2xl font-cinzel">20</span>
                                                <span className="text-white text-[10px] font-montserrat absolute mt-8 uppercase font-bold">DEC</span>
                                            </div>
                                            <div>
                                                <h3 className="text-red-500 font-cinzel text-2xl font-bold leading-tight drop-shadow-md">
                                                    CHRISTMAS PARTY
                                                </h3>
                                                <p className="text-gray-300 font-montserrat text-sm mt-1">
                                                    Celebrate the season with our festive feast!
                                                </p>
                                            </div>
                                        </div>
                                        <div className="pl-20">
                                            <a 
                                                href="https://buy.stripe.com/bJe9AVakD8We1yF20K2Ji01"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-red-700 to-red-900 text-white font-montserrat text-xs font-bold tracking-wider uppercase rounded-full shadow-lg shadow-red-900/50 border border-red-500/30 hover:scale-105 hover:shadow-red-600/30 transition-all duration-300 group"
                                            >
                                                <span>Get Tickets</span>
                                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>

                                    {/* Grand Opening Section */}
                                    <div className="flex flex-col gap-4 border-t border-gold/30 pt-4 mt-4">
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
                            className="flex justify-center gap-4 pt-12 relative z-30"
                        >
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
