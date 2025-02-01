import { Button } from "@/components/ui/button"
import { Shield, User2, Thermometer } from "lucide-react"

export default function CleanStay() {
  return (
    <div className="bg-green-50 rounded-lg p-6 mt-8">
      <div className="flex items-start gap-4 mb-6">
        <Shield className="h-8 w-8 text-green-600" />
        <div>
          <h2 className="text-xl font-bold mb-2">Clean Stay for Your Worry-Free Journey</h2>
          <p className="text-gray-600">
            Enjoy your trip with a peace of mind as your health and safety are guaranteed through these standardized
            protocols.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg p-4 mb-4">
        <div className="flex items-center gap-2 mb-2">
          <Shield className="h-5 w-5 text-green-600" />
          <h3 className="font-semibold">CleanAccommodation</h3>
        </div>
        <p className="text-sm text-gray-600 mb-2">
          CHSE-certified accommodations for applying hygiene protocol from Kemenparekraf.
        </p>
        <Button variant="link" className="text-blue-600 p-0 h-auto">
          Learn more
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
            <Shield className="h-5 w-5 text-green-600" />
          </div>
          <span className="font-medium text-green-700">Frequent Disinfection</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
            <User2 className="h-5 w-5 text-green-600" />
          </div>
          <span className="font-medium text-green-700">Staff Trained in Health Protocol</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
            <Thermometer className="h-5 w-5 text-green-600" />
          </div>
          <span className="font-medium text-green-700">Temperature Check</span>
        </div>
      </div>
    </div>
  )
}

