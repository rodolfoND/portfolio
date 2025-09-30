import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

export const dynamic = 'force-static'
export const revalidate = false

export const metadata: Metadata = {
  metadataBase: new URL('https://rodolfonascimento.dev.br'),
  title: {
    default: 'Rodolfo Nascimento | Desenvolvedor de Software',
    template: '%s | Rodolfo Nascimento'
  },
  description: 'Desenvolvedor de Software especialista em React, Java e Inteligência Artificial. Transformando ideias em experiências digitais incríveis em Pará de Minas, MG.',
  keywords: ['Desenvolvedor de Software', 'React', 'Java', 'TypeScript', 'Inteligência Artificial', 'IA', 'Web Development', 'Pará de Minas', 'Minas Gerais', 'Rodolfo Nascimento'],
  authors: [{ name: 'Rodolfo Nascimento' }],
  creator: 'Rodolfo Nascimento',
  alternates: {
    canonical: 'https://rodolfonascimento.dev.br',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
    type: 'website',
    locale: 'pt_BR',
    url: 'https://rodolfonascimento.dev.br',
    title: 'Rodolfo Nascimento | Desenvolvedor de Software',
    description: 'Desenvolvedor de Software especialista em React, Java e Inteligência Artificial. Transformando ideias em experiências digitais incríveis.',
    siteName: 'Rodolfo Nascimento',
    images: [
      {
        url: 'https://rodolfonascimento.dev.br/foto.png',
        width: 1200,
        height: 630,
        alt: 'Rodolfo Nascimento - Desenvolvedor de Software',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rodolfo Nascimento | Desenvolvedor de Software',
    description: 'Desenvolvedor de Software especialista em React, Java e Inteligência Artificial.',
    images: ['https://rodolfonascimento.dev.br/foto.png'],
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
    "description": "Desenvolvedor Full Stack especialista em React, Java e Inteligência Artificial",
    "image": "https://rodolfonascimento.dev.br/foto.png",
    "jobTitle": "Desenvolvedor Full Stack",
    "worksFor": {
      "@type": "Organization",
      "name": "Freelancer"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Pará de Minas",
      "addressRegion": "MG",
      "addressCountry": "BR"
    },
    "url": "https://rodolfonascimento.dev.br",
    "sameAs": [
      "https://github.com/rodolfoND",
      "https://www.linkedin.com/in/rodolfo-nascimento-57b701100/"
    ],
    "knowsAbout": ["React", "Java", "TypeScript", "JavaScript", "Inteligência Artificial", "Full Stack Development"],
    "email": "rodolfo.nascimento@hotmail.com"
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
