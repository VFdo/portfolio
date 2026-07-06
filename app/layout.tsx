import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'

const geist = Geist({ subsets: ['latin'] })

const SITE_URL = 'https://vidufernando.com' // TODO: replace with your real domain

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Vidu Fernando — Software Engineer',
    template: '%s — Vidu Fernando',
  },
  description:
    'Vidu Fernando is a software engineer based in Sri Lanka (Kandy & Colombo), building web and cloud applications with Java, React, Next.js, and Azure.',
  applicationName: 'Vidu Fernando Portfolio',
  authors: [{ name: 'Vidu Fernando', url: SITE_URL }],
  creator: 'Vidu Fernando',
  publisher: 'Vidu Fernando',
  keywords: [
    // Identity & location
    'Vidu Fernando',
    'software engineer',
    'software developer',
    'full stack developer',
    'Sri Lanka',
    'Kandy',
    'Colombo',
    'software engineer Sri Lanka',
    'software engineer Colombo',
    // Tech stack
    'Java',
    'React',
    'Next.js',
    'Azure',
    'TypeScript',
    'cloud engineering',
    'web development',
    // TODO: add or refine additional keywords that fit your niche, e.g.:
    'backend developer',
    'API development',
    'Spring Boot',
    'Azure cloud solutions',
    'portfolio',
  ],
  category: 'technology',
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Vidu Fernando',
    title: 'Vidu Fernando — Software Engineer',
    description:
      'Software engineer based in Sri Lanka (Kandy & Colombo), building with Java, React, Next.js, and Azure.',
    // TODO: add a social share image at /public/images/og-image.png (1200x630)
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Vidu Fernando — Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vidu Fernando — Software Engineer',
    description:
      'Software engineer based in Sri Lanka (Kandy & Colombo), building with Java, React, Next.js, and Azure.',
    // creator: '@your_handle', // TODO: add your X/Twitter handle
    images: ['/images/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f7f4ec',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Vidu Fernando',
    jobTitle: 'Software Engineer',
    url: SITE_URL,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kandy & Colombo',
      addressCountry: 'Sri Lanka',
    },
    knowsAbout: ['Java', 'React', 'Next.js', 'Azure', 'Cloud Engineering', 'Web Development'],
    // TODO: add your real profile links
    sameAs: ['https://github.com/your-username', 'https://www.linkedin.com/in/your-username'],
  }

  return (
    <html lang="en" className="bg-background">
      <body className={`${geist.className} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
