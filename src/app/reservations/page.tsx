"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, Users, Mail, Phone, User } from "lucide-react";
import { useState } from "react";

export default function ReservationsPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        guests: "2",
        occasion: "",
        requests: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log("Reservation submitted:", formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <main className="min-h-screen pt-32 pb-20 bg-black text-white">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-cinzel text-5xl md:text-7xl text-white font-bold mb-4"
                    >
                        Reservations
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-gold font-montserrat tracking-[0.3em] uppercase text-sm"
                    >
                        Book Your Experience
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-5 gap-12">
                    {/* Reservation Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-3"
                    >
                        <div className="bg-gradient-to-br from-gray-900/50 to-black border border-gold/20 p-8 md:p-12">
                            <h2 className="font-cinzel text-3xl text-gold-gradient mb-8">Reserve a Table</h2>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name */}
                                <div className="relative">
                                    <label htmlFor="name" className="block text-sm font-montserrat text-gray-400 mb-2 uppercase tracking-wider">
                                        Full Name *
                                    </label>
                                    <div className="relative">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/50" size={20} />
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-black/50 border border-gold/20 text-white pl-12 pr-4 py-4 focus:outline-none focus:border-gold transition-colors font-montserrat"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                </div>

                                {/* Email & Phone */}
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="relative">
                                        <label htmlFor="email" className="block text-sm font-montserrat text-gray-400 mb-2 uppercase tracking-wider">
                                            Email *
                                        </label>
                                        <div className="relative">
                                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/50" size={20} />
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full bg-black/50 border border-gold/20 text-white pl-12 pr-4 py-4 focus:outline-none focus:border-gold transition-colors font-montserrat"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <label htmlFor="phone" className="block text-sm font-montserrat text-gray-400 mb-2 uppercase tracking-wider">
                                            Phone *
                                        </label>
                                        <div className="relative">
                                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/50" size={20} />
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                                className="w-full bg-black/50 border border-gold/20 text-white pl-12 pr-4 py-4 focus:outline-none focus:border-gold transition-colors font-montserrat"
                                                placeholder="(702) 555-0123"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Date & Time */}
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="relative">
                                        <label htmlFor="date" className="block text-sm font-montserrat text-gray-400 mb-2 uppercase tracking-wider">
                                            Date *
                                        </label>
                                        <div className="relative">
                                            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/50" size={20} />
                                            <input
                                                type="date"
                                                id="date"
                                                name="date"
                                                value={formData.date}
                                                onChange={handleChange}
                                                required
                                                className="w-full bg-black/50 border border-gold/20 text-white pl-12 pr-4 py-4 focus:outline-none focus:border-gold transition-colors font-montserrat"
                                            />
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <label htmlFor="time" className="block text-sm font-montserrat text-gray-400 mb-2 uppercase tracking-wider">
                                            Time *
                                        </label>
                                        <div className="relative">
                                            <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/50" size={20} />
                                            <select
                                                id="time"
                                                name="time"
                                                value={formData.time}
                                                onChange={handleChange}
                                                required
                                                className="w-full bg-black/50 border border-gold/20 text-white pl-12 pr-4 py-4 focus:outline-none focus:border-gold transition-colors font-montserrat appearance-none cursor-pointer"
                                            >
                                                <option value="">Select Time</option>
                                                <option value="17:00">5:00 PM</option>
                                                <option value="17:30">5:30 PM</option>
                                                <option value="18:00">6:00 PM</option>
                                                <option value="18:30">6:30 PM</option>
                                                <option value="19:00">7:00 PM</option>
                                                <option value="19:30">7:30 PM</option>
                                                <option value="20:00">8:00 PM</option>
                                                <option value="20:30">8:30 PM</option>
                                                <option value="21:00">9:00 PM</option>
                                                <option value="21:30">9:30 PM</option>
                                                <option value="22:00">10:00 PM</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                {/* Guests & Occasion */}
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="relative">
                                        <label htmlFor="guests" className="block text-sm font-montserrat text-gray-400 mb-2 uppercase tracking-wider">
                                            Number of Guests *
                                        </label>
                                        <div className="relative">
                                            <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/50" size={20} />
                                            <select
                                                id="guests"
                                                name="guests"
                                                value={formData.guests}
                                                onChange={handleChange}
                                                required
                                                className="w-full bg-black/50 border border-gold/20 text-white pl-12 pr-4 py-4 focus:outline-none focus:border-gold transition-colors font-montserrat appearance-none cursor-pointer"
                                            >
                                                {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                                                    <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                                                ))}
                                                <option value="9+">9+ Guests (Contact Us)</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <label htmlFor="occasion" className="block text-sm font-montserrat text-gray-400 mb-2 uppercase tracking-wider">
                                            Special Occasion
                                        </label>
                                        <select
                                            id="occasion"
                                            name="occasion"
                                            value={formData.occasion}
                                            onChange={handleChange}
                                            className="w-full bg-black/50 border border-gold/20 text-white px-4 py-4 focus:outline-none focus:border-gold transition-colors font-montserrat appearance-none cursor-pointer"
                                        >
                                            <option value="">None</option>
                                            <option value="birthday">Birthday</option>
                                            <option value="anniversary">Anniversary</option>
                                            <option value="business">Business Dinner</option>
                                            <option value="celebration">Celebration</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Special Requests */}
                                <div className="relative">
                                    <label htmlFor="requests" className="block text-sm font-montserrat text-gray-400 mb-2 uppercase tracking-wider">
                                        Special Requests
                                    </label>
                                    <textarea
                                        id="requests"
                                        name="requests"
                                        value={formData.requests}
                                        onChange={handleChange}
                                        rows={4}
                                        className="w-full bg-black/50 border border-gold/20 text-white px-4 py-4 focus:outline-none focus:border-gold transition-colors font-montserrat resize-none"
                                        placeholder="Dietary restrictions, seating preferences, etc."
                                    />
                                </div>

                                {/* Submit Button */}
                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full bg-gradient-to-r from-gold to-amber-600 text-black font-montserrat font-bold uppercase tracking-widest py-5 hover:shadow-lg hover:shadow-gold/20 transition-all duration-300"
                                >
                                    Confirm Reservation
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>

                    {/* Info Sidebar */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-2 space-y-8"
                    >
                        {/* Reservation Policy */}
                        <div className="bg-gradient-to-br from-gray-900/30 to-black border border-gold/10 p-8">
                            <h3 className="font-cinzel text-2xl text-gold mb-6">Reservation Policy</h3>
                            <div className="space-y-4 text-gray-400 font-montserrat text-sm leading-relaxed">
                                <p>
                                    <span className="text-gold">•</span> Reservations are held for 15 minutes past the scheduled time.
                                </p>
                                <p>
                                    <span className="text-gold">•</span> For parties of 9 or more, please call us directly at (702) 555-0123.
                                </p>
                                <p>
                                    <span className="text-gold">•</span> Cancellations must be made at least 24 hours in advance.
                                </p>
                                <p>
                                    <span className="text-gold">•</span> Smart casual dress code is recommended.
                                </p>
                                <p>
                                    <span className="text-gold">•</span> We accommodate dietary restrictions with advance notice.
                                </p>
                            </div>
                        </div>

                        {/* Hours */}
                        <div className="bg-gradient-to-br from-gray-900/30 to-black border border-gold/10 p-8">
                            <h3 className="font-cinzel text-2xl text-gold mb-6">Hours of Operation</h3>
                            <div className="space-y-3 font-montserrat">
                                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                                    <span className="text-white">Monday - Thursday</span>
                                    <span className="text-gray-400">5:00 PM - 10:30 PM</span>
                                </div>
                                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                                    <span className="text-white">Friday - Saturday</span>
                                    <span className="text-gray-400">5:00 PM - 11:00 PM</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-white">Sunday</span>
                                    <span className="text-gray-400">5:00 PM - 10:00 PM</span>
                                </div>
                            </div>
                        </div>

                        {/* Contact */}
                        <div className="bg-gradient-to-br from-gray-900/30 to-black border border-gold/10 p-8">
                            <h3 className="font-cinzel text-2xl text-gold mb-6">Need Assistance?</h3>
                            <div className="space-y-4 font-montserrat text-sm">
                                <p className="text-gray-400">
                                    For immediate assistance or special requests, please contact our reservations team:
                                </p>
                                <div className="space-y-2">
                                    <p className="text-white">
                                        <span className="text-gold">Phone:</span> (702) 555-0123
                                    </p>
                                    <p className="text-white">
                                        <span className="text-gold">Email:</span> reservations@pureindia.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}
