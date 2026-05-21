"use client"

import { useEffect, useState } from "react"

type Props = {
  text: string
  className?: string
  colors?: string[]
  duration?: number
  delay?: number
}

export function DiaTextReveal({
  text,
  className = "",
  colors = ["#fff"],
  duration = 2,
  delay = 0.3,
}: Props) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true)
    }, delay * 1000)

    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div className={className}>
      {text.split("").map((char, i) => {
        const color = colors[i % colors.length]

        return (
          <span
            key={i}
            style={{
              display: "inline-block",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0px)" : "translateY(10px)",
              transition: `all ${duration}s ease ${i * 0.05}s`,
              color,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        )
      })}
    </div>
  )
}
