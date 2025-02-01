import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Clock, FileText, Info } from "lucide-react"

function HotelPolicy() {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-6">Accommodation Policy & General Information</h2>

      <div className="grid gap-6">
        {/* Check-in/Check-out Time */}
        <div className="bg-white rounded-lg border p-4">
          <div className="flex items-center gap-2 mb-4">
            <Clock className="h-5 w-5 text-blue-600" />
            <h3 className="font-semibold">Check-in/Check-out Time</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <div className="text-sm text-muted-foreground">Check-in:</div>
              <div className="font-medium">From 15:00</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Check-out:</div>
              <div className="font-medium">Before 12:00</div>
            </div>
          </div>
        </div>

        {/* General Check-in Instructions */}
        <div className="bg-white rounded-lg border p-4">
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

        {/* General Information */}
        <div className="bg-white rounded-lg border p-4">
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

        {/* FAQ Section */}
        <div className="bg-white rounded-lg border p-4">
          <h3 className="font-semibold mb-4">Frequently Asked Questions</h3>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="facilities">
              <AccordionTrigger>What are available facilities at The Trans Luxury Hotel?</AccordionTrigger>
              <AccordionContent>
                The hotel offers AC, Restaurant, Swimming Pool, 24-Hour Front Desk, Parking, Elevator, and WiFi among
                other amenities.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="cost">
              <AccordionTrigger>How much does it cost to stay at The Trans Luxury Hotel?</AccordionTrigger>
              <AccordionContent>
                Room rates start from IDR 2,670,023 per night, including taxes and fees. Rates may vary depending on
                room type and season.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="checkin">
              <AccordionTrigger>What is normal check-in & check-out time?</AccordionTrigger>
              <AccordionContent>Check-in time is from 15:00 and check-out time is before 12:00.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="breakfast">
              <AccordionTrigger>Does The Trans Luxury Hotel provide breakfast?</AccordionTrigger>
              <AccordionContent>
                Yes, some room types include breakfast in their rate. Please check the specific room details when
                booking.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  )
}

export default HotelPolicy