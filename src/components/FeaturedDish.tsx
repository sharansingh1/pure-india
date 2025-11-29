"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function FeaturedDish() {
    return (
        <section className="py-32 bg-[#050505] relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[600px] w-full group"
                    >
                        <div className="absolute inset-0 border-2 border-gold/20 translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />
                        <div className="relative h-full w-full overflow-hidden bg-gray-900">
                            {/* Placeholder for Signature Dish Image */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                            <Image
                                src="https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=1000&auto=format&fit=crop"
                                alt="Chicken Tikka Masala"
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                        </div>
                        <div className="absolute bottom-8 left-8 z-20">
                            <span className="bg-gold text-black px-4 py-1 text-xs font-bold uppercase tracking-widest font-montserrat">Chef's Selection</span>
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <h2 className="font-cinzel text-4xl md:text-6xl text-white font-bold leading-tight">
                            The Royal <br />
                            <span className="text-gold-gradient">Chicken Tikka Masala</span>
                        </h2>

                        <p className="text-gray-400 font-montserrat text-lg leading-loose">
                            Tender pieces of chicken marinated in yogurt and spices, roasted in our clay tandoor,
                            and simmered in a rich, creamy tomato sauce infused with fenugreek and cardamom.
                            A timeless classic that embodies the soul of Indian cuisine.
                        </p>

                        <div className="pt-8">
                            <Link href="/menu" className="inline-block border-b border-gold text-gold pb-1 font-montserrat uppercase tracking-widest hover:text-white hover:border-white transition-all duration-300">
                                View Full Buffet
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
