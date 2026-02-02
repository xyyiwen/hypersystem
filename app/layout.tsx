import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { SiteLayout } from '@/components/SiteLayout';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
  weight: ['700', '800'],
});

export const metadata: Metadata = {
  title: 'HyperSystem | Next-Gen Poker Infrastructure',
  description: 'Next-Gen Poker Infrastructure',
  openGraph: {
    title: 'HyperSystem | Next-Gen Poker Infrastructure',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-white font-sans antialiased">
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
