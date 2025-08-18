"use client"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

function Logo({ size=64, opacity=0.25 }: { size?:number; opacity?:number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity }} aria-hidden="true">
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10 9H8" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
    </svg>
  )
}
type Item = { left:string; top:string; size:number; delay:number; duration:number; opacity:number; rotate:number }
function mulberry32(seed:number){ let t=seed>>>0; return ()=>{ t+=0x6D2B79F5; let r=Math.imul(t^(t>>>15),1|t); r^=r+Math.imul(r^(r>>>7),61|r); return ((r^(r>>>14))>>>0)/4294967296 } }

export default function BackgroundFX(){
  const [items,setItems] = useState<Item[]>([])
  useEffect(()=>{
    const rnd = mulberry32(20250117)
    setItems(Array.from({length:22}).map(()=>({
      left:`${(rnd()*100).toFixed(4)}%`,
      top:`${(rnd()*100).toFixed(4)}%`,
      size:48+Math.floor(rnd()*64),
      delay:rnd()*0.7,
      duration:3.2 + rnd()*3.2,
      opacity:0.18 + rnd()*0.22,
      rotate:rnd()*360
    })))
  },[])
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent dark:via-primary/10" />
      {items.map((p,i)=>(
        <motion.div key={i} className="absolute" style={{ left:p.left, top:p.top, filter:"blur(0.3px)" }}
          initial={{ y:18, opacity:0, rotate:p.rotate }}
          animate={{ y:-18, opacity:p.opacity, rotate:p.rotate+28 }}
          transition={{ delay:p.delay, duration:p.duration, repeat:Infinity, repeatType:"reverse", ease:"easeInOut" }}>
          <Logo size={p.size} opacity={p.opacity}/>
        </motion.div>
      ))}
    </div>
  )
}
