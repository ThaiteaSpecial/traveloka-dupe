"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Info } from "lucide-react"
import { useState } from "react"

interface CouponCardProps {
  icon: string
  title: string
  subtitle: string
  code: string
  onInfoClick?: () => void
  className?: string
}

export function CouponCard({ icon, title, subtitle, code, onInfoClick, className = "" }: CouponCardProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  return (
    <div
      className={`relative overflow-hidden bg-white shadow-[0_2px_12px_0_rgba(0,0,0,0.08)] rounded-[8px] border-[1px] border-solid border-[#EAECF0] w-[400px] h-[148px] ${className}`}
    >
      <div className="relative px-4 py-4 grid gap-3">
        <button
          onClick={onInfoClick}
          className="absolute right-4 top-4 text-[#98A2B3] hover:text-[#667085] transition-colors"
          aria-label="More information"
        >
          <Info className="h-5 w-5" />
        </button>

        <div className="grid grid-cols-[auto,1fr] items-start gap-3 mb-1">
          <div className="relative h-8 w-8 shrink-0">
            <Image src={icon || "/placeholder.svg"} alt="Logo" fill className="object-contain rounded-[4px]" />
          </div>
          <div className="flex-1 min-w-0 pt-1">
            <h3 className="font-medium text-[15px] leading-[22px] text-[#101828] mb-1">{title}</h3>
            <p className="text-[13px] leading-[18px] text-[#475467]">{subtitle}</p>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-[1fr,auto] items-center gap-3">
          <code className="bg-[#F9FAFB] px-3 py-2 rounded-[6px] text-[13px] leading-[18px] font-mono text-[#101828]">
            {code}
          </code>
          <Button
            variant="secondary"
            className="h-8 px-4 text-[13px] leading-[18px] font-medium bg-[#EFF8FF] text-[#1570EF] hover:bg-[#D1E9FF] hover:text-[#175CD3] transition-colors rounded-[6px]"
            onClick={handleCopy}
          >
            {copied ? "Copied!" : "Copy"}
          </Button>
        </div>
      </div>

      {/* Left notch */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 overflow-hidden">
        <div className="w-4 h-4 bg-[#F2F4F7] rounded-full -translate-x-2" />
      </div>

      {/* Dashed line between notches */}
      <div className="absolute top-1/2 left-2 right-2 border-t border-dashed border-[#EAECF0]" />

      {/* Right notch */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 overflow-hidden">
        <div className="w-4 h-4 bg-[#F2F4F7] rounded-full -translate-x-[-8px]" />
      </div>
    </div>
  )
}

export default CouponCard