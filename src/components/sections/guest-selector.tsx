"use client"

import { Minus, Plus, User, Users, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface GuestSelectorProps {
    adults: number
    children: number
    rooms: number
    onUpdate: (type: "adults" | "children" | "rooms", value: number) => void
    onDone: () => void
}

export function GuestSelector({ adults, children, rooms, onUpdate, onDone }: GuestSelectorProps) {
    const handleUpdate = (type: "adults" | "children" | "rooms", increment: boolean) => {
        const current = type === "adults" ? adults : type === "children" ? children : rooms
        const newValue = increment ? current + 1 : current - 1

        if (type === "adults") {
            if (newValue < 1 || newValue > 8) return
        } else if (type === "children") {
            if (newValue < 0 || newValue > 8) return
        } else if (type === "rooms") {
            if (newValue < 1 || newValue > 8) return
        }

        onUpdate(type, newValue)
    }

    return (
        <div className="p-4">
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <User className="h-5 w-5 text-blue-500" />
                        <span>Adult</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => handleUpdate("adults", false)}
                            disabled={adults <= 1}
                        >
                            <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center">{adults}</span>
                        <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => handleUpdate("adults", true)}
                            disabled={adults >= 8}
                        >
                            <Plus className="h-4 w-4" />
                        </Button>
                    </div>
                </div>

                {/* Children */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <Users className="h-5 w-5 text-blue-500" />
                        <span>Children</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => handleUpdate("children", false)}
                            disabled={children <= 0}
                        >
                            <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center">{children}</span>
                        <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => handleUpdate("children", true)}
                            disabled={children >= 8}
                        >
                            <Plus className="h-4 w-4" />
                        </Button>
                    </div>
                </div>

                {/* Rooms */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <Building2 className="h-5 w-5 text-blue-500" />
                        <span>Room</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => handleUpdate("rooms", false)}
                            disabled={rooms <= 1}
                        >
                            <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center">{rooms}</span>
                        <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => handleUpdate("rooms", true)}
                            disabled={rooms >= 8}
                        >
                            <Plus className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>

            <Button className="w-full mt-6 bg-blue-500 hover:bg-blue-600" onClick={onDone}>
                Done
            </Button>
        </div>
    )
}

export default GuestSelector