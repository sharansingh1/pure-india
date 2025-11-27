"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
    const scrollToMenu = () => {
        const menuSection = document.getElementById("menu-section");
        menuSection?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-black">
            {/* Subtle Golden Glow Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.05),transparent_70%)] pointer-events-none" />

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
                                <span className="text-gold-gradient">Pure India</span>
                            </h1>
                            <p className="text-gray-400 text-lg md:text-xl font-montserrat leading-relaxed max-w-lg">
                                Savor the rich flavors of traditional Indian cuisine in the heart of Las Vegas.
                                Every dish tells a story of heritage, spice, and passion.
                            </p>
                        </div>

                        {/* Location Badge */}
                        <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-gold/20 px-6 py-3 rounded-full">
                            <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-white font-montserrat text-sm tracking-wider">
                                Las Vegas, NV • Next to Airport
                            </span>
                        </div>

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
                                    View Menu
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
                                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-gold/40 shadow-2xl shadow-gold/20">
                                    <Image
                                        src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800"
                                        alt="Signature Indian Dish"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                                </div>

                                {/* Decorative Badge - Top Right (Lotus) */}
                                <motion.div
                                    className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-gold via-amber-500 to-gold rounded-full flex items-center justify-center shadow-xl shadow-gold/30 border-2 border-amber-600"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                >
                                    <svg viewBox="0 0 100 100" className="w-14 h-14">
                                        {[...Array(6)].map((_, i) => (
                                            <ellipse
                                                key={i}
                                                cx="50"
                                                cy="50"
                                                rx="15"
                                                ry="28"
                                                fill="#000"
                                                opacity="0.8"
                                                transform={`rotate(${i * 60} 50 50)`}
                                            />
                                        ))}
                                        <circle cx="50" cy="50" r="10" fill="#D4AF37" />
                                        <circle cx="50" cy="50" r="6" fill="#000" opacity="0.3" />
                                    </svg>
                                </motion.div>

                                {/* Decorative Badge - Bottom Left (Mandala) */}
                                <motion.div
                                    className="absolute -bottom-6 -left-6 w-28 h-28 bg-gradient-to-br from-amber-600 via-gold to-amber-500 rounded-full flex items-center justify-center shadow-xl shadow-gold/30 border-2 border-amber-700"
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                >
                                    <svg viewBox="0 0 100 100" className="w-16 h-16">
                                        {/* Mandala pattern */}
                                        <circle cx="50" cy="50" r="8" fill="#000" opacity="0.8" />
                                        <circle cx="50" cy="50" r="15" fill="none" stroke="#000" strokeWidth="2" opacity="0.8" />
                                        <circle cx="50" cy="50" r="22" fill="none" stroke="#000" strokeWidth="1" opacity="0.6" />
                                        {[...Array(8)].map((_, i) => (
                                            <line
                                                key={i}
                                                x1="50"
                                                y1="50"
                                                x2={50 + 25 * Math.cos((i * 45 * Math.PI) / 180)}
                                                y2={50 + 25 * Math.sin((i * 45 * Math.PI) / 180)}
                                                stroke="#000"
                                                strokeWidth="1.5"
                                                opacity="0.7"
                                            />
                                        ))}
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
