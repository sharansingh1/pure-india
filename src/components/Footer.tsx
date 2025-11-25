import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-black text-white py-12 border-t border-white/10">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-6 md:mb-0 text-center md:text-left">
                    <h2 className="font-cinzel text-2xl font-bold text-white">PURE INDIA</h2>
                    <p className="text-xs text-gray-500 tracking-widest uppercase mt-1">Las Vegas</p>
                </div>

                <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-6 md:mb-0 text-sm text-gray-400 font-montserrat">
                    <Link href="/menu" className="hover:text-gold transition-colors">Menu</Link>
                    <Link href="/about" className="hover:text-gold transition-colors">Our Story</Link>

                    <Link href="/gallery" className="hover:text-gold transition-colors">Gallery</Link>
                    <Link href="/contact" className="hover:text-gold transition-colors">Contact</Link>
                </div>

                <div className="text-gray-600 text-xs font-montserrat">
                    &copy; {new Date().getFullYear()} Pure India. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
