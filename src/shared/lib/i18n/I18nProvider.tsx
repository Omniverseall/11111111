"use client"
import { createContext, useContext, useMemo } from "react"
import { ru, uz, en, type Locale } from "./dictionaries"

type Dict = typeof ru
const Ctx = createContext<{ dict: Dict; locale: Locale }>({ dict: ru, locale: "ru" })
export function I18nProvider({ children, locale }: { children: React.ReactNode; locale: Locale }) {
  const dict = useMemo(() => (locale === "ru" ? ru : locale === "uz" ? uz : en), [locale])
  return <Ctx.Provider value={{ dict, locale }}>{children}</Ctx.Provider>
}
export function useI18n() { return useContext(Ctx) }
