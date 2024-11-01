'use client';
import { useState } from 'react';
import { translations } from '@/translations';
import Link from 'next/link';

export default function Privacy() {
  const [currentLang] = useState('en');
  const t = translations[currentLang];

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
          <h1 className="text-3xl font-bold mb-6">{t.privacyPolicy}</h1>
          <div className="prose">
            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-3">Data Collection</h2>
              <p>
                We do not collect any personal information from our users. 
                Our application runs entirely in your browser and does not 
                store or transmit any data.
              </p>
            </section>
            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-3">Cookies</h2>
              <p>
                We only use essential cookies to remember your language 
                preference. No tracking or advertising cookies are used.
              </p>
            </section>
            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-3">Third-Party Services</h2>
              <p>
                Our application does not integrate with any third-party 
                services or analytics platforms.
              </p>
            </section>
          </div>
          <div className="mt-6">
            <Link 
              href="/" 
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              ← {t.home}
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}