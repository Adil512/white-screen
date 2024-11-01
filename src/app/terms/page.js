'use client';
import { useState } from 'react';
import { Maximize2 } from 'lucide-react';
import { translations } from '@/translations';

export default function Home() {
  const [currentLang] = useState('en');
  const t = translations[currentLang];

  const handleFullscreen = async (color) => {
    try {
      const elem = document.createElement('div');
      elem.id = 'fullscreen-div';
      elem.style.position = 'fixed';
      elem.style.top = '0';
      elem.style.left = '0';
      elem.style.width = '100%';
      elem.style.height = '100%';
      elem.style.backgroundColor = color;
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

  const colors = [
    { name: 'white', color: '#ffffff' },
    { name: 'green', color: '#28a745' },
    { name: 'red', color: '#dc3545' },
    { name: 'black', color: '#000000' },
    { name: 'yellow', color: '#ffc107' },
    { name: 'orange', color: '#fd7e14' },
    { name: 'pink', color: '#e83e8c' },
    { name: 'purple', color: '#6f42c1' },
    { name: 'blue', color: '#1a73e8' }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {colors.map((item) => (
          <button
            key={item.name}
            onClick={() => handleFullscreen(item.color)}
            className="relative h-32 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 group overflow-hidden"
            style={{ backgroundColor: item.color }}
          >
            <span className={`absolute inset-0 flex items-center justify-center ${
              item.color === '#ffffff' || item.color === '#ffc107' 
                ? 'text-gray-800' 
                : 'text-white'
            }`}>
              {t.colors[item.name]}
            </span>
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className={`h-5 w-5 ${
                item.color === '#ffffff' || item.color === '#ffc107' 
                  ? 'text-gray-800' 
                  : 'text-white'
              }`} />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}