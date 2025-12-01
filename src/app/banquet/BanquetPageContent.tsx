"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { Phone, Music, Wifi, Mic2, Car, Palette, Users } from "lucide-react";

export default function BanquetPageContent() {
    return (
        <main className="min-h-screen pt-24 pb-20 bg-black text-white overflow-hidden">
            {/* Header */}
            <div className="relative h-[50vh] w-full mb-20 flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/banquet-hall.png"
                        alt="Banquet Hall Background"
                        fill
                        className="object-cover opacity-50"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
                </div>
                <div className="relative z-10 text-center">
                    <h1 className="font-cinzel text-5xl md:text-7xl text-gold-gradient font-bold mb-4">The Royal Banquet</h1>
                    <p className="text-gray-400 font-montserrat tracking-widest uppercase text-sm">Where Memories Are Made</p>
                </div>
            </div>

            <div className="container mx-auto px-4">
                
                {/* Visual Showcase - "A Glimpse Inside" */}
                <section className="mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <span className="text-gold font-montserrat tracking-[0.2em] text-xs uppercase">The Venue</span>
                        <h2 className="font-cinzel text-3xl md:text-4xl text-white mt-2">Experience The Elegance</h2>
                    </motion.div>

                    {/* Masonry Grid Layout */}
                    <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 h-[600px] md:h-[800px]">
                        {/* Large Feature Image */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="col-span-2 row-span-2 relative border border-white/10 group overflow-hidden rounded-sm"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                            <Image 
                                src="/images/restaurant-interior.png" 
                                alt="Grand Ballroom Wide" 
                                fill 
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute bottom-8 left-8 z-20">
                                <p className="font-cinzel text-2xl text-white tracking-wide">Grand Ballroom</p>
                            </div>
                        </motion.div>

                        {/* Top Right Image 1 */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="relative border border-white/10 group overflow-hidden rounded-sm"
                        >
                            <Image 
                                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=800&auto=format&fit=crop" 
                                alt="Table Setting Detail" 
                                fill 
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </motion.div>

                        {/* Top Right Image 2 */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="relative border border-white/10 group overflow-hidden rounded-sm"
                        >
                            <Image 
                                src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800&auto=format&fit=crop" 
                                alt="Party Atmosphere" 
                                fill 
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </motion.div>

                        {/* Bottom Right Wide Image */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="col-span-2 relative border border-white/10 group overflow-hidden rounded-sm"
                        >
                            <Image 
                                src="https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=800&auto=format&fit=crop" 
                                alt="Celebration Moments" 
                                fill 
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                             <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                        </motion.div>
                    </div>
                    
                    {/* Secondary Row - Smaller Details */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 h-[200px] md:h-[250px]">
                         <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="relative border border-white/10 group overflow-hidden rounded-sm"
                        >
                            <Image 
                                src="https://images.unsplash.com/photo-1505932794465-14a71feb2929?q=80&w=800&auto=format&fit=crop" 
                                alt="Lighting Detail" 
                                fill 
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </motion.div>
                         <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="relative border border-white/10 group overflow-hidden rounded-sm"
                        >
                            <Image 
                                src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop" 
                                alt="Events" 
                                fill 
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="col-span-2 relative border border-white/10 bg-zinc-900 flex items-center justify-center group overflow-hidden rounded-sm cursor-pointer"
                        >
                            <div className="text-center z-10">
                                <span className="block font-cinzel text-2xl text-gold mb-2">View Full Gallery</span>
                                <span className="text-xs font-montserrat uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors">See All 40+ Photos</span>
                            </div>
                             <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                        </motion.div>
                    </div>
                </section>

                {/* Introduction */}
                <section className="grid md:grid-cols-2 gap-16 items-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <SectionHeading title="A Canvas for Your Celebration" subtitle="Host with Distinction" centered={false} />
                        <div className="prose prose-invert max-w-none font-montserrat text-gray-300 leading-loose">
                            <p className="mb-6">
                                Located just minutes from the Las Vegas Strip, our banquet hall is a hidden gem designed for those who seek 
                                sophistication without compromise. Whether you envision a lavish traditional wedding or a sleek modern corporate gala, 
                                our versatile space adapts to your dream.
                            </p>
                            <p>
                                We provide more than just a room; we provide an experience. From the moment your guests step into our 
                                foyer, they are enveloped in an atmosphere of warmth and luxury, setting the stage for an unforgettable event.
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                         initial={{ opacity: 0, scale: 0.9 }}
                         whileInView={{ opacity: 1, scale: 1 }}
                         viewport={{ once: true }}
                         className="relative p-8 border border-gold/20 bg-white/5"
                    >
                        <div className="grid grid-cols-2 gap-4 text-center">
                            <div className="p-4 bg-black/40">
                                <div className="font-cinzel text-3xl text-gold mb-1">500</div>
                                <div className="text-xs text-gray-400 uppercase tracking-widest">Guest Capacity</div>
                            </div>
                            <div className="p-4 bg-black/40">
                                <div className="font-cinzel text-3xl text-gold mb-1">10000</div>
                                <div className="text-xs text-gray-400 uppercase tracking-widest">Square Feet</div>
                            </div>
                            <div className="p-4 bg-black/40 col-span-2">
                                <div className="font-cinzel text-xl text-gold mb-1">Full Service</div>
                                <div className="text-xs text-gray-400 uppercase tracking-widest">Setup & Cleanup Included</div>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* Event Types - "Celebrations We Host" */}
                <section className="mb-32">
                    <SectionHeading title="Perfect For Every Occasion" subtitle="Versatility at its Finest" />
                    
                    <div className="grid md:grid-cols-3 gap-8 mt-12">
                        {[
                            { 
                                title: "Wedding Receptions", 
                                desc: "Create a fairytale beginning. Our hall is perfect for Sangeet nights, intimate ceremonies, and grand receptions with ample space for a dance floor.",
                                icon: <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold/20 to-transparent border border-gold/30 flex items-center justify-center mb-6 group-hover:border-gold transition-colors"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8 text-gold"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" /></svg></div>
                            },
                            { 
                                title: "Corporate Galas", 
                                desc: "Impress your stakeholders. Professional A/V capabilities and a dignified atmosphere make this ideal for awards nights, holiday parties, and seminars.",
                                icon: <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold/20 to-transparent border border-gold/30 flex items-center justify-center mb-6 group-hover:border-gold transition-colors"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8 text-gold"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg></div>
                            },
                            { 
                                title: "Social Milestones", 
                                desc: "From 1st birthdays to 50th anniversaries, graduation parties to baby showers. We turn personal milestones into community celebrations.",
                                icon: <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold/20 to-transparent border border-gold/30 flex items-center justify-center mb-6 group-hover:border-gold transition-colors"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8 text-gold"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" /></svg></div>
                            }
                        ].map((event, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2 }}
                                className="group relative p-8 bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 overflow-hidden"
                            >
                                {/* Hover Glow */}
                                <div className="absolute -right-20 -top-20 w-40 h-40 bg-gold/10 rounded-full blur-3xl group-hover:bg-gold/20 transition-colors duration-500" />
                                
                                {event.icon}
                                <h3 className="font-cinzel text-2xl text-white mb-4 group-hover:text-gold transition-colors">{event.title}</h3>
                                <p className="font-montserrat text-gray-400 text-sm leading-relaxed group-hover:text-gray-300">{event.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Amenities Grid */}
                <section className="mb-32 relative">
                    <div className="text-center mb-16">
                         <span className="text-gold font-montserrat tracking-[0.2em] text-xs uppercase">What's Included</span>
                        <h2 className="font-cinzel text-4xl text-white mt-2">Premium Amenities</h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { icon: <Mic2 className="w-6 h-6" />, label: "Premium Sound", detail: "High-Fidelity Audio System" },
                            { icon: <div className="w-6 h-6 flex items-center justify-center font-serif text-lg">🍸</div>, label: "Full Bar", detail: "Fully Stocked & Staffed" },
                            { icon: <Users className="w-6 h-6" />, label: "Grand Stage", detail: "Elevated Platform" },
                            { icon: <Palette className="w-6 h-6" />, label: "Mood Lighting", detail: "Customizable LED Colors" },
                            { icon: <Car className="w-6 h-6" />, label: "Ample Parking", detail: "Valet Options Available" },
                            { icon: <Music className="w-6 h-6" />, label: "Dance Floor", detail: "Spacious Wooden Floor" },
                            { icon: <div className="w-6 h-6 flex items-center justify-center font-serif text-lg">🍽️</div>, label: "Tables & Seating", detail: "Flexible Arrangements" },
                            { icon: <div className="w-6 h-6 flex items-center justify-center font-serif text-lg">✨</div>, label: "Cleanup Team", detail: "Full Service Included" },
                        ].map((item, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group relative bg-zinc-900/50 border border-white/5 p-6 overflow-hidden hover:border-gold/30 transition-colors duration-500 rounded-sm"
                            >
                                 <div className="relative z-10 flex flex-col h-full">
                                     <div className="w-12 h-12 rounded-full bg-black border border-gold/20 flex items-center justify-center text-gold mb-4 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                                         {item.icon}
                                     </div>
                                     <h3 className="font-cinzel text-lg text-white mb-1 group-hover:text-gold transition-colors">{item.label}</h3>
                                    <p className="font-montserrat text-xs text-gray-500 group-hover:text-gray-400 transition-colors">{item.detail}</p>
                                </div>
                                
                                {/* Hover Border Gradient */}
                                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Final Call to Action */}
                <section className="text-center py-20">
                    <h2 className="font-cinzel text-4xl md:text-5xl text-white mb-6">Reserve Your Date</h2>
                    <p className="text-gray-400 font-montserrat mb-10 max-w-2xl mx-auto text-lg">
                        Dates fill up quickly. Contact our events team today to schedule a private tour of the hall.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <a 
                            href="tel:+17028975555" 
                            className="group relative px-10 py-5 bg-gold overflow-hidden transition-all duration-500 hover:shadow-lg hover:shadow-gold/30"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <span className="relative z-10 font-montserrat font-bold tracking-[0.2em] uppercase text-black flex items-center gap-3">
                                <Phone size={20} /> (702) 897-5555
                            </span>
                        </a>
                        
                        <Link 
                            href="/contact" 
                            className="group px-10 py-5 border border-white/20 hover:border-gold transition-colors duration-300"
                        >
                            <span className="font-montserrat font-medium tracking-[0.2em] uppercase text-white group-hover:text-gold transition-colors">
                                Send Inquiry
                            </span>
                        </Link>
                    </div>
                </section>

            </div>
        </main>
    );
}

function Check({ className }: { className?: string }) {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className={className}
        >
            <polyline points="20 6 9 17 4 12" />
        </svg>
    )
}

