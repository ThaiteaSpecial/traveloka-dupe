"use client"

import { useState } from "react"
import { Header } from "@/components/sections/header"
import { SearchForm } from "@/components/sections/search-form"
import { BannerCarousel } from "@/components/sections/banner-carousel"
import { CouponSection } from "@/components/sections/coupon-section"
import { EnhanceTrip } from "@/components/sections/enhance-trip"
import { BestDealsCarousel } from "@/components/sections/best-deals-carousel"
import { DestinationGrid } from "@/components/sections/destination-grid"
import { TravelGuides } from "@/components/sections/travel-guides"
import { TravelArticles } from "@/components/sections/travel-articles"
import { WhyBookWithUs } from "@/components/sections/why-book-with-us"
import { InterestsSection } from "@/components/sections/interests-section"
import { NewsletterAndAppDownload } from "@/components/sections/newsletter-and-app-download"
import { HotelList } from "@/components/sections/hotel-list"
import { Partners } from "@/components/sections/partners"
import { Footer } from "@/components/sections/footer"
import { hotels } from "@/lib/data"
import type { Hotel, SearchParams } from "@/lib/types"
import Layout from "@/components/templates/layout"

function Home() {
  const [filteredHotels, setFilteredHotels] = useState<any[]>(hotels)

  const handleSearch = (params: SearchParams) => {
    const filtered = hotels.filter((hotel: any) => {
      if (params.location && hotel.location !== params.location) {
        return false
      }
      if (params.rooms && hotel.rooms < params.rooms) {
        return false
      }
      return true
    })
    setFilteredHotels(filtered)
  }

  return (
    <Layout isTransparentHeader={true}>
      <main className="flex-1">
        <section className="relative">
          <div className="absolute inset-0 bg-[url('https://ik.imagekit.io/tvlk/image/imageResource/2025/01/05/1736039053734-c2b57da96ac28a1df692de44bc14660b.png?tr=q-75')] bg-cover bg-center -z-10">
            <div className="absolute inset-0 bg-black/40" />
          </div>

          <div className="relative container mx-auto px-4 pb-20 pt-[9rem]">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold text-white text-center mb-8">
                From Southeast Asia to the World, All Yours.
              </h1>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <SearchForm onSearch={handleSearch} />
              </div>
            </div>
          </div>
        </section>
        <section className="container mx-auto px-4 py-8">
          <div className="aspect-[48/11] w-full">
            <BannerCarousel />
          </div>
        </section>
        <div className="bg-[url('https://ik.imagekit.io/tvlk/image/imageResource/2024/10/08/1728356224894-e58e586e8919ff7f3bb1aa3e612ee9a4.jpeg?_src=imagekit&tr=dpr-2,q-40')] bg-cover bg-center">
          <section className="container mx-auto px-4">
            <CouponSection />
          </section>
        </div>
        <EnhanceTrip />
        <BestDealsCarousel />
        <DestinationGrid />
        <TravelGuides />
        <TravelArticles />
        <div className="bg-[url('https://ik.imagekit.io/tvlk/image/imageResource/2023/11/17/1700215562769-2f362de4d3cf5253829ed5a07c10c17b.png?tr=dpr-2,q-75')] bg-cover bg-center">
          <WhyBookWithUs />
        </div>
        <div className="bg-[url('https://ik.imagekit.io/tvlk/image/imageResource/2023/04/21/1682061066590-85ee56e96e55a4f5afe6a04afe8c55da.png?tr=dpr-2,q-75')] bg-cover bg-center">
          <InterestsSection />
        </div>
        <div>
          <NewsletterAndAppDownload />
        </div>
      </main>
    </Layout>
  )
}

export default Home