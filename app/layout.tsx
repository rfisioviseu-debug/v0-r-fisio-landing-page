import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { GoogleTagManager } from "@next/third-parties/google"
import Script from "next/script"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "R.FISIO - Fisioterapia e Osteopatia",
  description: "Serviços profissionais de fisioterapia, osteopatia e exercício clínico",
  generator: "v0.app",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt">
      {/* Google Tag Manager (já existente) */}
      <GoogleTagManager gtmId="GTM-N82Q7QRC" />

      {/* Google Ads Global Tag */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-17559565999" // 
      />
      <Script
        id="google-ads-script"
        strategy="afterInteractive"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-XXXXXXXXX');
        `}
      </Script>

      <body className="font-sans antialiased">
        {children}
        <Analytics />

        {/* Hotjar Tracking Code */}
        <Script id="hotjar-script" strategy="afterInteractive">
          {`
            (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:b99f5ec27d8f9,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `}
        </Script>
      </body>
    </html>
  )
}
