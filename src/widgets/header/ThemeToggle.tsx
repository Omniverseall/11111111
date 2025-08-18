"use client"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(()=> setMounted(true), [])
  const isDark = (theme ?? resolvedTheme) === "dark"
  return (
    <button onClick={()=>setTheme(isDark ? "light" : "dark")} aria-label="Toggle theme" className="relative p-2 rounded-lg hover:bg-slate-900/5 dark:hover:bg-white/10">
      <motion.div layoutId="theme-glow" className="absolute inset-0 pointer-events-none"
        animate={{ background: isDark ? "radial-gradient(600px at 50% -20%, rgba(59,130,246,.25), transparent)" : "radial-gradient(600px at 50% -20%, rgba(99,102,241,.25), transparent)" }}/>
      <AnimatePresence initial={false} mode="popLayout">
        {mounted && isDark ? (
          <motion.span key="sun" initial={{ rotate:-90, opacity:0, scale:.8 }} animate={{ rotate:0, opacity:1, scale:1 }} exit={{ rotate:90, opacity:0, scale:.8 }} transition={{ type:"spring", stiffness:300, damping:20 }}>
            <Sun size={18}/>
          </motion.span>
        ) : (
          <motion.span key="moon" initial={{ rotate:90, opacity:0, scale:.8 }} animate={{ rotate:0, opacity:1, scale:1 }} exit={{ rotate:-90, opacity:0, scale:.8 }} transition={{ type:"spring", stiffness:300, damping:20 }}>
            <Moon size={18}/>
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  )
}
