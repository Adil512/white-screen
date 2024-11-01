'use client';
import { useState } from 'react';
import { Maximize2 } from 'lucide-react';
import { translations } from '@/translations';

export default function BlueScreen() {
  const [currentLang] = useState('en');
  const t = translations[currentLang];

  const handleFullscreen = async () => {
    try {
      const elem = document.createElement('div');
      elem.id = 'fullscreen-div';
      elem.style.position = 'fixed';
      elem.style.top = '0';
      elem.style.left = '0';
      elem.style.width = '100%';
      elem.style.height = '100%';
      elem.style.backgroundColor = '#1a73e8';
      elem.style.zIndex = '9999';
      
      const handleFullscreenChange = () => {
        if (!document.fullscreenElement && document.getElementById('fullscreen-div')) {
          document.getElementById('fullscreen-div').remove();
        }
      };
      
      document.addEventListener('fullscreenchange', handleFullscreenChange);
      document.body.appendChild(elem);
      await elem.requestFullscreen();

    } catch (err) {
      console.error('Error:', err);
      const elem = document.getElementById('fullscreen-div');
      if (elem) elem.remove();
    }
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: '#1a73e8' }}
    >
      <button
        onClick={handleFullscreen}
        className="bg-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 flex items-center space-x-2"
      >
        <span className="text-blue-600">{t.colors.blue}</span>
        <Maximize2 className="h-5 w-5 text-blue-600" />
      </button>
    </div>
  );
}