"use client"
import { ThemeProvider } from "next-themes"
import { I18nProvider } from "@shared/lib/i18n/I18nProvider"

export default function Providers({ children, locale }: { children: React.ReactNode; locale: "ru"|"uz"|"en" }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <I18nProvider locale={locale}>{children}</I18nProvider>
    </ThemeProvider>
  )
}
