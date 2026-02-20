"use client";

import { motion } from "framer-motion";
import { Star, Zap, Infinity, Wallet } from "lucide-react";

export default function MembershipSection() {
    return (
        <section className="py-24 bg-black relative overflow-hidden" id="membership-section">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] -translate-y-1/2" />
                <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Side: Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-bold tracking-widest uppercase mb-6">
                                <Star size={14} className="fill-gold" /> Exclusive Offer
                            </div>

                            <h2 className="font-cinzel text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6 leading-tight">
                                Join The <span className="text-gold-gradient">Royal Buffet Club</span>
                            </h2>

                            <p className="text-gray-300 font-montserrat text-lg mb-8 leading-relaxed">
                                Love our buffet? Become a member and save big. Our Royal Buffet Club is designed for our most loyal guests who want to enjoy authentic Indian flavors regularly at an unbeatable value.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-6 mb-10">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gold shrink-0">
                                        <Infinity size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold mb-1">4 Buffets Monthly</h4>
                                        <p className="text-gray-400 text-sm">Valid anytime during opening hours.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gold shrink-0">
                                        <Zap size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold mb-1">Priority Seating</h4>
                                        <p className="text-gray-400 text-sm">Skip the wait during peak hours.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Side: The "Pop" Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            {/* Card Glow */}
                            <div className="absolute inset-0 bg-gold/20 blur-[60px] rounded-3xl" />

                            <div className="relative bg-gradient-to-br from-zinc-900 to-black border-2 border-gold/50 rounded-3xl p-10 shadow-2xl overflow-hidden group">
                                {/* Decorative Mandala Background */}
                                <div className="absolute -right-20 -bottom-20 opacity-10 group-hover:opacity-20 transition-opacity duration-700">
                                    <svg width="300" height="300" viewBox="0 0 100 100">
                                        <circle cx="50" cy="50" r="45" fill="none" stroke="gold" strokeWidth="0.5" />
                                        <circle cx="50" cy="50" r="35" fill="none" stroke="gold" strokeWidth="0.5" />
                                        {[...Array(24)].map((_, i) => (
                                            <line
                                                key={i}
                                                x1="50" y1="5" x2="50" y2="15"
                                                stroke="gold" strokeWidth="1"
                                                transform={`rotate(${i * 15} 50 50)`}
                                            />
                                        ))}
                                    </svg>
                                </div>

                                <div className="relative z-10 text-center">
                                    <h3 className="font-cinzel text-2xl text-gold mb-2 tracking-widest uppercase">Monthly Membership</h3>
                                    <div className="flex items-center justify-center gap-1 mb-6">
                                        <span className="text-white text-5xl md:text-6xl font-cinzel font-black">$55</span>
                                        <div className="text-left">
                                            <div className="text-gold font-bold leading-none">/MONTH</div>
                                            <div className="text-gray-500 text-xs tracking-tighter uppercase font-montserrat mt-1">Billed Monthly</div>
                                        </div>
                                    </div>

                                    <div className="w-full h-[1px] bg-gold/20 mb-8" />

                                    <ul className="text-left space-y-4 mb-10">
                                        {[
                                            "4 Royal Buffets per month",
                                            "A savings of over $40!",
                                            "Exclusive event invitations",
                                            "10% off for any additional guests",
                                            "Cancel anytime"
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-center gap-3 text-gray-300 font-montserrat">
                                                <div className="w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center text-gold">
                                                    <Wallet size={12} />
                                                </div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>

                                    <button className="w-full py-5 bg-gold text-black font-black uppercase tracking-[0.2em] shadow-[0_10px_20px_rgba(212,175,55,0.3)] hover:shadow-[0_15px_30px_rgba(212,175,55,0.5)] hover:bg-white hover:scale-[1.02] transition-all duration-300 rounded-xl">
                                        Get Membership Now
                                    </button>

                                    <p className="mt-6 text-gray-500 text-[10px] uppercase tracking-widest font-bold">
                                        Experience the taste of royalty every week
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
