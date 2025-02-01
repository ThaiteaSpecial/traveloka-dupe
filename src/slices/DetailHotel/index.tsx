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

export type DetailHotelProps = SliceComponentProps<Content.DetailHotelSlice>

const DetailHotel: FC<DetailHotelProps> = ({ slice }) => {
  const [activeTab, setActiveTab] = useState("overview")
  const [activeSection, setActiveSection] = useState("overview")
  const [isScrolled, setIsScrolled] = useState(false)

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
            <div className="flex items-center gap-4 py-4">
              <div className="flex-1 flex items-center gap-4">
                <div className="flex-1">
                  <Button size="lg" variant="outline" className="w-full justify-start">
                    <MapPin className="mr-2 h-4 w-4" />
                    The Trans Luxury Hotel
                  </Button>
                </div>
                <div className="flex-1">
                  <Button size="lg" variant="outline" className="w-full justify-start">
                    <Calendar className="mr-2 h-4 w-4" />
                    01 Feb - 02 Feb, 1 night(s)
                  </Button>
                </div>
                <div className="flex-1">
                  <Button size="lg" variant="outline" className="w-full justify-start">
                    <Users className="mr-2 h-4 w-4" />1 Adult(s), 0 Child, 1 Room
                  </Button>
                </div>
              </div>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Search className="mr-2 h-4 w-4" />
                Search Hotels
              </Button>
            </div>
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
              <Button variant="ghost" className="text-blue-600">
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
            <Link href="/" className="hover:text-blue-600">
              Indonesia (55,613 Hotels)
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link href="/" className="hover:text-blue-600">
              West Java (10,244 Hotels)
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link href="/" className="hover:text-blue-600">
              Bandung (3,950 Hotels)
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link href="/" className="hover:text-blue-600">
              Buahbatu (167 Hotels)
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span>The Trans Luxury Hotel</span>
          </div>
        </div>

        <main className="container mx-auto px-4 py-6">
          <div className="flex gap-8">
            <div className="flex-1">
              <div id="overview" ref={overviewRef}>
                <HotelGallery />
                <div className="bg-white border-t border-l border-r border-gray-200 rounded-t-lg p-4">
                  <HotelHeader />
                  <HotelInfo />
                </div>
              </div>
              <div id="rooms" className="bg-white border-l border-r border-gray-200 p-4" ref={roomsRef}>
                <RoomSection />
              </div>
              <div id="location" className="bg-white border-l border-r border-gray-200 p-4" ref={locationRef}>
                <HotelLocation />
              </div>
              <div id="facilities" className="bg-white border-l border-r border-gray-200 p-4" ref={facilitiesRef}>
                <HotelFacilities />
              </div>
              <div id="policy" className="bg-white border-l border-r border-gray-200 p-4" ref={policyRef}>
                <HotelPolicy />
              </div>
              <div id="reviews" className="bg-white border-l border-r border-gray-200 p-4" ref={reviewsRef}>
                <HotelReviews />
              </div>
              <div className="bg-white border-l border-r border-b rounded-b-lg border-gray-200 p-4">
                {/* <SimilarHotels /> */}
                <HotelCTA />
                <PopularHotels />
              </div>
            </div>

          </div>
        </main>


      </div>
    </section>
  )
}

export default DetailHotel