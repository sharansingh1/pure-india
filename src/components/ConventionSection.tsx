"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Users, GlassWater } from "lucide-react";
import Link from "next/link";

const highlights = [
  {
    icon: <MapPin className="w-6 h-6 text-gold" />,
    title: "Close to the Strip",
    description: "Located just minutes away from major convention centers and the airport.",
  },
  {
    icon: <Users className="w-6 h-6 text-gold" />,
    title: "Group Accommodations",
    description: "Spacious seating and a large banquet hall perfect for team dinners and events.",
  },
  {
    icon: <GlassWater className="w-6 h-6 text-gold" />,
    title: "Premium Bar",
    description: "Relax after a long day on the floor with our craft cocktails and extensive spirits.",
  },
  {
    icon: <Briefcase className="w-6 h-6 text-gold" />,
    title: "Business Ready",
    description: "Fast service, free Wi-Fi, and a sophisticated atmosphere for meetings.",
  },
];

export default function ConventionSection() {
    return (
        <section className="relative py-24 bg-zinc-950 overflow-hidden border-t border-white/5">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-900/10 rounded-full blur-[100px] translate-y-1/2 translate-x-1/2" />
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 max-w-7xl mx-auto">
                    {/* Text Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-6 group hover:bg-gold/20 transition-colors">
                                <Briefcase className="w-4 h-4 text-gold group-hover:scale-110 transition-transform" />
                                <span className="text-gold text-xs font-bold tracking-[0.2em] uppercase">Special Welcome</span>
                            </div>
                            
                            <h2 className="font-cinzel text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                                Welcome Las Vegas <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-400 to-amber-600 italic">
                                    Convention Attendees
                                </span>
                            </h2>
                            
                            <p className="text-gray-400 font-montserrat text-lg mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                Elevate your convention experience with authentic Indian fine dining. Whether you're hosting a client dinner, celebrating with your team, or just unwinding after a long day on the show floor, Pure Indian Cuisine offers the perfect premium setting.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                                <Link href="/contact" className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-gold to-amber-600 text-black font-bold uppercase tracking-widest rounded-sm hover:from-white hover:to-gray-200 transition-all duration-300 text-center text-sm shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)]">
                                    Book a Table / Event
                                </Link>
                                <Link href="/menu" className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white/20 text-white font-bold uppercase tracking-widest rounded-sm hover:border-gold hover:text-gold transition-all duration-300 text-center text-sm">
                                    View Menu
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                    {/* Features Grid */}
                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                        {highlights.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-black/40 backdrop-blur-sm border border-white/5 p-6 rounded-2xl hover:border-gold/30 hover:bg-zinc-900/60 transition-all duration-300 group shadow-lg"
                            >
                                <div className="mb-5 bg-zinc-900/80 w-12 h-12 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-gold/10 transition-all duration-300 border border-white/5 group-hover:border-gold/20">
                                    {item.icon}
                                </div>
                                <h3 className="text-white font-cinzel text-xl font-bold mb-3 group-hover:text-gold transition-colors">{item.title}</h3>
                                <p className="text-gray-400 font-montserrat text-sm leading-relaxed">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
