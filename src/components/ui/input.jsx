import React from "react"
import { cn } from "../../lib/utils"

export const Input = ({ className, ...props }) => (
  <input
    className={cn(
      "flex h-12 w-full border-b border-border bg-transparent py-2 font-poppins text-xs uppercase tracking-widest ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50 transition-colors",
      className
    )}
    {...props}
  />
)