import "./globals.css";
import { Manrope, Inter, Geist } from 'next/font/google'
import { cn } from "@/lib/utils";
import { AppHeader } from "@/components/app-header";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata = {
  title: {
    template: '%s | PixelVault',
    default: 'PixelVault — Your Game Store',
  },
  description: 'Browse, discover, and save your favorite video games.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn(manrope.variable, inter.variable, "font-sans dark", geist.variable)}>
      <body
        className={`${inter.className} min-h-screen bg-[--color-background] text-[--color-text-primary]`}
      >
        <AppHeader />
        {children}
      </body>
    </html>
  )
}
