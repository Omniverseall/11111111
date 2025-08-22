import type { Metadata } from "next";
import { cookies } from "next/headers";
import Script from "next/script";
import { Inter, Lexend } from "next/font/google";
import "./globals.css";
import { AppProviders } from "@/app/providers";
import { Language } from "@/shared/config/translations";

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter" });
const lexend = Lexend({ subsets: ["latin"], variable: "--font-lexend" });

export const metadata: Metadata = {
  title: "EdoLine — Система Электронного Документооборота",
  description: "Современная и безопасная платформа для управления документами, автоматизации рабочих процессов и использования электронной подписи.",
  verification: {
    google: "OPogzJwLcPlg4m0mG8uECtxqWWJ0I5Bub7YtA3SeK2o",
    yandex: "aabdbfbb28575ed5",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const langCookie = cookies().get('language')?.value as Language | undefined;
  const lang = langCookie === 'ru' || langCookie === 'en' || langCookie === 'uz' ? langCookie : 'ru';

  return (
    <html lang={lang} suppressHydrationWarning>
      <body className={`${inter.className} ${lexend.variable}`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MZ646VLT"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MZ646VLT');`}
        </Script>

        <Script id="edoline-loader-flag" strategy="beforeInteractive">
          {`try{if(sessionStorage.getItem('hasVisited')){document.documentElement.classList.add('skip-loader');}}catch(e){}`}
        </Script>

        <div id="preload-overlay">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40">
            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
            <path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path>
          </svg>
        </div>

        <AppProviders>
          {children}
        </AppProviders>

        <Script id="edoline-loader-remove" strategy="afterInteractive">
          {`try{if(document.documentElement.classList.contains('skip-loader')){var el=document.getElementById('preload-overlay');if(el)el.remove();}}catch(e){}`}
        </Script>
      </body>
    </html>
  );
}