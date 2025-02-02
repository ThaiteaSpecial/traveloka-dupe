"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Calendar, Users, Search, ChevronRight } from "lucide-react"
import HotelGallery from "@/components/sections/hotel-gallery"
import HotelHeader from "@/components/sections/hotel-header"
import HotelInfo from "@/components/sections/hotel-info"
import RoomSection from "@/components/sections/room-section"
import AppDownloadBanner from "@/components/sections/app-download-banner"
import SimilarHotels from "@/components/sections/similar-hotels"
import HotelLocation from "@/components/sections/hotel-location"
import HotelFacilities from "@/components/sections/hotel-facilities"
import CleanStay from "@/components/sections/clean-stay"
import HotelPolicy from "@/components/sections/hotel-policy"
import HotelReviews from "@/components/sections/hotel-reviews"
import HotelCTA from "@/components/sections/hotel-cta"
import PopularHotels from "@/components/sections/popular-hotels"
import { FC, useState, useEffect, useRef } from "react"
import { Content } from "@prismicio/client"
import { SliceComponentProps } from "@prismicio/react"
import SearchBar from "@/components/sections/search-bar"
import { useRouter } from "next/navigation"
import { useSearchStore } from "@/store/useSearchStore"
import type { SearchParams } from "@/lib/types"


export type DetailHotelProps = SliceComponentProps<Content.DetailHotelSlice>

const DetailHotel: FC<DetailHotelProps> = ({ slice }) => {
  const router = useRouter()
  const { search } = useSearchStore()
  const [activeTab, setActiveTab] = useState("overview")
  const [activeSection, setActiveSection] = useState("overview")
  const [isScrolled, setIsScrolled] = useState(false)

  const handleSearch = (params: SearchParams) => {
    // Update store with search params
    search(params)
    
    // Redirect to search page
    const urlSearchParams = new URLSearchParams({
      checkIn: params.checkIn.toISOString(),
      checkOut: params.checkOut.toISOString(),
      rooms: params.rooms.toString(),
      guests: params.guests.toString()
    })

    router.push(`/search/${encodeURIComponent(params.location)}?${urlSearchParams.toString()}`)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 128) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const overviewRef = useRef<HTMLDivElement>(null)
  const roomsRef = useRef<HTMLDivElement>(null)
  const locationRef = useRef<HTMLDivElement>(null)
  const facilitiesRef = useRef<HTMLDivElement>(null)
  const policyRef = useRef<HTMLDivElement>(null)
  const reviewsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 },
    )

    const refs = [overviewRef, roomsRef, locationRef, facilitiesRef, policyRef, reviewsRef]
    refs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current)
      }
    })

    return () => {
      refs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current)
        }
      })
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div style={{ marginTop: "6rem" }} className="min-h-screen bg-gray-50">
        <div className={`transition-all duration-300 transform
          ${isScrolled
            ? 'fixed top-0 left-0 right-0 z-50 translate-y-0'
            : 'relative -translate-y-0'}
          bg-white
          `}>
          <div className="container mx-auto px-4">
            <SearchBar initialParams={{
              location: "",
              checkIn: new Date(),
              checkOut: new Date(Date.now() + 24 * 60 * 60 * 1000),
              rooms: 1,
              guests: 1
            }} onSearch={handleSearch} />
          </div>
        </div>

        {/* Navigation */}
        <div style={{
          backgroundColor: 'white',
          borderBottom: '1px solid #e5e7eb',
          transition: 'all 300ms',
          transform: isScrolled ? 'translateY(0)' : 'translateY(0)',
          position: isScrolled ? 'fixed' : 'sticky',
          top: isScrolled ? '65px' : '60px',
          left: isScrolled ? 0 : undefined,
          right: isScrolled ? 0 : undefined,
          zIndex: 50
        }}>
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <div className="flex space-x-4">
                {["overview", "rooms", "location", "facilities", "policy", "reviews"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => scrollToSection(tab)}
                    style={{
                      padding: '1rem 1.5rem',
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      transition: 'colors 300ms',
                      color: activeSection === tab ? '#2563eb' : '#4b5563',
                      borderBottom: activeSection === tab ? '2px solid #2563eb' : undefined
                    }}
                    onMouseOver={(e) => e.currentTarget.style.color = '#2563eb'}
                    onMouseOut={(e) => e.currentTarget.style.color = activeSection === tab ? '#2563eb' : '#4b5563'}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
              <Button variant="ghost" className="text-blue-custom font-semibold">
                Save accommodation
              </Button>
            </div>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center text-sm text-muted-foreground">
            <Link href="/" className="hover:text-blue-600">
              Hotel
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span>{slice.primary.name_hotel}</span>
          </div>
        </div>

        <main className="container mx-auto px-4 py-6">
          <div className="flex gap-8">
            <div className="flex-1">
              <div id="overview" ref={overviewRef}>
                <HotelGallery images={slice.primary.images} />
                <div className="bg-white border-t border-l border-r border-gray-200 rounded-t-lg p-4">
                  <HotelHeader hotel={slice.primary} />
                  <HotelInfo hotel={slice.primary} />
                </div>
              </div>
              <div id="rooms" className="bg-white border-l border-r border-gray-200 p-4" ref={roomsRef}>
                <RoomSection data={slice.primary} />
              </div>
              <div id="location" className="bg-white border-l border-r border-gray-200 p-4" ref={locationRef}>
                <HotelLocation data={slice.primary} />
              </div>
              <div id="facilities" className="bg-white border-l border-r border-gray-200 p-4" ref={facilitiesRef}>
                <HotelFacilities data={slice.primary} />
              </div>
              <div id="policy" className="bg-white border-l border-r border-gray-200 p-4" ref={policyRef}>
                <HotelPolicy data={slice.primary} />
              </div>
              <div id="reviews" className="bg-white border-l border-r border-gray-200 p-4" ref={reviewsRef}>
                <HotelReviews data={slice.primary} />
              </div>
              <div className="bg-white border-l border-r border-b rounded-b-lg border-gray-200">
                {/* <SimilarHotels /> */}
                <HotelCTA data={slice.primary} />
                <PopularHotels data={slice.primary} />
              </div>
            </div>

          </div>
        </main>


      </div>
    </section>
  )
}

export default DetailHotel