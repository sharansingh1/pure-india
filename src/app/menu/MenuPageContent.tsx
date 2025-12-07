"use client";

import { motion } from "framer-motion";

export default function MenuPageContent({ groupedMenu }: { groupedMenu: any[] }) {
    return (
        <main className="min-h-screen pt-32 pb-20 bg-black text-white">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <h1 className="font-cinzel text-5xl md:text-7xl text-white font-bold mb-6">Family Style Dinner</h1>
                    <p className="text-gold font-montserrat tracking-[0.3em] uppercase text-sm mb-8">Authentic Indian Cuisine • Shared Dining Experience</p>
                    
                    {/* Description Section */}
                    <div className="max-w-3xl mx-auto mb-12">
                        <div className="relative bg-gradient-to-b from-white/5 to-transparent border-t border-b border-gold/30 p-8 backdrop-blur-md shadow-[0_0_20px_rgba(212,175,55,0.1)]">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-black flex items-center justify-center border border-gold/50 rotate-45 shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                                <div className="w-6 h-6 border border-gold/30" />
                            </div>
                            
                            <p className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-amber-300 to-gold font-cinzel text-xl md:text-2xl leading-relaxed italic mb-6 pt-2 drop-shadow-sm font-bold">
                                "We are known for our Grand Family Portions"
                            </p>
                            <p className="text-gray-200 font-montserrat text-sm md:text-base leading-relaxed tracking-wide">
                                Come experience the true spirit of Indian hospitality with our signature Large Portion Dining. We love serving generous, family-style feasts that are made to be shared and enjoyed together. Forget about ordering individual plates. Our communal dining brings everyone closer and turns every meal into a royal celebration.
                            </p>
                            
                            <div className="mt-6 flex items-center justify-center gap-4">
                                <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-gold" />
                                <span className="text-gold text-xs uppercase tracking-[0.3em] font-bold glow-text">Dinner Only</span>
                                <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-gold" />
                            </div>
                        </div>
                    </div>

                    {/* Portion Sizes Cards */}
                    <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-16">
                        {/* Card 1 - Small Feast */}
                        <div className="relative group">
                            {/* Card Background with Gradient & Blur */}
                            <div className="relative p-6 border border-gold/30 bg-gradient-to-b from-white/5 to-transparent text-center rounded-sm backdrop-blur-sm group-hover:border-gold/60 group-hover:bg-white/10 transition-all duration-500 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                                {/* Decorative Corner Accents */}
                                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold/30 group-hover:border-gold transition-colors duration-500"></div>
                                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gold/30 group-hover:border-gold transition-colors duration-500"></div>

                                <h3 className="font-cinzel text-2xl text-gold mb-1 group-hover:text-white transition-colors duration-300">Large</h3>
                                <p className="font-montserrat text-gray-400 text-[10px] tracking-[0.2em] uppercase mb-4">Intimate Gatherings</p>
                                
                                <div className="flex items-center justify-center gap-3 mb-1">
                                    <div className="w-8 h-[1px] bg-gold/30"></div>
                                    <span className="font-cinzel text-3xl text-white font-bold">2-3</span>
                                    <div className="w-8 h-[1px] bg-gold/30"></div>
                                </div>
                                
                                <p className="text-gold/80 text-[10px] font-montserrat uppercase tracking-widest">People Served</p>
                            </div>
                        </div>
                        
                        {/* Card 2 - Grand Feast */}
                        <div className="relative group">
                            {/* Card Background with Gradient & Blur */}
                            <div className="relative p-6 border border-gold/30 bg-gradient-to-b from-white/5 to-transparent text-center rounded-sm backdrop-blur-sm group-hover:border-gold/60 group-hover:bg-white/10 transition-all duration-500 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                                {/* Decorative Corner Accents */}
                                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold/30 group-hover:border-gold transition-colors duration-500"></div>
                                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gold/30 group-hover:border-gold transition-colors duration-500"></div>

                                <h3 className="font-cinzel text-2xl text-gold mb-1 group-hover:text-white transition-colors duration-300">Extra Large</h3>
                                <p className="font-montserrat text-gray-400 text-[10px] tracking-[0.2em] uppercase mb-4">Large Celebrations</p>
                                
                                <div className="flex items-center justify-center gap-3 mb-1">
                                    <div className="w-8 h-[1px] bg-gold/30"></div>
                                    <span className="font-cinzel text-3xl text-white font-bold">5-6</span>
                                    <div className="w-8 h-[1px] bg-gold/30"></div>
                                </div>
                                
                                <p className="text-gold/80 text-[10px] font-montserrat uppercase tracking-widest">People Served</p>
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
                        className="mb-20"
                    >
                        <div className="flex items-center gap-4 mb-10 justify-center">
                            <div className="h-[1px] w-12 bg-gold/30" />
                            <div className="text-center">
                                <h2 className="font-cinzel text-3xl md:text-4xl text-gold-gradient">{category.category === "GRILLES" || category.category === "GRILLED" ? "GRILLES" : category.category}</h2>
                            </div>
                            <div className="h-[1px] w-12 bg-gold/30" />
                        </div>

                        <div className="grid gap-10">
                            {/* Price Size Indicator - Only show if items have two prices, positioned above prices */}
                            {category.items.some((item: any) => item.price && item.price.includes('/')) && (
                                <div className="flex justify-end mb-2">
                                    <p className="font-montserrat text-xs text-gold/80 uppercase tracking-wider">
                                        <span className="text-gold">Large</span> / <span className="text-gold">Extra Large</span>
                                    </p>
                                </div>
                            )}
                            {category.items.map((item: any, idx: number) => (
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
