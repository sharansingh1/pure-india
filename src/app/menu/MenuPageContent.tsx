"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function MenuPageContent({ groupedMenu }: { groupedMenu: any[] }) {
    return (
        <main className="min-h-screen pt-32 pb-20 bg-black text-white">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-16">
                    <h1 className="font-cinzel text-5xl md:text-7xl text-white font-bold mb-6 tracking-tight">Our <span className="text-gold-gradient">Menu</span></h1>
                    <p className="text-gold font-montserrat tracking-[0.3em] uppercase text-xs mb-8">Authentic Indian Cuisine • A La Carte Excellence</p>

                    {/* New Description Section */}
                    <div className="max-w-3xl mx-auto mb-16">
                        <div className="relative bg-gradient-to-b from-white/5 to-transparent border-t border-b border-gold/30 p-10 backdrop-blur-md shadow-[0_0_30px_rgba(212,175,55,0.05)]">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-black flex items-center justify-center border border-gold/50 rotate-45 shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                                <div className="w-8 h-8 border border-gold/30" />
                            </div>

                            <p className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-amber-200 to-gold font-cinzel text-2xl md:text-3xl leading-relaxed italic mb-6 pt-4 drop-shadow-sm font-bold">
                                "The Art of Traditional Spices"
                            </p>
                            <p className="text-gray-200 font-montserrat text-sm md:text-lg leading-relaxed tracking-wide mb-6">
                                Embark on a culinary journey through the heart of India. Every dish is a masterpiece, prepared fresh to order using time-honored techniques and the finest hand-picked spices. From our roaring tandoor ovens to our slow-simmered curries, experience the vibrant soul of Indian cuisine in an atmosphere of royal elegance.
                            </p>

                            <div className="flex items-center justify-center gap-6">
                                <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-gold/50" />
                                <span className="text-gold text-[10px] uppercase tracking-[0.4em] font-bold glow-text">A La Carte Dining Only</span>
                                <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-gold/50" />
                            </div>
                        </div>
                    </div>
                </div>

                {groupedMenu.map((category, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="mb-24"
                    >
                        <div className="flex items-center gap-6 mb-12 justify-center">
                            <div className="h-[1px] flex-grow max-w-[100px] bg-gradient-to-r from-transparent to-gold/40" />
                            <div className="text-center px-4">
                                <h2 className="font-cinzel text-3xl md:text-5xl text-gold-gradient tracking-wider uppercase font-bold">
                                    {category.category === "GRILLS" || category.category === "GRILLED" || category.category === "GRILLES" ? "GRILLS" : category.category}
                                </h2>
                            </div>
                            <div className="h-[1px] flex-grow max-w-[100px] bg-gradient-to-l from-transparent to-gold/40" />
                        </div>

                        <div className="grid gap-12">
                            {category.items.map((item: any, idx: number) => (
                                <div key={idx} className="group relative">
                                    <div className="flex justify-between items-baseline mb-3">
                                        <div className="flex items-center gap-3">
                                            <h3 className="font-cinzel text-xl md:text-2xl font-bold text-white group-hover:text-gold transition-colors duration-300">
                                                {item.name}
                                            </h3>
                                            {item.isVegetarian && (
                                                <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" title="Vegetarian" />
                                            )}
                                            {item.isSpicy && (
                                                <span className="text-red-500 text-xs" title="Spicy">🌶️</span>
                                            )}
                                        </div>
                                        <div className="flex-grow mx-4 border-b border-dotted border-white/10 group-hover:border-gold/30 transition-colors" />
                                        <span className="font-montserrat font-bold text-xl text-gold">
                                            {/* If price contains a slash, take the first value (standard/single portion) */}
                                            {item.price?.includes('/') ? item.price.split('/')[0].trim() : item.price}
                                        </span>
                                    </div>
                                    <p className="text-gray-400 font-montserrat text-sm md:text-base leading-relaxed max-w-2xl group-hover:text-gray-300 transition-colors">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}

                <div className="text-center mt-24 pt-12 border-t border-white/10">
                    <div className="mb-10 opacity-70">
                        <p className="text-gray-400 text-sm font-montserrat italic mb-2">
                            * All our dishes are prepared fresh. Please allow sufficient time for the best experience.
                        </p>
                        <p className="text-gray-400 text-sm font-montserrat italic">
                            * Please inform your server of any allergies or dietary restrictions.
                        </p>
                        <p className="text-gray-400 text-sm font-montserrat italic">
                            * An 18% gratuity will be added to parties of 6 or more.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <button className="min-w-[200px] px-8 py-4 bg-gold text-black hover:bg-white transition-all duration-300 font-montserrat font-bold uppercase tracking-widest text-xs shadow-[0_10px_20px_rgba(212,175,55,0.2)]">
                            Download PDF Menu
                        </button>
                        <Link href="/contact" className="min-w-[200px] px-8 py-4 border border-gold text-gold hover:bg-gold hover:text-black transition-all duration-300 font-montserrat font-bold uppercase tracking-widest text-xs">
                            Plan A Visit
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
