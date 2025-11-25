"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { menuItems } from "@/data/menu";

export default function MenuPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 bg-black text-white">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-20">
                    <h1 className="font-cinzel text-5xl md:text-7xl text-white font-bold mb-4">Our Menu</h1>
                    <p className="text-gold font-montserrat tracking-[0.3em] uppercase text-sm">Experience Authentic Flavors</p>
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
                            <h2 className="font-cinzel text-3xl md:text-4xl text-gold-gradient">{category.category}</h2>
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
