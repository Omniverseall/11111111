"use client"
import { usePathname, useRouter } from "next/navigation"
import { useI18n } from "@shared/lib/i18n/I18nProvider"
const order: Array<"ru"|"uz"|"en"> = ["ru","uz","en"]
export default function LanguageSwitcher() {
  const router = useRouter()
  const pathnameRaw = usePathname()
  const { locale } = useI18n()
  const pathname = pathnameRaw ?? `/${locale}`
  const next = order[(order.indexOf(locale)+1)%order.length]
  function switchLocale() {
    const parts = pathname.split("/")
    parts[1] = next
    const href = parts.join("/") || `/${next}`
    router.push(href)
  }
  return <button onClick={switchLocale} className="text-sm opacity-80 hover:opacity-100">{locale.toUpperCase()}</button>
}
