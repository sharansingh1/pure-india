"use client";

import { MapPin, Clock, Phone } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";

export default function InfoSection() {
    return (
        <section className="py-32 bg-[#050505] text-white relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
            <div className="absolute -left-20 top-40 w-96 h-96 bg-red-deep/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-20 items-center relative z-10">
                <div className="space-y-10">
                    <SectionHeading
                        title="Our Story"
                        subtitle="A Culinary Journey"
                        centered={false}
                    />

                    <div className="prose prose-invert max-w-none">
                        <p className="text-gray-400 leading-loose text-lg font-light font-montserrat">
                            Nestled in the vibrant heart of <span className="text-gold">Las Vegas</span>, Pure India brings the authentic,
                            soul-stirring flavors of the Indian subcontinent to your table. We blend
                            traditional recipes with modern culinary artistry to create an unforgettable
                            dining experience that ignites the senses.
                        </p>
                        <p className="text-gray-400 leading-loose text-lg font-light font-montserrat mt-6">
                            Every dish is a masterpiece, crafted with spices flown in directly from India
                            and locally sourced premium ingredients.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-gold/10">
                        <div className="flex items-start space-x-4 group">
                            <div className="p-4 bg-card-bg border border-gold/20 rounded-sm text-gold group-hover:bg-gold group-hover:text-black transition-all duration-500">
                                <Clock size={24} />
                            </div>
                            <div>
                                <h3 className="font-cinzel text-xl font-bold mb-2 text-white group-hover:text-gold transition-colors">Opening Hours</h3>
                                <p className="text-gray-400 text-sm font-montserrat">Mon-Sun: 11am - 11pm</p>
                                <p className="text-gray-400 text-sm font-montserrat">Happy Hour: 4pm - 7pm</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4 group">
                            <div className="p-4 bg-card-bg border border-gold/20 rounded-sm text-gold group-hover:bg-gold group-hover:text-black transition-all duration-500">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="font-cinzel text-xl font-bold mb-2 text-white group-hover:text-gold transition-colors">Location</h3>
                                <p className="text-gray-400 text-sm font-montserrat">3799 S Las Vegas Blvd</p>
                                <p className="text-gray-400 text-sm font-montserrat">Las Vegas, NV 89109</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative h-[600px] w-full perspective-[1000px] group">
                    {/* Image Container with 3D effect */}
                    <motion.div
                        className="relative h-full w-full bg-card-bg border border-gold/10 overflow-hidden transform transition-transform duration-700 group-hover:rotate-y-2"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        {/* Placeholder for an interior shot */}
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black">
                            <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                        </div>

                        {/* Overlay Text */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 group-hover:bg-black/20 transition-colors duration-500">
                            <div className="border border-gold/30 p-8 md:p-12 backdrop-blur-sm">
                                <span className="font-cinzel text-4xl text-gold/80 uppercase tracking-widest">Interior View</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Decorative Frame behind */}
                    <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-gold/20 -z-10" />
                </div>
            </div>
        </section>
    );
}
