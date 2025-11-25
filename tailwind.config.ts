import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                gold: "var(--gold)",
                "gold-light": "var(--gold-light)",
                "red-accent": "var(--red-accent)",
                "card-bg": "var(--card-bg)",
            },
            fontFamily: {
                playfair: ["var(--font-playfair)"],
                inter: ["var(--font-inter)"],
            },
        },
    },
    plugins: [],
};
export default config;
