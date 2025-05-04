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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Функция для проверки активного состояния ссылки
  const isActive = (path: string) => {
    const currentPath = pathname.split('/').slice(2).join('/');
    return currentPath === path;
  };

  // Функция для создания ссылки с учетом языка
  const createLink = (path: string = '') => {
    return `/${lang}${path ? `/${path}` : ''}`;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] bg-black">
      <nav className="relative bg-black/80 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link 
              href={createLink()} 
              className="text-2xl font-bold hover:text-red-500 transition-colors"
            >
              ARTTEK
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href={createLink('exhibitions')}
                className={`hover:text-red-500 transition-colors ${
                  isActive('exhibitions') ? 'text-red-500' : ''
                }`}
              >
                {dict.exhibitions}
              </Link>
              <Link
                href={createLink('gallery')}
                className={`hover:text-red-500 transition-colors ${
                  isActive('gallery') ? 'text-red-500' : ''
                }`}
              >
                {dict.gallery}
              </Link>
              <Link
                href={createLink('artists')}
                className={`hover:text-red-500 transition-colors ${
                  isActive('artists') ? 'text-red-500' : ''
                }`}
              >
                {dict.artists}
              </Link>
              <Link
                href={createLink('projects')}
                className={`hover:text-red-500 transition-colors ${
                  isActive('projects') ? 'text-red-500' : ''
                }`}
              >
                {dict.projects}
              </Link>
              <Link
                href={createLink('rent')}
                className={`hover:text-red-500 transition-colors ${
                  isActive('rent') ? 'text-red-500' : ''
                }`}
              >
                {dict.rent}
              </Link>
              <Link
                href={createLink('about')}
                className={`hover:text-red-500 transition-colors ${
                  isActive('about') ? 'text-red-500' : ''
                }`}
              >
                {dict.about}
              </Link>
              <Link
                href={createLink('contact')}
                className={`hover:text-red-500 transition-colors ${
                  isActive('contact') ? 'text-red-500' : ''
                }`}
              >
                {dict.contact}
              </Link>
            </div>

            {/* Language Switcher and Mobile Menu Button */}
            <div className="flex items-center space-x-4">
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
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu 
        dict={dict}
        lang={lang}
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
} 