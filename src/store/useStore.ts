import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface PaymentState {
  currentStep: number
  setCurrentStep: (step: number) => void
  
  paymentDetails: {
    amount: number
    currency: string
    selectedPayment: string
    bookingId: string
    expiryTime?: number // Unix timestamp for payment expiry
  }
  setPaymentDetails: (details: Partial<PaymentState['paymentDetails']>) => void
  
  formData: {
    contactDetails: {
      fullName: string
      phone: string
      email: string
      bookingFor: 'self' | 'other'
      guestName?: string
    }
    specialRequests: {
      [key: string]: boolean
    }
  }
  setFormData: (data: Partial<PaymentState['formData']>) => void
  
  // Add timer-related state
  timeLeft: number
  setTimeLeft: (time: number) => void
  resetTimer: () => void
}

export const useStore = create<PaymentState>()(
  persist(
    (set) => ({
      currentStep: 1,
      setCurrentStep: (step) => set({ currentStep: step }),
      
      paymentDetails: {
        amount: 0,
        currency: 'IDR',
        selectedPayment: '',
        bookingId: ''
      },
      setPaymentDetails: (details) => set((state) => ({
        paymentDetails: { ...state.paymentDetails, ...details }
      })),
      
      formData: {
        contactDetails: {
          fullName: '',
          phone: '',
          email: '',
          bookingFor: 'self',
          guestName: ''
        },
        specialRequests: {
          nonSmoking: false,
          highFloor: false,
          checkInTime: false,
          connectingRooms: false,
          bedType: false,
          checkOutTime: false
        }
      },
      setFormData: (data) => set((state) => ({
        formData: { ...state.formData, ...data }
      })),
      
      // Timer implementation
      timeLeft: 2400, // 40 minutes in seconds
      setTimeLeft: (time) => set({ timeLeft: Math.max(0, time) }), // Ensure time never goes below 0
      resetTimer: () => set({ timeLeft: 2400 })
    }),
    {
      name: 'payment-storage',
      partialize: (state) => ({
        currentStep: state.currentStep,
        paymentDetails: state.paymentDetails,
        timeLeft: state.timeLeft
      }),
      // Add version control to handle storage updates
      version: 1,
      // Optional: Clear storage if you want to force a reset
      onRehydrateStorage: () => {
        console.log("Storage rehydrated")
        return (state) => {
          console.log("Rehydrated state:", state)
        }
      }
    }
  )
)

// Add this function to the store
export const clearPaymentStorage = () => {
    localStorage.removeItem('payment-storage')
} 