import { ShoppingBag, Calendar, CreditCard } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const reasons = [
    {
        icon: ShoppingBag,
        title: "One place for all your needs",
        icon_name: "https://ik.imagekit.io/tvlk/image/imageResource/2023/06/14/1686717876390-f8c5c3c3a19ab6bf8fbd9efc9a168f8a.webp?tr=dpr-2,h-64,q-75,w-64",
        description: "From flights, stays, to sights, just count on our <b>complete products</b> and <b>Travel Guides</b>.",
    },
    {
        icon: Calendar,
        title: "Flexible booking options",
        icon_name: "https://ik.imagekit.io/tvlk/image/imageResource/2023/06/14/1686717879180-0b20eabf785084d44f89225f881a0784.webp?tr=dpr-2,h-64,q-75,w-64",
        description: "Sudden change of plan? No worries! <b>Reschedule</b> or <b>Refund</b> without hassle.",
    },
    {
        icon: CreditCard,
        title: "Secure & convenient payment",
        icon_name: "https://ik.imagekit.io/tvlk/image/imageResource/2023/06/14/1686717882046-98e3f26be236426c75fab95bb3e26f25.webp?tr=dpr-2,h-64,q-75,w-64",
        description: "Enjoy many <b>secure ways to pay</b>, in the currency that's most convenient for you.",
    },
]

export function WhyBookWithUs() {
    return (
        <section className="py-8">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold mb-4">Why book with Traveloka?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {reasons.map((reason, index) => (
                        <div key={index} className="bg-white rounded-lg border border-gray-100 shadow-none hover:shadow-lg transition-shadow w-full p-4 max-h-32 flex items-center justify-center">
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 rounded-full bg-[#E7F7FF] flex items-center justify-center flex-shrink-0">
                                    <img src={reason.icon_name} alt={reason.title} className="w-16 h-16" />
                                </div>
                                <div className="flex flex-col justify-center">
                                    <h3 className="text-lg font-bold text-[#262626] mb-1">{reason.title}</h3>
                                    <span className="text-base leading-tight" dangerouslySetInnerHTML={{ __html: reason.description }} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WhyBookWithUs