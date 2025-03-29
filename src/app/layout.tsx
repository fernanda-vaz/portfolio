import { Epilogue, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import { defaultMetadata } from '@/app/seo/metadata'

const epilogueSans = Epilogue({
  variable: '--font-epilogue-sans',
  subsets: ['latin'],
})

const ibmMono = IBM_Plex_Mono({
  variable: '--font-ibm-mono',
  subsets: ['latin'],
  weight: ['400', '600', '700'],
})

export const metadata = defaultMetadata

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='pt-BR' suppressHydrationWarning>
      <body
        className={`${epilogueSans.variable} ${ibmMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
