"use client"
import { useState, useMemo } from "react"
import { useI18n } from "@shared/lib/i18n/I18nProvider"
import Button from "@shared/ui/Button"
import dynamic from "next/dynamic"
import { motion, AnimatePresence } from "framer-motion"
const Scene = dynamic(() => import("./Scene"), { ssr: false })

type StepId = "constellation"|"builder"|"playback"|"board"|"sign"|"sla"|"vault"|"archive"|"summary"
const order: StepId[] = ["constellation","builder","playback","board","sign","sla","vault","archive","summary"]

export default function ExperienceApp() {
  const { dict } = useI18n()
  const [step, setStep] = useState<StepId>("constellation")
  const idx = order.indexOf(step)
  const canPrev = idx>0, canNext = idx<order.length-1

  const titles = useMemo(()=>({
    constellation: dict.experience.steps.constellation,
    builder: dict.experience.steps.builder,
    playback: dict.experience.steps.playback,
    board: dict.experience.steps.board,
    sign: dict.experience.steps.sign,
    sla: dict.experience.steps.sla,
    vault: dict.experience.steps.vault,
    archive: dict.experience.steps.archive,
    summary: dict.experience.steps.summary
  }),[dict])

  return (
    <section id="tour" className="py-10">
      <div className="container-max">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">Edoline Live Flow</h2>
        <div className="relative h-[70vh] md:h-[76vh] rounded-2xl glass overflow-hidden">
          <div className="absolute inset-0">
            <Scene step={step} onAutoNext={()=>{ const i=order.indexOf(step); if(i<order.length-1) setStep(order[i+1]) }} />
          </div>
          <div className="absolute inset-x-0 top-0 p-4 sm:p-6 flex items-center justify-between gap-3">
            <div className="text-sm sm:text-base font-medium px-3 py-1 rounded-full bg-slate-900/5 dark:bg-white/10">Интерактивный тур</div>
            <div className="flex items-center gap-1 opacity-90 text-xs sm:text-sm">{idx+1}/{order.length}</div>
          </div>
          <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
            <div className="rounded-xl bg-slate-900/5 dark:bg-white/10 px-4 py-3 sm:px-6 sm:py-4">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.div key={step} initial={{ opacity:0, y:8 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-8 }} transition={{ type:"spring", stiffness:300, damping:20 }}>
                  <div className="text-sm sm:text-base font-semibold mb-1">{titles[step]}</div>
                  <div className="text-xs sm:text-sm opacity-80">{dict.experience.descr[step]}</div>
                </motion.div>
              </AnimatePresence>
              <div className="mt-3 flex items-center justify-between">
                <Button variant="secondary" size="sm" onClick={()=> canPrev && setStep(order[idx-1])} disabled={!canPrev}>{dict.experience.prev}</Button>
                {step!=="summary" ? <Button size="sm" onClick={()=> canNext && setStep(order[idx+1])}>{dict.experience.next}</Button> : <a href="#contact"><Button size="sm">{dict.experience.cta}</Button></a>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
