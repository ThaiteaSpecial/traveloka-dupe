"use client"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const articles = [
    {
        title: "Travel Advisory: Bermuda Travel Guide",
        image: "/placeholder.svg?height=300&width=400",
        author: "Xperience Team",
        readTime: "Less than 1 min read",
    },
    {
        title: "Travel Advisory: Luxembourg Travel Guide",
        image: "/placeholder.svg?height=300&width=400",
        author: "Xperience Team",
        readTime: "Less than 1 min read",
    },
    {
        title: "Travel Advisory: Seychelles Travel Guide",
        image: "/placeholder.svg?height=300&width=400",
        author: "Xperience Team",
        readTime: "Less than 1 min read",
    },
    {
        title: "Travel Advisory: Greenland Travel Guide",
        image: "/placeholder.svg?height=300&width=400",
        author: "Xperience Team",
        readTime: "Less than 1 min read",
    },
]

export function TravelArticles() {
    return (
        <div className="py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">📰 Read on and kickstart your adventure</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {articles.map((article) => (
                        <Card key={article.title} className="overflow-hidden">
                            <Link href="#" className="block">
                                <Image
                                    src={article.image || "/placeholder.svg"}
                                    alt={article.title}
                                    width={400}
                                    height={300}
                                    className="w-full h-48 object-cover"
                                />
                                <CardContent className="p-4">
                                    <h3 className="font-semibold mb-2 line-clamp-2">{article.title}</h3>
                                    <p className="text-sm text-muted-foreground">{article.author}</p>
                                    <p className="text-sm text-muted-foreground">{article.readTime}</p>
                                </CardContent>
                            </Link>
                        </Card>
                    ))}
                </div>
                <div className="mt-8 text-center">
                    <Button variant="outline" className="text-blue-600">
                        Read Inspiring Articles →
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default TravelArticles