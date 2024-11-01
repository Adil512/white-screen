'use client';
import Link from 'next/link';
import { translations } from '@/translations';

export default function Footer({ currentLang }) {
  const t = translations[currentLang];
  
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-600 mb-4 md:mb-0">
            © 2024 {t.title}. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">{t.aboutUs}</Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">{t.contactUs}</Link>
            <Link href="/privacy" className="text-gray-600 hover:text-gray-900 transition-colors">{t.privacyPolicy}</Link>
            <Link href="/terms" className="text-gray-600 hover:text-gray-900 transition-colors">{t.termsConditions}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}