import { ReactNode } from "react"
import Header from "../sections/header"
import Footer from "../sections/footer"

interface LayoutProps {
    isTransparentHeader?: boolean
    children: ReactNode
}

export function Layout({ children, isTransparentHeader = false }: LayoutProps) {
    return (
        <div className="min-h-screen flex flex-col">
            <Header isTransparent={isTransparentHeader} />

            <main className="flex-1">
                {children}
            </main>

            <Footer />
        </div>
    )
}

export default Layout
