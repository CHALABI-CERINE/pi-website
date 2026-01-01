import React from "react"
import { cn } from "../../lib/utils"
export const Textarea = ({ className, ...props }) => (
  <textarea
    className={cn(
      "flex min-h-[120px] w-full border-b border-border bg-transparent py-2 font-poppins text-xs uppercase tracking-widest ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50 transition-colors",
      className
    )}
    {...props}
  />
)