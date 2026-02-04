import type { Metadata } from 'next';
import { Noto_Sans_TC, JetBrains_Mono } from 'next/font/google';
import { SiteLayout } from '@/components/SiteLayout';
import './globals.css';

const notoSansTC = Noto_Sans_TC({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-noto-sans-tc',
  display: 'swap',
  weight: ['400', '500', '700'],
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
    <html lang="zh-TW" className={`${notoSansTC.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-white font-sans antialiased">
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
