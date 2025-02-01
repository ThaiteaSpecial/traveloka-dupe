import { ShoppingBag, Calendar, CreditCard } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const reasons = [
    {
        icon: ShoppingBag,
        title: "One place for all your needs",
        description: "From flights, stays, to sights, just count on our complete products and Travel Guides.",
    },
    {
        icon: Calendar,
        title: "Flexible booking options",
        description: "Sudden change of plan? No worries! Reschedule or Refund without hassle.",
    },
    {
        icon: CreditCard,
        title: "Secure & convenient payment",
        description: "Enjoy many secure ways to pay, in the currency that's most convenient for you.",
    },
]

export function WhyBookWithUs() {
    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold mb-8">Why book with TravelApp?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {reasons.map((reason, index) => (
                        <Card key={index}>
                            <CardContent className="flex flex-col items-center text-center p-6">
                                <reason.icon className="w-12 h-12 text-blue-500 mb-4" />
                                <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
                                <p className="text-gray-600">{reason.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WhyBookWithUs