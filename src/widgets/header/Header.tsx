"use client"
import Link from "next/link"
import Image from "next/image"
import Container from "@shared/ui/Container"
import ThemeToggle from "./ThemeToggle"
import LanguageSwitcher from "./LanguageSwitcher"
import { useI18n } from "@shared/lib/i18n/I18nProvider"
import { useState } from "react"

export default function Header() {
  const { dict, locale } = useI18n()
  const [menu, setMenu] = useState(false)
  const linkCls = "relative opacity-80 hover:opacity-100 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-primary after:to-violet-500 hover:after:w-full after:transition-[width] after:duration-300"
  const close = () => setMenu(false)
  return (
    <>
      <header className="sticky top-0 z-40 backdrop-blur bg-white/60 dark:bg-bg-dark/60 border-b border-white/20 dark:border-white/10">
        <Container className="flex h-16 items-center justify-between">
          <Link href={`/${locale}`} className="flex items-center gap-2">
            <Image src="/logo.svg" alt="Edoline" width={28} height={28} priority />
            <span className="font-semibold">Edoline</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#about" className={linkCls}>О продукте</a>
            <a href="#features" className={linkCls}>{dict.nav.features}</a>
            <Link href={`/${locale}/experience`} className={linkCls}>{dict.nav.tour}</Link>
            <a href="#pricing" className={linkCls}>{dict.nav.pricing}</a>
            <a href="#contact" className={linkCls}>{dict.nav.contact}</a>
          </nav>
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeToggle />
            <button className="md:hidden p-2 rounded-lg hover:bg-slate-900/5 dark:hover:bg.white/10" onClick={()=>setMenu(true)}>☰</button>
          </div>
        </Container>
      </header>
      {menu && (
        <div className="fixed inset-0 z-50 bg-black/40" onClick={close}>
          <div className="absolute right-0 top-0 h-full w-80 bg-white dark:bg-bg-dark p-6" onClick={(e)=>e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Image src="/logo.svg" alt="Edoline" width={24} height={24} />
                <span className="font-semibold">Edoline</span>
              </div>
              <button onClick={close} className="opacity-80 hover:opacity-100">✕</button>
            </div>
            <ul className="space-y-4 text-lg">
              <li><a href="#about" onClick={close}>О продукте</a></li>
              <li><a href="#features" onClick={close}>{dict.nav.features}</a></li>
              <li><Link href={`/${locale}/experience`} onClick={close}>{dict.nav.tour}</Link></li>
              <li><a href="#pricing" onClick={close}>{dict.nav.pricing}</a></li>
              <li><a href="#contact" onClick={close}>{dict.nav.contact}</a></li>
            </ul>
          </div>
        </div>
      )}
    </>
  )
}
