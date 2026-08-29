import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ShopProvider } from '@/components/shop-provider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL ?? 'http://localhost:3000'),
  title: 'NOVA — Considered objects for modern living',
  description: 'A curated marketplace for independent design, honest materials, and beautifully useful objects.',
  openGraph: {
    title: 'NOVA — Considered objects for modern living',
    description: 'Less, but better. Discover beautifully useful objects built to stay.',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'NOVA — Less, but better.' }],
  },
  twitter: { card: 'summary_large_image', title: 'NOVA — Considered objects for modern living', description: 'Less, but better. Discover beautifully useful objects built to stay.', images: ['/og.png'] },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ShopProvider>{children}</ShopProvider>
      </body>
    </html>
  );
}
