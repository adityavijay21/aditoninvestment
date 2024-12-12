import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"

import { cn } from "../lib/utlis"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 max-w-full break-words overflow-y-hidden shadow-sm hover:shadow-md active:scale-95",
  {
    variants: {
      variant: {
        default: "bg-navy-700 text-white hover:bg-navy-600 hover:translate-y-[-1px]", // Changed to navy blue
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:translate-y-[-1px]",
        outline:
          "border-2 border-black bg-transparent text-black hover:bg-black hover:text-white",
        secondary:
          "bg-zinc-800 text-white hover:bg-zinc-900 hover:translate-y-[-1px]",
        ghost: "text-black hover:bg-black/10",
        link: "text-black underline-offset-4 hover:underline decoration-2",
        gradient: "bg-gradient-to-r from-black to-zinc-800 text-white hover:brightness-110 hover:translate-y-[-1px]"
      },
      size: {
        default: "h-10 px-5 py-2.5 w-full sm:w-auto",
        sm: "h-9 rounded-md px-4 py-2 w-full sm:w-auto text-xs",
        lg: "h-12 rounded-lg px-8 py-3 w-full sm:w-auto text-base",
        icon: "h-10 w-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      className={cn(
        buttonVariants({ variant, size, className }), 
        "overflow-hidden text-ellipsis overflow-y-hidden select-none"
      )}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button, buttonVariants }
