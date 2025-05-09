'use client';

import { usePathname, useRouter } from 'next/navigation';
import { i18n } from '@/i18n/config';
import { useState, useEffect } from 'react';

interface MobileMenuProps {
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
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ dict, lang, isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Функция для проверки активного состояния ссылки
  const isActive = (path: string) => {
    if (!mounted) return false;
    const currentPath = pathname.split('/').slice(2).join('/');
    return currentPath === path;
  };

  // Функция для создания ссылки с учетом языка
  const createLink = (path: string = '') => {
    return `/${lang}${path ? `/${path}` : ''}`;
  };

  // Функция для обработки навигации
  const handleNavigation = (path: string) => {
    const href = createLink(path);
    router.push(href);
    onClose();
  };

  // Функция для обработки смены языка
  const handleLanguageChange = (newLang: string) => {
    const currentPath = pathname.split('/').slice(2).join('/');
    const newPath = `/${newLang}${currentPath ? `/${currentPath}` : ''}`;
    router.push(newPath);
    onClose();
  };

  if (!mounted || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-[90] bg-black/95 backdrop-blur-sm">
      <div className="container mx-auto px-4 h-full">
        <div className="flex flex-col h-full">
          {/* Close Button */}
          <div className="flex justify-end pt-6">
            <button
              onClick={onClose}
              className="text-white hover:text-red-500 transition-colors"
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 flex flex-col justify-center items-center space-y-8">
            <button
              onClick={() => handleNavigation('')}
              className={`text-2xl hover:text-red-500 transition-colors ${
                isActive('') ? 'text-red-500' : ''
              }`}
            >
              {dict.home}
            </button>
            <button
              onClick={() => handleNavigation('exhibitions')}
              className={`text-2xl hover:text-red-500 transition-colors ${
                isActive('exhibitions') ? 'text-red-500' : ''
              }`}
            >
              {dict.exhibitions}
            </button>
            <button
              onClick={() => handleNavigation('gallery')}
              className={`text-2xl hover:text-red-500 transition-colors ${
                isActive('gallery') ? 'text-red-500' : ''
              }`}
            >
              {dict.gallery}
            </button>
            <button
              onClick={() => handleNavigation('artists')}
              className={`text-2xl hover:text-red-500 transition-colors ${
                isActive('artists') ? 'text-red-500' : ''
              }`}
            >
              {dict.artists}
            </button>
            <button
              onClick={() => handleNavigation('projects')}
              className={`text-2xl hover:text-red-500 transition-colors ${
                isActive('projects') ? 'text-red-500' : ''
              }`}
            >
              {dict.projects}
            </button>
            <button
              onClick={() => handleNavigation('rent')}
              className={`text-2xl hover:text-red-500 transition-colors ${
                isActive('rent') ? 'text-red-500' : ''
              }`}
            >
              {dict.rent}
            </button>
            <button
              onClick={() => handleNavigation('about')}
              className={`text-2xl hover:text-red-500 transition-colors ${
                isActive('about') ? 'text-red-500' : ''
              }`}
            >
              {dict.about}
            </button>
            <button
              onClick={() => handleNavigation('contact')}
              className={`text-2xl hover:text-red-500 transition-colors ${
                isActive('contact') ? 'text-red-500' : ''
              }`}
            >
              {dict.contact}
            </button>
          </nav>

          {/* Language Switcher */}
          <div className="flex justify-center items-center space-x-8 pb-8">
            {i18n.locales.map((locale) => (
              <button
                key={locale}
                onClick={() => handleLanguageChange(locale)}
                className={`text-lg uppercase hover:text-red-500 transition-colors ${
                  locale === lang ? 'text-red-500' : ''
                }`}
              >
                {locale}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 