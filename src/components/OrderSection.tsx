"use client";

import { motion } from "framer-motion";
import { Phone, ShoppingBag, Truck, ExternalLink, Globe } from "lucide-react";
import Image from "next/image";

const orderOptions = [
    {
        name: "Order Directly",
        description: "Best prices & fastest service",
        icon: <Globe className="w-8 h-8" />,
        link: "https://pure-indian-cuisine-las-vegas.cloveronline.com/menu/all",
        cta: "Order Direct",
        color: "from-gold to-amber-600",
        highlight: true
    },
    {
        name: "DoorDash",
        description: "Delivery within minutes",
        image: "/images/ddlogo.png",
        extraScale: "scale-[1.23]",
        link: "https://www.doordash.com/store/desi-dhaba-the-indian-kitchen-las-vegas-27897577/33366948/",
        cta: "Order DoorDash",
        color: "from-red-600 to-red-800",
        highlight: false
    },
    {
        name: "UberEats",
        description: "Reliable local delivery",
        image: "/images/ubereats.png",
        extraScale: "scale-[1.2]",
        link: "https://www.ubereats.com/store/pure-indian-cuisine-west-dessert-inn-rd/lGDiEfe7UoONUvq_yHV6qw",
        cta: "Order UberEats",
        color: "from-green-600 to-green-800",
        highlight: false
    }
];

export default function OrderSection() {
    return (
        <section id="order-section" className="relative py-24 bg-black overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-900/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="font-cinzel text-3xl md:text-5xl font-bold mb-6 italic">
                            Savor the Flavors <span className="text-gold">at Home</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6" />
                        <p className="text-gray-400 font-montserrat text-lg">
                            Experience Las Vegas' premier Indian cuisine wherever you are.
                            Choose your preferred platform for delivery or easy pickup.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {orderOptions.map((option, index) => (
                        <motion.a
                            key={option.name}
                            href={option.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className={`group relative flex flex-col p-8 rounded-2xl border-2 transition-all duration-500 overflow-hidden
                                ${option.highlight
                                    ? "bg-gradient-to-br from-black to-zinc-900 border-gold shadow-[0_10px_30px_rgba(212,175,55,0.15)]"
                                    : "bg-zinc-950 border-white/10 hover:border-gold/50"
                                }`}
                        >
                            {/* Option Shine Effect */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                            {/* Icon Circle */}
                            <div className={`w-20 h-20 rounded-full mb-6 flex items-center justify-center text-white bg-gradient-to-br ${option.color} shadow-lg overflow-hidden group-hover:scale-110 transition-transform duration-500`}>
                                {option.image ? (
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={option.image}
                                            alt={option.name}
                                            fill
                                            className={`object-cover object-center ${option.extraScale || "scale-[1.2]"}`}
                                        />
                                    </div>
                                ) : (
                                    <div className="p-4">{option.icon}</div>
                                )}
                            </div>

                            <h3 className={`font-cinzel text-xl font-bold mb-2 ${option.highlight ? "text-white" : "text-gray-200"}`}>
                                {option.name}
                            </h3>
                            <p className="text-gray-500 text-sm font-montserrat mb-8 flex-grow">
                                {option.description}
                            </p>

                            <div className={`mt-auto flex items-center justify-between text-sm font-bold uppercase tracking-widest
                                ${option.highlight ? "text-gold" : "text-gray-400 group-hover:text-gold"} transition-colors`}>
                                <span>{option.cta}</span>
                                <ExternalLink size={16} />
                            </div>

                            {/* Badge for highlight */}
                            {option.highlight && (
                                <div className="absolute top-4 right-4 px-3 py-1 bg-gold rounded-full text-[10px] text-black font-black uppercase tracking-tighter">
                                    Highly Recommended
                                </div>
                            )}
                        </motion.a>
                    ))}
                </div>

                {/* Info Note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1, duration: 1 }}
                    className="mt-16 text-center"
                >
                    <p className="text-gray-500 text-xs font-montserrat uppercase tracking-[0.2em]">
                        Delivery times may vary based on location and carrier.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
