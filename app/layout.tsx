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
  title: 'GBP — Global Billionaires Products',
  description: 'Limited-edition statement displays created for powerful interiors, private lounges, and collectors.',
  openGraph: {
    title: 'GBP — Global Billionaires Products',
    description: 'Own the symbol. Limited statement pieces for rooms built around ambition.',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'GBP — Global Billionaires Products' }],
  },
  twitter: { card: 'summary_large_image', title: 'GBP — Global Billionaires Products', description: 'Own the symbol. Limited statement pieces for rooms built around ambition.', images: ['/og.png'] },
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
