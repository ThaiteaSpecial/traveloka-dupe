import { Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface CouponCardProps {
  title: string
  code: string
  description: string
  icon: string
  onCopy: () => void
}

export function CouponCard({ title, code, description, icon, onCopy }: CouponCardProps) {
  return (
    <div className="w-[300px] flex-shrink-0 rounded-lg border bg-card p-4 shadow-sm mx-6">
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 rounded-full bg-blue-100 p-2">{icon}</div>
          <div>
            <h3 className="font-medium">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Info className="h-4 w-4 text-muted-foreground" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Terms and conditions apply</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <code className="rounded bg-muted px-2 py-1">{code}</code>
        <Button variant="outline" size="sm" onClick={onCopy}>
          Copy
        </Button>
      </div>
    </div>
  )
}

export default CouponCard