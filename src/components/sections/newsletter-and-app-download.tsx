import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function NewsletterAndAppDownload() {
  return (
    <section className="relative aspect-[18/5] bg-[url('https://ik.imagekit.io/tvlk/image/imageResource/2023/06/08/1686193661791-d09fe628fd8f9b6c377a91b30628d0b2.png?tr=dpr-2,q-75')] bg-cover bg-center">
      <Image
        src="https://ik.imagekit.io/tvlk/image/imageResource/2023/07/25/1690270103782-21cfb448585a35be06cda74cae2d82aa.png?tr=dpr-2,q-75"
        alt="bg-blue"
        width={320}
        height={600}
        className="absolute top-0 left-0 h-full w-auto md:block hidden"
      />
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-10 items-center h-full p-4 md:p-0">
        <div className="md:col-span-3 h-[200px] md:h-full mb-4 md:mb-0 relative">
          <Image
            src="https://ik.imagekit.io/tvlk/image/imageResource/2023/07/03/1688370082420-ea9f0f5530ce9e6a7b36fcec8aa60664.png?tr=dpr-2,q-75"
            alt="TravelApp mobile app"
            width={400}
            height={600}
            className="relative mx-auto h-[90%] w-auto object-contain bottom-0"
            style={{ position: 'absolute', bottom: 0 }}
          />
        </div>
        <div className="md:col-span-7 text-white" style={{ gridColumn: "span 5 / span 2" }}>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Stay updated with travel tips, recommendations, and latest promos.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-[1fr,auto] gap-2 mb-6">
            <div className="relative">
              <Input type="email" placeholder="Your Email Address" className="flex-1 bg-white font-semibold pl-10" />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <Button className="bg-[#FF5E1F] hover:bg-[#FF5E1F]/90 whitespace-nowrap font-bold">Subscribe to Newsletter</Button>
          </div>
          <div className="mt-8">
            <p className="text-xl mb-4 font-bold ">Have your dream trip at your fingertips. Get The App.</p>
            <div className="grid grid-cols-1 gap-4">
              <div className="grid grid-cols-[auto,1fr] gap-4 items-center">
                <div className="bg-white p-2 rounded-lg">
                  <img src="https://ik.imagekit.io/tvlk/image/imageResource/2023/06/05/1685932333390-f442fb93a4dc254d3c4f6771dd04b4ad.png?tr=dpr-2,q-75" alt="QR Code" className="w-24 h-24" />
                </div>
                <div className="flex flex-row items-center gap-4">
                  <Image
                    src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/f/f519939e72eccefffb6998f1397901b7.svg"
                    alt="Get it on Google Play"
                    width={135}
                    height={40}
                    className="cursor-pointer"
                  />
                  <Image
                    src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/1/18339f1ae28fb0c49075916d11b98829.svg"
                    alt="Download on the App Store"
                    width={135}
                    height={40}
                    className="cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsletterAndAppDownload