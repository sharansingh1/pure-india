import React from "react";
import { motion } from "framer-motion";

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    centered?: boolean;
}

export default function SectionHeading({ title, subtitle, centered = true }: SectionHeadingProps) {
    return (
        <div className={`mb-16 ${centered ? "text-center" : "text-left"}`}>
            {subtitle && (
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-gold text-sm tracking-[0.4em] uppercase mb-3 font-medium"
                >
                    {subtitle}
                </motion.h3>
            )}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="relative inline-block"
            >
                <h2 className="font-cinzel text-4xl md:text-6xl text-white font-bold relative z-10">
                    {title}
                </h2>
                {/* Decorative Underline */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-70" />
            </motion.div>
        </div>
    );
}
