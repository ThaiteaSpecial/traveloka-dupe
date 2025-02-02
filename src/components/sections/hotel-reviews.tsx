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
        src: "https://ik.imagekit.io/tvlk/ugc-review/guys1L+Yyer9kzI3sp-pb0CG1j2bhflZGFUZOoIf1YOBAm37kEUOKR41ieUZm7ZJ/ugc-photo-ap-southeast-1-581603780057-acd24e232f75f09e/ACCOMMODATION/13042042_ACCOMMODATION_1688829369534_d633b970398350f6?_src=imagekit&tr=dpr-2,h-145,q-40,w-145",
        alt: "Guest room photo",
    },
    {
        src: "https://ik.imagekit.io/tvlk/ugc-review/guys1L+Yyer9kzI3sp-pb0CG1j2bhflZGFUZOoIf1YOBAm37kEUOKR41ieUZm7ZJ/ugc-photo-ap-southeast-1-581603780057-acd24e232f75f09e/ACCOMMODATION/13042042_ACCOMMODATION_1688829369534_0cf599c39d7ccafc?_src=imagekit&tr=dpr-2,c-at_max,f-jpg,h-360,pr-true,q-40,w-640",
        alt: "Amenities photo",
    },
    {
        src: "https://ik.imagekit.io/tvlk/ugc-review/guys1L+Yyer9kzI3sp-pb0CG1j2bhflZGFUZOoIf1YOBAm37kEUOKR41ieUZm7ZJ/ugc-photo-ap-southeast-1-581603780057-acd24e232f75f09e/ACCOMMODATION/14247121_ACCOMMODATION_1617374744755_f7e4c4aa18bb7231?_src=imagekit&tr=dpr-2,c-at_max,f-jpg,h-360,pr-true,q-40,w-640",
        alt: "Pool photo",
    },
    {
        src: "https://ik.imagekit.io/tvlk/ugc-review/guys1L+Yyer9kzI3sp-pb0CG1j2bhflZGFUZOoIf1YOBAm37kEUOKR41ieUZm7ZJ/ugc-photo-ap-southeast-1-581603780057-acd24e232f75f09e/ACCOMMODATION/14766987_ACCOMMODATION_1558202596574_3eb7144386abb234?_src=imagekit&tr=dpr-2,c-at_max,f-jpg,h-360,pr-true,q-40,w-640",
        alt: "Room interior photo",
    },
    {
        src: "https://ik.imagekit.io/tvlk/ugc-review/guys1L+Yyer9kzI3sp-pb0CG1j2bhflZGFUZOoIf1YOBAm37kEUOKR41ieUZm7ZJ/ugc-photo-ap-southeast-1-581603780057-acd24e232f75f09e/ACCOMMODATION/16676105_ACCOMMODATION_1533431708302_a9469dd074234a6a?_src=imagekit&tr=dpr-2,c-at_max,f-jpg,h-360,pr-true,q-40,w-640",
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

const dummyReviews = [
    {
        id: 1,
        name: "N***a",
        profile: "This is a guest profile.",
        rating: 9.7,
        review: "Pricy but satisfying to stay with family. Very recomended, I except the meals less variety the restaurant very crowded.",
        language: "en",
        category: "positive",
        date: "2024-04-01",
        tags: ["Kids Friendly", "Friendly Staffs"]
    },
    {
        id: 2,
        name: "a***y",
        profile: "This is a guest profile.",
        rating: 10,
        review: "Nice nice nice family holiday",
        language: "en",
        category: "positive",
        date: "2024-03-31",
        tags: ["Complete Facilities", "Comfortable Room"]
    },
    {
        id: 3,
        name: "R***n",
        profile: "Business traveler",
        rating: 8.5,
        review: "Sangat nyaman untuk menginap, pelayanan ramah.",
        language: "id",
        category: "positive",
        date: "2024-03-30",
        tags: ["Friendly Staffs", "Excellent Service"]
    },
    {
        id: 4,
        name: "M***k",
        profile: "Solo traveler",
        rating: 6.5,
        review: "Room service was slow, but the location is great.",
        language: "en",
        category: "negative",
        date: "2024-03-29",
        tags: ["Complete Facilities"]
    },
    {
        id: 5,
        name: "S***a",
        profile: "Family vacation",
        rating: 9.2,
        review: "Perfect for family vacation! Kids loved the pool.",
        language: "en",
        category: "positive",
        date: "2024-03-28",
        tags: ["Kids Friendly", "Complete Facilities"]
    }
];

function HotelReviews({ data }: { data: any }) {
    const [selectedTag, setSelectedTag] = useState("All")
    const [sortBy, setSortBy] = useState("recent")
    const [category, setCategory] = useState("all")
    const [language, setLanguage] = useState("en")
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 2

    const filteredReviews = dummyReviews
        .filter(review => {
            if (selectedTag === "All") return true;
            return review.tags.includes(selectedTag);
        })
        .filter(review => {
            if (category === "all") return true;
            return review.category === category;
        })
        .filter(review => {
            if (language === "all") return true;
            return review.language === language;
        })
        .sort((a, b) => {
            switch (sortBy) {
                case "recent":
                    return new Date(b.date).getTime() - new Date(a.date).getTime();
                case "highest":
                    return b.rating - a.rating;
                case "lowest":
                    return a.rating - b.rating;
                default:
                    return 0;
            }
        });

    const totalPages = Math.ceil(filteredReviews.length / itemsPerPage);
    const currentReviews = filteredReviews.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div className="mt-8">
            <h2 className="text-xl font-bold mb-6">Reviews from Guests</h2>

            <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">Most Recent Photos by Guests</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {guestPhotos.map((photo, index) => (
                        <div key={index} className="relative aspect-square overflow-hidden rounded-lg">
                            <Image src={photo.src || "/placeholder.svg"} alt={photo.alt} fill className="object-cover" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Overall Rating */}
            <div className="mb-8">

                <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Overall Rating & Reviews</h3>
                    <div className="text-gray-600 text-sm">From <span className="font-bold">6,309</span> verified guests reviews</div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center">
                                <span className="text-4xl font-bold text-white">{data?.review_ratings}</span>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-blue-600">Impressive</div>
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
                        <div>
                            <div className="space-y-3">
                                {aspectRatings.map((aspect) => (
                                    <div key={aspect.aspect} className="flex items-center justify-between">
                                        <span>{aspect.aspect}</span>
                                        <div className="flex">
                                            {Array.from({ length: 5 }).map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className={`h-5 w-5 ${i < aspect.rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Review Filters */}
            <div className="space-y-4 mb-8 border rounded-lg p-4">
                <h3 className="font-semibold">Show reviews that mention...</h3>
                <div className="flex flex-wrap gap-2">
                    <Button 
                        variant={selectedTag === "All" ? "default" : "outline"} 
                        onClick={() => setSelectedTag("All")} 
                        className={selectedTag === "All" ? "bg-blue-custom hover:bg-blue-custom font-bold text-white" : "hover:bg-gray-100"}
                    >
                        All
                    </Button>
                    {reviewTags.map((tag) => (
                        <Button
                            key={tag.label}
                            variant={selectedTag === tag.label ? "default" : "outline"}
                            onClick={() => setSelectedTag(tag.label)}
                            className={selectedTag === tag.label ? "bg-blue-custom hover:bg-blue-custom font-bold text-white" : "hover:bg-gray-100"}
                        >
                            {tag.label} ({tag.count})
                        </Button>
                    ))}
                </div>

                <div className="flex flex-wrap gap-4">
                    <Select value={sortBy} onValueChange={setSortBy}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Sort by" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="recent">Most Recent</SelectItem>
                            <SelectItem value="highest">Highest Rating</SelectItem>
                            <SelectItem value="lowest">Lowest Rating</SelectItem>
                        </SelectContent>
                    </Select>

                    <Select value={category} onValueChange={setCategory}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Category" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">See all reviews</SelectItem>
                            <SelectItem value="positive">Positive</SelectItem>
                            <SelectItem value="negative">Negative</SelectItem>
                        </SelectContent>
                    </Select>

                    <Select value={language} onValueChange={setLanguage}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Language" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Languages</SelectItem>
                            <SelectItem value="en">English</SelectItem>
                            <SelectItem value="id">Bahasa Indonesia</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            {/* Review List */}
            <div className="space-y-6">
                {currentReviews.map((review) => (
                    <div key={review.id} className="border rounded-lg p-4">
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <div className="font-medium">{review.name}</div>
                                <div className="text-sm text-gray-500">{review.profile}</div>
                            </div>
                            <div className="flex items-center gap-2">
                                <Star className="h-5 w-5 fill-blue-600 text-blue-600" />
                                <span className="font-medium">{review.rating} / 10</span>
                            </div>
                        </div>
                        <p className="mb-4">{review.review}</p>
                        <div className="flex gap-2 mb-4">
                            {review.tags.map((tag, index) => (
                                <span key={index} className="text-sm bg-gray-100 px-2 py-1 rounded">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <Button variant="ghost" size="sm" className="gap-2">
                            <ThumbsUp className="h-4 w-4" />
                            Like this review?
                        </Button>
                    </div>
                ))}
            </div>

            <div className="mt-8 flex justify-end">
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious 
                                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                                className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                            />
                        </PaginationItem>
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <PaginationItem key={page}>
                                <PaginationLink
                                    onClick={() => setCurrentPage(page)}
                                    isActive={currentPage === page}
                                    className="cursor-pointer"
                                >
                                    {page}
                                </PaginationLink>
                            </PaginationItem>
                        ))}
                        <PaginationItem>
                            <PaginationNext
                                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                                className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                            />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </div>
    )
}

export default HotelReviews