"use client";

import { motion } from "framer-motion";
import { Users, Utensils, Music, Sparkles, Wine, ChefHat } from "lucide-react";
import Image from "next/image";

const packages = [
    {
        name: "Intimate Gathering",
        guests: "8-12 Guests",
        price: "$800",
        features: [
            "Private dining room",
            "Customized 4-course menu",
            "Dedicated server",
            "Premium wine pairing",
            "Personalized menu cards"
        ],
        icon: Users
    },
    {
        name: "Executive Experience",
        guests: "12-20 Guests",
        price: "$1,500",
        features: [
            "Exclusive private space",
            "Chef's tasting menu (6 courses)",
            "Premium bar service",
            "Audio/visual equipment",
            "Dedicated event coordinator",
            "Custom floral arrangements"
        ],
        icon: ChefHat,
        featured: true
    },
    {
        name: "Grand Celebration",
        guests: "20-40 Guests",
        price: "$3,000",
        features: [
            "Full restaurant buyout option",
            "Bespoke multi-course menu",
            "Open bar with premium spirits",
            "Live traditional music",
            "Professional photography",
            "Custom decor & lighting",
            "Valet parking service"
        ],
        icon: Sparkles
    }
];

const amenities = [
    { icon: Utensils, title: "Custom Menus", description: "Work with our chef to create a personalized dining experience" },
    { icon: Wine, title: "Premium Bar", description: "Curated wine list and signature cocktails" },
    { icon: Music, title: "Entertainment", description: "Live music and cultural performances available" },
    { icon: Sparkles, title: "Event Planning", description: "Dedicated coordinator for seamless execution" }
];

export default function PrivateDiningPage() {
    return (
        <main className="min-h-screen pt-24 pb-20 bg-black text-white overflow-hidden">
            {/* Hero Section */}
            <div className="relative h-[50vh] w-full mb-20 flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
                    <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20" />
                </div>
                <div className="relative z-10 text-center container mx-auto px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="font-cinzel text-5xl md:text-7xl text-gold-gradient font-bold mb-6"
                    >
                        Private Dining
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-gray-300 font-montserrat text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
                    >
                        Elevate your special occasions with an exclusive dining experience tailored to your vision
                    </motion.p>
                </div>
            </div>

            <div className="container mx-auto px-4">
                {/* Packages Section */}
                <section className="mb-32">
                    <div className="text-center mb-16">
                        <h2 className="font-cinzel text-4xl md:text-5xl text-white mb-4">Our Packages</h2>
                        <p className="text-gold font-montserrat tracking-[0.3em] uppercase text-sm">Curated Experiences</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {packages.map((pkg, index) => {
                            const Icon = pkg.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    className={`relative bg-gradient-to-br from-gray-900/50 to-black border ${pkg.featured ? 'border-gold scale-105 shadow-2xl shadow-gold/20' : 'border-gold/20'
                                        } p-8 hover:border-gold/50 transition-all duration-300 group`}
                                >
                                    {pkg.featured && (
                                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-black px-6 py-1 text-xs font-montserrat font-bold uppercase tracking-widest">
                                            Most Popular
                                        </div>
                                    )}

                                    <div className="flex items-center justify-center mb-6">
                                        <div className="p-4 border border-gold/30 rounded-full text-gold group-hover:bg-gold/10 transition-colors">
                                            <Icon size={32} />
                                        </div>
                                    </div>

                                    <h3 className="font-cinzel text-2xl text-white text-center mb-2">{pkg.name}</h3>
                                    <p className="text-gold/70 font-montserrat text-sm text-center mb-4">{pkg.guests}</p>

                                    <div className="text-center mb-8">
                                        <span className="font-cinzel text-4xl text-gold">{pkg.price}</span>
                                        <span className="text-gray-500 font-montserrat text-sm ml-2">starting</span>
                                    </div>

                                    <div className="space-y-4 mb-8">
                                        {pkg.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-start gap-3">
                                                <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                                                <p className="text-gray-300 font-montserrat text-sm leading-relaxed">{feature}</p>
                                            </div>
                                        ))}
                                    </div>

                                    <button className="w-full py-3 border border-gold text-gold hover:bg-gold hover:text-black transition-all duration-300 font-montserrat uppercase tracking-widest text-xs">
                                        Inquire Now
                                    </button>
                                </motion.div>
                            );
                        })}
                    </div>
                </section>

                {/* Amenities Section */}
                <section className="mb-32">
                    <div className="text-center mb-16">
                        <h2 className="font-cinzel text-4xl md:text-5xl text-white mb-4">Exclusive Amenities</h2>
                        <p className="text-gold font-montserrat tracking-[0.3em] uppercase text-sm">Every Detail Perfected</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {amenities.map((amenity, index) => {
                            const Icon = amenity.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="text-center group"
                                >
                                    <div className="flex items-center justify-center mb-4">
                                        <div className="p-6 border border-gold/20 rounded-full text-gold group-hover:border-gold group-hover:bg-gold/10 transition-all duration-300">
                                            <Icon size={28} />
                                        </div>
                                    </div>
                                    <h3 className="font-cinzel text-xl text-white mb-2">{amenity.title}</h3>
                                    <p className="text-gray-400 font-montserrat text-sm leading-relaxed">{amenity.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </section>

                {/* Gallery Preview */}
                <section className="mb-32">
                    <div className="text-center mb-16">
                        <h2 className="font-cinzel text-4xl md:text-5xl text-white mb-4">Private Spaces</h2>
                        <p className="text-gold font-montserrat tracking-[0.3em] uppercase text-sm">Elegant & Intimate</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                        {[
                            { title: "The Maharaja Room", capacity: "Up to 20 guests", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop" },
                            { title: "The Lotus Lounge", capacity: "Up to 12 guests", image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=1000&auto=format&fit=crop" }
                        ].map((space, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="relative h-[400px] group overflow-hidden border border-gold/20"
                            >
                                <Image
                                    src={space.image}
                                    alt={space.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-8">
                                    <h3 className="font-cinzel text-2xl text-white mb-2">{space.title}</h3>
                                    <p className="text-gold font-montserrat text-sm tracking-wider">{space.capacity}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Contact CTA */}
                <section className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-gradient-to-br from-gold/10 to-transparent border border-gold/30 p-12 text-center"
                    >
                        <h2 className="font-cinzel text-3xl md:text-4xl text-white mb-4">Plan Your Event</h2>
                        <p className="text-gray-300 font-montserrat leading-relaxed mb-8 max-w-2xl mx-auto">
                            Our private dining team is ready to help you create an unforgettable experience.
                            Contact us to discuss your vision and receive a customized proposal.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a
                                href="tel:+17025550123"
                                className="px-8 py-4 bg-gold text-black font-montserrat font-bold uppercase tracking-widest text-sm hover:bg-gold/90 transition-all duration-300 inline-block"
                            >
                                Call (702) 555-0123
                            </a>
                            <a
                                href="mailto:events@pureindia.com"
                                className="px-8 py-4 border border-gold text-gold hover:bg-gold hover:text-black transition-all duration-300 font-montserrat uppercase tracking-widest text-sm inline-block"
                            >
                                Email Us
                            </a>
                        </div>
                        <p className="text-gray-500 font-montserrat text-xs mt-6 italic">
                            * Prices are subject to change based on menu selections and event requirements
                        </p>
                    </motion.div>
                </section>
            </div>
        </main>
    );
}
