"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const testimonials = [
    {
        name: "James Wilson",
        role: "Food Critic",
        content: "An absolute masterpiece of culinary art. The flavors are authentic yet surprisingly modern. A must-visit in Las Vegas.",
        rating: 5,
    },
    {
        name: "Sarah Jenkins",
        role: "Local Guide",
        content: "The ambiance is unmatched. From the moment you step in, you are transported to a world of luxury. The service is impeccable.",
        rating: 5,
    },
    {
        name: "Michael Chen",
        role: "Verified Diner",
        content: "Best Indian cuisine I've had outside of Mumbai. The Butter Chicken is to die for, and the wine selection is exquisite.",
        rating: 5,
    },
];

export default function Testimonials() {
    return (
        <section className="py-32 bg-black text-white relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10" />

            <div className="container mx-auto px-4 relative z-10">
                <SectionHeading title="Guest Experiences" subtitle="What They Say" centered={true} />

                <div className="grid md:grid-cols-3 gap-8 mt-16">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="bg-[#0a0a0a] border border-gold/10 p-8 relative group hover:border-gold/30 transition-colors duration-500"
                        >
                            <Quote className="absolute top-6 right-6 text-gold/20 group-hover:text-gold/40 transition-colors" size={40} />

                            <div className="flex gap-1 mb-6">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} size={16} className="fill-gold text-gold" />
                                ))}
                            </div>

                            <p className="text-gray-400 font-montserrat italic mb-8 leading-relaxed">
                                "{testimonial.content}"
                            </p>

                            {/* Author info removed as per request */}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
