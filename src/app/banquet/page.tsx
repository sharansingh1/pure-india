import { Metadata } from "next";
import BanquetPageContent from "./BanquetPageContent";

export const metadata: Metadata = {
  title: "Banquet Hall & Party Venue Las Vegas | Pure Indian Cuisine",
  description: "Host your wedding, corporate event, or party at our elegant banquet hall in Las Vegas. Capacity for 500 guests with full catering services.",
  keywords: ["Banquet Hall Las Vegas", "Wedding Venue Las Vegas", "Party Hall Rental", "Indian Wedding Venue", "Corporate Event Space Las Vegas"],
};

export default function BanquetPage() {
    return <BanquetPageContent />;
}
