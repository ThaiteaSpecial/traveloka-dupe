'use client'

import { useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { useAuthStore } from '@/store/useAuthStore'

const publicPaths = ['/', '/login', '/register']

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const { isAuthenticated } = useAuthStore()

  useEffect(() => {
    const isSearchPath = pathname.startsWith('/search/')
    const isDetailPath = pathname.startsWith('/detail/')
    const isFormPaymentPath = pathname.startsWith('/form-payment/')
    
    const isPublicRoute = publicPaths.some(path => pathname === path || pathname.startsWith(path + '/')) || 
                         isSearchPath || 
                         isDetailPath ||
                         isFormPaymentPath

    if (!isPublicRoute && !isAuthenticated) {
      router.push('/')
      return
    }
  }, [isAuthenticated, pathname, router])

  return <>{children}</>
}