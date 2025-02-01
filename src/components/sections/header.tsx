"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Globe, ChevronDown, Menu } from "lucide-react"
import { useEffect, useState } from "react"

interface HeaderProps {
    isTransparent?: boolean
    isStatic?: boolean
}

export function Header({ isTransparent = false, isStatic = false }: HeaderProps) {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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

    const isTransparentHeader = isTransparent && !isScrolled

    return (
        <header className={`
            fixed top-0 left-0 right-0 w-full z-50
            transition-all duration-300
            ${isScrolled
                ? 'bg-white backdrop-blur-md shadow-md text-gray-800'
                : isTransparent
                    ? 'bg-transparent text-white'
                    : 'bg-white text-gray-800'}
        `}>
            <div>
                <div className={`
                    flex items-center justify-between py-2 px-4 text-sm
                    transition-all duration-300 border-b
                    ${isScrolled
                        ? 'lg:h-auto border-gray-200'
                        : isTransparent
                            ? 'h-auto opacity-100 border-white/20'
                            : 'h-auto opacity-100 border-gray-200'}
                `}>
                    <div className={`container mx-auto px-4 py-0 ${!isTransparentHeader ? 'text-black' : 'text-white'}`}>
                        <div className="flex space-x-4 items-center justify-between w-full font-medium text-sm">
                            <div className="flex items-center">
                                <button 
                                    className="lg:hidden mr-4"
                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                >
                                    <Menu className="h-6 w-6" />
                                </button>
                                <Link
                                    href="/"
                                    className={`text-2xl font-bold transition-colors
                                    ${isTransparentHeader ? 'text-white' : 'text-blue-600'}`}
                                >
                                    {!isStatic ? (
                                        <img
                                            src={isTransparentHeader
                                                ? "https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/f/fbab4f587da2242fbe9858fe3e5ba717.svg"
                                                : "https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/9/97f3e7a54e9c6987283b78e016664776.svg"
                                            }
                                            alt="TravelApp"
                                            width={120}
                                            height={100}
                                        />
                                    ) : (
                                        <img
                                            src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/9/97f3e7a54e9c6987283b78e016664776.svg"
                                            alt="TravelApp"
                                            width={120}
                                            height={100}
                                        />
                                    )}
                                </Link>
                            </div>
                            <div className={`
                                hidden lg:flex items-center justify-center space-x-4
                            `}>
                                <button className={`
                                    flex items-center text-sm transition-colors 
                                    ${isTransparentHeader
                                        ? 'hover:text-gray-200'
                                        : 'hover:text-blue-600'}
                                `}>
                                    <Globe className="h-4 w-4 mr-1" />
                                    EN
                                    <ChevronDown className="h-4 w-4 ml-1" />
                                </button>
                                <button className={`
                                    flex items-center text-sm transition-colors
                                    ${isTransparentHeader
                                        ? 'hover:text-gray-200'
                                        : 'hover:text-blue-600'}
                                `}>
                                    IDR
                                    <ChevronDown className="h-4 w-4 ml-1" />
                                </button>
                                {['Deals', 'Support', 'Partnership', 'For Corporates', 'Bookings'].map((item) => (
                                    <Link
                                        key={item}
                                        href="#"
                                        className={`transition-colors ${isTransparentHeader
                                            ? 'hover:text-gray-200'
                                            : 'hover:text-blue-600'
                                            }`}
                                    >
                                        {item}
                                    </Link>
                                ))}
                                <Button
                                    variant={isTransparentHeader ? "outline" : "ghost"}
                                    size="sm"
                                    className={isTransparentHeader
                                        ? "text-white text-gray-800 border-white hover:bg-white hover:text-gray-800"
                                        : "text-gray-600"}
                                >
                                    Log In
                                </Button>
                                <Button
                                    size="sm"
                                    className={isTransparentHeader
                                        ? "bg-white text-gray-800 hover:bg-gray-200"
                                        : "bg-blue-500 hover:bg-blue-600 text-white"}
                                >
                                    Register
                                </Button>
                            </div>
                            <div className="flex lg:hidden items-center space-x-2">
                                <Button
                                    variant={isTransparentHeader ? "outline" : "ghost"}
                                    size="sm"
                                    className={isTransparentHeader
                                        ? "text-white text-gray-800 border-white hover:bg-white hover:text-gray-800"
                                        : "text-gray-600"}
                                >
                                    Log In
                                </Button>
                                <Button
                                    size="sm"
                                    className={isTransparentHeader
                                        ? "bg-white text-gray-800 hover:bg-gray-200"
                                        : "bg-blue-500 hover:bg-blue-600 text-white"}
                                >
                                    Register
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main navigation */}
                <div className={`
                    hidden lg:flex items-center justify-between py-3 px-4 
                    transition-all duration-300 container mx-auto px-4
                    ${isScrolled ? 'py-2' : 'py-3'}
                `}>
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
                                    text-sm font-bold transition-colors
                                    ${isTransparentHeader
                                        ? 'text-white hover:text-gray-200'
                                        : 'text-[#697176] hover:text-blue-600'}
                                `}
                            >
                                {label}
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden bg-white">
                        <div className="py-2 space-y-1">
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
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                    {label}
                                </Link>
                            ))}
                            <div className="px-4 py-2 space-y-2">
                                {['Deals', 'Support', 'Partnership', 'For Corporates', 'Bookings'].map((item) => (
                                    <Link
                                        key={item}
                                        href="#"
                                        className="block text-sm text-gray-700 hover:text-blue-600"
                                    >
                                        {item}
                                    </Link>
                                ))}
                            </div>
                            <div className="px-4 py-2 space-y-2">
                                <button className="flex items-center text-sm text-gray-700">
                                    <Globe className="h-4 w-4 mr-1" />
                                    EN
                                    <ChevronDown className="h-4 w-4 ml-1" />
                                </button>
                                <button className="flex items-center text-sm text-gray-700">
                                    IDR
                                    <ChevronDown className="h-4 w-4 ml-1" />
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header