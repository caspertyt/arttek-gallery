import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { i18n } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionary';
import Navbar from '@/components/Navbar';
import MobileMenu from '@/components/MobileMenu';
import Footer from '@/components/Footer';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ARTTEK Gallery',
  description: 'Contemporary art gallery showcasing exhibitions, artists, and events',
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const dict = await getDictionary(lang);

  return (
    <html lang={lang}>
      <body className={inter.className}>
        <Navbar dict={dict} lang={lang} />
        <main className="pt-20 min-h-screen">
          {children}
        </main>
        <Footer dict={dict} lang={lang} />
      </body>
    </html>
  );
} 