"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, ThumbsUp } from "lucide-react"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

const reviewTags = [
  { label: "Kids Friendly", count: 49 },
  { label: "Friendly Staffs", count: 61 },
  { label: "Excellent Service", count: 6 },
  { label: "Tasty Breakfast", count: 8 },
  { label: "Complete Facilities", count: 20 },
  { label: "Comfortable Room", count: 26 },
]

const guestPhotos = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-aHwhDtLFjYMqIjcdUrrml4IPBDxF2w.png",
    alt: "Guest room photo",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-aHwhDtLFjYMqIjcdUrrml4IPBDxF2w.png",
    alt: "Amenities photo",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-aHwhDtLFjYMqIjcdUrrml4IPBDxF2w.png",
    alt: "Pool photo",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-aHwhDtLFjYMqIjcdUrrml4IPBDxF2w.png",
    alt: "Room interior photo",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-aHwhDtLFjYMqIjcdUrrml4IPBDxF2w.png",
    alt: "Living area photo",
  },
]

const ratingCategories = [
  { label: "Fantastic", count: 3539 },
  { label: "Very Good", count: 2313 },
  { label: "Satisfying", count: 121 },
  { label: "Average", count: 337 },
  { label: "Poor", count: 0 },
]

const aspectRatings = [
  { aspect: "Cleanliness", rating: 5 },
  { aspect: "Comfort", rating: 5 },
  { aspect: "Meal", rating: 5 },
  { aspect: "Location", rating: 5 },
  { aspect: "Service", rating: 5 },
]

function HotelReviews() {
  const [selectedTag, setSelectedTag] = useState("All")

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-6">Reviews from Guests</h2>

      {/* Guest Photos */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Most Recent Photos by Guests</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {guestPhotos.map((photo, index) => (
            <div key={index} className="relative aspect-square overflow-hidden rounded-lg">
              <Image src={photo.src || "/placeholder.svg"} alt={photo.alt} fill className="object-cover" />
              {index === guestPhotos.length - 1 && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <span className="text-white font-medium">+31 Photos</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Overall Rating */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-4xl font-bold text-white">9.0</span>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">Impressive</div>
              <div className="text-gray-600">From 6,309 verified guests reviews</div>
            </div>
          </div>
          <div className="space-y-2">
            {ratingCategories.map((category) => (
              <div key={category.label} className="flex items-center justify-between">
                <span>{category.label}</span>
                <div className="flex items-center gap-2">
                  <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-600"
                      style={{
                        width: `${(category.count / ratingCategories[0].count) * 100}%`,
                      }}
                    />
                  </div>
                  <span className="text-gray-600 min-w-[4ch]">{category.count}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Rating by Category</h3>
          <div className="space-y-3">
            {aspectRatings.map((aspect) => (
              <div key={aspect.aspect} className="flex items-center justify-between">
                <span>{aspect.aspect}</span>
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < aspect.rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"
                      }`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Review Filters */}
      <div className="space-y-4 mb-8">
        <h3 className="font-semibold">Show reviews that mention...</h3>
        <div className="flex flex-wrap gap-2">
          <Button variant={selectedTag === "All" ? "default" : "outline"} onClick={() => setSelectedTag("All")}>
            All
          </Button>
          {reviewTags.map((tag) => (
            <Button
              key={tag.label}
              variant={selectedTag === tag.label ? "default" : "outline"}
              onClick={() => setSelectedTag(tag.label)}
            >
              {tag.label} ({tag.count})
            </Button>
          ))}
        </div>

        <div className="flex flex-wrap gap-4">
          <Select defaultValue="recent">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recent">Most Recent</SelectItem>
              <SelectItem value="highest">Highest Rating</SelectItem>
              <SelectItem value="lowest">Lowest Rating</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">See all reviews</SelectItem>
              <SelectItem value="positive">Positive</SelectItem>
              <SelectItem value="negative">Negative</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="en">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="id">Bahasa Indonesia</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Review List */}
      <div className="space-y-6">
        {/* Sample reviews */}
        <div className="border rounded-lg p-4">
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="font-medium">N***a</div>
              <div className="text-sm text-gray-500">This is a guest profile.</div>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 fill-blue-600 text-blue-600" />
              <span className="font-medium">9.7 / 10</span>
            </div>
          </div>
          <p className="mb-4">
            Pricy but satisfying to stay with family. Very recomended, I except the meals less variety the restaurant
            very crowded.
          </p>
          <Button variant="ghost" size="sm" className="gap-2">
            <ThumbsUp className="h-4 w-4" />
            Like this review?
          </Button>
        </div>

        <div className="border rounded-lg p-4">
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="font-medium">a***y</div>
              <div className="text-sm text-gray-500">This is a guest profile.</div>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 fill-blue-600 text-blue-600" />
              <span className="font-medium">10 / 10</span>
            </div>
          </div>
          <p className="mb-4">Nice nice nice family holiday</p>
          <Button variant="ghost" size="sm" className="gap-2">
            <ThumbsUp className="h-4 w-4" />
            Like this review?
          </Button>
        </div>
      </div>
      <div className="mt-8 flex justify-center">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}

export default HotelReviews