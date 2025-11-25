"use client";

import React, { forwardRef, useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import { menuItems } from "@/data/menu";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

// Page Component - Cream/Ivory pages with gold accents
const Page = forwardRef<HTMLDivElement, { children: React.ReactNode; number?: number; title?: string; className?: string }>((props, ref) => {
    return (
        <div className={`demoPage bg-gradient-to-br from-[#f8f6f0] to-[#f0ebe0] h-full w-full shadow-2xl ${props.className}`} ref={ref}>
            <div className="h-full w-full p-10 flex flex-col relative overflow-hidden">
                {/* Subtle Paper Texture */}
                <div className="absolute inset-0 opacity-[0.15] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/old-mathematics.png')]"></div>

                {/* Ornate Corner Decorations */}
                <div className="absolute top-6 left-6 w-12 h-12 border-l-2 border-t-2 border-gold/40 pointer-events-none"></div>
                <div className="absolute top-6 right-6 w-12 h-12 border-r-2 border-t-2 border-gold/40 pointer-events-none"></div>
                <div className="absolute bottom-6 left-6 w-12 h-12 border-l-2 border-b-2 border-gold/40 pointer-events-none"></div>
                <div className="absolute bottom-6 right-6 w-12 h-12 border-r-2 border-b-2 border-gold/40 pointer-events-none"></div>

                {/* Inner decorative border */}
                <div className="absolute top-8 left-8 right-8 bottom-8 border border-gold/20 pointer-events-none"></div>

                <div className="relative z-10 h-full">
                    {props.title && (
                        <div className="text-center mb-8">
                            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-4"></div>
                            <h3 className="font-cinzel text-3xl text-red-900 font-bold tracking-wide">
                                {props.title}
                            </h3>
                            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-4"></div>
                        </div>
                    )}
                    {props.children}
                </div>

                {props.number && (
                    <div className="absolute bottom-8 right-10 text-sm text-gold/60 font-cinzel italic">
                        — {props.number} —
                    </div>
                )}
            </div>
        </div>
    );
});

Page.displayName = "Page";

// Cover Component - Rich burgundy leather with gold embossing
const Cover = forwardRef<HTMLDivElement, { children: React.ReactNode; className?: string }>((props, ref) => {
    return (
        <div className={`demoPage bg-gradient-to-br from-[#4a0e0e] via-[#6b1515] to-[#3d0a0a] h-full w-full shadow-2xl text-gold ${props.className}`} ref={ref}>
            <div className="h-full w-full p-6 flex flex-col items-center justify-center border-8 border-[#2a0606] relative overflow-hidden">
                {/* Leather Texture */}
                <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/leather.png')]"></div>

                {/* Subtle shine effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/20 pointer-events-none"></div>

                {/* Gold embossed border effect */}
                <div className="absolute inset-12 border-2 border-gold/60 pointer-events-none shadow-[inset_0_0_20px_rgba(212,175,55,0.3)]"></div>
                <div className="absolute inset-[52px] border border-gold/30 pointer-events-none"></div>

                <div className="relative z-10 text-center">
                    {props.children}
                </div>
            </div>
        </div>
    );
});

Cover.displayName = "Cover";

export default function MenuBook() {
    // @ts-ignore
    const bookRef = useRef(null);

    return (
        <section id="menu-section" className="py-32 bg-gradient-to-b from-black via-[#0a0505] to-black flex flex-col items-center justify-center min-h-screen relative overflow-hidden">
            {/* Rich dark background with subtle texture */}
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] mix-blend-overlay pointer-events-none" />

            {/* Warm ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-amber-900/10 via-red-900/5 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 mb-20 w-full max-w-4xl px-4">
                <SectionHeading
                    title="Our Menu"
                    subtitle="A Culinary Journey"
                    centered={true}
                />
                <p className="text-gray-400 text-center max-w-lg mx-auto -mt-6 font-montserrat font-light text-sm">
                    Flip through the pages to discover our authentic Indian cuisine, crafted with passion and tradition.
                </p>
            </div>

            <div className="relative flex justify-center items-center w-full max-w-6xl px-4 h-[650px] md:h-[750px] perspective-[2500px]">
                {/* Soft shadow beneath book */}
                <div className="absolute bottom-0 w-[500px] h-8 bg-black/40 blur-2xl rounded-full"></div>

                {/* @ts-ignore - react-pageflip types issue */}
                <HTMLFlipBook
                    width={480}
                    height={680}
                    size="stretch"
                    minWidth={320}
                    maxWidth={580}
                    minHeight={420}
                    maxHeight={780}
                    maxShadowOpacity={0.8}
                    showCover={true}
                    mobileScrollSupport={true}
                    className="shadow-2xl shadow-black/90"
                    ref={bookRef}
                >
                    {/* Front Cover */}
                    <Cover>
                        <div className="flex flex-col items-center justify-center h-full py-12">
                            {/* Ornate top decoration */}
                            <div className="mb-8">
                                <div className="w-20 h-20 border-2 border-gold/50 rotate-45 mx-auto flex items-center justify-center">
                                    <div className="w-14 h-14 border-2 border-gold/30 flex items-center justify-center">
                                        <div className="w-8 h-8 bg-gold/20 rounded-full"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Main title */}
                            <div className="text-center space-y-3">
                                <h1 className="font-cinzel text-6xl md:text-7xl font-bold tracking-wider text-gold drop-shadow-[0_0_25px_rgba(212,175,55,0.5)]">
                                    PURE
                                </h1>
                                <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"></div>
                                <h1 className="font-cinzel text-6xl md:text-7xl font-bold tracking-wider text-gold drop-shadow-[0_0_25px_rgba(212,175,55,0.5)]">
                                    INDIA
                                </h1>
                            </div>

                            {/* Subtitle */}
                            <p className="text-gold-light/90 text-xs tracking-[0.4em] uppercase mt-6 font-montserrat">
                                Las Vegas
                            </p>

                            {/* Bottom decoration */}
                            <div className="mt-auto pt-12">
                                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent mb-3"></div>
                                <p className="text-[10px] uppercase tracking-[0.3em] text-gold/50 font-montserrat">
                                    Authentic Indian Cuisine
                                </p>
                                <p className="text-[9px] uppercase tracking-widest text-gold/30 mt-1 font-montserrat">
                                    Est. 2024
                                </p>
                            </div>
                        </div>
                    </Cover>

                    {/* Menu Pages */}
                    {menuItems.map((category, index) => (
                        <Page key={index} number={index + 1} title={category.category}>
                            <div className="space-y-5 mt-3">
                                {category.items.map((item, idx) => (
                                    <div key={idx} className="group relative pb-4 border-b border-gold/10 last:border-0">
                                        <div className="flex justify-between items-start mb-2">
                                            <h4 className="font-cinzel text-lg font-bold text-[#3d0a0a] group-hover:text-red-900 transition-colors duration-300 flex-1 pr-4">
                                                {item.name}
                                            </h4>
                                            <span className="font-montserrat font-bold text-gold text-lg whitespace-nowrap">
                                                {item.price}
                                            </span>
                                        </div>
                                        <p className="text-sm text-gray-700 font-montserrat leading-relaxed pl-3 border-l-2 border-gold/30">
                                            {item.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </Page>
                    ))}

                    {/* Filler page if odd number of categories */}
                    {menuItems.length % 2 !== 0 ? (
                        <Page number={menuItems.length + 1}>
                            <div className="flex flex-col items-center justify-center h-full text-gray-500">
                                <div className="w-20 h-20 border-2 border-gold/30 rotate-45 mb-6 flex items-center justify-center">
                                    <div className="w-12 h-12 border border-gold/20"></div>
                                </div>
                                <p className="font-cinzel text-xl italic text-gold/60">Culinary Excellence</p>
                                <p className="font-montserrat text-xs text-gray-400 mt-2 tracking-widest">PURE INDIA</p>
                            </div>
                        </Page>
                    ) : (
                        <div style={{ display: 'none' }} />
                    )}

                    {/* Back Cover */}
                    <Cover>
                        <div className="h-full flex flex-col items-center justify-center py-12">
                            <div className="w-16 h-16 border-2 border-gold/40 rotate-45 mb-8 flex items-center justify-center">
                                <div className="w-10 h-10 border border-gold/30"></div>
                            </div>

                            <h2 className="font-cinzel text-4xl mb-4 text-gold tracking-wide">Pure India</h2>

                            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent my-6"></div>

                            <div className="text-center space-y-2">
                                <p className="text-xs text-gold-light/80 font-montserrat tracking-[0.3em] uppercase">
                                    3799 S Las Vegas Blvd
                                </p>
                                <p className="text-xs text-gold-light/80 font-montserrat tracking-[0.3em] uppercase">
                                    Las Vegas, NV 89109
                                </p>
                            </div>

                            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent my-6"></div>

                            <p className="text-[10px] text-gold/60 font-montserrat tracking-widest uppercase">
                                www.pureindia.com
                            </p>
                        </div>
                    </Cover>
                </HTMLFlipBook>
            </div>
        </section>
    );
}
