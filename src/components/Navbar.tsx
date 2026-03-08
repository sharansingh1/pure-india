"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "Banquet", href: "/banquet" },
    { name: "Catering", href: "/catering" },
    { name: "Our Story", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <>
            <header
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/90 backdrop-blur-md py-4 shadow-lg border-b border-gold/10 h-20" : "bg-transparent py-6 h-24"
                    }`}
            >
                <div className="container mx-auto px-4 flex justify-between items-center h-full">
                    {/* Logo */}
                    <Link href="/" className={`relative z-50 group transition-opacity duration-300 ${isOpen ? 'opacity-0 lg:opacity-100' : 'opacity-100'}`}>
                        <h1 className="font-cinzel text-2xl md:text-3xl font-bold text-white tracking-widest group-hover:text-gold transition-colors duration-300">
                            PURE <span className="text-gold-gradient">INDIAN CUISINE</span>
                        </h1>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`font-montserrat text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:text-gold ${pathname === link.href ? "text-gold font-medium" : "text-gray-300"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Order Now Button (Desktop) */}
                    <div className="hidden lg:block">
                        <button
                            onClick={() => {
                                if (pathname === '/') {
                                    document.getElementById("order-section")?.scrollIntoView({ behavior: "smooth" });
                                } else {
                                    window.location.href = '/#order-section';
                                }
                            }}
                            className="px-6 py-2.5 bg-gold hover:bg-yellow-500 text-black text-[10px] font-black uppercase tracking-[0.2em] rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:scale-105 active:scale-95"
                        >
                            Order Now
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden relative z-50 text-gold hover:text-white transition-colors"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </header>

            {/* Mobile Navigation Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center z-40"
                    >
                        <nav className="flex flex-col items-center gap-8">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        className={`font-cinzel text-2xl md:text-3xl text-white hover:text-gold transition-colors ${pathname === link.href ? "text-gold" : ""
                                            }`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: navLinks.length * 0.1 }}
                                className="pt-4"
                            >
                                <button
                                    onClick={() => {
                                        setIsOpen(false);
                                        setTimeout(() => {
                                            if (pathname === '/') {
                                                document.getElementById("order-section")?.scrollIntoView({ behavior: "smooth" });
                                            } else {
                                                window.location.href = '/#order-section';
                                            }
                                        }, 300);
                                    }}
                                    className="px-12 py-4 bg-gold text-black font-cinzel font-bold text-xl uppercase tracking-widest rounded-full"
                                >
                                    Order Now
                                </button>
                            </motion.div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
