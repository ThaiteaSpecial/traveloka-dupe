"use client"

import { useState } from "react"
import { Header } from "@/components/ui/header"
import { SearchForm } from "@/components/ui/search-form"
import { BannerCarousel } from "@/components/ui/banner-carousel"
import { CouponSection } from "@/components/ui/coupon-section"
import { EnhanceTrip } from "@/components/ui/enhance-trip"
import { BestDealsCarousel } from "@/components/ui/best-deals-carousel"
import { DestinationGrid } from "@/components/ui/destination-grid"
import { TravelGuides } from "@/components/ui/travel-guides"
import { TravelArticles } from "@/components/ui/travel-articles"
import { WhyBookWithUs } from "@/components/ui/why-book-with-us"
import { InterestsSection } from "@/components/ui/interests-section"
import { NewsletterAndAppDownload } from "@/components/ui/newsletter-and-app-download"
import { HotelList } from "@/components/ui/hotel-list"
import { Partners } from "@/components/ui/partners"
import { Footer } from "@/components/ui/footer"
import { hotels } from "@/lib/data"
import type { Hotel, SearchParams } from "@/lib/types"
import Layout from "@/components/templates/layout"

function Home() {
  const [filteredHotels, setFilteredHotels] = useState<Hotel[]>(hotels)

  const handleSearch = (params: SearchParams) => {
    const filtered = hotels.filter((hotel) => {
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
    <Layout>
      <main className="flex-1">
        <section className="relative">
          <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center -z-10">
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
        <Partners />
        <section className="container mx-auto px-4 py-8">
          <div className="aspect-[48/11] w-full">
            <BannerCarousel />
          </div>
        </section>
        <section className="container mx-auto px-4 py-8">
          <CouponSection />
        </section>
        <EnhanceTrip />
        <BestDealsCarousel /> {/* Replaced BestDeals with BestDealsCarousel */}
        <DestinationGrid />
        <TravelGuides />
        <TravelArticles />
        <WhyBookWithUs />
        <InterestsSection />
        <NewsletterAndAppDownload />
      </main>
    </Layout>
  )
}

export default Home