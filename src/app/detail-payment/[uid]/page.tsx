'use client'

import Image from 'next/image'
import { Clock, User, Bed, Wifi } from 'lucide-react'
import { useState, useEffect } from 'react'
import HeaderPayment from '@/components/sections/header-payment'
import { PaymentInstructions } from '@/components/sections/payment-instruction'
import { useStore, clearPaymentStorage } from '@/store/useStore'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/store/useAuthStore'
import { useRoomStore } from '@/store/useRoomStore'
import { useSearchStore } from '@/store/useSearchStore'

export default function PaymentPage() {
    const router = useRouter()
    const {
        setCurrentStep,
        setPaymentDetails,
        paymentDetails,
    } = useStore()
    const { isAuthenticated } = useAuthStore()
    const selectedRoom = useRoomStore((state) => state.selectedRoom)
    const { dateRange, adults, children, rooms } = useSearchStore()

    // Move timer to local state
    const [timeLeft, setTimeLeft] = useState(900) // 15 minutes in seconds
    const [selectedPayment, setSelectedPayment] = useState('')
    const [couponCode, setCouponCode] = useState('')
    const [isApplyingCoupon, setIsApplyingCoupon] = useState(false)
    const [bookingId] = useState('122238624')

    // Initialize timer when component mounts
    useEffect(() => {
        const savedExpiryTime = localStorage.getItem('payment_expiry_time')
        const currentTime = Date.now()

        if (savedExpiryTime) {
            const remainingTime = Math.max(0, Math.floor((parseInt(savedExpiryTime) - currentTime) / 1000))
            if (remainingTime > 0) {
                setTimeLeft(remainingTime)
            } else {
                router.push('/payment-expired')
            }
        } else {
            // Set new expiry time
            const expiryTime = currentTime + (900 * 1000) // 15 minutes
            localStorage.setItem('payment_expiry_time', expiryTime.toString())
            setTimeLeft(900)
        }

        return () => {
            if (timeLeft <= 0) {
                localStorage.removeItem('payment_expiry_time')
            }
        }
    }, [])

    // Handle countdown
    useEffect(() => {
        if (timeLeft <= 0) {
            localStorage.removeItem('payment_expiry_time')
            router.push('/payment-expired')
            return
        }

        const timer = setInterval(() => {
            setTimeLeft(prevTime => {
                if (prevTime <= 1) {
                    clearInterval(timer)
                    localStorage.removeItem('payment_expiry_time')
                    router.push('/payment-expired')
                    return 0
                }
                return prevTime - 1
            })
        }, 1000)

        return () => clearInterval(timer)
    }, [timeLeft, router])

    // Format time for display
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
            amount: prices.total,
            bookingId: bookingId,
            expiryTime: Date.now() + (timeLeft * 1000)
        })
        setSelectedPayment(paymentMethod)
    }

    // Redirect if not authenticated
    useEffect(() => {
        if (!isAuthenticated) {
            router.push('/')
        }
    }, [isAuthenticated, router])

    // Calculate prices
    const calculatePrices = () => {
        if (!selectedRoom || !dateRange.from || !dateRange.to) {
            return {
                originalPrice: 0,
                discountedPrice: 0,
                taxesAndFees: 0,
                total: 0,
                totalNights: 0
            }
        }

        const totalNights = Math.ceil(
            (dateRange.to.getTime() - dateRange.from.getTime()) / (1000 * 60 * 60 * 24)
        )

        const originalPrice = selectedRoom.price * totalNights
        const discountedPrice = originalPrice * 0.9 // 10% discount
        const taxesAndFees = discountedPrice * 0.11 // 11% tax
        const total = discountedPrice + taxesAndFees

        return {
            originalPrice,
            discountedPrice,
            taxesAndFees,
            total,
            totalNights
        }
    }

    const prices = calculatePrices()

    useEffect(() => {
        return () => {
            if (timeLeft <= 0) {
                clearPaymentStorage()
            }
        }
    }, [timeLeft])

    const TimerWarning = () => {
        if (timeLeft <= 300) {
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
            <div className="min-h-screen">
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
                <div className="container mx-auto px-4 py-8 bg-white">
                    <TimerWarning />
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8">
                        <PaymentInstructions />
                        <div className="w-full">
                            <div className="space-y-4">
                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <div className="flex items-center gap-2 mb-2">
                                        <h2 className="text-lg font-semibold">Hotel Summary</h2>
                                    </div>
                                    <p className="text-sm text-gray-600">Booking ID: {bookingId}</p>
                                </div>

                                <div className="bg-white rounded-lg shadow p-4 space-y-4">
                                    <h3 className="font-medium">{selectedRoom?.hotel_name}</h3>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                                        <div>
                                            <p className="text-gray-600">Check-in</p>
                                            <p className="font-medium">
                                                {dateRange.from?.toLocaleDateString('en-US', {
                                                    weekday: 'short',
                                                    day: 'numeric',
                                                    month: 'short',
                                                    year: 'numeric'
                                                })}
                                            </p>
                                            <p className="text-gray-600">From 15:00</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-600">Check-out</p>
                                            <p className="font-medium">
                                                {dateRange.to?.toLocaleDateString('en-US', {
                                                    weekday: 'short',
                                                    day: 'numeric',
                                                    month: 'short',
                                                    year: 'numeric'
                                                })}
                                            </p>
                                            <p className="text-gray-600">Before 12:00</p>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="font-medium">(1x) {selectedRoom?.title_room}</h4>
                                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                                            <div className="flex items-center gap-2">
                                                <User className="h-4 w-4" />
                                                <span>{adults + children} Guest(s)</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Bed className="h-4 w-4" />
                                                <span>{selectedRoom?.bed_count} {selectedRoom?.bed_type}</span>
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
                                    <div className="space-y-3">
                                        <div className="flex justify-between text-sm">
                                            <span>Room Price ({prices.totalNights} night{prices.totalNights > 1 ? 's' : ''})</span>
                                            <span className="line-through">Rp {prices.originalPrice.toLocaleString('id-ID')}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span>Discounted Price</span>
                                            <span>Rp {prices.discountedPrice.toLocaleString('id-ID')}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span>Taxes & Fees</span>
                                            <span>Rp {prices.taxesAndFees.toLocaleString('id-ID')}</span>
                                        </div>
                                        <div className="flex justify-between items-center pt-3 border-t">
                                            <span className="text-sm font-medium">Total Price</span>
                                            <div className="text-right">
                                                <span className="text-xl font-bold">Rp {prices.total.toLocaleString('id-ID')}</span>
                                                <div className="text-sm text-green-600">Save {((prices.originalPrice - prices.total) / prices.originalPrice * 100).toFixed(0)}%</div>
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        className="w-full font-semibold bg-orange-500 text-white py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                                        disabled={!selectedPayment}
                                        onClick={() => {
                                            setCurrentStep(3)
                                        }}
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
                    <div className="lg:col-span-2 space-y-6">
                        <h1 className="text-xl font-semibold text-gray-800">How would you like to pay?</h1>

                        <div className="bg-white rounded-lg shadow p-4 space-y-4">
                            <div className="flex items-center gap-2">
                                <span className="text-sm font-medium">Virtual Account</span>
                                <span className="text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded">New</span>
                            </div>

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
                                        className={`flex items-center justify-between p-4 border rounded-lg cursor-pointer transition-colors ${selectedPayment === option.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
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
                    </div>

                    <div className="space-y-4">
                        <div className="bg-blue-50 p-4 rounded-lg">
                            <div className="flex items-center gap-2 mb-2">
                                <h2 className="text-lg font-semibold">Hotel Summary</h2>
                            </div>
                            <p className="text-sm text-gray-600">Booking ID: {bookingId}</p>
                        </div>

                        <div className="bg-white rounded-lg shadow p-4 space-y-4">
                            <h3 className="font-medium">{selectedRoom?.hotel_name}</h3>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                                <div>
                                    <p className="text-gray-600">Check-in</p>
                                    <p className="font-medium">
                                        {dateRange.from?.toLocaleDateString('en-US', {
                                            weekday: 'short',
                                            day: 'numeric',
                                            month: 'short',
                                            year: 'numeric'
                                        })}
                                    </p>
                                    <p className="text-gray-600">From 15:00</p>
                                </div>
                                <div>
                                    <p className="text-gray-600">Check-out</p>
                                    <p className="font-medium">
                                        {dateRange.to?.toLocaleDateString('en-US', {
                                            weekday: 'short',
                                            day: 'numeric',
                                            month: 'short',
                                            year: 'numeric'
                                        })}
                                    </p>
                                    <p className="text-gray-600">Before 12:00</p>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <h4 className="font-medium">(1x) {selectedRoom?.title_room}</h4>
                                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                                    <div className="flex items-center gap-2">
                                        <User className="h-4 w-4" />
                                        <span>{adults + children} Guest(s)</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Bed className="h-4 w-4" />
                                        <span>{selectedRoom?.bed_count} {selectedRoom?.bed_type}</span>
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
                            <div className="space-y-3">
                                <div className="flex justify-between text-sm">
                                    <span>Room Price ({prices.totalNights} night{prices.totalNights > 1 ? 's' : ''})</span>
                                    <span className="line-through">Rp {prices.originalPrice.toLocaleString('id-ID')}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span>Discounted Price</span>
                                    <span>Rp {prices.discountedPrice.toLocaleString('id-ID')}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span>Taxes & Fees</span>
                                    <span>Rp {prices.taxesAndFees.toLocaleString('id-ID')}</span>
                                </div>
                                <div className="flex justify-between items-center pt-3 border-t">
                                    <span className="text-sm font-medium">Total Price</span>
                                    <div className="text-right">
                                        <span className="text-xl font-bold">Rp {prices.total.toLocaleString('id-ID')}</span>
                                        <div className="text-sm text-green-600">Save {((prices.originalPrice - prices.total) / prices.originalPrice * 100).toFixed(0)}%</div>
                                    </div>
                                </div>
                            </div>
                            <button
                                className="w-full bg-orange-500 text-white py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                                disabled={!selectedPayment}
                                onClick={() => {
                                    setCurrentStep(3)
                                }}
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
