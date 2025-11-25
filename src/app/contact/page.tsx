"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 bg-black text-white">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-20">
                    <h1 className="font-cinzel text-5xl md:text-7xl text-white font-bold mb-4">Contact Us</h1>
                    <p className="text-gold font-montserrat tracking-[0.3em] uppercase text-sm">Get In Touch</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-12"
                    >
                        <div>
                            <h2 className="font-cinzel text-3xl text-gold-gradient mb-8">Information</h2>
                            <div className="space-y-8">
                                <div className="flex items-start gap-6">
                                    <div className="p-4 border border-gold/20 rounded-sm text-gold">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-cinzel text-xl text-white mb-2">Address</h3>
                                        <p className="text-gray-400 font-montserrat leading-relaxed">
                                            3799 S Las Vegas Blvd<br />
                                            Las Vegas, NV 89109
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6">
                                    <div className="p-4 border border-gold/20 rounded-sm text-gold">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-cinzel text-xl text-white mb-2">Phone</h3>
                                        <p className="text-gray-400 font-montserrat">
                                            +1 (702) 555-0123
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6">
                                    <div className="p-4 border border-gold/20 rounded-sm text-gold">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-cinzel text-xl text-white mb-2">Email</h3>
                                        <p className="text-gray-400 font-montserrat">
                                            reservations@pureindia.com
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="font-cinzel text-3xl text-gold-gradient mb-8">Hours</h2>
                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                    <h4 className="font-montserrat font-bold text-white mb-2">Dinner</h4>
                                    <p className="text-gray-400 text-sm font-montserrat">Daily: 5pm - 11pm</p>
                                </div>
                                <div>
                                    <h4 className="font-montserrat font-bold text-white mb-2">Happy Hour</h4>
                                    <p className="text-gray-400 text-sm font-montserrat">Daily: 4pm - 6pm</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Map / Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="h-full min-h-[500px] bg-[#111] border border-gold/10 relative overflow-hidden group"
                    >
                        {/* Placeholder for Map */}
                        <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
                            <span className="font-cinzel text-gold/20 text-2xl uppercase tracking-widest">Map Integration</span>
                        </div>
                        <div className="absolute inset-0 border-2 border-gold/5 pointer-events-none m-4" />
                    </motion.div>
                </div>
            </div>
        </main>
    );
}
