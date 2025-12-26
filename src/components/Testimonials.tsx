"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const testimonials = [
    {
        name: "Verified Diner",
        role: "Local Guide",
        content: "Amazing food and great service! Every dish I tried was full of flavor and cooked perfectly. Pure Indian Cuisine is now my go-to spot.",
        rating: 5,
    },
    {
        name: "Verified Diner",
        role: "Local Guide",
        content: "Dining with a view of planes landing adds to the memorable ambiance. It feels like stepping into another world while enjoying authentic food.",
        rating: 5,
    },
    {
        name: "Verified Diner",
        role: "Local Guide",
        content: "Authentic flavors and dishes that truly capture the essence of India. A must-visit! The chicken tikka masala is velvety and delicious.",
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
