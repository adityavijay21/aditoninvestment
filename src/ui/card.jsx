import * as React from "react"

import { cn } from "../lib/utlis"

const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-full overflow-y-auto",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div 
    ref={ref} 
    className={cn(
      "p-4 sm:p-6 pt-0 w-full break-words overflow-y-auto",
      className
    )} 
    {...props} 
  />
))
CardContent.displayName = "CardContent"

const Button = React.forwardRef(({ className, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      "rounded-lg border bg-navy text-white shadow-sm w-full max-w-full overflow-y-auto",
      className
    )}
    {...props}
  />
))
Button.displayName = "Button"

export { Card, CardContent, Button }
