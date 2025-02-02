"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useAuthStore } from '@/store/useAuthStore'

export function LoginModal({
    isOpen = false,
    onClose = () => { },
}: {
    isOpen?: boolean
    onClose?: () => void
}) {
    const login = useAuthStore(state => state.login)
    
    const handleLogin = (email: string) => {
        login(email, email.split('@')[0])
        onClose()
    }

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="text-xl">Log In/Register</DialogTitle>
                </DialogHeader>
                <div className="space-y-6 py-4">
                    <div className="space-y-2">
                        <label className="text-sm text-muted-foreground">Email/Mobile Number</label>
                        <Input type="text" placeholder="Example: +62812345678 or yourname@email.com" className="w-full" />
                    </div>
                    <Button 
                        className="w-full bg-blue-600 hover:bg-blue-700"
                        onClick={() => handleLogin('demo@example.com')}
                    >
                        Continue
                    </Button>
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-background px-2 text-muted-foreground">or log in/register with</span>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Button variant="outline" className="w-full justify-start gap-2">
                            <img src="https://www.google.com/favicon.ico" alt="" className="h-4 w-4" />
                            Google
                        </Button>
                        <Button variant="outline" className="w-full justify-start gap-2">
                            <img src="https://www.apple.com/favicon.ico" alt="" className="h-4 w-4" />
                            Apple
                        </Button>
                        <Button variant="outline" className="w-full justify-start gap-2">
                            <img src="https://www.facebook.com/favicon.ico" alt="" className="h-4 w-4" />
                            Facebook
                        </Button>
                    </div>
                    <p className="text-center text-xs text-muted-foreground">
                        By continuing, you agree to the{" "}
                        <a href="#" className="text-blue-600 hover:underline">
                            Terms & Conditions
                        </a>{" "}
                        and acknowledge that you have been informed about our{" "}
                        <a href="#" className="text-blue-600 hover:underline">
                            Privacy Notice
                        </a>
                        .
                    </p>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default LoginModal