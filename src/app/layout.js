'use client';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

export default function RootLayout({ children }) {
  const [currentLang, setCurrentLang] = useState('en');

  return (
    <html lang={currentLang}>
      <body className="flex flex-col min-h-screen">
        <Header currentLang={currentLang} setCurrentLang={setCurrentLang} />
        <main className="flex-grow">
          {children}
        </main>
        <Footer currentLang={currentLang} />
      </body>
    </html>
  );
}