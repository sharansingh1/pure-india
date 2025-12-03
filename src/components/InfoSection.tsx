"use client";

import { MapPin, Clock } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function InfoSection() {
    return (
        <>
            {/* Highlights Section */}
            <section className="py-32 bg-[#050505] text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <SectionHeading
                        title="Experience Pure Indian Cuisine"
                        subtitle="What Makes Us Special"
                        centered={true}
                    />

                    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mt-16">
                        {/* Large Portion Dinner Card - New Specialty Highlight */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0 }}
                            viewport={{ once: true }}
                            className="group relative overflow-hidden bg-card-bg border border-gold/30 hover:border-gold/60 transition-all duration-500 shadow-[0_0_30px_rgba(212,175,55,0.05)]"
                        >
                            <div className="absolute top-2 right-2 z-10">
                                <span className="bg-gold text-black text-[10px] font-bold uppercase tracking-widest py-1 px-2 font-montserrat">New Specialty</span>
                            </div>
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src="/butterchickenlarge.jpg" 
                                    alt="Large Portion Family Dinner"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                            </div>
                            <div className="p-8">
                                <h3 className="font-cinzel text-2xl text-white mb-3 group-hover:text-gold transition-colors">Family Style Dinner</h3>
                                <p className="text-gray-400 font-montserrat text-sm leading-relaxed mb-6">
                                    Vegas' only large-format Indian dinner. Massive portions designed for sharing, bringing the family together over a royal feast.
                                </p>
                                <Link
                                    href="/menu"
                                    className="inline-block font-montserrat text-xs tracking-widest uppercase text-gold hover:text-white transition-colors border-b border-gold/30 hover:border-white pb-1"
                                >
                                    View Menu
                                </Link>
                            </div>
                        </motion.div>

                        {/* Royal Buffet Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="group relative overflow-hidden bg-card-bg border border-gold/10 hover:border-gold/30 transition-all duration-500"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src="/images/indian-buffet-food-real.png"
                                    alt="Royal Buffet"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                            </div>
                            <div className="p-8">
                                <h3 className="font-cinzel text-2xl text-white mb-3 group-hover:text-gold transition-colors">Royal Indian Buffet</h3>
                                <p className="text-gray-400 font-montserrat text-sm leading-relaxed mb-6">
                                    Indulge in Las Vegas's best all-you-can-eat Indian buffet. Featuring unlimited tandoori chicken, butter chicken, goat curry, and more. Lunch & Dinner daily.
                                </p>
                                <Link
                                    href="/buffet"
                                    className="inline-block font-montserrat text-xs tracking-widest uppercase text-gold hover:text-white transition-colors border-b border-gold/30 hover:border-white pb-1"
                                >
                                    View Buffet Menu
                                </Link>
                            </div>
                        </motion.div>

                        {/* Premium Bar Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="group relative overflow-hidden bg-card-bg border border-gold/10 hover:border-gold/30 transition-all duration-500"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1000&auto=format&fit=crop"
                                    alt="Premium Bar"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                            </div>
                            <div className="p-8">
                                <h3 className="font-cinzel text-2xl text-white mb-3 group-hover:text-gold transition-colors">Premium Bar</h3>
                                <p className="text-gray-400 font-montserrat text-sm leading-relaxed mb-6">
                                    Enjoy handcrafted cocktails, fine wines, and premium spirits in our sophisticated bar. Perfect for pre-dinner drinks or a relaxing evening.
                                </p>
                                <Link
                                    href="/contact"
                                    className="inline-block font-montserrat text-xs tracking-widest uppercase text-gold hover:text-white transition-colors border-b border-gold/30 hover:border-white pb-1"
                                >
                                    Explore Drinks
                                </Link>
                            </div>
                        </motion.div>

                        {/* Banquet Hall Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="group relative overflow-hidden bg-card-bg border border-gold/10 hover:border-gold/30 transition-all duration-500"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src="/images/banquet-hall.png"
                                    alt="Banquet Hall"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                            </div>
                            <div className="p-8">
                                <h3 className="font-cinzel text-2xl text-white mb-3 group-hover:text-gold transition-colors">Private Banquet Hall</h3>
                                <p className="text-gray-400 font-montserrat text-sm leading-relaxed mb-6">
                                    Host your special occasions in our elegant banquet hall. Perfect for weddings, birthdays, corporate events, and celebrations of all kinds.
                                </p>
                                <Link
                                    href="/contact"
                                    className="inline-block font-montserrat text-xs tracking-widest uppercase text-gold hover:text-white transition-colors border-b border-gold/30 hover:border-white pb-1"
                                >
                                    Book Your Event
                                </Link>
                            </div>
                        </motion.div>

                        {/* Runway Views Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            viewport={{ once: true }}
                            className="group relative overflow-hidden bg-card-bg border border-gold/10 hover:border-gold/30 transition-all duration-500"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src="/view-highlight.png"
                                    alt="Runway Views"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                            </div>
                            <div className="p-8">
                                <h3 className="font-cinzel text-2xl text-white mb-3 group-hover:text-gold transition-colors">Runway Views</h3>
                                <p className="text-gray-400 font-montserrat text-sm leading-relaxed mb-6">
                                    Dine with a spectacular view of the airport, watching planes land and take off against the Vegas skyline.
                                </p>
                                <Link
                                    href="/gallery"
                                    className="inline-block font-montserrat text-xs tracking-widest uppercase text-gold hover:text-white transition-colors border-b border-gold/30 hover:border-white pb-1"
                                >
                                    See Gallery
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Hours, Location & Interior Section */}
            <section className="py-32 bg-black text-white relative overflow-hidden">
                <div className="absolute -right-20 top-40 w-96 h-96 bg-red-deep/10 rounded-full blur-[100px] pointer-events-none" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        {/* Hours & Location */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="space-y-12"
                        >
                            <div>
                                <h2 className="font-cinzel text-4xl text-gold-gradient mb-12">Visit Us</h2>

                                <div className="space-y-8">
                                    <div className="flex items-start space-x-6 group">
                                        <div className="p-4 bg-card-bg border border-gold/20 rounded-sm text-gold group-hover:bg-gold group-hover:text-black transition-all duration-500 shrink-0">
                                            <Clock size={28} />
                                        </div>
                                        <div>
                                            <h3 className="font-cinzel text-2xl font-bold mb-3 text-white group-hover:text-gold transition-colors">Opening Hours</h3>
                                            <p className="text-gray-400 font-montserrat mb-1">Monday - Sunday</p>
                                            <p className="text-white font-montserrat font-medium text-lg">11:00 AM - 10:00 PM</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-6 group">
                                        <div className="p-4 bg-card-bg border border-gold/20 rounded-sm text-gold group-hover:bg-gold group-hover:text-black transition-all duration-500 shrink-0">
                                            <MapPin size={28} />
                                        </div>
                                        <div>
                                            <h3 className="font-cinzel text-2xl font-bold mb-3 text-white group-hover:text-gold transition-colors">Location</h3>
                                            <p className="text-white font-montserrat font-medium text-lg">1405 E Sunset Rd</p>
                                            <p className="text-gray-400 font-montserrat">Las Vegas, NV 89119 • Next to Airport</p>
                                            <Link
                                                href="/contact"
                                                className="inline-block mt-4 font-montserrat text-xs tracking-widest uppercase text-gold hover:text-white transition-colors border-b border-gold/30 hover:border-white pb-1"
                                            >
                                                Get Directions
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Interior Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="relative h-[600px] w-full group"
                        >
                            <div className="relative h-full w-full bg-card-bg border border-gold/10 overflow-hidden">
                                <Image
                                    src="/interior-highlight.png"
                                    alt="Pure Indian Cuisine Interior"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                                {/* Overlay Text */}
                                <div className="absolute bottom-0 left-0 right-0 p-8">
                                    <h3 className="font-cinzel text-3xl text-white mb-2">Our Ambiance</h3>
                                    <p className="text-gray-300 font-montserrat text-sm">Dark luxury meets authentic Indian hospitality</p>
                                </div>
                            </div>

                            {/* Decorative Frame */}
                            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-gold/20 -z-10" />
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
}
