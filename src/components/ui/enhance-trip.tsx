import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    title: "Cruise",
    image: "/placeholder.svg?height=300&width=400",
    link: "#",
  },
  {
    title: "Fun Activities",
    image: "/placeholder.svg?height=300&width=400",
    link: "#",
  },
  {
    title: "Travel Insurance",
    image: "/placeholder.svg?height=300&width=400",
    link: "#",
  },
  {
    title: "TPayLater",
    image: "/placeholder.svg?height=300&width=400",
    link: "#",
  },
]

export function EnhanceTrip() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Enhance your trip the way you like it</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <Card key={feature.title} className="overflow-hidden">
              <Link href={feature.link}>
                <Image
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EnhanceTrip
