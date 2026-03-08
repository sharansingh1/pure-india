"use client";

import { motion } from "framer-motion";
import Link from "next/link";

// Define a layout plan: which categories go in left column vs right column
// Balanced for roughly equal visual weight on each side
const LEFT_CATEGORIES = [
    "APPETIZERS",
    "INDO-CHINESE",
    "NON-VEG CURRY",
    "BREADS",
    "DRINKS",
];

const RIGHT_CATEGORIES = [
    "VEG CURRY",
    "GRILLS",
    "RICE",
    "DESSERT",
];

export default function MenuPageContent({ groupedMenu }: { groupedMenu: any[] }) {
    const leftMenu = LEFT_CATEGORIES
        .map(cat => groupedMenu.find((g: any) => g.category === cat))
        .filter(Boolean);

    const rightMenu = RIGHT_CATEGORIES
        .map(cat => groupedMenu.find((g: any) => g.category === cat))
        .filter(Boolean);

    // Any categories not in either list go at the bottom
    const assignedCats = [...LEFT_CATEGORIES, ...RIGHT_CATEGORIES];
    const extraMenu = groupedMenu.filter((g: any) => !assignedCats.includes(g.category));

    return (
        <main className="menu-page">
            {/* ── Hero ── */}
            <div className="menu-hero">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="menu-hero-content"
                >
                    <p className="menu-hero-eyebrow">Pure Indian Cuisine</p>
                    <h1 className="menu-hero-title">
                        Our <span className="text-gold-gradient">Menu</span>
                    </h1>
                    <div className="menu-hero-divider">
                        <div className="menu-hero-divider-line" />
                        <span className="menu-hero-divider-diamond">◆</span>
                        <div className="menu-hero-divider-line" />
                    </div>
                    <p className="menu-hero-subtitle">
                        Authentic A La Carte Dining &bull; Prepared Fresh to Order
                    </p>
                    <div className="menu-legend">
                        <span className="menu-legend-item">
                            <span className="menu-veg-dot" /> Vegetarian
                        </span>
                        <span className="menu-legend-item">
                            <span className="menu-spicy">🌶</span> Spicy
                        </span>
                    </div>
                </motion.div>
            </div>

            {/* ── Menu Grid ── */}
            <div className="menu-container">
                {/* Decorative top border */}
                <div className="menu-top-border">
                    <div className="menu-top-border-line" />
                    <span className="menu-top-border-ornament">❖</span>
                    <div className="menu-top-border-line" />
                </div>

                <div className="menu-grid">
                    {/* Left Column */}
                    <div className="menu-column">
                        {leftMenu.map((category: any, index: number) => (
                            <MenuCategory key={category.category} category={category} index={index} />
                        ))}
                    </div>

                    {/* Center Divider (desktop only) */}
                    <div className="menu-center-divider" />

                    {/* Right Column */}
                    <div className="menu-column">
                        {rightMenu.map((category: any, index: number) => (
                            <MenuCategory key={category.category} category={category} index={index} />
                        ))}
                    </div>
                </div>

                {/* Overflow categories (full-width) */}
                {extraMenu.length > 0 && (
                    <div className="menu-extra">
                        {extraMenu.map((category: any, index: number) => (
                            <MenuCategory key={category.category} category={category} index={index} />
                        ))}
                    </div>
                )}

                {/* Decorative bottom border */}
                <div className="menu-top-border" style={{ marginTop: '2.5rem' }}>
                    <div className="menu-top-border-line" />
                    <span className="menu-top-border-ornament">❖</span>
                    <div className="menu-top-border-line" />
                </div>

                {/* Footer */}
                <div className="menu-footer">
                    <div className="menu-footer-notes">
                        <p>* All dishes are prepared fresh. Please allow sufficient time.</p>
                        <p>* Please inform your server of any allergies or dietary restrictions.</p>
                    </div>
                    <div className="menu-footer-actions">
                        <Link href="/contact" className="menu-btn-secondary">
                            Plan A Visit
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}

/* ── Category Block ── */
function MenuCategory({ category, index }: { category: any; index: number }) {
    const displayName =
        category.category === "GRILLS" ||
            category.category === "GRILLED" ||
            category.category === "GRILLES"
            ? "GRILLS"
            : category.category;

    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            className="menu-category"
        >
            <div className="menu-category-header">
                <div className="menu-category-line" />
                <h2 className="menu-category-title">{displayName}</h2>
                <div className="menu-category-line" />
            </div>

            <div className="menu-items">
                {category.items.map((item: any, idx: number) => (
                    <div key={idx} className="menu-item">
                        <div className="menu-item-row">
                            <span className="menu-item-name">
                                {item.name?.trim()}
                                {item.isVegetarian && <span className="menu-veg-dot" title="Vegetarian" />}
                                {item.isSpicy && <span className="menu-spicy" title="Spicy">🌶</span>}
                            </span>
                            <span className="menu-item-dots" />
                            <span className="menu-item-price">
                                {item.price?.includes("/")
                                    ? item.price.split("/")[0].trim()
                                    : item.price}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}
