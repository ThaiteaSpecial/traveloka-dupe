"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function PaymentInstructions() {
    const [expandedSection, setExpandedSection] = useState("livin")
    const [copySuccess, setCopySuccess] = useState<string | null>(null)

    const handleCopy = async (text: string, type: string) => {
        await navigator.clipboard.writeText(text)
        setCopySuccess(type)
        setTimeout(() => setCopySuccess(null), 2000)
    }

    return (
        <div className="max-w-2xl mx-auto p-4 space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">Please Transfer to</h1>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg flex items-center justify-between">
                <span className="text-lg font-semibold">Mandiri Virtual Account</span>
                <Image
                    src="/placeholder.svg?height=30&width=80"
                    alt="Mandiri Logo"
                    width={80}
                    height={30}
                    className="object-contain"
                />
            </div>

            <div className="bg-yellow-50 border border-yellow-100 p-3 rounded-lg text-yellow-800">
                You can only transfer from Mandiri account
            </div>

            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <span className="text-gray-600">Account Number:</span>
                    <div className="flex items-center gap-2">
                        <span className="font-mono">22222647442315</span>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleCopy("22222647442315", "account")}
                            className="text-blue-600 hover:text-blue-700"
                        >
                            {copySuccess === "account" ? "Copied!" : "Copy"}
                        </Button>
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <span className="text-gray-600">Account Holder Name:</span>
                    <span>TRAVELOKA 122386264</span>
                </div>

                <div className="flex items-center justify-between">
                    <span className="text-gray-600">Transfer Amount:</span>
                    <div className="flex items-center gap-2">
                        <span className="font-semibold">Rp 1.175.625</span>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleCopy("1175625", "amount")}
                            className="text-blue-600 hover:text-blue-700"
                        >
                            {copySuccess === "amount" ? "Copied!" : "Copy"}
                        </Button>
                    </div>
                </div>
            </div>

            {/* How to Transfer */}
            <div className="space-y-4">
                <h2 className="text-xl font-bold">How to Transfer</h2>

                {/* Livin' by Mandiri Section */}
                <div className="border rounded-lg">
                    <button
                        className="w-full flex items-center justify-between p-4"
                        onClick={() => setExpandedSection(expandedSection === "livin" ? "" : "livin")}
                    >
                        <span className="font-semibold">Livin&apos; by Mandiri (Yellow)</span>
                        {expandedSection === "livin" ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                    </button>
                    {expandedSection === "livin" && (
                        <div className="p-4 border-t space-y-4">
                            <ol className="list-decimal list-inside space-y-3">
                                <li>Open your Livin&apos; by Mandiri application, then login with your account.</li>
                                <li>
                                    Choose <span className="font-medium">Payment</span> menu, then search &apos;22222&apos; or
                                    &apos;Traveloka Indonesia&apos; on the search bar.
                                </li>
                                <li>
                                    Enter your virtual account number <span className="text-blue-600">(22222647442315)</span>, then tap
                                    OK.
                                </li>
                                <li>
                                    On the payment details summary, make sure the payment details are correct:
                                    <br />
                                    Merchant name <span className="font-medium">(Traveloka Indonesia)</span> followed by your total bill.
                                </li>
                                <li>Enter your PIN.</li>
                                <li>
                                    Once your payment is completed, your booking will be processed. Please keep the payment proof as your
                                    reference.
                                </li>
                            </ol>
                        </div>
                    )}
                </div>

                {/* Mandiri ATM Section */}
                <div className="border rounded-lg">
                    <button
                        className="w-full flex items-center justify-between p-4"
                        onClick={() => setExpandedSection(expandedSection === "atm" ? "" : "atm")}
                    >
                        <span className="font-semibold">Mandiri ATM</span>
                        {expandedSection === "atm" ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                    </button>
                </div>
            </div>

            {/* Completed Payment Section */}
            <div className="space-y-4 pt-6">
                <h2 className="text-xl font-bold">Completed your payment?</h2>
                <p className="text-gray-600">
                    Once your payment is confirmed, we will send your e-ticket and receipt via email.
                </p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Yes, I Have Paid</Button>
            </div>
        </div>
    )
}

export default PaymentInstructions