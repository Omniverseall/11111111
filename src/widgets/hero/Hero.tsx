"use client"
import Container from "@shared/ui/Container"
import Badge from "@shared/ui/Badge"
import Button from "@shared/ui/Button"
import { useI18n } from "@shared/lib/i18n/I18nProvider"

export default function Hero() {
  const { dict } = useI18n()
  return (
    <section id="about" className="pt-16 md:pt-24">
      <Container className="grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <Badge>{dict.hero.badge}</Badge>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">{dict.hero.title}</h1>
          <p className="text-lg opacity-80">{dict.hero.subtitle}</p>
          <div className="flex gap-3">
            <a href="#pricing"><Button variant="secondary">{dict.hero.ctaPricing}</Button></a>
          </div>
        </div>
        <div className="rounded-2xl glass p-2">
          <div className="aspect-[16/10] rounded-xl overflow-hidden relative grid place-items-center min-h-[260px]">
            <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_30%_-10%,rgba(59,130,246,0.22),transparent)]" />
            <svg width="240" height="240" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
              <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
              <path d="M10 9H8"></path>
              <path d="M16 13H8"></path>
              <path d="M16 17H8"></path>
            </svg>
          </div>
        </div>
      </Container>
    </section>
  )
}
