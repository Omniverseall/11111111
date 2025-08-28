import './globals.css';
import type { Metadata, Viewport } from 'next';
import { cookies } from 'next/headers';
import Script from 'next/script';
import { AppProviders } from './providers';
import { FirstVisitLoader } from '@/widgets/loading';

export const metadata: Metadata = {
  title: 'EdoLine — электронный документооборот',
  description: 'Современная платформа электронного документооборота: подпись, согласование, автоматизация процессов.',
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
      { url: '/logo.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.png',
    apple: [
      { url: '/logo.svg', type: 'image/svg+xml' },
    ],
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'OPogzJwLcPlg4m0mG8uECtxqWWJ0I5Bub7YtA3SeK2o',
    yandex: 'aabdbfbb28575ed5',
  },
};

export const viewport: Viewport = {
  themeColor: '#16a34a',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const isFirstVisit = !cookies().has('edoline_visited');

  return (
    <html lang="ru" className={isFirstVisit ? '' : 'skip-loader'} suppressHydrationWarning>
      <head>
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MZ646VLT');`}
        </Script>
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MZ646VLT"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {isFirstVisit && (
          <div id="preload-overlay" role="status" aria-label="Loading">
            <div className="preload-wrap">
              <div className="preload-logo-wrap">
                <img src="/logo.svg" alt="" className="preload-logo" />
              </div>
              <div className="preload-dots" aria-hidden="true">
                <span></span><span></span><span></span>
              </div>
            </div>
          </div>
        )}

        <AppProviders>
          {isFirstVisit && <FirstVisitLoader />}
          {children}
        </AppProviders>
      </body>
    </html>
  );
}