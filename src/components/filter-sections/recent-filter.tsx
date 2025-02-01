import { Button } from "@/components/ui/button"
import { Building2 } from "lucide-react"

function RecentFilter() {
  return (
    <div className="bg-white rounded-lg border p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold">Recent Filter</h3>
        <Button variant="ghost" size="sm" className="text-blue-600 h-auto p-0">
          Clear
        </Button>
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="flex items-center gap-2">
            <Building2 className="h-4 w-4" />
            Pay at Hotel
          </span>
          <span className="text-muted-foreground">(718)</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span>Promo Domestik</span>
          <span className="text-muted-foreground">(18)</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span>BLESSING GOOD DEALS</span>
          <span className="text-muted-foreground">(203)</span>
        </div>
      </div>
    </div>
  )
}

export default RecentFilter;