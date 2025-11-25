"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
    const scrollToMenu = () => {
        const menuSection = document.getElementById("menu-section");
        menuSection?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Image with Parallax */}
            <motion.div
                className="absolute inset-0 z-0"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 10, ease: "easeOut" }}
            >
                <Image
                    src="/hero-bg.png"
                    alt="Pure India Las Vegas"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Gradient Overlay for readability - Multi-layered for depth */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/90" />
                <div className="absolute inset-0 bg-black/20 mix-blend-multiply" />
            </motion.div>

            {/* Content */}
            <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="flex flex-col items-center"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="h-[1px] w-12 md:w-24 bg-gradient-to-r from-transparent to-gold" />
                        <h2 className="text-gold-light text-sm md:text-lg tracking-[0.5em] uppercase font-medium font-montserrat">
                            Welcome to Fabulous
                        </h2>
                        <div className="h-[1px] w-12 md:w-24 bg-gradient-to-l from-transparent to-gold" />
                    </div>

                    <h1 className="font-cinzel text-6xl md:text-8xl lg:text-9xl text-white font-bold mb-4 drop-shadow-2xl tracking-tight">
                        <span className="text-gold-gradient">PURE</span> INDIA
                    </h1>

                    <h3 className="text-white/80 text-xl md:text-2xl font-light tracking-[0.3em] mb-12 font-montserrat">
                        LAS VEGAS
                    </h3>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <a
                        href="/contact"
                        className="group relative px-10 py-4 bg-gold overflow-hidden transition-all duration-500 hover:shadow-lg hover:shadow-gold/30"
                    >
                        <span className="relative z-10 font-montserrat font-bold tracking-[0.2em] uppercase text-black transition-colors duration-300">
                            Contact Us
                        </span>
                    </a>

                    <button
                        onClick={scrollToMenu}
                        className="group relative px-10 py-4 bg-transparent overflow-hidden transition-all duration-500"
                    >
                        <div className="absolute inset-0 border border-gold/50 group-hover:border-gold transition-colors duration-500" />
                        <div className="absolute inset-0 bg-gold/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                        <span className="relative z-10 font-montserrat font-medium tracking-[0.2em] uppercase text-gold-light group-hover:text-white transition-colors duration-300">
                            Experience The Menu
                        </span>
                    </button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 2, duration: 2, repeat: Infinity }}
            >
                <span className="text-[10px] uppercase tracking-widest text-gold/60">Scroll</span>
                <div className="w-[1px] h-16 bg-gradient-to-b from-gold/20 via-gold to-transparent" />
            </motion.div>
        </section>
    );
}
