'use client'

import { HeaderPayment } from "@/components/sections/header-payment"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Coffee, Star, UserRound, Bed } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"
import { useStore } from '@/store/useStore'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/store/useAuthStore'
import { useRoomStore } from '@/store/useRoomStore'
import { useSearchStore } from '@/store/useSearchStore'

export default async function FormPaymentPage({ params, searchParams }: any) {
    const router = useRouter()
    const { setCurrentStep, setFormData } = useStore()
    const selectedRoom = useRoomStore((state) => state.selectedRoom)
    const { dateRange, adults, children, rooms } = useSearchStore()
    const { isAuthenticated, user } = useAuthStore()

    const [contactDetails, setContactDetails] = useState({
        fullName: '',
        phone: '',
        email: '',
        bookingFor: 'self' as 'self' | 'other',
        guestName: ''
    })

    const [specialRequests, setSpecialRequests] = useState({
        nonSmoking: false,
        highFloor: false,
        checkInTime: false,
        connectingRooms: false,
        bedType: false,
        checkOutTime: false
    })

    useEffect(() => {
        if (!isAuthenticated) {
            router.push('/')
        }
    }, [isAuthenticated, router])

    useEffect(() => {
        if (!selectedRoom) {
            router.push('/')
        }
    }, [selectedRoom, router])

    const handleContactChange = (field: string, value: string) => {
        setContactDetails(prev => ({
            ...prev,
            [field]: value
        }))
    }

    const handleSpecialRequestChange = (field: string) => {
        setSpecialRequests(prev => ({
            ...prev,
            [field]: !prev[field as keyof typeof prev]
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setFormData({
            contactDetails: {
                ...contactDetails
            },
            specialRequests: {
                ...specialRequests
            }
        })
        setCurrentStep(2)
        router.push(`/detail-payment/${params.uid}`)
    }

    const calculateTotalPrice = () => {
        if (!selectedRoom || !dateRange.from || !dateRange.to) {
            return {
                originalPrice: 0,
                roomPrice: 0,
                taxesAndFees: 0,
                total: 0,
                totalNights: 0
            }
        }

        const totalNights = Math.ceil(
            (dateRange.to.getTime() - dateRange.from.getTime()) / (1000 * 60 * 60 * 24)
        )

        const originalPrice = selectedRoom.price * totalNights
        const roomPrice = originalPrice * 0.9
        const taxesAndFees = roomPrice * 0.11
        const total = roomPrice + taxesAndFees

        return {
            originalPrice,
            roomPrice,
            taxesAndFees,
            total,
            totalNights
        }
    }

    const prices = calculateTotalPrice()

    return (
        <div className="min-h-screen bg-gray-50">
            <HeaderPayment />
            <main className="container mx-auto px-4 py-8">
                <form onSubmit={handleSubmit}>
                    <div className="grid lg:grid-cols-[1fr_400px] gap-8">
                        <div className="space-y-8">
                            <div>
                                <h1 className="text-2xl font-semibold mb-2">Your Accommodation Booking</h1>
                                <p className="text-gray-600">
                                    Make sure all the details on this page are correct before proceeding to payment.
                                </p>
                            </div>

                            <Card>
                                <CardContent className="p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">{user?.name.charAt(0)}</div>
                                        <div>
                                            <h3 className="font-medium">
                                                Hi, {user?.name}! Enjoy these perks as a Traveloka Bronze Priority Member.
                                            </h3>
                                            <p className="text-sm text-gray-600">Login as {user?.email} (Google)</p>
                                        </div>
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-4 mt-6">
                                        <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                                            <div className="w-8 h-8 bg-gray-200 rounded-full bg-[url('https://ik.imagekit.io/tvlk/image/imageResource/2023/10/30/1698670448655-acf98eab458ff4de2da6a0f197fb576c.svg?tr=dpr-2,fo-auto,h-32,q-75,w-28')] bg-cover bg-center" />
                                            <div>
                                                <div className="font-medium">24/7 Customer Service</div>
                                                <div className="text-sm text-gray-600">Reach out to our agent anytime you need them</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                                            <div className="w-8 h-8 bg-gray-200 rounded-full bg-[url('https://ik.imagekit.io/tvlk/image/imageResource/2023/10/30/1698670465085-b303f0b1273c1a8fd071c5dd9b11fde5.svg?tr=dpr-2,fo-auto,h-32,q-75,w-28')] bg-cover bg-center" />
                                            <div>
                                                <div className="font-medium">Cashback Points</div>
                                                <div className="text-sm text-gray-600">Collect more points you can use later</div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Contact Details */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Contact Details (for E-voucher)</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="space-y-4">
                                        <div>
                                            <Label htmlFor="fullName">Full Name (as in Passport/Official ID Card)</Label>
                                            <Input
                                                id="fullName"
                                                placeholder="e.g John Doe"
                                                value={contactDetails.fullName}
                                                onChange={(e) => handleContactChange('fullName', e.target.value)}
                                                required
                                            />
                                            <p className="text-xs text-gray-500 mt-1">
                                                Please use only alphabet (A-Z), without title, special characters, and punctuation.
                                            </p>
                                        </div>

                                        <div className="grid sm:grid-cols-[120px_1fr] gap-4">
                                            <Select defaultValue="+62">
                                                <SelectTrigger>
                                                    <SelectValue placeholder="+62" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="+62">+62</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <Input
                                                placeholder="e.g +6281234567890"
                                                value={contactDetails.phone}
                                                onChange={(e) => handleContactChange('phone', e.target.value)}
                                                required
                                            />
                                        </div>

                                        <div>
                                            <Label htmlFor="email">Email</Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                placeholder="e.g email@example.com"
                                                value={contactDetails.email}
                                                onChange={(e) => handleContactChange('email', e.target.value)}
                                                required
                                            />
                                            <p className="text-xs text-gray-500 mt-1">We will send the e-voucher to this email.</p>
                                        </div>
                                    </div>

                                    <RadioGroup
                                        className="grid grid-cols-2 gap-4"
                                        value={contactDetails.bookingFor}
                                        onValueChange={(value) => handleContactChange('bookingFor', value as 'self' | 'other')}
                                    >
                                        <div className="grid grid-cols-[auto_1fr] gap-2 items-center">
                                            <RadioGroupItem value="self" id="self" />
                                            <Label htmlFor="self">I am the guest</Label>
                                        </div>
                                        <div className="grid grid-cols-[auto_1fr] gap-2 items-center">
                                            <RadioGroupItem value="other" id="other" />
                                            <Label htmlFor="other">I'm booking for another person</Label>
                                        </div>
                                    </RadioGroup>

                                    {contactDetails.bookingFor === 'other' && (
                                        <div className="guest-details">
                                            <Label htmlFor="guestName">Guest's Full Name</Label>
                                            <Input
                                                id="guestName"
                                                placeholder="e.g John Maeda"
                                                value={contactDetails.guestName}
                                                onChange={(e) => handleContactChange('guestName', e.target.value)}
                                                required
                                            />
                                            <p className="text-xs text-gray-500 mt-1">
                                                Input the name of the guest who will stay at the accommodation.
                                            </p>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>

                            {/* Special Requests */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Let us know if you have any request</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-gray-600 mb-4">
                                        You will know the availability of your additional request during check-in. Extra charges may incur but
                                        you can still cancel your request later.
                                    </p>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div className="space-y-4">
                                            <div className="flex items-center space-x-2">
                                                <Checkbox
                                                    id="non-smoking"
                                                    checked={specialRequests.nonSmoking}
                                                    onCheckedChange={() => handleSpecialRequestChange('nonSmoking')}
                                                />
                                                <Label htmlFor="non-smoking">Non-smoking Room</Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <Checkbox
                                                    id="high-floor"
                                                    checked={specialRequests.highFloor}
                                                    onCheckedChange={() => handleSpecialRequestChange('highFloor')}
                                                />
                                                <Label htmlFor="high-floor">High Floor</Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <Checkbox
                                                    id="check-in-time"
                                                    checked={specialRequests.checkInTime}
                                                    onCheckedChange={() => handleSpecialRequestChange('checkInTime')}
                                                />
                                                <Label htmlFor="check-in-time">Check-in Time</Label>
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="flex items-center space-x-2">
                                                <Checkbox
                                                    id="connecting-rooms"
                                                    checked={specialRequests.connectingRooms}
                                                    onCheckedChange={() => handleSpecialRequestChange('connectingRooms')}
                                                />
                                                <Label htmlFor="connecting-rooms">Connecting Rooms</Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <Checkbox
                                                    id="bed-type"
                                                    checked={specialRequests.bedType}
                                                    onCheckedChange={() => handleSpecialRequestChange('bedType')}
                                                />
                                                <Label htmlFor="bed-type">Bed Type</Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <Checkbox
                                                    id="check-out-time"
                                                    checked={specialRequests.checkOutTime}
                                                    onCheckedChange={() => handleSpecialRequestChange('checkOutTime')}
                                                />
                                                <Label htmlFor="check-out-time">Check-out Time</Label>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Price Details */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Price details</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="flex justify-between py-2">
                                        <div>Room Price ({prices.totalNights} night{prices.totalNights > 1 ? 's' : ''})</div>
                                        <div>Rp {prices.roomPrice.toLocaleString('id-ID')}</div>
                                    </div>
                                    <div className="flex justify-between py-2">
                                        <div>Taxes and Fees (11%)</div>
                                        <div>Rp {prices.taxesAndFees.toLocaleString('id-ID')}</div>
                                    </div>
                                    <div className="flex justify-between py-4 border-t font-semibold">
                                        <div>Total Price</div>
                                        <div className="text-orange-500">Rp {prices.total.toLocaleString('id-ID')}</div>
                                    </div>
                                    <div>
                                        <div className="flex items-center justify-center gap-2 mb-4">
                                            <div className="w-4 h-4">
                                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#0064D2" strokeWidth="2" />
                                                    <path d="M12 6V12" stroke="#0064D2" strokeWidth="2" strokeLinecap="round" />
                                                    <circle cx="12" cy="16" r="1" fill="#0064D2" />
                                                </svg>
                                            </div>
                                            <p className="text-xs text-gray-500">You won't be charged yet!</p>
                                        </div>
                                        <Button size="lg" type="submit" className="font-bold w-full font-semibold bg-orange-500 hover:bg-orange-600">Continue to Payment</Button>
                                        <p className="text-xs text-gray-500 text-center mt-4">
                                            By continuing to payment, you have agreed to Traveloka's <a href="#" className="text-blue-600">Terms & Conditions</a>, <a href="#" className="text-blue-600">Privacy Policy</a>, and <a href="#" className="text-blue-600">Accommodation Refund Procedure</a>
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            <Card>
                                <CardContent className="p-6">
                                    <div className="space-y-4">
                                        <div>
                                            <div className="flex items-start justify-between">
                                                <div>
                                                    <h3 className="font-semibold">{selectedRoom?.hotel_name}</h3>
                                                </div>
                                                <div className="text-right">
                                                    <div className="flex items-center gap-1 mt-1">
                                                        {[...Array(4)].map((_, i) => (
                                                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="text-xs">8.6 (4,129)</div>
                                                <div className="text-xs text-green-600">Highly rated for its Cleanliness</div>
                                            </div>
                                        </div>

                                        <Image
                                            src="https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10040418-405bd50d57c5944aca3521f15b929b41.jpeg?_src=imagekit&tr=dpr-2,f-jpg,h-150,pr-true,q-90,w-375"
                                            alt="Hotel"
                                            width={400}
                                            height={200}
                                            className="w-full"
                                        />

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="border rounded-lg p-4">
                                                <div className="text-sm text-gray-600">Check-in</div>
                                                <div className="font-bold">
                                                    {dateRange.from?.toLocaleDateString('en-US', {
                                                        weekday: 'short',
                                                        day: 'numeric',
                                                        month: 'short',
                                                        year: 'numeric'
                                                    })}
                                                </div>
                                                <div className="text-sm text-gray-600">From 15:00</div>
                                            </div>

                                            <div className="border rounded-lg p-4">
                                                <div className="text-sm text-gray-600">Check-out</div>
                                                <div className="font-bold">
                                                    {dateRange.to?.toLocaleDateString('en-US', {
                                                        weekday: 'short',
                                                        day: 'numeric',
                                                        month: 'short',
                                                        year: 'numeric'
                                                    })}
                                                </div>
                                                <div className="text-sm text-gray-600">Before 12:00</div>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <div className="font-bold text-lg">
                                                (1x) {selectedRoom?.title_room}
                                            </div>
                                            <div className="text-sm flex items-center gap-2">
                                                <UserRound className="h-4 w-4" />
                                                {adults + children} Guest(s)
                                            </div>
                                            <div className="text-sm flex items-center gap-2">
                                                <Bed className="h-4 w-4" />
                                                {selectedRoom?.bed_count} {selectedRoom?.bed_type}
                                            </div>
                                            <div className="mt-4 pt-4 border-t space-y-2">
                                                <div className="flex justify-between items-center text-gray-600">
                                                    <div>{rooms} room(s), {prices.totalNights} night(s)</div>
                                                    <div className="line-through">
                                                        Rp {prices.originalPrice.toLocaleString('id-ID')}
                                                    </div>
                                                </div>
                                                <div className="flex justify-between items-center space-y-1">
                                                    <div className="font-bold text-lg">Total Price</div>
                                                    <div className="text-right space-y-0.5">
                                                        <div className="font-bold text-2xl text-orange-500">
                                                            Rp {prices.total.toLocaleString('id-ID')}
                                                        </div>
                                                        <div className="text-sm text-green-600">• Save {((prices.originalPrice - prices.total) / prices.originalPrice * 100).toFixed(0)}%</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </form>
            </main>
        </div>
    )
}
