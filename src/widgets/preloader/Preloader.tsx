"use client"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"
import { useI18n } from "@shared/lib/i18n/I18nProvider"
import { useTheme } from "next-themes"

const LogoSVG = (
  <svg xmlns="http://www.w3.org/2000/svg" width="320" height="320" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
    <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
    <path d="M10 9H8"></path>
    <path d="M16 13H8"></path>
    <path d="M16 17H8"></path>
  </svg>
)

export default function Preloader(){
  const { dict } = useI18n()
  const { theme, resolvedTheme } = useTheme()
  const [visible,setVisible] = useState(false)
  const [pulse,setPulse] = useState(true)
  useEffect(()=>{
    if (typeof window==="undefined") return
    if (sessionStorage.getItem("edoline_preloaded")) return
    setVisible(true)
    const t1 = setTimeout(()=> setPulse(false), 1000)
    const t2 = setTimeout(()=>{ setVisible(false); sessionStorage.setItem("edoline_preloaded","1") }, 1700)
    return ()=>{ clearTimeout(t1); clearTimeout(t2) }
  },[])
  return (
    <AnimatePresence>
      {visible && (
        <motion.div className="fixed inset-0 z-[60] grid place-items-center"
          initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0, transition:{ duration:.45 } }}
          style={{ backgroundImage:"linear-gradient(135deg,#0B1220,#0F172A)" }}>
          <div className="relative w-full max-w-[640px] mx-auto px-6 text-center">
            <motion.div initial={{ opacity:0, y:6, scale:.98 }} animate={{ opacity:1, y:0, scale:1, transition:{ delay:.06, duration:.3 } }} className="relative mx-auto flex items-center justify-center">
              <motion.div className="relative" initial={{ scale:1, opacity:1 }} animate={pulse ? { scale:[1,1.14,1], opacity:[1,.65,1], transition:{ duration:.9, repeat:1 } } : { scale:1.06, opacity:1, transition:{ duration:.45 } }}>
                <div className="absolute inset-0 -z-10 grid place-items-center">
                  <div className="h-[360px] w-[360px] blur-3xl rounded-full bg-gradient-to-br from-primary/30 to-violet-500/25" />
                </div>
                {LogoSVG}
              </motion.div>
            </motion.div>
            {!pulse && (
              <>
                <div className="mt-4 text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight"
                     style={{ backgroundImage:"linear-gradient(90deg,#93C5FD,#C4B5FD,#E5E7EB)", WebkitBackgroundClip:"text", backgroundClip:"text", color:"transparent" }}>
                  EDOLINE
                </div>
                <motion.p initial={{ opacity:0, y:6 }} animate={{ opacity:1, y:0, transition:{ delay:.25, duration:.3 } }} className="mt-2 opacity-80">
                  {dict.preloader?.subtitle || "Загружаем Edoline — корпоративную платформу ЭДО"}
                </motion.p>
              </>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
