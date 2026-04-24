"use client"

import { useEffect, useRef, useState } from "react"

interface ImpactCounterProps {
  number: number
  label: string
  suffix?: string
}

export function ImpactCounter({ number, label, suffix = "" }: ImpactCounterProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let animationFrameId: number
    let currentCount = 0
    const duration = 2000
    const startTime = Date.now()

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)

      currentCount = Math.floor(number * progress)
      setCount(currentCount)

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate)
      }
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [isVisible, number])

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center p-8 bg-card rounded-lg hover:shadow-md transition-shadow duration-300"
    >
      <div className="text-4xl md:text-5xl font-bold text-primary mb-2 tabular-nums">
        {count.toLocaleString()}
        {suffix}
      </div>
      <p className="text-muted-foreground text-center text-sm md:text-base">
        {label}
      </p>
    </div>
  )
}
