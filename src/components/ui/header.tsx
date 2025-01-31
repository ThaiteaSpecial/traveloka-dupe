"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Globe, ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className={`
            fixed top-0 left-0 right-0 w-full z-50
            transition-all duration-300
            ${isScrolled
                ? 'bg-white/80 backdrop-blur-md shadow-md text-gray-800'
                : 'bg-transparent text-white'}
        `}>
            <div className="container mx-auto">
                <div className={`
                    flex items-center justify-end py-2 px-4 text-sm
                    transition-all duration-300 border-b
                    ${isScrolled
                        ? 'lg:h-auto border-gray-200'
                        : 'h-auto opacity-100 border-white/20'}
                `}>
                    <div className="flex items-center space-x-4">
                        <button className={`
                            flex items-center text-sm transition-colors
                            ${isScrolled
                                ? 'hover:text-blue-600'
                                : 'hover:text-gray-200'}
                        `}>
                            <Globe className="h-4 w-4 mr-1" />
                            EN
                            <ChevronDown className="h-4 w-4 ml-1" />
                        </button>
                        <button className={`
                            flex items-center text-sm transition-colors
                            ${isScrolled
                                ? 'hover:text-blue-600'
                                : 'hover:text-gray-200'}
                        `}>
                            IDR
                            <ChevronDown className="h-4 w-4 ml-1" />
                        </button>
                        <Link href="#" className={`transition-colors ${isScrolled ? 'hover:text-blue-600' : 'hover:text-gray-200'}`}>
                            Deals
                        </Link>
                        <Link href="#" className={`transition-colors ${isScrolled ? 'hover:text-blue-600' : 'hover:text-gray-200'}`}>
                            Support
                        </Link>
                        <Link href="#" className={`transition-colors ${isScrolled ? 'hover:text-blue-600' : 'hover:text-gray-200'}`}>
                            Partnership
                        </Link>
                        <Link href="#" className={`transition-colors ${isScrolled ? 'hover:text-blue-600' : 'hover:text-gray-200'}`}>
                            For Corporates
                        </Link>
                        <Link href="#" className={`transition-colors ${isScrolled ? 'hover:text-blue-600' : 'hover:text-gray-200'}`}>
                            Bookings
                        </Link>
                        <Button
                            variant={isScrolled ? "ghost" : "outline"}
                            size="sm"
                            className={isScrolled
                                ? "text-gray-600"
                                : "text-white border-white text-gray-800 hover:bg-white hover:text-gray-800"}
                        >
                            Log In
                        </Button>
                        <Button
                            size="sm"
                            className={isScrolled
                                ? "bg-blue-500 hover:bg-blue-600 text-white"
                                : "bg-white text-gray-800 hover:bg-gray-200"}
                        >
                            Register
                        </Button>
                    </div>
                </div>

                {/* Main navigation */}
                <div className={`
                    flex items-center justify-between py-3 px-4 
                    transition-all duration-300
                    ${isScrolled ? 'py-2' : 'py-3'}
                `}>
                    <Link
                        href="/"
                        className={`text-2xl font-bold transition-colors
                        ${isScrolled ? 'text-blue-600' : 'text-white'}`}
                    >
                        TravelApp
                    </Link>
                    <nav className="flex items-center space-x-6">
                        {[
                            ['Hotels', '/hotels'],
                            ['Flights', '/flights'],
                            ['Trains', '/trains'],
                            ['Bus & Travel', '/bus-travel'],
                            ['Airport Transfer', '/airport-transfer'],
                            ['Car Rental', '/car-rental'],
                            ['Things to Do', '/things-to-do']
                        ].map(([label, href]) => (
                            <Link
                                key={href}
                                href={href}
                                className={`
                                    text-sm font-medium transition-colors
                                    ${isScrolled
                                        ? 'text-gray-600 hover:text-blue-600'
                                        : 'text-white hover:text-gray-200'}
                                `}
                            >
                                {label}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header