import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Web Developer Portfolio | 高品質なWebアプリケーション開発',
  description: 'モダンなWeb技術を使用した高品質なWebアプリケーション開発を提供。Next.js、React、TypeScriptを専門とするフロントエンドデベロッパーのポートフォリオサイトです。',
  keywords: 'Web開発, React, Next.js, TypeScript, フロントエンド, バックエンド, UI/UX',
  authors: [{ name: 'Web Developer' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'Web Developer Portfolio',
    description: 'モダンなWeb技術を使用した高品質なWebアプリケーション開発',
    type: 'website',
    locale: 'ja_JP',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}