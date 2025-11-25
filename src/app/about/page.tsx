"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";

export default function AboutPage() {
    return (
        <main className="min-h-screen pt-24 pb-20 bg-black text-white overflow-hidden">
            {/* Header */}
            <div className="relative h-[40vh] w-full mb-20 flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    {/* Placeholder for header image */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
                    <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20" />
                </div>
                <div className="relative z-10 text-center">
                    <h1 className="font-cinzel text-5xl md:text-7xl text-gold-gradient font-bold mb-4">Our Story</h1>
                    <p className="text-gray-400 font-montserrat tracking-widest uppercase text-sm">Tradition Meets Modernity</p>
                </div>
            </div>

            <div className="container mx-auto px-4">
                {/* The Vision Section */}
                <section className="grid md:grid-cols-2 gap-16 items-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <SectionHeading title="The Vision" subtitle="Est. 2024" centered={false} />
                        <div className="prose prose-invert max-w-none font-montserrat text-gray-300 leading-loose">
                            <p className="mb-6">
                                Pure India was born from a desire to redefine the Indian dining experience in Las Vegas.
                                We believe that Indian cuisine is an art form—a delicate balance of spices, textures, and aromas
                                that deserves to be presented with the same elegance and sophistication as the world's finest cuisines.
                            </p>
                            <p>
                                Our restaurant is a sanctuary where the vibrant energy of Las Vegas meets the timeless traditions of India.
                                Every detail, from the hand-carved decor to the curated playlist, is designed to transport you to a world of
                                refined luxury.
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[500px] w-full border border-gold/20 p-4"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-gold/10 to-transparent pointer-events-none" />
                        <div className="w-full h-full bg-gray-900 flex items-center justify-center relative overflow-hidden">
                            {/* Placeholder for interior shot */}
                            <span className="font-cinzel text-gold/20 text-4xl uppercase">Interior Shot</span>
                            <div className="absolute inset-0 border border-gold/10 m-4" />
                        </div>
                    </motion.div>
                </section>

                {/* The Chef Section */}
                <section className="grid md:grid-cols-2 gap-16 items-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[600px] w-full order-2 md:order-1"
                    >
                        <div className="w-full h-full bg-gray-900 grayscale hover:grayscale-0 transition-all duration-700 flex items-center justify-center relative overflow-hidden group">
                            {/* Placeholder for Chef Image */}
                            <span className="font-cinzel text-white/20 text-4xl uppercase group-hover:text-gold/40 transition-colors">Chef Portrait</span>
                        </div>
                        <div className="absolute -bottom-6 -left-6 w-48 h-48 border-l-2 border-b-2 border-gold/30" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-1 md:order-2"
                    >
                        <SectionHeading title="Culinary Artistry" subtitle="Meet The Chef" centered={false} />
                        <div className="prose prose-invert max-w-none font-montserrat text-gray-300 leading-loose">
                            <p className="mb-6">
                                Executive Chef <span className="text-gold">Aarav Sharma</span> brings over two decades of culinary excellence to Pure India.
                                Trained in the royal kitchens of Rajasthan and refined in the Michelin-starred restaurants of London,
                                Chef Sharma masters the art of blending ancient techniques with contemporary presentation.
                            </p>
                            <blockquote className="border-l-2 border-gold pl-6 italic text-xl text-white my-8 font-cinzel">
                                "Cooking is not just about feeding the body, it's about touching the soul.
                                Every spice tells a story, every dish is a memory."
                            </blockquote>
                            <p>
                                His philosophy is simple: respect the ingredients. We source our spices directly from organic farms in Kerala
                                and partner with local Nevada producers for the freshest seasonal produce.
                            </p>
                        </div>
                    </motion.div>
                </section>
            </div>
        </main>
    );
}
