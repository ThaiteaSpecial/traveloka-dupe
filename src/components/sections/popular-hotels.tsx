import Link from "next/link"
import { Button } from "@/components/ui/button" // Fix the import path

const popularHotels = [
    [
        { name: "The Trans Luxury Hotel", href: "#" },
        { name: "Horison Ultima Bandung", href: "#" },
        { name: "Pia Hotel Bandung", href: "#" },
        { name: "dPalma Hotel", href: "#" },
        { name: "Idea's Hotel Jalan Jakarta", href: "#" },
    ],
    [
        { name: "The Papandayan Hotel", href: "#" },
        { name: "Hotel Benua", href: "#" },
        { name: "Dbest Express", href: "#" },
        { name: "La Nostalgie Boutique Hotel", href: "#" },
        { name: "Tab Hotel Capsule Compact Bandung", href: "#" },
    ],
    [
        { name: "Grand Asrilia Hotel Convention & Restaurant", href: "#" },
        { name: "Avery De Grand City Hotel Bandung", href: "#" },
        { name: "Malaka Hotel Bandung", href: "#" },
        { name: "Urbanview Hotel Grand Malabar Bandung", href: "#" },
        { name: "RedDoorz ® Hotel Arimbi Dewi Sartika Baru", href: "#" },
    ],
    [
        { name: "Ibis Bandung Trans Studio", href: "#" },
        { name: "Chara Hotel", href: "#" },
        { name: "IDEA's Hotel Jalan Ibrahim Adjie", href: "#" },
        { name: "The New Batik Hotel", href: "#" },
        { name: "Ultima Guest House", href: "#" },
    ],
]

function PopularHotels() {
    return (
        <div className="py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold mb-6">Popular Hotels recommendation near The Trans Luxury Hotel</h2>
                <div className="grid md:grid-cols-4 gap-8">
                    {popularHotels.map((column, columnIndex) => (
                        <div key={columnIndex} className="space-y-2">
                            {column.map((hotel) => (
                                <Link key={hotel.name} href={hotel.href} className="block text-blue-600 hover:underline">
                                    {hotel.name}
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>

                <div className="mt-8 bg-blue-50 border border-blue-100 rounded-lg p-4">
                    <div className="flex items-center gap-2">
                        <span className="font-medium">Disclaimer:</span>
                        <p className="text-gray-600">
                            It is the hotel's responsibility to ensure that all photos are accurate. Traveloka will not be held
                            responsible for any photo inaccuracies.
                        </p>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <h3 className="text-xl font-bold mb-4">Haven't found what you're looking for?</h3>
                    <Button size="lg" className="bg-blue-custom hover:bg-blue-700 font-bold">
                        See Other Accommodations in Bandung
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default PopularHotels