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
  const currentPath = pathname.split('/')[2] || '';

  return (
    <div
      className={`fixed inset-0 z-50 bg-black/95 backdrop-blur-sm transition-opacity duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="container-custom h-full flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-4 text-white hover:text-red-500 transition-colors"
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

        {/* Mobile Navigation */}
        <div className="flex-1 flex flex-col justify-center items-center space-y-8">
          <Link
            href={`/${lang}`}
            className={`text-2xl hover:text-red-500 transition-colors ${
              currentPath === '' ? 'text-red-500' : ''
            }`}
            onClick={onClose}
          >
            {dict.home}
          </Link>
          <Link
            href={`/${lang}/exhibitions`}
            className={`text-2xl hover:text-red-500 transition-colors ${
              currentPath === 'exhibitions' ? 'text-red-500' : ''
            }`}
            onClick={onClose}
          >
            {dict.exhibitions}
          </Link>
          <Link
            href={`/${lang}/gallery`}
            className={`text-2xl hover:text-red-500 transition-colors ${
              currentPath === 'gallery' ? 'text-red-500' : ''
            }`}
            onClick={onClose}
          >
            {dict.gallery}
          </Link>
          <Link
            href={`/${lang}/artists`}
            className={`text-2xl hover:text-red-500 transition-colors ${
              currentPath === 'artists' ? 'text-red-500' : ''
            }`}
            onClick={onClose}
          >
            {dict.artists}
          </Link>
          <Link
            href={`/${lang}/projects`}
            className={`text-2xl hover:text-red-500 transition-colors ${
              currentPath === 'projects' ? 'text-red-500' : ''
            }`}
            onClick={onClose}
          >
            {dict.projects}
          </Link>
          <Link
            href={`/${lang}/rent`}
            className={`text-2xl hover:text-red-500 transition-colors ${
              currentPath === 'rent' ? 'text-red-500' : ''
            }`}
            onClick={onClose}
          >
            {dict.rent}
          </Link>
          <Link
            href={`/${lang}/about`}
            className={`text-2xl hover:text-red-500 transition-colors ${
              currentPath === 'about' ? 'text-red-500' : ''
            }`}
            onClick={onClose}
          >
            {dict.about}
          </Link>
          <Link
            href={`/${lang}/contact`}
            className={`text-2xl hover:text-red-500 transition-colors ${
              currentPath === 'contact' ? 'text-red-500' : ''
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