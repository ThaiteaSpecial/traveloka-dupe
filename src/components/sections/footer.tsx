import Link from "next/link"

export function Footer() {
    return (
        <footer className="bg-gray-100 mt-20">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="font-semibold mb-4">About</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                                    How it works
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                                    About us
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                                    Careers
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Support</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                                    Help Center
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                                    Contact us
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                                    Privacy policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Business</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                                    Success stories
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                                    Partners
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                                    Investors
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Get the app</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                                    iOS app
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                                    Android app
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t">
                    <p className="text-center text-sm text-muted-foreground">
                        © {new Date().getFullYear()} TravelApp. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer