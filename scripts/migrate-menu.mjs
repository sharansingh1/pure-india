import { createClient } from '@sanity/client';

// --- CONFIGURATION ---
// Please fill these in from your sanity.config.ts or .env file
const PROJECT_ID = '60d79hgh' //ce this!
const DATASET = 'production'; // Usually 'production'
const TOKEN = 'skUfc8QMMzz1SOPKamVRlqm7Fiyo1nyc3Eyigr5QQLLf1cOfoJD9GdEVpF48IjO5HlGp3jm68vr8QZqgbUu4aCsGu0CWs15dcoYoXMZHURaj6ZmduxJ55RGJWXhoJDeCpb1XDhV4rMx8V9iN6AhNqlD0ca1UauJFUYX8fBq4gXHj8cFpkzVF'

// --- MENU DATA ---
const menuItems = [
    {
        category: "APPETIZERS – VEG",
        items: [ 
            { name: "Masala Papad", price: "", description: "" },
            { name: "Paani Poori", price: "", description: "" },
            { name: "Veg Samosa", price: "", description: "" },
            { name: "Bread Pakora", price: "", description: "" },
            { name: "Samosa Chaat", price: "", description: "" },
            { name: "Bhelpuri Chaat", price: "", description: "" },
            { name: "Chole Puri/Bhature", price: "", description: "" },
            { name: "Gobi Manchurian", price: "", description: "" },
            { name: "Chilli Paneer", price: "", description: "" },
        ]
    },
    {
        category: "APPETIZERS – NON-VEG",
        items: [
            { name: "Egg Bhurji", price: "", description: "" },
            { name: "Egg Masala Omelette", price: "", description: "" },
            { name: "Chilli Chicken", price: "", description: "" },
            { name: "Chicken Malai Tikka", price: "", description: "" },
            { name: "Chicken Sheekh Kabab", price: "", description: "" },
            { name: "Lamb Sheekh Kabab", price: "", description: "" },
            { name: "Tandoori Chicken", price: "", description: "" },
        ]
    },
    {
        category: "VEG CURRY",
        items: [
            { name: "Dal Tadka", price: "", description: "" },
            { name: "Dal Makhani Tadka", price: "", description: "" },
            { name: "Chana Dal Tadka", price: "", description: "" },
            { name: "Moog Dal Tadka", price: "", description: "" },
            { name: "Dal Palak", price: "", description: "" },
            { name: "Saag Paneer", price: "", description: "" },
            { name: "Paneer Kadai", price: "", description: "" },
            { name: "Paneer Tikka Masala", price: "", description: "" },
            { name: "Malai Kofta", price: "", description: "" },
            { name: "Bhindi Masala", price: "", description: "" },
            { name: "Chana Masala", price: "", description: "" },
            { name: "Rajma Masala", price: "", description: "" },
            { name: "Mix Veg Curry", price: "", description: "" },
            { name: "Baigan Bherta", price: "", description: "" },
            { name: "Soyabean Curry Masala", price: "", description: "" },
            { name: "Punjabi Khadi Pakora", price: "", description: "" },
            { name: "Aloo Gobhi", price: "", description: "" },
            { name: "Aloo Matar", price: "", description: "" },
            { name: "Aloo Palak", price: "", description: "" },
            { name: "Aloo Baingan", price: "", description: "" },
            { name: "Aloo Methi", price: "", description: "" },
            { name: "Aloo Mushroom Curry", price: "", description: "" },
        ]
    },
    {
        category: "NON-VEG CURRY",
        items: [
            { name: "Egg Curry", price: "", description: "" },
            { name: "Chicken Curry", price: "", description: "" },
            { name: "Chicken Vindaloo", price: "", description: "" },
            { name: "Mango Chicken", price: "", description: "" },
            { name: "Chicken Saag", price: "", description: "" },
            { name: "Chicken Coconut Curry", price: "", description: "" },
            { name: "Butter Chicken", price: "", description: "" },
            { name: "Chicken Tikka Masala", price: "", description: "" },
            { name: "Chicken Kadai", price: "", description: "" },
            { name: "Lamb Curry", price: "", description: "" },
            { name: "Lamb Kadai", price: "", description: "" },
            { name: "Lamb Vindaloo", price: "", description: "" },
            { name: "Goat Curry", price: "", description: "" },
            { name: "Goat Kadai", price: "", description: "" },
            { name: "Goat Vindaloo", price: "", description: "" },
            { name: "Shrimp Curry", price: "", description: "" },
            { name: "Fish Curry", price: "", description: "" },
        ]
    },
    {
        category: "BIRYANI",
        items: [
            { name: "Egg Biryani", price: "", description: "" },
            { name: "Veg Biryani", price: "", description: "" },
            { name: "Chicken Biryani", price: "", description: "" },
            { name: "Goat Biryani", price: "", description: "" },
            { name: "Lamb Biryani", price: "", description: "" },
            { name: "Hyderabadi Chicken Biryani", price: "", description: "" },
            { name: "Vijayawada Chicken Biryani", price: "", description: "" },
        ]
    },
    {
        category: "RICE",
        items: [
            { name: "Veg Fried Rice", price: "", description: "" },
            { name: "Egg Fried Rice", price: "", description: "" },
            { name: "Chicken Fried Rice", price: "", description: "" },
            { name: "Jeera Rice", price: "", description: "" },
            { name: "Matar Pulao", price: "", description: "" },
        ]
    },
    {
        category: "DOSA",
        items: [
            { name: "Plain Dosa", price: "", description: "" },
            { name: "Masala Dosa", price: "", description: "" },
            { name: "Mysore Masala Dosa", price: "", description: "" },
        ]
    },
    {
        category: "BREAD",
        items: [
            { name: "Butter Tava Roti", price: "", description: "" },
            { name: "Butter Tandoor Roti", price: "", description: "" },
            { name: "Plain Naan", price: "", description: "" },
            { name: "Butter Naan", price: "", description: "" },
            { name: "Garlic Naan", price: "", description: "" },
            { name: "Aloo/Gobi Parantha", price: "", description: "" },
            { name: "Paneer Paratha", price: "", description: "" },
        ]
    },
    {
        category: "DRINKS",
        items: [
            { name: "Water Bottle", price: "", description: "" },
            { name: "Soda (Coke, Sprite, Fanta)", price: "", description: "" },
            { name: "Mango Lassi", price: "", description: "" },
            { name: "Salti Lassi", price: "", description: "" },
            { name: "Sweet Lassi", price: "", description: "" },
            { name: "Chai", price: "", description: "" },
            { name: "Milk Coffee", price: "", description: "" },
        ]
    },
    {
        category: "DESSERT",
        items: [
            { name: "Gulab Jamun", price: "", description: "" },
            { name: "Ras Malai", price: "", description: "" },
            { name: "Ras Gulla", price: "", description: "" },
        ]
    }
];

// --- SCRIPT ---

if (PROJECT_ID === 'YOUR_PROJECT_ID' || TOKEN === 'YOUR_SANITY_TOKEN') {
    console.error("❌ You must set PROJECT_ID and TOKEN in the script first!");
    process.exit(1);
}

const client = createClient({
    projectId: PROJECT_ID,
    dataset: DATASET,
    apiVersion: '2023-05-03',
    token: TOKEN,
    useCdn: false,
});

async function importData() {
    console.log("🚀 Starting import...");
    
    let count = 0;
    const transaction = client.transaction();

    for (const category of menuItems) {
        for (const item of category.items) {
            const doc = {
                _type: 'menuItem',
                name: item.name,
                price: item.price,
                description: item.description,
                category: category.category
            };
            transaction.create(doc);
            count++;
            console.log(`Preparing: ${item.name}`);
        }
    }

    console.log(`\n📦 Committing ${count} items to Sanity...`);
    
    try {
        await transaction.commit();
        console.log("✅ Import successful!");
    } catch (error) {
        console.error("❌ Import failed:", error);
    }
}

importData();

