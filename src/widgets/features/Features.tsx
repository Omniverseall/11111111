"use client"
import Container from "@shared/ui/Container"
import Card from "@shared/ui/Card"
import { useI18n } from "@shared/lib/i18n/I18nProvider"

export default function Features() {
  const { dict } = useI18n()
  const items = [
    { t:"Маршруты согласования", d:"Гибкая маршрутизация, роли, сценарии голосования для коллегиальных органов." },
    { t:"Подпись E‑IMZO", d:"Юридическая значимость и QR‑верификация, аудит и версии." },
    { t:"Контроль исполнения", d:"SLA, эскалации, отчёты и аналитика." }
  ]
  return (
    <section id="features" className="py-16 md:py-24">
      <Container>
        <h2 className="text-2xl md:text-4xl font-bold mb-6">{dict.features.header}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((f,i)=>(
            <Card key={i} className="p-6">
              <div className="text-lg font-semibold mb-2">{f.t}</div>
              <div className="opacity-80 text-sm">{f.d}</div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
