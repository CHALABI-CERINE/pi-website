import React from "react"
import { cn } from "../../lib/utils"

export const Card = ({ className, ...props }) => (
  <div className={cn("rounded-xl border border-border bg-card text-card-foreground shadow-card overflow-hidden", className)} {...props} />
)

export const CardHeader = ({ className, ...props }) => (
  <div className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
)

export const CardTitle = ({ className, ...props }) => (
  <h3 className={cn("font-display text-2xl leading-none tracking-tight", className)} {...props} />
)

export const CardContent = ({ className, ...props }) => (
  <div className={cn("p-6 pt-0", className)} {...props} />
)