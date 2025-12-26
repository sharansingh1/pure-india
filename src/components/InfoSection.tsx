"use client";

import { MapPin, Clock } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function InfoSection() {
    return (
        <>
            {/* Essential Info / Visit Section - Now First */}
            <section className="py-24 bg-black text-white relative overflow-hidden" id="visit-info">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>

                {/* Decorative Elements */}
                <div className="absolute -left-20 top-40 w-96 h-96 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute right-0 bottom-0 w-full h-full opacity-5 pointer-events-none">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold/20 via-transparent to-transparent" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">

                        {/* Left Column: Essential Details */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="space-y-12"
                        >
                            <div>
                                <SectionHeading
                                    title="Plan Your Visit"
                                    subtitle="What You Need to Know"
                                    centered={false}
                                />

                                <div className="mt-8 space-y-8">
                                    {/* Location Card */}
                                    <div className="flex items-start space-x-6 group p-6 bg-card-bg/50 border border-gold/10 hover:border-gold/30 rounded-lg transition-all duration-300">
                                        <div className="p-3 bg-black border border-gold/20 rounded-full text-gold shrink-0">
                                            <MapPin size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-cinzel text-xl font-bold mb-2 text-white">Location</h3>
                                            <p className="text-white font-montserrat font-medium text-lg leading-relaxed">
                                                1405 E Sunset Rd, <span className="text-gold font-bold">2nd Floor</span>
                                            </p>
                                            <p className="text-gray-400 font-montserrat text-sm mt-1">
                                                Las Vegas, NV 89119 • Elevator Available
                                            </p>
                                            <p className="text-gray-500 font-montserrat text-sm italic mt-2">
                                                *Ample free parking available
                                            </p>
                                        </div>
                                    </div>

                                    {/* Buffet Hours & Pricing Card */}
                                    <div className="flex items-start space-x-6 group p-6 bg-card-bg/50 border border-gold/10 hover:border-gold/30 rounded-lg transition-all duration-300">
                                        <div className="p-3 bg-black border border-gold/20 rounded-full text-gold shrink-0">
                                            <Clock size={24} />
                                        </div>
                                        <div className="w-full">
                                            <h3 className="font-cinzel text-xl font-bold mb-4 text-white">Buffet Hours & Pricing</h3>

                                            <div className="grid sm:grid-cols-2 gap-6">
                                                <div className="bg-black/40 p-4 rounded border-l-2 border-gold/50">
                                                    <h4 className="font-cinzel text-gold text-lg mb-1">Lunch</h4>
                                                    <p className="text-white font-bold font-montserrat">11:00 AM - 5:00 PM</p>
                                                    <p className="text-2xl text-gold font-bold font-montserrat mt-2">$17.99</p>
                                                </div>
                                                <div className="bg-black/40 p-4 rounded border-l-2 border-gold/50">
                                                    <h4 className="font-cinzel text-gold text-lg mb-1">Dinner</h4>
                                                    <p className="text-white font-bold font-montserrat">5:00 PM - 10:00 PM</p>
                                                    <p className="text-2xl text-gold font-bold font-montserrat mt-2">$23.99</p>
                                                </div>
                                            </div>
                                            <p className="text-gray-500 font-montserrat text-xs mt-4 italic">
                                                *Prices subject to change on holidays. Walk-ins always welcome.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Column: How It Works & Experience */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="space-y-8 bg-card-bg p-8 border border-gold/10 rounded-lg md:mt-12"
                        >
                            <h3 className="font-cinzel text-2xl text-gold mb-6 border-b border-gold/20 pb-4">
                                The Experience
                            </h3>

                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <h4 className="text-white font-bold font-montserrat uppercase tracking-wider text-sm flex items-center gap-2">
                                        <span className="w-2 h-2 bg-gold rounded-full"></span>
                                        How It Works
                                    </h4>
                                    <p className="text-gray-300 font-montserrat text-sm leading-relaxed pl-4 border-l border-gold/20">
                                        We are Las Vegas' premier <strong>All-You-Can-Eat Indian Buffet</strong>. Simply arrive and be seated by our host. You can head straight to the buffet stations to enjoy unlimited servings of our rotating selection.
                                    </p>
                                </div>

                                <div className="space-y-2">
                                    <h4 className="text-white font-bold font-montserrat uppercase tracking-wider text-sm flex items-center gap-2">
                                        <span className="w-2 h-2 bg-gold rounded-full"></span>
                                        What's Included
                                    </h4>
                                    <p className="text-gray-300 font-montserrat text-sm leading-relaxed pl-4 border-l border-gold/20">
                                        Your buffet price includes unlimited access to all buffet stations (Appetizers, Curries, Rice, Desserts). Fresh <strong>Naan</strong> is served directly to your table.
                                    </p>
                                </div>

                                <div className="space-y-2">
                                    <h4 className="text-white font-bold font-montserrat uppercase tracking-wider text-sm flex items-center gap-2">
                                        <span className="w-2 h-2 bg-gold rounded-full"></span>
                                        Special Requirements
                                    </h4>
                                    <p className="text-gray-300 font-montserrat text-sm leading-relaxed pl-4 border-l border-gold/20">
                                        We offer many <strong>Vegetarian</strong> options. All our meat is <strong>Halal</strong> certified. Please inform your server of any severe allergies. <strong>Drinks are not included</strong> in the buffet price.
                                    </p>
                                </div>

                                <div className="pt-6 mt-6 border-t border-gold/10">
                                    <Link
                                        href="/contact"
                                        className="w-full block text-center py-3 bg-gold/10 hover:bg-gold text-gold hover:text-black border border-gold transition-all duration-300 font-montserrat font-bold uppercase tracking-widest text-sm"
                                    >
                                        Contact & Directions
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Visual Highlights Section - Now Second */}
            <section className="py-24 bg-[#080808] text-white relative overflow-hidden text-center">
                <div className="container mx-auto px-4 relative z-10">
                    <SectionHeading
                        title="Experience The Luxury"
                        subtitle="More Than Just A Buffet"
                        centered={true}
                    />

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 text-left">
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
                                    Unlimited tandoori chicken, butter chicken, goat curry, and more.
                                </p>
                                <Link
                                    href="/buffet"
                                    className="inline-block font-montserrat text-xs tracking-widest uppercase text-gold hover:text-white transition-colors border-b border-gold/30 hover:border-white pb-1"
                                >
                                    View Menu
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
                                    Handcrafted cocktails, fine wines, and premium spirits.
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
                                    Host your weddings, birthdays, and corporate events.
                                </p>
                                <Link
                                    href="/contact"
                                    className="inline-block font-montserrat text-xs tracking-widest uppercase text-gold hover:text-white transition-colors border-b border-gold/30 hover:border-white pb-1"
                                >
                                    Book Event
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
                                    Dine watching planes land and take off against the Vegas skyline.
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
        </>
    );
}
