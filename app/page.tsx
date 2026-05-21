"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { DiaTextReveal } from "@/components/magicui/dia-text-reveal"

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/auth")
    }, 3200)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <main className="relative flex h-screen items-center justify-center overflow-hidden bg-black">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.18),transparent_55%)]" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-6">
        <DiaTextReveal
          className="text-6xl font-black tracking-[-0.08em] text-white md:text-8xl"
          colors={[
            "#f97316",
            "#eab308",
            "#22c55e",
            "#3b82f6",
            "#a855f7",
          ]}
          delay={0.35}
          duration={2.4}
          text="ICEL!NK"
        />

        <p className="text-xs uppercase tracking-[0.45em] text-zinc-500 md:text-sm">
          Trading • Creators • Community
        </p>

        {/* Loading Line */}
        <div className="mt-3 h-[2px] w-40 overflow-hidden rounded-full bg-zinc-800">
          <div className="loading-bar h-full w-full rounded-full bg-gradient-to-r from-orange-500 via-blue-500 to-purple-500" />
        </div>
      </div>

      <style jsx>{`
        .loading-bar {
          animation: loading 2.5s ease-in-out infinite;
        }

        @keyframes loading {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </main>
  )
}
