import Image from "next/image"
import { Button } from "@/components/ui/button"

function AppDownloadBanner() {
  return (
    <div className="bg-blue-600 text-white rounded-lg p-4 mb-8 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
          <Image
            src="/placeholder.svg?height=32&width=32"
            alt="Mobile app"
            width={32}
            height={32}
            className="text-white"
          />
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-1">You can get better deals for your stay!</h3>
          <p className="text-white/90">Other travelers have secured lower prices on our app. Now it's your turn!</p>
        </div>
      </div>
      <Button variant="secondary" className="whitespace-nowrap">
        Download app
      </Button>
    </div>
  )
}

export default AppDownloadBanner