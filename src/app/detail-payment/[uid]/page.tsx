'use client'

import Image from 'next/image'
import { Clock, User, Bed, Wifi } from 'lucide-react'
import { useState, useEffect } from 'react'
import HeaderPayment from '@/components/sections/header-payment'
import { PaymentInstructions } from '@/components/sections/payment-instruction'
import { useStore, clearPaymentStorage } from '@/store/useStore'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/store/useAuthStore'

export default function PaymentPage() {
    const router = useRouter()
    const { 
        setCurrentStep, 
        setPaymentDetails, 
        paymentDetails,
        timeLeft,
        setTimeLeft,
        resetTimer
    } = useStore()
    const { isAuthenticated } = useAuthStore()
    
    const [selectedPayment, setSelectedPayment] = useState('')
    const [couponCode, setCouponCode] = useState('')
    const [isApplyingCoupon, setIsApplyingCoupon] = useState(false)
    const [totalPrice, setTotalPrice] = useState(1175625)
    const [bookingId] = useState('122238624')

    useEffect(() => {
        if (!isAuthenticated) {
            router.push('/')
        }
    }, [isAuthenticated, router])

    useEffect(() => {
        // Initialize or reset timer
        if (!timeLeft || isNaN(timeLeft) || timeLeft <= 0) {
            resetTimer()
            return // Exit early to wait for the next effect trigger
        }


        const timer = setInterval(() => {
            setTimeLeft((prevTime) => {
                const newTime = prevTime - 1
                
                if (newTime <= 0) {
                    clearInterval(timer)
                    router.push('/payment-expired')
                    return 0
                }
                return newTime
            })
        }, 1000)

        // Cleanup
        return () => {
            clearInterval(timer)
        }
    }, [timeLeft, setTimeLeft, resetTimer, router])

    // Add cleanup on component mount
    useEffect(() => {
        // Optional: Clear storage when component mounts
        // clearPaymentStorage()
        
        return () => {
            // Clear storage when component unmounts if payment is complete or expired
            if (timeLeft <= 0) {
                clearPaymentStorage()
            }
        }
    }, [timeLeft])

    const formatTime = (seconds: number) => {
        if (!seconds || isNaN(seconds)) return "00:00:00"
        
        const hours = Math.floor(seconds / 3600)
        const minutes = Math.floor((seconds % 3600) / 60)
        const remainingSeconds = seconds % 60
        
        return [
            String(hours).padStart(2, '0'),
            String(minutes).padStart(2, '0'),
            String(remainingSeconds).padStart(2, '0')
        ].join(':')
    }

    const handlePaymentSelection = (paymentMethod: string) => {
        setPaymentDetails({
            selectedPayment: paymentMethod,
            amount: totalPrice,
            bookingId: bookingId,
            expiryTime: Date.now() + (timeLeft * 1000) // Store expiry timestamp
        })
    }

    const handlePaymentSubmit = () => {
        // In a real app, you'd handle the payment processing here
        
        // Move to final step
        setCurrentStep(3)
        
        // Navigate to success page or show success state
        // For now, we'll just update the UI to show payment instructions
        setSelectedPayment(selectedPayment)
    }

    // Timer warning component
    const TimerWarning = () => {
        if (timeLeft <= 300) { // Show warning when 5 minutes or less remaining
            return (
                <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-4">
                    <p className="font-medium">Warning: Payment will expire soon!</p>
                    <p className="text-sm">Please complete your payment to secure your booking.</p>
                </div>
            )
        }
        return null
    }

    if (selectedPayment) {
        return (
            <div className="min-h-screen bg-gray-50">
                <HeaderPayment />
                <div className="bg-blue-600 text-white p-4">
                    <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
                        <span>We&apos;re holding this price for you! Let&apos;s complete your payment in</span>
                        <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            <span className={`font-medium ${timeLeft <= 300 ? 'text-red-300' : ''}`}>
                                {formatTime(timeLeft)}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto px-4 py-8">
                    <TimerWarning />
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8">
                        <PaymentInstructions />
                        <div className="w-full">
                            <div className="space-y-4">
                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Image src="/placeholder.svg?height=24&width=24" alt="Hotel" width={24} height={24} />
                                        <h2 className="text-lg font-semibold">Hotel Summary</h2>
                                    </div>
                                    <p className="text-sm text-gray-600">Booking ID: {bookingId}</p>
                                </div>

                                <div className="bg-white rounded-lg shadow p-4 space-y-4">
                                    <h3 className="font-medium">Art Deco Luxury Hotel & Residence</h3>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                                        <div>
                                            <p className="text-gray-600">Check-in</p>
                                            <p className="font-medium">Mon, 3 February 2025</p>
                                            <p className="text-gray-600">From 15:00</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-600">Check-out</p>
                                            <p className="font-medium">Tue, 4 February 2025</p>
                                            <p className="text-gray-600">Before 12:00</p>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="font-medium">(1x) Deluxe Twin - Breakfast</h4>
                                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                                            <div className="flex items-center gap-2">
                                                <User className="h-4 w-4" />
                                                <span>2 Guest</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Bed className="h-4 w-4" />
                                                <span>1 Twin Bed</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Wifi className="h-4 w-4" />
                                                <span>Free WiFi</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-green-100 p-3 rounded text-sm text-green-700">
                                        Hurry up! This room is last booked 2 minutes ago.
                                    </div>
                                </div>

                                <div className="bg-white rounded-lg shadow p-4 sticky bottom-0">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-sm font-medium">Total Price</span>
                                        <span className="text-xl font-bold">Rp {totalPrice.toLocaleString()}</span>
                                    </div>
                                    <button 
                                        className="w-full bg-orange-500 text-white py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                        disabled={!selectedPayment}
                                        onClick={handlePaymentSubmit}
                                    >
                                        Pay with {selectedPayment.split('-')[0].toUpperCase()} Virtual Account
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <HeaderPayment />
            <div className="bg-blue-600 text-white p-4">
                <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
                    <span>We&apos;re holding this price for you! Let&apos;s complete your payment in</span>
                    <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span className={`font-medium ${timeLeft <= 300 ? 'text-red-300' : ''}`}>
                            {formatTime(timeLeft)}
                        </span>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-6">
                <TimerWarning />
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Payment Methods Column */}
                    <div className="lg:col-span-2 space-y-6">
                        <h1 className="text-xl font-semibold text-gray-800">How would you like to pay?</h1>

                        {/* Virtual Account Section */}
                        <div className="bg-white rounded-lg shadow p-4 space-y-4">
                            <div className="flex items-center gap-2">
                                <span className="text-sm font-medium">Virtual Account</span>
                                <span className="text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded">New</span>
                            </div>

                            {/* Payment Options */}
                            <div className="space-y-3">
                                {[
                                    { id: 'bca-virtual', name: 'BCA Virtual Account', logo: '/placeholder.svg?height=24&width=60' },
                                    { id: 'mandiri-virtual', name: 'Mandiri Virtual Account', logo: '/placeholder.svg?height=24&width=60' },
                                    { id: 'bri-virtual', name: 'BRI Virtual Account', logo: '/placeholder.svg?height=24&width=60' },
                                    { id: 'bni-virtual', name: 'BNI Virtual Account', logo: '/placeholder.svg?height=24&width=60' },
                                    { id: 'cimb-virtual', name: 'CIMB Niaga Virtual Account', logo: '/placeholder.svg?height=24&width=60', isNew: true },
                                    { id: 'other-virtual', name: 'Other Virtual Account', logo: '/placeholder.svg?height=24&width=60' },
                                ].map((option) => (
                                    <label
                                        key={option.id}
                                        className={`flex items-center justify-between p-4 border rounded-lg cursor-pointer transition-colors ${
                                            selectedPayment === option.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                                        }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <input
                                                type="radio"
                                                name="payment"
                                                value={option.id}
                                                checked={selectedPayment === option.id}
                                                onChange={(e) => {
                                                    setSelectedPayment(e.target.value)
                                                    handlePaymentSelection(e.target.value)
                                                }}
                                                className="h-4 w-4 text-blue-600"
                                            />
                                            <span className="text-sm font-medium">{option.name}</span>
                                            {option.isNew && (
                                                <span className="text-xs px-2 py-0.5 bg-blue-100 text-blue-600 rounded">New</span>
                                            )}
                                        </div>
                                        <Image src={option.logo || "/placeholder.svg"} alt={option.name} width={60} height={24} className="object-contain" />
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Apply Coupons Section */}
                        <div className="bg-white rounded-lg shadow p-4">
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-medium">Apply Coupons</span>
                                <button
                                    className="text-blue-600 text-sm font-medium"
                                    onClick={() => setIsApplyingCoupon(true)}
                                    disabled={!couponCode}
                                >
                                    Apply
                                </button>
                            </div>
                            <input
                                type="text"
                                value={couponCode}
                                onChange={(e) => setCouponCode(e.target.value)}
                                placeholder="Enter coupon code or select available coupon(s)"
                                className="mt-2 w-full p-2 border border-gray-200 rounded text-sm"
                            />
                        </div>
                    </div>

                    {/* Hotel Summary Column */}
                    <div className="space-y-4">
                        <div className="bg-blue-50 p-4 rounded-lg">
                            <div className="flex items-center gap-2 mb-2">
                                <Image src="/placeholder.svg?height=24&width=24" alt="Hotel" width={24} height={24} />
                                <h2 className="text-lg font-semibold">Hotel Summary</h2>
                            </div>
                            <p className="text-sm text-gray-600">Booking ID: {bookingId}</p>
                        </div>

                        <div className="bg-white rounded-lg shadow p-4 space-y-4">
                            <h3 className="font-medium">Art Deco Luxury Hotel & Residence</h3>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                                <div>
                                    <p className="text-gray-600">Check-in</p>
                                    <p className="font-medium">Mon, 3 February 2025</p>
                                    <p className="text-gray-600">From 15:00</p>
                                </div>
                                <div>
                                    <p className="text-gray-600">Check-out</p>
                                    <p className="font-medium">Tue, 4 February 2025</p>
                                    <p className="text-gray-600">Before 12:00</p>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <h4 className="font-medium">(1x) Deluxe Twin - Breakfast</h4>
                                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                                    <div className="flex items-center gap-2">
                                        <User className="h-4 w-4" />
                                        <span>2 Guest</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Bed className="h-4 w-4" />
                                        <span>1 Twin Bed</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Wifi className="h-4 w-4" />
                                        <span>Free WiFi</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-green-100 p-3 rounded text-sm text-green-700">
                                Hurry up! This room is last booked 2 minutes ago.
                            </div>
                        </div>

                        {/* Total Price and Pay Button */}
                        <div className="bg-white rounded-lg shadow p-4 sticky bottom-0">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-sm font-medium">Total Price</span>
                                <span className="text-xl font-bold">Rp {totalPrice.toLocaleString()}</span>
                            </div>
                            <button 
                                className="w-full bg-orange-500 text-white py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                disabled={!selectedPayment}
                                onClick={handlePaymentSubmit}
                            >
                                {selectedPayment ? 
                                    `Pay with ${selectedPayment.split('-')[0].toUpperCase()} Virtual Account` :
                                    'Select a payment method'
                                }
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
