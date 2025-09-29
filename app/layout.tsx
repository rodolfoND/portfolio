import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

export const metadata: Metadata = {
  title: 'Rodolfo Nascimento',
  description: 'Rodolfo Nascimento, desenvolvedor de software, especialista em inteligência artificial (IA) e entusiasta de tecnologia em Pará de Minas, MG',
  alternates: {
    canonical: 'https://rodolfonascimento.dev.br',
  },
  other: {
    'http-equiv': 'X-UA-Compatible',
    content: 'IE=edge',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: { url: '/apple-touch-icon.png', sizes: '180x180' }
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Rodolfo Nascimento',
    description: 'Rodolfo Nascimento, desenvolvedor de software, especialista em inteligência artificial (IA) e entusiasta de tecnologia em Pará de Minas, MG',
    images: 'https://i.ibb.co/YFmJf8yh/Whats-App-Image-2025-09-25-at-17-31-47.jpg" alt="Whats-App-Image-2025-09-25-at-17-31-47',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rodolfo Nascimento',
    description: 'Rodolfo Nascimento, desenvolvedor de software, especialista em inteligência artificial (IA) e entusiasta de tecnologia em Pará de Minas, MG',
    images: 'https://i.ibb.co/YFmJf8yh/Whats-App-Image-2025-09-25-at-17-31-47.jpg" alt="Whats-App-Image-2025-09-25-at-17-31-47',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Rodolfo Nascimento",
    "description": "Desenvolvedor de software, especialista em inteligência artificial (IA) e entusiasta de tecnologia",
    "image": "https://i.ibb.co/YFmJf8yh/Whats-App-Image-2025-09-25-at-17-31-47.jpg",
    "jobTitle": "Desenvolvedor de Software",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Pará de Minas",
      "addressRegion": "MG",
      "addressCountry": "BR"
    },
    "url": "https://rodolfonascimento.dev.br"
  }

  return (
    <html lang="pt-BR">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
