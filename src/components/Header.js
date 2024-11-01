'use client';
import { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import Link from 'next/link';
import { translations } from '@/translations';

export default function Header({ currentLang, setCurrentLang }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  
  const t = translations[currentLang];

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'pt', name: 'Português' },
    { code: 'tr', name: 'Türkçe' },
    { code: 'es', name: 'Español' },
    { code: 'de', name: 'Deutsch' },
    { code: 'fr', name: 'Français' }
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-gray-600 transition-colors">
            {t.title}
          </Link>
          
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative">
              <button 
                className="p-2 rounded-md hover:bg-gray-100 flex items-center"
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              >
                <Globe className="h-5 w-5 text-gray-600" />
              </button>
              
              {isLangMenuOpen && (
                <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                      onClick={() => {
                        setCurrentLang(lang.code);
                        setIsLangMenuOpen(false);
                      }}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 rounded-md hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-600" />
              ) : (
                <Menu className="h-6 w-6 text-gray-600" />
              )}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">{t.home}</Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">{t.aboutUs}</Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">{t.contactUs}</Link>
            <Link href="/privacy" className="text-gray-600 hover:text-gray-900 transition-colors">{t.privacyPolicy}</Link>
            <Link href="/terms" className="text-gray-600 hover:text-gray-900 transition-colors">{t.termsConditions}</Link>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-2 border-t">
            <Link href="/" className="block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md">{t.home}</Link>
            <Link href="/about" className="block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md">{t.aboutUs}</Link>
            <Link href="/contact" className="block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md">{t.contactUs}</Link>
            <Link href="/privacy" className="block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md">{t.privacyPolicy}</Link>
            <Link href="/terms" className="block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md">{t.termsConditions}</Link>
          </div>
        )}
      </div>
    </nav>
  );
}