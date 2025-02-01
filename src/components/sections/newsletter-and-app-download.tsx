import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function NewsletterAndAppDownload() {
  return (
    <section className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <Image
            src="/placeholder.svg?height=600&width=300"
            alt="TravelApp mobile app"
            width={300}
            height={600}
            className="mx-auto"
          />
        </div>
        <div className="md:w-1/2 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Stay updated with travel tips, recommendations, and latest promos.
          </h2>
          <div className="flex flex-col sm:flex-row gap-2 mb-6">
            <Input type="email" placeholder="Your Email Address" className="flex-1 bg-white" />
            <Button className="bg-orange-500 hover:bg-orange-600 whitespace-nowrap">Subscribe to Newsletter</Button>
          </div>
          <div className="mt-8">
            <p className="text-xl mb-4">Have your dream trip at your fingertips. Get The App.</p>
            <div className="flex flex-wrap gap-4">
              <Image
                src="/placeholder.svg?height=40&width=135"
                alt="Get it on Google Play"
                width={135}
                height={40}
                className="cursor-pointer"
              />
              <Image
                src="/placeholder.svg?height=40&width=135"
                alt="Download on the App Store"
                width={135}
                height={40}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsletterAndAppDownload