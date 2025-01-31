import { ReactNode } from "react"
import Header from "../ui/header"
import Footer from "../ui/footer"

interface LayoutProps {
    children: ReactNode
}

export function Layout({ children }: LayoutProps) {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-1">
                {children}
            </main>

            <Footer />
        </div>
    )
}

export default Layout
