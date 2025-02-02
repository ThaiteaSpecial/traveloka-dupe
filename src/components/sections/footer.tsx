import Link from "next/link"

const footerLinks = {
    about: [
        { label: "How to Book", href: "#" },
        { label: "Contact Us", href: "#" },
        { label: "Help Center", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Installment", href: "#" },
        { label: "About Us", href: "#" },
        { label: "New Release Features", href: "#" }
    ],
    products: [
        { label: "Hotels", href: "#" },
        { label: "Flights", href: "#" },
        { label: "Trains", href: "#" },
        { label: "Bus & Travel", href: "#" },
        { label: "Airport Transfer", href: "#" },
        { label: "Car Rental", href: "#" },
        { label: "JR Pass", href: "#" },
        { label: "Taxi", href: "#" },
        { label: "Things to Do", href: "#" },
        { label: "Cruises", href: "#" },
        { label: "Villas", href: "#" },
        { label: "Apartments", href: "#" },
        { label: "Insurance", href: "#" },
        { label: "International Data Plans", href: "#" },
        { label: "TPayLater", href: "#" },
        { label: "Gift Voucher", href: "#" }
    ],
    others: [
        { label: "Traveloka for Corporates", href: "#" },
        { label: "Traveloka Affiliate", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Privacy Notice", href: "#" },
        { label: "Terms & Conditions", href: "#" },
        { label: "Register Your Accommodation", href: "#" },
        { label: "Register Your Experience Business", href: "#" },
        { label: "Traveloka Press Room", href: "#" },
        { label: "Traveloka Ads", href: "#" },
        { label: "Vulnerability Disclosure Program", href: "#" },
        { label: "APAC Travel Insights", href: "#" }
    ],
    social: [
        { label: "Facebook", href: "#" },
        { label: "Instagram", href: "#" },
        { label: "TikTok", href: "#" },
        { label: "Youtube", href: "#" },
        { label: "Twitter", href: "#" },
        { label: "Telegram", href: "#" },
        { label: "WhatsApp", href: "#" }
    ]
}

export function Footer() {
    return (
        <footer className="bg-[rgba(28,41,48,1.00)] text-white">
            <div className="">
                <div className=" container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-5 gap-8">
                    <div>
                        <img src="/traveloka-logo-white.png" alt="Traveloka" className="h-8 mb-6" />
                        <div className="flex flex-col gap-4 mb-6">
                            <img src="/iata-logo.png" alt="IATA" className="h-8" />
                            <img src="/iso-logo.png" alt="ISO" className="h-8" />
                            <img src="/pci-logo.png" alt="PCI" className="h-8" />
                        </div>
                        <div className="p-4 bg-[rgba(35,49,56,1)] rounded-lg">
                            <h4 className="font-semibold mb-2">Partner with Traveloka</h4>
                            <p className="text-sm text-gray-300">Join us and expand your business</p>
                        </div>
                        <div className="mt-6">
                            <h4 className="font-semibold mb-4">Payment Partners</h4>
                            <div className="grid grid-cols-4 gap-2">
                                {/* {['tpay', 'visa', 'mastercard', 'jcb', 'amex', 'bca', 'mandiri', 'bri', 'bni', 'bsi', 'permata', 'alto', 'gopay', 'alfamart', 'link', 'indomaret'].map((partner) => (
                                    <div key={partner} className="bg-white p-2 rounded">
                                        <img src={`/payment/${partner}.png`} alt={partner} className="h-6 w-auto" />
                                    </div>
                                ))} */}
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">About Traveloka</h3>
                        <ul className="space-y-2">
                            {footerLinks.about.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="text-sm text-gray-300 hover:text-white">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Products</h3>
                        <ul className="space-y-2">
                            {footerLinks.products.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="text-sm text-gray-300 hover:text-white">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Others</h3>
                        <ul className="space-y-2">
                            {footerLinks.others.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="text-sm text-gray-300 hover:text-white">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Social Media</h3>
                        <ul className="space-y-2">
                            {footerLinks.social.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="text-sm text-gray-300 hover:text-white">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="p-8 border-t border-gray-700 flex justify-center">
                    <p className="text-sm text-gray-300">
                        © {new Date().getFullYear()} Traveloka. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer