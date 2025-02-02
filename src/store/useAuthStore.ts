import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface User {
  id: string
  email: string
  name: string
}

interface AuthState {
  user: User | null
  isAuthenticated: boolean
  setUser: (user: User | null) => void
  login: (email: string, name: string) => void
  logout: () => void
}

const generateUserId = (): string => {
  return Math.random().toString(36).slice(2)
}

const initialState = {
  user: null,
  isAuthenticated: false,
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      ...initialState,
      setUser: (user: User | null) => 
        set({ user, isAuthenticated: !!user }),
      login: (email: string, name: string) => 
        set({ 
          user: { 
            id: generateUserId(), 
            email, 
            name 
          }, 
          isAuthenticated: true 
        }),
      logout: () => set(initialState)
    }),
    {
      name: 'auth-storage'
    }
  )
) 