"use client";

import { motion } from "framer-motion";

export default function BuffetBanner() {
  return (
    <div className="fixed top-0 left-0 w-full h-12 bg-gradient-to-r from-red-900 via-red-700 to-red-900 z-[60] flex items-center overflow-hidden shadow-md border-b border-gold/30">
      <div className="flex whitespace-nowrap">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 35,
          }}
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className="mx-8 font-montserrat font-bold text-white text-sm tracking-wider uppercase flex items-center gap-4">
              <span className="text-gold">★</span>
              <span>All-Day Indian Buffet - Unlimited Servings</span>
              <span className="text-gold">★</span>
              <span>Best Indian Buffet in Las Vegas</span>
              <span className="text-gold">★</span>
              <span>Discounts for Truck/Taxi/Uber Drivers</span>
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

