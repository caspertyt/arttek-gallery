'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

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

  // Функция для проверки активного состояния ссылки
  const isActive = (path: string) => {
    const currentPath = pathname.split('/').slice(2).join('/');
    return currentPath === path;
  };

  // Функция для создания ссылки с учетом языка
  const createLink = (path: string = '') => {
    return `/${lang}${path ? `/${path}` : ''}`;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-md">
      <div className="container mx-auto px-4 h-full flex flex-col">
        {/* Close Button */}
        <div className="h-20 flex items-center justify-end">
          <button
            onClick={onClose}
            className="text-white hover:text-red-500 transition-colors p-2"
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

        {/* Mobile Navigation */}
        <div className="flex-1 flex flex-col items-center justify-center space-y-8">
          <Link
            href={createLink()}
            className={`text-2xl hover:text-red-500 transition-colors ${
              isActive('') ? 'text-red-500' : ''
            }`}
            onClick={onClose}
          >
            {dict.home}
          </Link>
          <Link
            href={createLink('exhibitions')}
            className={`text-2xl hover:text-red-500 transition-colors ${
              isActive('exhibitions') ? 'text-red-500' : ''
            }`}
            onClick={onClose}
          >
            {dict.exhibitions}
          </Link>
          <Link
            href={createLink('gallery')}
            className={`text-2xl hover:text-red-500 transition-colors ${
              isActive('gallery') ? 'text-red-500' : ''
            }`}
            onClick={onClose}
          >
            {dict.gallery}
          </Link>
          <Link
            href={createLink('artists')}
            className={`text-2xl hover:text-red-500 transition-colors ${
              isActive('artists') ? 'text-red-500' : ''
            }`}
            onClick={onClose}
          >
            {dict.artists}
          </Link>
          <Link
            href={createLink('projects')}
            className={`text-2xl hover:text-red-500 transition-colors ${
              isActive('projects') ? 'text-red-500' : ''
            }`}
            onClick={onClose}
          >
            {dict.projects}
          </Link>
          <Link
            href={createLink('rent')}
            className={`text-2xl hover:text-red-500 transition-colors ${
              isActive('rent') ? 'text-red-500' : ''
            }`}
            onClick={onClose}
          >
            {dict.rent}
          </Link>
          <Link
            href={createLink('about')}
            className={`text-2xl hover:text-red-500 transition-colors ${
              isActive('about') ? 'text-red-500' : ''
            }`}
            onClick={onClose}
          >
            {dict.about}
          </Link>
          <Link
            href={createLink('contact')}
            className={`text-2xl hover:text-red-500 transition-colors ${
              isActive('contact') ? 'text-red-500' : ''
            }`}
            onClick={onClose}
          >
            {dict.contact}
          </Link>
        </div>
      </div>
    </div>
  );
} 