import React from "react"
import { cn } from "../../lib/utils"

export const Badge = ({ className, variant = "default", ...props }) => {
  const variants = {
    default: "bg-primary/10 text-primary border-transparent",
    outline: "text-foreground border-border",
    secondary: "bg-secondary text-muted-foreground border-transparent",
  }

  return (
    <div className={cn(
      "inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-poppins font-bold uppercase tracking-wider transition-colors",
      variants[variant],
      className
    )} {...props} />
  )
}