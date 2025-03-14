import { Poppins} from 'next/font/google'
import './globals.css'
import { constructMetadata } from '@/utils'
import { VariantProvider } from '@/utils/hooks'

const popins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata = constructMetadata()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='pt-BR' className='dark' suppressHydrationWarning>
      <head />
      <body className={`${popins.className} antialiased`}>
        <VariantProvider>{children}</VariantProvider>
      </body>
    </html>
  )
}
