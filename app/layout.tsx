import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.tomassalina.com'),
  title: {
    default: 'Tomas Salina | Co-Founder & Builder',
    template: '%s | Tomas Salina',
  },
  description:
    'Building scalable ecosystems in Fintech, Web3, and EdTech. Co-founder of Slice, Koopay, e4e, Dropsland, AviTracker, and MiNNA.',
  keywords: [
    'Tomas Salina',
    'Tomas Ezequiel Salina',
    'Co-Founder',
    'Builder',
    'Software Engineer',
    'Koopay',
    'Slice',
    'Web3',
    'ITBA',
    'Next.js',
  ],
  authors: [{ name: 'Tomas Salina' }],
  creator: 'Tomas Salina',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.tomassalina.com',
    title: 'Tomas Salina - Co-Founder & Builder',
    description: 'Always building. Always shipping. Currently managing 6 ventures.',
    siteName: 'Tomas Salina',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Tomas Salina Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tomas Salina | Co-Founder & Builder',
    description: 'Building the future of Fintech and Web3.',
    images: ['/og-image.png'],
    creator: '@salinatomass',
  },
  icons: {
    icon: '/web-app-manifest-192x192.png',
    apple: '/web-app-manifest-192x192.png',
  },
  manifest: '/manifest.json',
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
  alternates: {
    canonical: 'https://www.tomassalina.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
