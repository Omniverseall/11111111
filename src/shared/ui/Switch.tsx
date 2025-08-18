"use client"
import { cn } from "@shared/lib/ui/cn"
export default function Switch({ checked, onChange }: { checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <button onClick={()=>onChange(!checked)} className={cn("w-12 h-7 rounded-full p-1 transition-colors", checked ? "bg-primary" : "bg-slate-300 dark:bg-slate-600")} aria-pressed={checked}>
      <span className={cn("block h-5 w-5 rounded-full bg-white transition-transform", checked ? "translate-x-5" : "translate-x-0")} />
    </button>
  )
}
