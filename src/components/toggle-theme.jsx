"use client"

import React from 'react'
import { Moon, Sun } from 'lucide-react'
import { Button } from '../ui/button'
import { useTheme } from './theme-provider'

export function ToggleTheme() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost" 
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="w-9 px-0 overflow-hidden"
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}