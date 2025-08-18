"use client"
import Container from "@shared/ui/Container"
import { useI18n } from "@shared/lib/i18n/I18nProvider"

export default function Footer() {
  const { dict } = useI18n()
  return (
    <footer className="relative mt-16">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent dark:via-white/10" />
      <Container className="py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <div className="text-xl font-semibold">Edoline</div>
            <div className="text-sm opacity-80">Платформа ЭДО: маршруты, E‑IMZO, контроль исполнения, архив, on‑prem.</div>
            <div className="inline-flex items-center gap-2 text-xs opacity-80 px-3 py-1 rounded-full bg-slate-900/5 dark:bg-white/10"><span>🇺🇿</span><span>Сделано в Узбекистане</span></div>
          </div>
          <div>
            <div className="font-semibold mb-3">Продукт</div>
            <ul className="space-y-2 opacity-80 text-sm">
              <li><a href="#about">О продукте</a></li>
              <li><a href="#features">Возможности</a></li>
              <li><a href="#pricing">Тарифы</a></li>
              <li><a href="#contact">Контакты</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-3">Ресурсы</div>
            <ul className="space-y-2 opacity-80 text-sm">
              <li><a href={`#`}>Документы</a></li>
              <li><a href={`#`}>Интеграции</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-3">Контакты</div>
            <ul className="space-y-2 opacity-80 text-sm">
              <li>{dict.contact.email}</li>
              <li>{dict.contact.phoneTxt}</li>
              <li>{dict.contact.ceo}</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-between text-sm opacity-70">
          <div>{dict.footer.rights}</div>
          <div>Edoline</div>
        </div>
      </Container>
    </footer>
  )
}
