import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import './globals.css'

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#0a0a0a',
}

export const metadata: Metadata = {
  title: 'CARE & SHARE FOUNDATION - বৈশ্বিক প্রভাব তৈরি করছি',
  description: 'CARE & SHARE FOUNDATION একটি অলাভজনক সংস্থা যা ২৮+ দেশে টেকসই উন্নয়ন, শিক্ষা, স্বাস্থ্যসেবা এবং সম্প্রদায় ক্ষমতায়নে নিবেদিত।',
  generator: 'v0.app',
  openGraph: {
    title: 'CARE & SHARE FOUNDATION - বৈশ্বিক প্রভাব তৈরি করছি',
    description: 'বিশ্বব্যাপী টেকসই উন্নয়ন এবং সম্প্রদায় ক্ষমতায়নে নিবেদিত।',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
