import Image from "next/image"
import { useStore } from "@/store/useStore"
import Link from "next/link"

export function HeaderPayment() {
    const currentStep = useStore((state) => state.currentStep)

    return (
        <header className="bg-white border-b">
            <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <Link href="/">
                    <Image
                        src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/9/97f3e7a54e9c6987283b78e016664776.svg"
                        alt="Traveloka"
                        width={120}
                        height={32}
                        className="h-8 w-auto"
                    />
                </Link>
                <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600">
                    <div className="flex items-center gap-1 sm:gap-2">
                        <div className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full ${currentStep === 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'} flex items-center justify-center text-[10px] sm:text-xs`}>
                            1
                        </div>
                        Book
                    </div>
                    <div className="h-[2px] w-2 sm:w-4 bg-gray-200" />
                    <div className="flex items-center gap-1 sm:gap-2">
                        <div className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full ${currentStep === 2 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'} flex items-center justify-center text-[10px] sm:text-xs`}>
                            2
                        </div>
                        Pay
                    </div>
                    <div className="h-[2px] w-2 sm:w-4 bg-gray-200" />
                    <div className="flex items-center gap-1 sm:gap-2">
                        <div className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full ${currentStep === 3 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'} flex items-center justify-center text-[10px] sm:text-xs`}>
                            3
                        </div>
                        Voucher Sent
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HeaderPayment