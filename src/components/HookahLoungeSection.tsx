"use client";

import { motion } from "framer-motion";
import { Moon, Wind, Clock, Coffee } from "lucide-react";
import Image from "next/image";

export default function HookahLoungeSection() {
    return (
        <section className="py-24 bg-black relative overflow-hidden" id="hookah-section">
            {/* Dark Midnight Background */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1542156822-6924d1a71aba?q=80&w=2000&auto=format&fit=crop"
                    alt="Night Atmosphere"
                    fill
                    className="object-cover opacity-20 grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-gold font-montserrat tracking-[0.4em] uppercase text-xs mb-4 block">Late Night Escape</span>
                        <h2 className="font-cinzel text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6">
                            The Royal <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">Hookah Lounge</span>
                        </h2>
                        <p className="text-gray-400 font-montserrat text-lg leading-relaxed">
                            Looking for a peaceful sanctuary amidst the Vegas energy? Our exclusive hookah lounge offers a tranquil atmosphere to unwind, connect, and enjoy premium flavors in a serene setting.
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Visual Aspect */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden border border-white/5"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1621360810486-5f40391d798f?q=80&w=1000&auto=format&fit=crop"
                            alt="Hookah Lounge Atmosphere"
                            fill
                            className="object-cover opacity-60 hover:scale-105 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                            <div className="space-y-2">
                                <h3 className="font-cinzel text-2xl text-white">Tranquil Vibes Only</h3>
                                <p className="text-gray-400 text-sm font-montserrat">A peaceful space designed for relaxation and conversation.</p>
                            </div>
                        </div>

                        {/* Interactive Sparkle Elements */}
                        <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full blur-[2px] animate-pulse" />
                        <div className="absolute bottom-20 right-20 w-3 h-3 bg-purple-500 rounded-full blur-[3px] animate-pulse [animation-delay:1s]" />
                    </motion.div>

                    {/* Features and Hours */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
                            <div className="flex items-center gap-6 mb-8">
                                <div className="p-4 bg-purple-500/20 text-purple-400 rounded-full">
                                    <Clock size={32} />
                                </div>
                                <div>
                                    <h4 className="font-cinzel text-xl text-white font-bold">Lounge Hours</h4>
                                    <p className="text-gray-400 font-montserrat">5:00 PM — 2:00 AM Daily</p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-white/5 text-gold rounded-lg mt-1">
                                        <Wind size={20} />
                                    </div>
                                    <div>
                                        <h5 className="text-white font-bold mb-1">Premium Shisha</h5>
                                        <p className="text-gray-400 text-sm">Large selection of premium, long-lasting flavors curated for connoisseurs.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-white/5 text-gold rounded-lg mt-1">
                                        <Coffee size={20} />
                                    </div>
                                    <div>
                                        <h5 className="text-white font-bold mb-1">Specialty Beverages</h5>
                                        <p className="text-gray-400 text-sm">Enjoy authentic Masala Chai, Turkish coffee, or signature refreshments.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-white/5 text-gold rounded-lg mt-1">
                                        <Moon size={20} />
                                    </div>
                                    <div>
                                        <h5 className="text-white font-bold mb-1">Comfortable Seating</h5>
                                        <p className="text-gray-400 text-sm">Plush, low-profile seating designed for long, comfortable sessions.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 p-4 border border-gold/20 rounded-xl bg-gold/5">
                            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gold/10 rounded-full text-gold">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                </svg>
                            </div>
                            <p className="text-xs text-gray-300 font-montserrat leading-relaxed">
                                <strong className="text-gold uppercase tracking-widest block mb-1">Age Requirement</strong>
                                Must be 21+ with valid ID to enter the lounge area. Professional service and peaceful vibes guaranteed.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
