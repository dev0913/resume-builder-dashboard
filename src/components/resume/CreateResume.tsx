


import { Card, CardContent } from "@/components/ui/card"
import { PlusCircle } from "lucide-react"
import Link from "next/link"

export function NewResumeCard() {
  return (
    <Link href="/create-resume">
      <Card className="overflow-hidden border-dashed hover:border-primary/50 transition-colors cursor-pointer group flex">
        {/* Left side - Icon */}
        <div className="w-[120px] flex items-center justify-center bg-muted/50 border-r dark:border-border">
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <PlusCircle className="h-5 w-5 text-primary" />
          </div>
        </div>

        {/* Right side - Content */}
        <CardContent className="p-4 flex-1">
          <h3 className="text-lg font-medium text-foreground">New resume</h3>
          <p className="text-sm text-muted-foreground mt-2">
            <span className="font-medium">TIP:</span> Did you know that if you tailor your resume to the job
            description, you double your chances to get an interview?
          </p>
        </CardContent>
      </Card>
    </Link>
  )
}

