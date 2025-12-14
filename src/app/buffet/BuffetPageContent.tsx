"use client";

import { motion } from "framer-motion";

export default function BuffetPageContent({ groupedBuffet }: { groupedBuffet: any[] }) {
    return (
        <main className="min-h-screen pt-32 pb-20 bg-black text-white">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-16">
                    <h1 className="font-cinzel text-5xl md:text-7xl text-white font-bold mb-6">Daily Buffet</h1>
                    <p className="text-gold font-montserrat tracking-[0.3em] uppercase text-sm mb-10">A Royal Feast</p>
                    
                    <div className="max-w-2xl mx-auto text-center mb-16 relative">
                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-gold/5 blur-2xl rounded-full opacity-20" />
                        
                        <div className="relative py-10 px-8 border-y-2 border-gold/30 bg-gradient-to-b from-white/10 to-transparent backdrop-blur-md shadow-[0_0_30px_rgba(212,175,55,0.1)]">
                            {/* Decorative Corner Flourishes */}
                            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-gold/50" />
                            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-gold/50" />
                            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-gold/50" />
                            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-gold/50" />
                            
                            {/* Central Diamond Accents */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-gold rotate-45 shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-gold rotate-45 shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
                            
                            <p className="font-cinzel text-lg md:text-xl leading-relaxed italic mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-gold-light to-white drop-shadow-sm">
                                "Our All-You-Can-Eat Buffet is a culinary journey through the rich flavors of India. 
                                From crispy appetizers to rich curries and aromatic biryanis, enjoy unlimited servings of our chef's daily selection."
                            </p>
                            
                            <div className="flex items-center justify-center gap-4 mt-8">
                                <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gold" />
                                <p className="text-gold font-montserrat text-[10px] uppercase tracking-[0.2em] font-bold glow-text">
                                    Daily Selection Varies
                                </p>
                                <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-gold" />
                            </div>
                        </div>
                         <p className="text-gray-500 font-montserrat text-[10px] mt-4 tracking-wide">
                             * The menu below represents our full rotation of dishes. Actual selection features a curated variety of these items.
                             Drinks are not included in the price.
                        </p>
                    </div>

                    {/* Buffet Pricing */}
                    <div className="flex flex-col md:flex-row justify-center gap-8 mb-20">
                        {/* Lunch Price Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative p-12 border border-gold/30 bg-gradient-to-b from-white/10 to-transparent text-center group hover:border-gold/60 hover:bg-white/15 transition-all duration-500 w-full max-w-md shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
                        >
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-50" />
                            
                            <h3 className="font-cinzel text-4xl text-white mb-3 drop-shadow-lg">Lunch Buffet</h3>
                            <p className="font-montserrat text-gold text-sm tracking-[0.2em] uppercase mb-8 font-medium">11:00 AM - 3:00 PM</p>
                            
                            <div className="font-cinzel text-transparent bg-clip-text bg-gradient-to-b from-gold via-amber-300 to-gold text-7xl font-bold mb-6 tracking-tight drop-shadow-lg">$17.99</div>
                            
                            {/* Decorative Corners */}
                            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold/30 group-hover:border-gold group-hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all duration-500" />
                            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gold/30 group-hover:border-gold group-hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all duration-500" />
                            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-gold/30 group-hover:border-gold group-hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all duration-500" />
                            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-gold/30 group-hover:border-gold group-hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all duration-500" />
                        </motion.div>

                        {/* Dinner Price Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative p-12 border border-gold/30 bg-gradient-to-b from-white/10 to-transparent text-center group hover:border-gold/60 hover:bg-white/15 transition-all duration-500 w-full max-w-md shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
                        >
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-50" />
                            
                            <h3 className="font-cinzel text-4xl text-white mb-3 drop-shadow-lg">Dinner Buffet</h3>
                            <p className="font-montserrat text-gold text-sm tracking-[0.2em] uppercase mb-8 font-medium">5:00 PM - 10:00 PM</p>
                            
                            <div className="font-cinzel text-transparent bg-clip-text bg-gradient-to-b from-gold via-amber-300 to-gold text-7xl font-bold mb-6 tracking-tight drop-shadow-lg">$23.99</div>
                            
                            {/* Decorative Corners */}
                            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold/30 group-hover:border-gold group-hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all duration-500" />
                            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gold/30 group-hover:border-gold group-hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all duration-500" />
                            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-gold/30 group-hover:border-gold group-hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all duration-500" />
                            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-gold/30 group-hover:border-gold group-hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all duration-500" />
                        </motion.div>
                    </div>
                </div>

                {groupedBuffet.map((category, index) => (
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
                            </div>
                            <div className="h-[1px] w-12 bg-gold/30" />
                        </div>

                        <div className="grid gap-10">
                            {category.items.map((item: any, idx: number) => (
                                <div key={idx} className="group relative">
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="font-cinzel text-xl font-bold text-white group-hover:text-gold transition-colors duration-300">
                                            {item.name}
                                        </h3>
                                        {/* Buffet items typically don't have individual prices listed if it's fixed price, 
                                            but we can show description */}
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
                         <br />
                        * Please inform your server of any allergies.
                    </p>
                </div>
            </div>
        </main>
    );
}
