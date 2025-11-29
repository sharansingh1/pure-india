"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { sendEmail } from "./action";

export default function ContactPage() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    async function handleSubmit(formData: FormData) {
        setStatus("submitting");
        try {
            const result = await sendEmail(formData);
            if (result.success) {
                setStatus("success");
            } else {
                setStatus("error");
            }
        } catch (e) {
            setStatus("error");
        }
    }

    return (
        <main className="min-h-screen pt-32 pb-20 bg-black text-white">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-20">
                    <h1 className="font-cinzel text-5xl md:text-7xl text-white font-bold mb-4">Contact Us</h1>
                    <p className="text-gold font-montserrat tracking-[0.3em] uppercase text-sm">Get In Touch</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-12"
                    >
                        <div>
                            <h2 className="font-cinzel text-3xl text-gold-gradient mb-8">Information</h2>
                            <div className="space-y-8">
                                <div className="flex items-start gap-6">
                                    <div className="p-4 border border-gold/20 rounded-sm text-gold">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-cinzel text-xl text-white mb-2">Address</h3>
                                        <p className="text-gray-400 font-montserrat leading-relaxed">
                                            1405 E Sunset Rd<br />
                                            Las Vegas, NV 89119
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6">
                                    <div className="p-4 border border-gold/20 rounded-sm text-gold">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-cinzel text-xl text-white mb-2">Phone</h3>
                                        <p className="text-gray-400 font-montserrat">
                                            702-897-5555<br />
                                            725-999-2736
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form Section */}
                        <div>
                            <h2 className="font-cinzel text-3xl text-gold-gradient mb-8">Send a Message</h2>
                            {status === "success" ? (
                                <div className="p-6 border border-green-500/30 bg-green-500/10 text-center">
                                    <h3 className="font-cinzel text-xl text-green-400 mb-2">Message Sent</h3>
                                    <p className="text-gray-400 text-sm">Thank you for contacting us. We'll get back to you shortly.</p>
                                    <button onClick={() => setStatus("idle")} className="mt-4 text-gold underline text-sm">Send another</button>
                                </div>
                            ) : (
                                <form action={handleSubmit} className="space-y-4">
                                    <div>
                                        <input 
                                            type="text" 
                                            name="name"
                                            placeholder="Your Name" 
                                            required
                                            className="w-full bg-white/5 border border-white/10 p-4 text-white placeholder:text-gray-500 focus:border-gold focus:outline-none transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <input 
                                            type="email" 
                                            name="email"
                                            placeholder="Your Email" 
                                            required
                                            className="w-full bg-white/5 border border-white/10 p-4 text-white placeholder:text-gray-500 focus:border-gold focus:outline-none transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <textarea 
                                            name="message"
                                            placeholder="Your Message" 
                                            required
                                            rows={4}
                                            className="w-full bg-white/5 border border-white/10 p-4 text-white placeholder:text-gray-500 focus:border-gold focus:outline-none transition-colors resize-none"
                                        />
                                    </div>
                                    <button 
                                        type="submit" 
                                        disabled={status === "submitting"}
                                        className="w-full bg-gold text-black font-bold uppercase tracking-widest py-4 hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                    >
                                        {status === "submitting" ? "Sending..." : "Send Message"}
                                        {!status.startsWith("submit") && <Send size={18} />}
                                    </button>
                                    {status === "error" && (
                                        <p className="text-red-400 text-sm text-center">Something went wrong. Please try again.</p>
                                    )}
                                </form>
                            )}
                        </div>

                        <div>
                            <h2 className="font-cinzel text-3xl text-gold-gradient mb-8">Hours</h2>
                            <div>
                                <p className="text-gray-400 text-sm font-montserrat">Daily: 11 AM - 10 PM</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Map */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="h-full min-h-[500px] bg-[#111] border border-gold/10 relative overflow-hidden"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3220.8847847847847!2d-115.10847!3d36.09847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c7b7b7b7b7b7%3A0x1234567890abcdef!2s1405%20E%20Sunset%20Rd%2C%20Las%20Vegas%2C%20NV%2089119!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="grayscale hover:grayscale-0 transition-all duration-700"
                        />
                        <div className="absolute inset-0 border-2 border-gold/5 pointer-events-none m-4" />
                    </motion.div>
                </div>
            </div>
        </main>
    );
}
