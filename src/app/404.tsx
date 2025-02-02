import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <div className="text-center space-y-6 p-8">
        <h1 className="text-6xl font-bold text-[#FF5E1F]">404</h1>
        <h2 className="text-2xl font-semibold">Page Not Found</h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Sorry, we couldn't find the page you're looking for. Please check the URL or return to the homepage.
        </p>
        <Link 
          href="/"
          className="inline-block px-6 py-3 rounded-lg bg-[#FF5E1F] text-white font-medium hover:bg-[#E54D1F] transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
} 