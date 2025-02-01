"use client"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

const articles = [
    {
        title: "Travel Advisory: Bermuda Travel Guide",
        image: "https://ik.imagekit.io/tvlk/blog/2025/01/costa-rica-mob.png?tr=dpr-2,w-320",
        author: "Xperience Team",
        readTime: "Less than 1 min read",
    },
    {
        title: "Travel Advisory: Luxembourg Travel Guide",
        image: "https://ik.imagekit.io/tvlk/blog/2025/01/grenada-mob.png?tr=dpr-2,w-320",
        author: "Xperience Team",
        readTime: "Less than 1 min read",
    },
    {
        title: "Travel Advisory: Seychelles Travel Guide",
        image: "https://ik.imagekit.io/tvlk/blog/2025/01/Lithuania-mobile.png?tr=dpr-2,w-320",
        author: "Xperience Team",
        readTime: "Less than 1 min read",
    },
    {
        title: "Travel Advisory: Greenland Travel Guide",
        image: "https://ik.imagekit.io/tvlk/blog/2025/01/azerbaijan-mob.png?tr=dpr-2,w-320",
        author: "Xperience Team",
        readTime: "Less than 1 min read",
    },
]

export function TravelArticles() {
    return (
        <div className="py-8">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">📰 Read on and kickstart your adventure</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                    {articles.map((article) => (
                        <div key={article.title} className="overflow-hidden group">
                            <Link href="#" className="block">
                                <div className="relative overflow-hidden rounded-t-lg">
                                    <Image
                                        src={article.image || "/placeholder.svg"}
                                        alt={article.title}
                                        width={292}
                                        height={146}
                                        className="w-full aspect-[2/1] object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                                <div className="py-4">
                                    <h3 className="text-sm font-semibold mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">{article.title}</h3>
                                    <p className="text-xs text-muted-foreground line-clamp-2" style={{color: 'rgba(143, 143, 143, 1.00)', fontStyle: 'normal', fontWeight: 500}}>{article.author}</p>
                                    <p className="text-xs text-muted-foreground line-clamp-2" style={{color: 'rgba(143, 143, 143, 1.00)', fontStyle: 'normal', fontWeight: 500}}>{article.readTime}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="mt-8 text-center cursor-pointer">
                    <div className="p-2 rounded-md text-[#0194F3] bg-[#F7F9FA] hover:bg-[#F7F9FA] font-bold w-[273px] mx-auto">
                        Read Inspiring Articles <ChevronRight className="ml-1 h-4 w-4 inline" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TravelArticles