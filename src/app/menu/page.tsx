"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { menuItems } from "@/data/menu";

export default function MenuPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 bg-black text-white">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-20">
                    <h1 className="font-cinzel text-5xl md:text-7xl text-white font-bold mb-4">What We Offer</h1>
                    <p className="text-gold font-montserrat tracking-[0.3em] uppercase text-sm">Experience Authentic Flavors</p>
                    <p className="text-gold font-montserrat tracking-[0.3em] uppercase text-xs mt-2">Please note that this is our complete menu catalog. Our daily buffet features a curated selection from these dishes, which may vary each day. Includes fountain drinks.</p>
                </div>

                {/* Buffet Pricing */}
                <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-20">
                    {/* Lunch Price Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative p-8 border border-gold/20 bg-gradient-to-b from-white/5 to-transparent text-center group hover:border-gold/40 transition-all duration-500"
                    >
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
                        
                        <h3 className="font-cinzel text-2xl text-white mb-3">Lunch Buffet</h3>
                        <div className="font-cinzel text-gold text-5xl font-bold mb-3 tracking-tight">$17</div>
                        
                        {/* Decorative Corners */}
                        <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-gold/20 group-hover:border-gold/60 transition-colors duration-500" />
                        <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-gold/20 group-hover:border-gold/60 transition-colors duration-500" />
                    </motion.div>

                    {/* Dinner Price Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative p-8 border border-gold/20 bg-gradient-to-b from-white/5 to-transparent text-center group hover:border-gold/40 transition-all duration-500"
                    >
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
                        
                        <h3 className="font-cinzel text-2xl text-white mb-3">Dinner Buffet</h3>
                        <div className="font-cinzel text-gold text-5xl font-bold mb-3 tracking-tight">$20</div>
                        
                        {/* Decorative Corners */}
                        <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-gold/20 group-hover:border-gold/60 transition-colors duration-500" />
                        <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-gold/20 group-hover:border-gold/60 transition-colors duration-500" />
                    </motion.div>
                </div>

                {menuItems.map((category, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="mb-20"
                    >
                        <div className="flex items-center gap-4 mb-10 justify-center">
                            <div className="h-[1px] w-12 bg-gold/30" />
                            <div className="text-center">
                                <h2 className="font-cinzel text-3xl md:text-4xl text-gold-gradient">{category.category}</h2>
                                {/* @ts-ignore */}
                                {category.note && (
                                    <p className="text-gold/60 text-xs font-montserrat mt-2 tracking-widest uppercase">
                                        {/* @ts-ignore */}
                                        {category.note}
                                    </p>
                                )}
                            </div>
                            <div className="h-[1px] w-12 bg-gold/30" />
                        </div>

                        <div className="grid gap-10">
                            {category.items.map((item, idx) => (
                                <div key={idx} className="group relative">
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="font-cinzel text-xl font-bold text-white group-hover:text-gold transition-colors duration-300">
                                            {item.name}
                                        </h3>
                                        <div className="flex-grow mx-4 border-b border-dotted border-white/10 group-hover:border-gold/30 transition-colors" />
                                        <span className="font-montserrat font-bold text-gold">{item.price}</span>
                                    </div>
                                    <p className="text-gray-400 font-montserrat text-sm leading-relaxed max-w-2xl">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}

                <div className="text-center mt-20 pt-10 border-t border-white/10">
                    <p className="text-gray-500 text-sm font-montserrat italic mb-6">
                        * Please inform your server of any allergies or dietary restrictions. <br />
                        * An 18% gratuity will be added to parties of 6 or more.
                    </p>
                    <button className="px-8 py-3 border border-gold text-gold hover:bg-gold hover:text-black transition-all duration-300 font-montserrat uppercase tracking-widest text-xs">
                        Download PDF Menu
                    </button>
                </div>
            </div>
        </main>
    );
}
