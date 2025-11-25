"use client";

import { motion } from "framer-motion";

export default function Newsletter() {
    return (
        <section className="py-24 bg-black relative border-t border-white/5">
            <div className="container mx-auto px-4 text-center max-w-3xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="font-cinzel text-3xl md:text-4xl text-white mb-4">Join The Inner Circle</h2>
                    <p className="text-gray-400 font-montserrat mb-10">
                        Subscribe to receive exclusive invitations to tasting events, chef's specials, and seasonal updates.
                    </p>

                    <form className="flex flex-col md:flex-row gap-4">
                        <input
                            type="email"
                            placeholder="Your Email Address"
                            className="flex-grow bg-[#0a0a0a] border border-white/10 px-6 py-4 text-white focus:border-gold outline-none transition-colors font-montserrat"
                        />
                        <button className="bg-gold text-black font-bold font-montserrat uppercase tracking-widest px-10 py-4 hover:bg-white transition-colors duration-300">
                            Subscribe
                        </button>
                    </form>
                    <p className="text-gray-600 text-xs mt-4 font-montserrat">
                        We respect your privacy. Unsubscribe at any time.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
