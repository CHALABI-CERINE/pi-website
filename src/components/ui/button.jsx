import React from "react"
import { cn } from "../../lib/utils"

export const Button = ({ className, variant = "primary", size = "default", ...props }) => {
  const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-md font-poppins text-xs font-bold uppercase tracking-widest transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90 hover:shadow-orange-glow",
    outline: "border border-border bg-transparent hover:bg-secondary hover:text-foreground",
    secondary: "bg-secondary text-foreground hover:bg-secondary/80",
    ghost: "hover:bg-secondary hover:text-primary",
  }

  const sizes = {
    default: "h-12 px-8",
    sm: "h-9 px-4",
    lg: "h-14 px-10 text-sm",
    icon: "h-10 w-10",
  }

  return (
    <button className={cn(baseStyles, variants[variant], sizes[size], className)} {...props} />
  )
}   