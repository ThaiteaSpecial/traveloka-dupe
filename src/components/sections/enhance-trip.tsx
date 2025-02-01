import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    title: "Cruise",
    image: "https://ik.imagekit.io/tvlk/image/imageResource/2024/11/07/1730948366200-73acf6f22bc7d33bfdecf0df359ce586.jpeg?tr=dpr-2,q-75,w-320",
    link: "#",
  },
  {
    title: "Fun Activities",
    image: "https://ik.imagekit.io/tvlk/image/imageResource/2023/06/20/1687227682697-02305318f6999d0142ef2261c167d374.png?tr=dpr-2,q-75,w-320",
    link: "#",
  },
  {
    title: "Travel Insurance",
    image: "https://ik.imagekit.io/tvlk/image/imageResource/2023/06/20/1687227690463-708b02ea6e23476821e4ecb856cb43aa.png?tr=dpr-2,q-75,w-320",
    link: "#",
  },
  {
    title: "TPayLater",
    image: "https://ik.imagekit.io/tvlk/image/imageResource/2024/10/15/1728961653189-086ff8d052e9137786ec6f6365997844.png?tr=dpr-2,q-75,w-320",
    link: "#",
  },
]

export function EnhanceTrip() {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Enhance your trip the way you like it</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {features.map((feature) => (
            <Card key={feature.title} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <Link href={feature.link}>
                <Image
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="font-semibold text-[14px] text-[rgba(67,67,67,1.00)] font-normal [-webkit-line-clamp:2]">{feature.title}</h3>
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
