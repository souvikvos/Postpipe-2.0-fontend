"use client"

import { useEffect, useState } from "react"
// import { useTheme } from "next-themes"

import { Particles } from "@/components/ui/particles"
import { Button } from "../ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HeroParticles() {
  // const { theme, systemTheme } = useTheme()
  const [color, setColor] = useState("#ffffff")

  useEffect(() => {
    // Manually check for dark mode for now.
    const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setColor(isDarkMode ? "#ffffff" : "#9D4EDD")
  }, [])


  return (
    <div className="relative flex h-[70vh] min-h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg">
        <div className="z-10 flex flex-col items-center text-center gap-6 px-4">
             <h1 className="font-headline text-4xl font-bold md:text-6xl lg:text-7xl pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">
              Build & Automate with PostPipe Pro
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              From static forms to agentic AI-powered workflows, PostPipe Pro is the
              all-in-one platform for modern developers and creators.
            </p>
            <div className="flex gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                <Link href="/dashboard/workflows">
                  Get Started <ArrowRight />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#features">Learn More</Link>
              </Button>
            </div>
        </div>
      <Particles
        className="absolute inset-0"
        quantity={200}
        ease={80}
        color={color}
        refresh
      />
    </div>
  )
}
