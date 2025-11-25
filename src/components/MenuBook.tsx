"use client";

import React, { forwardRef, useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import { menuItems } from "@/data/menu";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

// Page Component
const Page = forwardRef<HTMLDivElement, { children: React.ReactNode; number?: number; title?: string; className?: string }>((props, ref) => {
    return (
        <div className={`demoPage bg-[#fdfbf7] h-full w-full shadow-inner border-r border-gray-200 ${props.className}`} ref={ref}>
            <div className="h-full w-full p-8 flex flex-col relative overflow-hidden">
                {/* Paper Texture Overlay */}
                <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]"></div>

                {/* Border Decoration */}
                <div className="absolute top-4 left-4 right-4 bottom-4 border border-gold/30 pointer-events-none"></div>
                <div className="absolute top-5 left-5 right-5 bottom-5 border border-gold/20 pointer-events-none"></div>

                <div className="relative z-10 h-full">
                    {props.title && (
                        <h3 className="font-playfair text-2xl text-red-accent font-bold text-center mb-6 border-b border-gold/40 pb-2 mx-auto w-3/4">
                            {props.title}
                        </h3>
                    )}
                    {props.children}
                </div>

                {props.number && (
                    <div className="absolute bottom-6 right-6 text-xs text-gray-400 font-playfair">
                        {props.number}
                    </div>
                )}
            </div>
        </div>
    );
});

Page.displayName = "Page";

const Cover = forwardRef<HTMLDivElement, { children: React.ReactNode; className?: string }>((props, ref) => {
    return (
        <div className={`demoPage bg-[#1a1a1a] h-full w-full shadow-2xl text-gold ${props.className}`} ref={ref}>
            <div className="h-full w-full p-4 flex flex-col items-center justify-center border-4 border-gold/50 relative overflow-hidden">
                {/* Leather Texture Effect */}
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/black-leather.png')]"></div>
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
        <section id="menu-section" className="py-24 bg-[#0a0a0a] flex flex-col items-center justify-center min-h-screen relative overflow-hidden">
            {/* Background Texture - Dark Wood/Marble */}
            <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/dark-wood.png')] mix-blend-overlay pointer-events-none" />

            {/* Ambient Lighting */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 mb-16 w-full max-w-4xl px-4">
                <SectionHeading
                    title="The Menu"
                    subtitle="Discover Our Flavors"
                    centered={true}
                />
                <p className="text-gray-400 text-center max-w-md mx-auto -mt-8 font-light">
                    Click on the book to open and explore our culinary masterpieces.
                </p>
            </div>

            <div className="relative flex justify-center items-center w-full max-w-6xl px-4 h-[600px] md:h-[700px] perspective-[2000px]">
                {/* @ts-ignore - react-pageflip types issue */}
                <HTMLFlipBook
                    width={450}
                    height={650}
                    size="stretch"
                    minWidth={300}
                    maxWidth={550}
                    minHeight={400}
                    maxHeight={750}
                    maxShadowOpacity={0.6}
                    showCover={true}
                    mobileScrollSupport={true}
                    className="shadow-2xl shadow-black/80"
                    ref={bookRef}
                >
                    {/* Front Cover */}
                    <Cover>
                        <div className="border-[3px] border-gold/60 p-8 md:p-12 h-full flex flex-col justify-between relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

                            <div className="text-center mt-12">
                                <div className="w-12 h-12 border border-gold/40 rotate-45 mx-auto mb-8 flex items-center justify-center">
                                    <div className="w-8 h-8 border border-gold/40" />
                                </div>
                                <h1 className="font-cinzel text-5xl md:text-7xl font-bold mb-4 text-gold-gradient drop-shadow-md">PURE<br />INDIA</h1>
                                <p className="text-xs tracking-[0.5em] uppercase text-gold-light/80 mt-4">Las Vegas</p>
                            </div>

                            <div className="text-center mb-8">
                                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent mb-2" />
                                <p className="text-[10px] uppercase tracking-widest text-gold/40">Est. 2024</p>
                            </div>
                        </div>
                    </Cover>

                    {/* Menu Pages */}
                    {menuItems.map((category, index) => (
                        <Page key={index} number={index + 1} title={category.category}>
                            <div className="space-y-8 mt-6">
                                {category.items.map((item, idx) => (
                                    <div key={idx} className="group relative">
                                        <div className="flex justify-between items-baseline mb-2 relative z-10">
                                            <h4 className="font-cinzel text-lg font-bold text-black/90 group-hover:text-red-deep transition-colors duration-300">
                                                {item.name}
                                            </h4>
                                            <div className="flex-grow mx-4 border-b border-dotted border-black/20 group-hover:border-red-deep/30 transition-colors" />
                                            <span className="font-montserrat font-bold text-gold-dark">{item.price}</span>
                                        </div>
                                        <p className="text-xs md:text-sm text-gray-600 font-montserrat leading-relaxed pl-2 border-l-2 border-transparent group-hover:border-gold/30 transition-all duration-300">
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
                            <div className="flex flex-col items-center justify-center h-full text-gray-400 italic font-cinzel opacity-50">
                                <div className="w-16 h-16 border border-gray-300 rotate-45 mb-4" />
                                <p>Culinary Excellence</p>
                            </div>
                        </Page>
                    ) : (
                        <div style={{ display: 'none' }} />
                    )}

                    {/* Back Cover */}
                    <Cover>
                        <div className="h-full flex flex-col items-center justify-center border-2 border-gold/30 p-8">
                            <h2 className="font-cinzel text-3xl mb-6 text-gold">Pure India</h2>
                            <div className="w-8 h-8 border border-gold/20 rotate-45 mb-6" />
                            <p className="text-xs text-gray-500 font-montserrat tracking-widest uppercase">www.pureindia.com</p>
                            <p className="text-xs text-gray-500 font-montserrat tracking-widest uppercase mt-2">Las Vegas, NV</p>
                        </div>
                    </Cover>
                </HTMLFlipBook>
            </div>
        </section>
    );
}
