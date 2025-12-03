"use client";

import React, { forwardRef, useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import { menuItems } from "@/data/menu";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

// Page Component - Royal cream pages with vibrant gold and burgundy accents
const Page = forwardRef<HTMLDivElement, { children: React.ReactNode; number?: number; title?: string; className?: string }>((props, ref) => {
    return (
        <div className={`demoPage bg-gradient-to-br from-[#faf8f3] via-[#f5f0e8] to-[#f0e8dc] h-full w-full shadow-2xl ${props.className}`} ref={ref}>
            <div className="h-full w-full p-10 flex flex-col relative overflow-y-auto scrollbar-thin scrollbar-thumb-gold scrollbar-track-transparent">
                {/* Vibrant Paper Texture */}
                <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/old-mathematics.png')]"></div>

                {/* Ornate Corner Decorations with Gold */}
                <div className="absolute top-4 left-4 w-16 h-16 pointer-events-none">
                    <div className="absolute inset-0 border-l-[3px] border-t-[3px] border-gold"></div>
                    <div className="absolute top-0 left-0 w-4 h-4 bg-gold rounded-full"></div>
                    <div className="absolute top-2 left-2 w-8 h-8 border border-amber-600 rotate-45"></div>
                </div>
                <div className="absolute top-4 right-4 w-16 h-16 pointer-events-none">
                    <div className="absolute inset-0 border-r-[3px] border-t-[3px] border-gold"></div>
                    <div className="absolute top-0 right-0 w-4 h-4 bg-gold rounded-full"></div>
                    <div className="absolute top-2 right-2 w-8 h-8 border border-amber-600 rotate-45"></div>
                </div>
                <div className="absolute bottom-4 left-4 w-16 h-16 pointer-events-none">
                    <div className="absolute inset-0 border-l-[3px] border-b-[3px] border-gold"></div>
                    <div className="absolute bottom-0 left-0 w-4 h-4 bg-gold rounded-full"></div>
                    <div className="absolute bottom-2 left-2 w-8 h-8 border border-amber-600 rotate-45"></div>
                </div>
                <div className="absolute bottom-4 right-4 w-16 h-16 pointer-events-none">
                    <div className="absolute inset-0 border-r-[3px] border-b-[3px] border-gold"></div>
                    <div className="absolute bottom-0 right-0 w-4 h-4 bg-gold rounded-full"></div>
                    <div className="absolute bottom-2 right-2 w-8 h-8 border border-amber-600 rotate-45"></div>
                </div>

                {/* Vibrant decorative border with gradient */}
                <div className="absolute top-6 left-6 right-6 bottom-6 border-2 border-gold/60 pointer-events-none shadow-[inset_0_0_20px_rgba(212,175,55,0.3)]"></div>
                <div className="absolute top-8 left-8 right-8 bottom-8 border border-amber-600/40 pointer-events-none"></div>

                {/* Ornate mandala pattern - much more visible */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 opacity-[0.12] pointer-events-none">
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                        {/* Outer circles with gradient effect */}
                        <circle cx="100" cy="100" r="90" fill="none" stroke="#D4AF37" strokeWidth="2" opacity="0.6" />
                        <circle cx="100" cy="100" r="75" fill="none" stroke="#B8860B" strokeWidth="1.5" opacity="0.5" />
                        <circle cx="100" cy="100" r="60" fill="none" stroke="#D4AF37" strokeWidth="2" opacity="0.6" />
                        <circle cx="100" cy="100" r="45" fill="none" stroke="#B8860B" strokeWidth="1.5" opacity="0.5" />
                        <circle cx="100" cy="100" r="30" fill="none" stroke="#D4AF37" strokeWidth="2" opacity="0.6" />

                        {/* Radiating petals */}
                        {[...Array(16)].map((_, i) => (
                            <g key={i} transform={`rotate(${i * 22.5} 100 100)`}>
                                <line x1="100" y1="10" x2="100" y2="35" stroke="#D4AF37" strokeWidth="3" strokeLinecap="round" />
                                <circle cx="100" cy="8" r="4" fill="#B8860B" />
                                <path d="M 95 35 Q 100 45 105 35" fill="none" stroke="#D4AF37" strokeWidth="2" />
                                <ellipse cx="100" cy="55" rx="8" ry="15" fill="#D4AF37" opacity="0.3" />
                            </g>
                        ))}

                        {/* Center ornament */}
                        <circle cx="100" cy="100" r="15" fill="#D4AF37" opacity="0.4" />
                        <circle cx="100" cy="100" r="10" fill="none" stroke="#8B4513" strokeWidth="2" />
                        <circle cx="100" cy="100" r="5" fill="#B8860B" />
                    </svg>
                </div>

                {/* Side decorative flourishes */}
                <div className="absolute top-1/4 left-2 w-8 h-32 opacity-20 pointer-events-none">
                    <svg viewBox="0 0 40 150" className="w-full h-full">
                        <path d="M 20 0 Q 30 25 20 50 Q 10 75 20 100 Q 30 125 20 150" fill="none" stroke="#D4AF37" strokeWidth="3" />
                        <circle cx="20" cy="25" r="5" fill="#B8860B" />
                        <circle cx="20" cy="75" r="5" fill="#B8860B" />
                        <circle cx="20" cy="125" r="5" fill="#B8860B" />
                    </svg>
                </div>
                <div className="absolute top-1/4 right-2 w-8 h-32 opacity-20 pointer-events-none">
                    <svg viewBox="0 0 40 150" className="w-full h-full">
                        <path d="M 20 0 Q 10 25 20 50 Q 30 75 20 100 Q 10 125 20 150" fill="none" stroke="#D4AF37" strokeWidth="3" />
                        <circle cx="20" cy="25" r="5" fill="#B8860B" />
                        <circle cx="20" cy="75" r="5" fill="#B8860B" />
                        <circle cx="20" cy="125" r="5" fill="#B8860B" />
                    </svg>
                </div>

                <div className="relative z-10 h-full">
                    {props.title && (
                        <div className="text-center mb-8 relative">
                            {/* Ornate header decoration */}
                            <div className="flex items-center justify-center gap-3 mb-4">
                                <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-gold to-gold"></div>
                                <div className="w-3 h-3 bg-gold rotate-45"></div>
                                <div className="w-20 h-[2px] bg-gradient-to-l from-transparent via-gold to-gold"></div>
                            </div>
                            <h3 className="font-cinzel text-3xl font-bold tracking-wide bg-gradient-to-r from-red-900 via-amber-800 to-red-900 bg-clip-text text-transparent drop-shadow-sm">
                                {props.title}
                            </h3>
                            <div className="flex items-center justify-center gap-3 mt-4">
                                <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-gold to-gold"></div>
                                <div className="w-3 h-3 bg-gold rotate-45"></div>
                                <div className="w-20 h-[2px] bg-gradient-to-l from-transparent via-gold to-gold"></div>
                            </div>
                        </div>
                    )}
                    {props.children}
                </div>

                {props.number && (
                    <div className="absolute bottom-8 right-10 flex items-center gap-2">
                        <div className="w-8 h-[1px] bg-gold/60"></div>
                        <span className="text-sm text-gold font-cinzel italic font-bold">{props.number}</span>
                        <div className="w-8 h-[1px] bg-gold/60"></div>
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
    const [isCoverOpen, setIsCoverOpen] = React.useState(false);

    // Continuous Pagination Logic
    const PAGE_CAPACITY = 580;
    const HEADER_COST = 100;
    const ITEM_COST = 65;
    const NOTE_COST = 30;
    const PRICING_COST = 120; // Cost for pricing info page

    const getContinuousPages = () => {
        const pages: any[] = [];
        let currentPage: any[] = [];
        let currentSlots = 0;

        // Add pricing page as first page
        pages.push([{ type: 'pricing' }]);

        menuItems.forEach((cat: any) => {
            const headerNeeded = HEADER_COST + (cat.note ? NOTE_COST : 0);

            if (currentSlots + headerNeeded > PAGE_CAPACITY) {
                pages.push(currentPage);
                currentPage = [];
                currentSlots = 0;
            }

            currentPage.push({ type: 'header', content: cat.category, note: cat.note });
            currentSlots += headerNeeded;

            cat.items.forEach((item: any) => {
                if (currentSlots + ITEM_COST > PAGE_CAPACITY) {
                    pages.push(currentPage);
                    currentPage = [];
                    currentSlots = 0;
                }
                currentPage.push({ type: 'item', content: item });
                currentSlots += ITEM_COST;
            });
        });

        if (currentPage.length > 0) {
            pages.push(currentPage);
        }

        return pages;
    };

    const continuousPages = getContinuousPages();

    const onFlip = (e: any) => {
        setIsCoverOpen(e.data > 0);
    };

    return (
        <section id="menu-section" className="py-32 bg-gradient-to-b from-black via-[#0a0505] to-black flex flex-col items-center justify-center min-h-screen relative overflow-hidden">
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] mix-blend-overlay pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-amber-900/10 via-red-900/5 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 mb-10 w-full max-w-4xl px-4">
                <SectionHeading
                    title="Buffet Selection"
                    subtitle="Today's Feast"
                    centered={true}
                />
                <p className="text-gray-400 text-center max-w-lg mx-auto -mt-6 font-montserrat font-light text-sm">
                    Flip through the pages to discover our authentic Indian cuisine, crafted with passion and tradition.
                </p>
            </div>

            <div
                className="relative flex justify-center items-center w-full px-4 h-[650px] md:h-[750px] transition-transform duration-700 ease-in-out"
                style={{ transform: isCoverOpen ? 'translateX(0)' : 'translateX(-240px)' }}
            >
                <div className="absolute bottom-10 w-[500px] h-8 bg-black/40 blur-2xl rounded-full"></div>

                {/* @ts-ignore */}
                <HTMLFlipBook
                    width={480}
                    height={680}
                    size="fixed"
                    minWidth={320}
                    maxWidth={480}
                    minHeight={420}
                    maxHeight={680}
                    maxShadowOpacity={0.5}
                    showCover={true}
                    mobileScrollSupport={true}
                    className="shadow-2xl shadow-black/90 mx-auto"
                    ref={bookRef}
                    onFlip={onFlip}
                >
                    {/* Front Cover */}
                    <Cover>
                        <div className="flex flex-col items-center justify-center h-full py-12">
                            <div className="mb-8">
                                <div className="w-20 h-20 border-2 border-gold/50 rotate-45 mx-auto flex items-center justify-center">
                                    <div className="w-14 h-14 border-2 border-gold/30 flex items-center justify-center">
                                        <div className="w-8 h-8 bg-gold/20 rounded-full"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="text-center space-y-3">
                                <h1 className="font-cinzel text-6xl md:text-7xl font-bold tracking-wider text-gold drop-shadow-[0_0_25px_rgba(212,175,55,0.5)]">
                                    PURE
                                </h1>
                                <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"></div>
                                <h1 className="font-cinzel text-4xl md:text-5xl font-bold tracking-wider text-gold drop-shadow-[0_0_25px_rgba(212,175,55,0.5)]">
                                    INDIAN CUISINE
                                </h1>
                            </div>

                            <p className="text-gold-light/90 text-xs tracking-[0.4em] uppercase mt-6 font-montserrat">
                                Las Vegas • Royal Buffet
                            </p>

                            <div className="mt-auto pt-12">
                                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent mb-3"></div>
                                <p className="text-[10px] uppercase tracking-[0.3em] text-gold/50 font-montserrat">
                                    Authentic Indian Cuisine
                                </p>
                                <p className="text-[9px] uppercase tracking-widest text-gold/30 mt-1 font-montserrat">
                                    Est. 2025
                                </p>
                            </div>
                        </div>
                    </Cover>

                    {/* Menu Pages */}
                    {continuousPages.map((pageContent, index) => (
                        <Page key={index} number={index + 1}>
                            <div className="space-y-4 mt-2">
                                {pageContent.map((block: any, idx: number) => {
                                    if (block.type === 'pricing') {
                                        return (
                                            <div key={idx} className="flex flex-col items-center justify-center h-full py-12">
                                                <div className="text-center space-y-8">
                                                    <div>
                                                        <div className="flex items-center justify-center gap-3 mb-6">
                                                            <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-gold to-gold"></div>
                                                            <div className="w-4 h-4 bg-gold rotate-45"></div>
                                                            <div className="w-16 h-[2px] bg-gradient-to-l from-transparent via-gold to-gold"></div>
                                                        </div>
                                                        <h2 className="font-cinzel text-4xl font-bold bg-gradient-to-r from-red-900 via-amber-700 to-red-900 bg-clip-text text-transparent mb-6">
                                                            All-You-Can-Eat Buffet
                                                        </h2>
                                                        <div className="flex items-center justify-center gap-3 mt-6">
                                                            <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-gold to-gold"></div>
                                                            <div className="w-4 h-4 bg-gold rotate-45"></div>
                                                            <div className="w-16 h-[2px] bg-gradient-to-l from-transparent via-gold to-gold"></div>
                                                        </div>
                                                    </div>

                                                    <div className="space-y-6 mt-12">
                                                        <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-gold/40 p-6 rounded-lg shadow-lg">
                                                            <p className="font-montserrat text-sm uppercase tracking-widest text-amber-900 mb-2">Lunch Buffet</p>
                                                            <p className="font-cinzel text-5xl font-bold text-red-900">$17.99</p>
                                                            <p className="font-montserrat text-xs text-amber-800 mt-2 tracking-widest uppercase">11:00 AM - 3:00 PM</p>
                                                        </div>
                                                    </div>

                                                    <div className="mt-8 pt-6 border-t border-gold/30">
                                                        <p className="font-montserrat text-xs text-amber-900 italic">
                                                            Unlimited servings of all menu items
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    } else if (block.type === 'header') {
                                        return (
                                            <div key={idx} className="pt-4 first:pt-0">
                                                <div className="text-center mb-6">
                                                    <div className="flex items-center justify-center gap-2 mb-3">
                                                        <div className="w-12 h-[2px] bg-gradient-to-r from-transparent via-gold to-gold"></div>
                                                        <div className="w-2 h-2 bg-gold rotate-45"></div>
                                                        <div className="w-12 h-[2px] bg-gradient-to-l from-transparent via-gold to-gold"></div>
                                                    </div>
                                                    <h3 className="font-cinzel text-2xl font-bold bg-gradient-to-r from-red-900 via-amber-800 to-red-900 bg-clip-text text-transparent tracking-wide">
                                                        {block.content}
                                                    </h3>
                                                    {block.note && (
                                                        <p className="text-center text-amber-800 text-[10px] font-montserrat mt-2 tracking-widest uppercase italic">
                                                            {block.note}
                                                        </p>
                                                    )}
                                                    <div className="flex items-center justify-center gap-2 mt-3">
                                                        <div className="w-12 h-[2px] bg-gradient-to-r from-transparent via-gold to-gold"></div>
                                                        <div className="w-2 h-2 bg-gold rotate-45"></div>
                                                        <div className="w-12 h-[2px] bg-gradient-to-l from-transparent via-gold to-gold"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    } else {
                                        const item = block.content;
                                        return (
                                            <div key={idx} className="group relative pb-3 border-b border-gold/20 last:border-0">
                                                <div className="mb-1">
                                                    <h4 className="font-cinzel text-base font-bold text-[#3d0a0a] group-hover:text-red-900 transition-colors duration-300">
                                                        {item.name}
                                                    </h4>
                                                </div>
                                                {item.description && (
                                                    <p className="text-xs text-gray-700 font-montserrat leading-relaxed pl-3 border-l-2 border-amber-600/40">
                                                        {item.description}
                                                    </p>
                                                )}
                                            </div>
                                        );
                                    }
                                })}
                            </div>
                        </Page>
                    ))}

                    {/* Filler page if odd */}
                    {continuousPages.length % 2 !== 0 ? (
                        <Page number={continuousPages.length + 1}>
                            <div className="flex flex-col items-center justify-center h-full">
                                <div className="w-20 h-20 border-2 border-gold/30 rotate-45 mb-6 flex items-center justify-center">
                                    <div className="w-12 h-12 border border-gold/20"></div>
                                </div>
                                <p className="font-cinzel text-xl italic text-gold/60">Culinary Excellence</p>
                                <p className="font-montserrat text-xs text-amber-800 mt-2 tracking-widest">PURE INDIAN CUISINE</p>
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

                            <h2 className="font-cinzel text-4xl mb-4 text-gold tracking-wide">Pure Indian Cuisine</h2>

                            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent my-6"></div>

                            <div className="text-center space-y-2">
                                <p className="text-xs text-gold-light/80 font-montserrat tracking-[0.3em] uppercase">
                                    1405 E Sunset Rd
                                </p>
                                <p className="text-xs text-gold-light/80 font-montserrat tracking-[0.3em] uppercase">
                                    Las Vegas, NV 89119
                                </p>
                            </div>

                            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent my-6"></div>

                            <p className="text-[10px] text-gold/60 font-montserrat tracking-widest uppercase">
                                www.pureindiacuisine.com
                            </p>
                        </div>
                    </Cover>
                </HTMLFlipBook>
            </div>
        </section>
    );
}
