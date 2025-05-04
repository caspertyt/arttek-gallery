'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { i18n } from '@/i18n/config';
import { useState } from 'react';
import MobileMenu from './MobileMenu';

interface NavbarProps {
  dict: {
    home: string;
    exhibitions: string;
    artists: string;
    projects: string;
    rent: string;
    about: string;
    contact: string;
    gallery: string;
  };
  lang: string;
}

export default function Navbar({ dict, lang }: NavbarProps) {
  const pathname = usePathname();
  const currentPath = pathname.split('/')[2] || '';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href={`/${lang}`} className="text-2xl font-bold hover:text-red-500 transition-colors">
              ARTTEK
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href={`/${lang}/exhibitions`}
                className={`hover:text-red-500 transition-colors ${
                  currentPath === 'exhibitions' ? 'text-red-500' : ''
                }`}
              >
                {dict.exhibitions}
              </Link>
              <Link
                href={`/${lang}/gallery`}
                className={`hover:text-red-500 transition-colors ${
                  currentPath === 'gallery' ? 'text-red-500' : ''
                }`}
              >
                {dict.gallery}
              </Link>
              <Link
                href={`/${lang}/artists`}
                className={`hover:text-red-500 transition-colors ${
                  currentPath === 'artists' ? 'text-red-500' : ''
                }`}
              >
                {dict.artists}
              </Link>
              <Link
                href={`/${lang}/projects`}
                className={`hover:text-red-500 transition-colors ${
                  currentPath === 'projects' ? 'text-red-500' : ''
                }`}
              >
                {dict.projects}
              </Link>
              <Link
                href={`/${lang}/rent`}
                className={`hover:text-red-500 transition-colors ${
                  currentPath === 'rent' ? 'text-red-500' : ''
                }`}
              >
                {dict.rent}
              </Link>
              <Link
                href={`/${lang}/about`}
                className={`hover:text-red-500 transition-colors ${
                  currentPath === 'about' ? 'text-red-500' : ''
                }`}
              >
                {dict.about}
              </Link>
              <Link
                href={`/${lang}/contact`}
                className={`hover:text-red-500 transition-colors ${
                  currentPath === 'contact' ? 'text-red-500' : ''
                }`}
              >
                {dict.contact}
              </Link>
            </div>

            {/* Language Switcher */}
            <div className="flex items-center space-x-4">
              {i18n.locales.map((locale) => (
                <Link
                  key={locale}
                  href={pathname.replace(`/${lang}`, `/${locale}`)}
                  className={`text-sm uppercase hover:text-red-500 transition-colors ${
                    locale === lang ? 'text-red-500' : ''
                  }`}
                >
                  {locale}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden text-white hover:text-red-500 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu 
        dict={dict}
        lang={lang}
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
} 