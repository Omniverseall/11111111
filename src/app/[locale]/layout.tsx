import type { Metadata } from "next"
import "../globals.css"
import Providers from "../providers"
import { getDictionary } from "@shared/lib/i18n/dictionaries"
import Preloader from "@widgets/preloader/Preloader"
import BackgroundFX from "@widgets/fx/BackgroundFX"

export async function generateStaticParams() { return [{ locale:"ru" }, { locale:"uz" }, { locale:"en" }] }

export async function generateMetadata({ params }: { params: Promise<{ locale:"ru"|"uz"|"en" }> }): Promise<Metadata> {
  const { locale } = await params
  const dict = await getDictionary(locale)
  return { title: dict.meta.title, description: dict.meta.description, icons:{ icon:"/favicon.ico" } }
}

export default async function RootLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale:"ru"|"uz"|"en" }> }) {
  const { locale } = await params
  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <Providers locale={locale}>
          <Preloader />
          <BackgroundFX />
          {children}
        </Providers>
      </body>
    </html>
  )
}
