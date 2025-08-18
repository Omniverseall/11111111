"use client"
import { useEffect } from "react"
import { cn } from "@shared/lib/ui/cn"

export default function Modal({ open, onClose, children, className }: { open: boolean; onClose: () => void; children: React.ReactNode; className?: string }) {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose() }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [open, onClose])
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className={cn("relative z-10 w-full max-w-lg rounded-2xl glass p-6", className)}>{children}</div>
    </div>
  )
}
