'use client';
import { useState } from 'react';
import { Maximize2 } from 'lucide-react';
import { translations } from '@/translations';

export default function BlueScreen({ currentLang = 'en' }) {
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Blue Screen
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Professional blue background for various digital needs
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Blue Screen Button */}
            <button
              onClick={handleFullscreen}
              className="w-full aspect-video bg-blue-600 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative group flex items-center justify-center"
            >
              <div className="text-white text-xl font-medium">Blue Screen</div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="h-6 w-6 text-white" />
              </div>
            </button>

            {/* Features */}
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-semibold mb-2">Virtual Backgrounds</h3>
                <p className="text-gray-600 text-sm">Perfect for video calls and online presentations</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-semibold mb-2">Color Testing</h3>
                <p className="text-gray-600 text-sm">Test blue color calibration on your display</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-semibold mb-2">Digital Content</h3>
                <p className="text-gray-600 text-sm">Create professional digital content with blue background</p>
              </div>
            </div>

            {/* Instructions */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">How to Use</h2>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <ol className="space-y-4">
                  <li className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3">1</span>
                    <span>Click the blue screen button above</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3">2</span>
                    <span>Allow fullscreen mode if prompted</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3">3</span>
                    <span>Press ESC to exit fullscreen mode</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}