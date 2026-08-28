export interface MenuItemData {
    name: string;
    price: string;
    description?: string;
    isVegetarian?: boolean;
    featured?: boolean;
}

export interface MenuCategoryData {
    category: string;
    note?: string;
    items: MenuItemData[];
}

export const menuItems: MenuCategoryData[] = [
    {
        category: "APPETIZERS",
        items: [
            { name: "Halwa Puri", price: "$9.99", isVegetarian: true },
            { name: "Pani Puri", price: "$7.99" },
            { name: "Fish Pakora", price: "$14.99" },
            { name: "Assorted Veg Pakora Platter", price: "$11.99", isVegetarian: true },
            { name: "Veg Samosa", price: "$5.99", description: "2pc", isVegetarian: true },
            { name: "Punjabi Style Chole Bhature", price: "$9.99", isVegetarian: true },
            { name: "Wings and French Fries", price: "$15.00" },
        ]
    },
    {
        category: "INDO-CHINESE",
        items: [
            { name: "Chili Chicken", price: "$16.99" },
            { name: "Chili Paneer", price: "$15.99", isVegetarian: true },
            { name: "Veg Fried Rice", price: "$14.99", isVegetarian: true },
            { name: "Chicken Fried Rice", price: "$16.99" },
            { name: "Veg Chow Mein", price: "$12.99", isVegetarian: true },
            { name: "Chicken Chow Mein", price: "$14.99" },
            { name: "Momos", price: "$9.99" },
        ]
    },
    {
        category: "NON-VEG CURRY",
        items: [
            { name: "Chicken Curry", price: "$19.99" },
            { name: "Mango Chicken Curry", price: "$19.99" },
            { name: "Coconut Chicken Curry", price: "$19.99" },
            { name: "Butter Chicken", price: "$19.99" },
            { name: "Chicken Tikka Masala", price: "$19.99" },
            { name: "Goat Curry", price: "$21.99" },
            { name: "Shrimp Curry", price: "$21.99" },
            { name: "Fish Curry", price: "$21.99" },
        ]
    },
    {
        category: "VEG CURRY",
        items: [
            { name: "Aloo Gobi Sabzi", price: "$16.99", isVegetarian: true },
            { name: "Dal Tadka", price: "$16.99", isVegetarian: true },
            { name: "Dal Makhani", price: "$16.99", isVegetarian: true },
            { name: "Saag, No Paneer", price: "$16.99", isVegetarian: true },
            { name: "Saag Paneer", price: "$17.99", isVegetarian: true },
            { name: "Butter Paneer", price: "$17.99", isVegetarian: true },
            { name: "Malai Kofta", price: "$17.99", isVegetarian: true },
            { name: "Chana Masala", price: "$16.99", isVegetarian: true },
            { name: "Soya Chaap Masala", price: "$15.99", isVegetarian: true },
            { name: "Tofu Masala", price: "$12.99", isVegetarian: true },
            { name: "Vegan Chicken Masala", price: "$15.99", isVegetarian: true },
        ]
    },
    {
        category: "GRILLS",
        items: [
            { name: "Seekh Kabob", price: "$17.99" },
            { name: "Malai Tikka", price: "$17.99" },
            { name: "Chicken Tikka", price: "$17.99" },
            { name: "Tandoori Chicken", price: "$17.99" },
        ]
    },
    {
        category: "RICE",
        items: [
            { name: "Veg Biryani", price: "$14.99", isVegetarian: true },
            { name: "Chicken Biryani", price: "$16.99" },
            { name: "Plain Basmati Rice", price: "$4.99", isVegetarian: true },
        ]
    },
    {
        category: "BREADS",
        items: [
            { name: "Tandoori Roti", price: "$4.99" },
            { name: "Butter Naan", price: "$4.99" },
            { name: "Garlic Naan", price: "$4.99" },
            { name: "Garlic Chili Naan", price: "$4.99" },
            { name: "Paratha", price: "$7.99", description: "Choice of Aloo, Gobi, Methi, or Paneer — served with yogurt" },
            { name: "Kulcha", price: "$7.99", description: "Choice of Amritsari, Onion, Paneer, or Potato — served with yogurt" },
            { name: "Bhatura", price: "$4.99" },
        ]
    },
    {
        category: "MEDITERRANEAN",
        items: [
            { name: "Chicken Seekh Kebab", price: "$17.99", description: "Served with rice, naan, salad" },
            { name: "Lamb Seekh Kabob", price: "$17.99", description: "Served with rice, naan, salad" },
            { name: "Veggie Kabob", price: "$12.99", description: "Served with rice, naan, salad" },
            { name: "Chicken Shish Kabob", price: "$17.99", description: "Served with rice, naan, salad" },
            { name: "Lamb Shish Kabob", price: "$17.99", description: "Served with rice, naan, salad" },
            { name: "Chicken Shawarma Platter", price: "$17.99" },
            { name: "Falafel Platter", price: "$16.99" },
            { name: "Hummus", price: "$9.99" },
            { name: "Greek Salad", price: "$9.99" },
            { name: "Baba Ganoush", price: "$10.99" },
        ]
    },
    {
        category: "DESSERTS",
        items: [
            { name: "Suji Ka Halwa", price: "$7.99" },
            { name: "Gulab Jamun Ice Cream Sundae", price: "$10.99" },
            { name: "Jalebi Ice Cream Sundae", price: "$10.99" },
            { name: "Gulab Jamun", price: "$6.99", description: "3pc" },
            { name: "Ras Malai", price: "$6.99", description: "3pc" },
            { name: "Ras Gulla", price: "$6.99", description: "3pc" },
            { name: "Cham Cham", price: "$6.99", description: "3pc" },
            { name: "Rabri Malai Doodh", price: "$9.99" },
            { name: "Khoya Doodh", price: "$9.99" },
            { name: "Jalebi Doodh", price: "$9.99" },
        ]
    },
    {
        category: "DRINKS",
        items: [
            { name: "Rooh Afza", price: "$3.99" },
            { name: "Soda", price: "$3.99", description: "Coke, Diet Coke, Sprite, or Fanta" },
            { name: "Mango Lassi", price: "$6.99" },
            { name: "Chai", price: "$3.99" },
            { name: "Coffee", price: "$3.99" },
            { name: "Sweet Lassi", price: "$5.99" },
            { name: "Salted Lassi", price: "$5.99" },
        ]
    },
    {
        category: "MEAL SPECIALS",
        note: "Full-size restaurant portions — separate from our ToGo Boxes. Offers cannot be combined with other promotions or discounts.",
        items: [
            {
                name: "1-Entrée Meal Special",
                price: "$23.99",
                description: "Full-size entrée with basmati rice, naan & side salad. Choice of any vegetarian entrée, Chicken Curry, Mango Chicken Curry, Coconut Chicken Curry, Butter Chicken, or Chicken Tikka Masala. Premium entrées (Goat, Shrimp, Fish Curry) +$2",
            },
            {
                name: "2-Entrée Meal Special",
                price: "$41.99",
                featured: true,
                description: "Two full-size entrées with 2 basmati rice, 2 naan & a large side salad. Choose any 2 — duplicates allowed. Premium entrées (Goat, Shrimp, Fish Curry) +$2 each",
            },
            {
                name: "3-Entrée Meal Special",
                price: "$59.99",
                description: "Three full-size entrées with 3 basmati rice, 3 naan & a large side salad. Choose any 3 — duplicates allowed. Premium entrées (Goat, Shrimp, Fish Curry) +$2 each",
            },
        ]
    },
    {
        category: "TOGO BOX",
        items: [
            { name: "Veg Box", price: "$14.99", description: "2 veg entrées, basmati rice, 1 naan, side salad", isVegetarian: true },
            { name: "Non-Veg Box", price: "$16.99", description: "2 non-veg entrées, basmati rice, 1 naan, side salad" },
            { name: "Mixed Box", price: "$15.99", description: "1 non-veg entrée, 1 veg entrée, basmati rice, 1 naan, side salad" },
        ]
    },
];
