"use client";

import { motion } from "framer-motion";

export default function BuffetBanner() {
  return (
    <div className="fixed top-0 left-0 w-full h-10 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 z-[60] flex items-center overflow-hidden shadow-md border-b border-yellow-400/50">
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
            <span key={i} className="mx-8 font-montserrat font-bold text-black text-sm tracking-wider uppercase flex items-center gap-4">
              <span>★</span>
              <span>Opening Soon: The ONLY Lunch & Dinner Indian Buffet in Las Vegas</span>
              <span>★</span>
              <span>Serving You Day & Night</span>
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

