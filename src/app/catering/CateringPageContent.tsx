"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { Phone, Check, Star, ChefHat, Truck } from "lucide-react";

export default function CateringPageContent() {
    return (
        <main className="min-h-screen pt-24 pb-20 bg-black text-white overflow-hidden">
            {/* Hero Section */}
            <div className="relative h-[60vh] w-full mb-20 flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/indian-buffet-food-real.png"
                        alt="Catering Buffet Spread"
                        fill
                        className="object-cover opacity-60"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black" />
                </div>
                <div className="relative z-10 text-center max-w-4xl px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-gold font-montserrat tracking-[0.3em] uppercase text-sm mb-4 block">Bring the Flavor Home</span>
                        <h1 className="font-cinzel text-5xl md:text-7xl text-white font-bold mb-6 leading-tight">
                            Exquisite Indian <span className="text-gold-gradient">Catering</span>
                        </h1>
                        <p className="text-gray-300 font-montserrat text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
                            Elevate your event with the authentic taste of India. From intimate gatherings to grand weddings, we bring the royal feast to you.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <a 
                                href="tel:+17025550123" 
                                className="px-8 py-4 bg-gold text-black font-bold uppercase tracking-widest hover:bg-white transition-colors duration-300 flex items-center gap-3"
                            >
                                <Phone size={20} /> Call to Cater
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="container mx-auto px-4">
                
                {/* Why Choose Us Grid */}
                <section className="mb-32">
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { 
                                icon: <ChefHat className="w-10 h-10" />, 
                                title: "Master Chefs", 
                                desc: "Culinary experts with decades of experience in authentic regional Indian cuisine." 
                            },
                            { 
                                icon: <Star className="w-10 h-10" />, 
                                title: "Premium Quality", 
                                desc: "We use only the freshest ingredients and hand-ground spices for unmatched flavor." 
                            },
                            { 
                                icon: <Truck className="w-10 h-10" />, 
                                title: "Seamless Service", 
                                desc: "Professional delivery, setup, and service staff available to ensure a flawless event." 
                            }
                        ].map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2 }}
                                className="bg-zinc-900/50 border border-white/10 p-8 text-center group hover:border-gold/40 transition-all duration-500"
                            >
                                <div className="w-20 h-20 rounded-full bg-black border border-gold/20 flex items-center justify-center text-gold mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {feature.icon}
                                </div>
                                <h3 className="font-cinzel text-xl text-white mb-4 group-hover:text-gold transition-colors">{feature.title}</h3>
                                <p className="font-montserrat text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Catering Packages */}
                <section className="mb-32" id="packages">
                    <SectionHeading title="Catering Packages" subtitle="Curated Menus" />
                    
                    <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-7xl mx-auto">
                        {/* Silver Package */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="border border-white/10 p-8 relative bg-black hover:border-gold/30 transition-colors group"
                        >
                            <h3 className="font-cinzel text-2xl text-white mb-2 group-hover:text-gold transition-colors">Silver Package</h3>
                            <div className="text-gold font-montserrat font-bold text-3xl mb-6">$25 <span className="text-sm font-normal text-gray-500">/ person</span></div>
                            <p className="text-gray-500 text-xs mb-8 font-montserrat uppercase tracking-wider">Perfect for Luncheons</p>
                            
                            <div className="w-full h-[1px] bg-white/10 mb-8" />
                            
                            <ul className="space-y-4 text-gray-400 font-montserrat text-sm mb-10">
                                <li className="flex gap-3"><Check className="text-gold w-4 h-4 shrink-0" /> 2 Appetizers</li>
                                <li className="flex gap-3"><Check className="text-gold w-4 h-4 shrink-0" /> 2 Main Curries (Veg/Non-Veg)</li>
                                <li className="flex gap-3"><Check className="text-gold w-4 h-4 shrink-0" /> Basmati Rice</li>
                                <li className="flex gap-3"><Check className="text-gold w-4 h-4 shrink-0" /> Naan Bread</li>
                                <li className="flex gap-3"><Check className="text-gold w-4 h-4 shrink-0" /> 1 Dessert</li>
                                <li className="flex gap-3"><Check className="text-gold w-4 h-4 shrink-0" /> Salad & Raita</li>
                            </ul>
                        </motion.div>

                        {/* Gold Package */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="border border-gold p-8 relative bg-zinc-900 transform md:-translate-y-4 shadow-2xl shadow-black"
                        >
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold text-black text-xs font-bold px-6 py-2 uppercase tracking-widest shadow-lg">Most Popular</div>
                            <h3 className="font-cinzel text-2xl text-white mb-2">Gold Package</h3>
                            <div className="text-gold font-montserrat font-bold text-3xl mb-6">$35 <span className="text-sm font-normal text-gray-500">/ person</span></div>
                            <p className="text-gray-500 text-xs mb-8 font-montserrat uppercase tracking-wider">Ideal for Dinners</p>
                            
                            <div className="w-full h-[1px] bg-gold/20 mb-8" />
                            
                            <ul className="space-y-4 text-gray-300 font-montserrat text-sm mb-10">
                                <li className="flex gap-3"><Check className="text-gold w-4 h-4 shrink-0" /> 3 Appetizers</li>
                                <li className="flex gap-3"><Check className="text-gold w-4 h-4 shrink-0" /> 3 Main Curries (Premium)</li>
                                <li className="flex gap-3"><Check className="text-gold w-4 h-4 shrink-0" /> Chicken Biryani</li>
                                <li className="flex gap-3"><Check className="text-gold w-4 h-4 shrink-0" /> Assorted Breads</li>
                                <li className="flex gap-3"><Check className="text-gold w-4 h-4 shrink-0" /> 2 Desserts</li>
                                <li className="flex gap-3"><Check className="text-gold w-4 h-4 shrink-0" /> Premium Salad Bar</li>
                            </ul>
                        </motion.div>

                        {/* Platinum Package */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="border border-white/10 p-8 relative bg-black hover:border-gold/30 transition-colors group"
                        >
                            <h3 className="font-cinzel text-2xl text-white mb-2 group-hover:text-gold transition-colors">Platinum Package</h3>
                            <div className="text-gold font-montserrat font-bold text-3xl mb-6">$45 <span className="text-sm font-normal text-gray-500">/ person</span></div>
                            <p className="text-gray-500 text-xs mb-8 font-montserrat uppercase tracking-wider">The Royal Feast</p>
                            
                            <div className="w-full h-[1px] bg-white/10 mb-8" />
                            
                            <ul className="space-y-4 text-gray-400 font-montserrat text-sm mb-10">
                                <li className="flex gap-3"><Check className="text-gold w-4 h-4 shrink-0" /> 4 Appetizers</li>
                                <li className="flex gap-3"><Check className="text-gold w-4 h-4 shrink-0" /> 4 Main Curries (Inc. Seafood/Goat)</li>
                                <li className="flex gap-3"><Check className="text-gold w-4 h-4 shrink-0" /> Premium Hyderabadi Biryani</li>
                                <li className="flex gap-3"><Check className="text-gold w-4 h-4 shrink-0" /> Live Tandoor Station (On Request)</li>
                                <li className="flex gap-3"><Check className="text-gold w-4 h-4 shrink-0" /> 3 Premium Desserts</li>
                                <li className="flex gap-3"><Check className="text-gold w-4 h-4 shrink-0" /> Masala Chai / Coffee</li>
                            </ul>
                        </motion.div>
                    </div>
                    
                    <div className="text-center mt-12">
                         <p className="text-gray-500 text-sm font-montserrat italic">
                            * Minimum order of 25 people required for catering packages. Prices subject to change.
                        </p>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="relative py-24 overflow-hidden rounded-2xl">
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/images/hero-background.jpg"
                            alt="Spices Background"
                            fill
                            className="object-cover opacity-40"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/60" />
                    </div>
                    
                    <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
                        <h2 className="font-cinzel text-4xl md:text-5xl text-white mb-6">Ready to Impress Your Guests?</h2>
                        <p className="text-gray-300 font-montserrat text-lg mb-10 leading-relaxed">
                            Don't settle for ordinary food. Let us create a culinary experience that your guests will talk about for years. 
                            Custom menus available upon request.
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
                                className="px-10 py-5 border border-white/30 hover:border-gold text-white hover:text-gold font-montserrat font-bold tracking-[0.2em] uppercase transition-all duration-300"
                            >
                                Email Inquiry
                            </Link>
                        </div>
                    </div>
                </section>

            </div>
        </main>
    );
}

