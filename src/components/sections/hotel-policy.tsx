import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge, Building2, Clock, FileText, Wallet, Info, Coffee } from "lucide-react"

function HotelPolicy() {
    return (
        <div className="mt-8">

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div>
                    <h2 className="text-xl font-bold mb-6">Accommodation Policy & General Information</h2>
                </div>
                <div className="col-span-2   bg-white rounded-lg border p-4">
                    <div className="flex items-center gap-2 mb-4">
                        <Clock className="h-5 w-5 text-blue-600" />
                        <h3 className="font-semibold">Check-in/Check-out Time</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <div className="text-sm text-muted-foreground">Check-in:</div>
                            <div className="font-medium">From 15:00</div>
                        </div>
                        <div>
                            <div className="text-sm text-muted-foreground">Check-out:</div>
                            <div className="font-medium">Before 12:00</div>
                        </div>
                    </div>

                    <div className="bg-white py-4">
                        <div className="flex items-center gap-2 mb-4">
                            <FileText className="h-5 w-5 text-blue-600" />
                            <h3 className="font-semibold">General Check-in Instructions</h3>
                        </div>
                        <ul className="space-y-2 text-gray-600">
                            <li>
                                You may be required to present valid government-issued identification at check-in, along with credit card
                                or cash to cover deposits and incidentals.
                            </li>
                            <li>
                                Special request may depend on hotel's availability at check-in and may cost extra fee. Special request
                                availability is not guaranteed.
                            </li>
                            <li>Hotel may charge you additional fee for each extra person after reserved room's maximum capacity.</li>
                            <li>As of April 26th, all rooms are included 6 items of minibar.</li>
                        </ul>
                    </div>

                    <div className="bg-white py-4">
                        <div className="flex items-center gap-2 mb-4">
                            <Info className="h-5 w-5 text-blue-600" />
                            <h3 className="font-semibold">General Information</h3>
                        </div>
                        <div className="divide-y">
                            <div className="grid sm:grid-cols-2 py-3">
                                <div className="text-gray-600">Popular Facilities</div>
                                <div>AC, Restaurant, Swimming Pool, 24-Hour Front Desk, Parking, Elevator, WiFi</div>
                            </div>
                            <div className="grid sm:grid-cols-2 py-3">
                                <div className="text-gray-600">Check-In / Check-Out Time</div>
                                <div>From 15:00 - Before 12:00</div>
                            </div>
                            <div className="grid sm:grid-cols-2 py-3">
                                <div className="text-gray-600">Distance to Downtown</div>
                                <div>217 m</div>
                            </div>
                            <div className="grid sm:grid-cols-2 py-3">
                                <div className="text-gray-600">Popular in the Area</div>
                                <div>Trans Studio Bandung, Kiaracondong Station, Muhammadiyah Bandung Hospital</div>
                            </div>
                            <div className="grid sm:grid-cols-2 py-3">
                                <div className="text-gray-600">Breakfast Availability</div>
                                <div>Yes, some room provide breakfast</div>
                            </div>
                            <div className="grid sm:grid-cols-2 py-3">
                                <div className="text-gray-600">Available rooms at The Trans Luxury Hotel</div>
                                <div>280</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
                <div>
                    <h3 className="text-xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h3>
                    <p className="text-gray-600 text-sm">Find answers to common questions about your stay at The Trans Luxury Hotel.</p>
                </div>
                <div className="col-span-2">
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        <AccordionItem value="facilities" className="border rounded-lg shadow-sm">
                            <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                                <div className="flex items-center gap-3">
                                    <div className="h-8 w-8 rounded-full bg-blue-50 flex items-center justify-center">
                                        <Building2 className="h-4 w-4 text-blue-600" />
                                    </div>
                                    <span className="font-medium">What are available facilities at The Trans Luxury Hotel?</span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="px-6 py-4 text-gray-600">
                                <div className="flex flex-wrap gap-2">
                                    {["AC", "Restaurant", "Swimming Pool", "24-Hour Front Desk", "Parking", "Elevator", "WiFi"].map((facility) => (
                                        <Badge key={facility} variant="secondary" className="bg-blue-50">{facility}</Badge>
                                    ))}
                                </div>
                                <p className="mt-3">And many more amenities to ensure a comfortable stay.</p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="cost" className="border rounded-lg shadow-sm">
                            <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                                <div className="flex items-center gap-3">
                                    <div className="h-8 w-8 rounded-full bg-green-50 flex items-center justify-center">
                                        <Wallet className="h-4 w-4 text-green-600" />
                                    </div>
                                    <span className="font-medium">How much does it cost to stay at The Trans Luxury Hotel?</span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="px-6 py-4 text-gray-600">
                                <div className="flex flex-col gap-2">
                                    <p>Room rates start from <span className="font-semibold text-green-600">IDR 2,670,023</span> per night</p>
                                    <p className="text-sm">* Including taxes and fees</p>
                                    <p className="text-sm">* Rates may vary depending on room type and season</p>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="checkin" className="border rounded-lg shadow-sm">
                            <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                                <div className="flex items-center gap-3">
                                    <div className="h-8 w-8 rounded-full bg-purple-50 flex items-center justify-center">
                                        <Clock className="h-4 w-4 text-purple-600" />
                                    </div>
                                    <span className="font-medium">What is normal check-in & check-out time?</span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="px-6 py-4 text-gray-600">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="text-center p-3 bg-purple-50 rounded-lg">
                                        <p className="font-semibold">Check-in</p>
                                        <p>From 15:00</p>
                                    </div>
                                    <div className="text-center p-3 bg-purple-50 rounded-lg">
                                        <p className="font-semibold">Check-out</p>
                                        <p>Before 12:00</p>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="breakfast" className="border rounded-lg shadow-sm">
                            <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                                <div className="flex items-center gap-3">
                                    <div className="h-8 w-8 rounded-full bg-orange-50 flex items-center justify-center">
                                        <Coffee className="h-4 w-4 text-orange-600" />
                                    </div>
                                    <span className="font-medium">Does The Trans Luxury Hotel provide breakfast?</span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="px-6 py-4 text-gray-600">
                                <p>Yes, some room types include breakfast in their rate.</p>
                                <p className="mt-2 text-sm">Please check the specific room details when booking for breakfast inclusion.</p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}

export default HotelPolicy