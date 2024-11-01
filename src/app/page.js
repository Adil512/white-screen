'use client';
import { useState, useEffect } from 'react';
import { 
  Maximize2, 
  Monitor, 
  MousePointer, 
  KeyRound, 
  Paintbrush,
  Plus, 
  Minus,
  Layout,
  Palette,
  MonitorCheck,
  Camera,
  PaintBucket,
  CheckCircle2,
  Laptop,
  Sparkles
} from 'lucide-react';
import { translations } from '@/translations';

export default function Home({ currentLang = 'en' }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [selectedFeature, setSelectedFeature] = useState(0);
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

  // Updated colors array with white first
  const colors = [
    { name: 'white', color: '#ffffff' },
    { name: 'blue', color: '#1a73e8' },
    { name: 'green', color: '#28a745' },
    { name: 'red', color: '#dc3545' },
    { name: 'black', color: '#000000' },
    { name: 'yellow', color: '#ffc107' },
    { name: 'orange', color: '#fd7e14' },
    { name: 'pink', color: '#e83e8c' },
    { name: 'purple', color: '#6f42c1' }
  ];

  const features = [
    {
      title: "Professional Display Testing",
      description: "Perfect for monitor calibration, dead pixel detection, and screen uniformity testing. Used by professionals worldwide.",
      icon: <MonitorCheck className="w-8 h-8" />,
      benefits: ["Color Accuracy Testing", "Dead Pixel Detection", "Screen Uniformity Check", "Backlight Bleed Testing"]
    },
    {
      title: "Photography & Videography",
      description: "Create perfect lighting conditions for your photo and video shoots. Ideal for product photography and virtual backgrounds.",
      icon: <Camera className="w-8 h-8" />,
      benefits: ["Consistent Lighting", "Clean Backgrounds", "Product Photography", "Green Screen Alternative"]
    },
    {
      title: "Digital Workspace",
      description: "Enhance your digital workspace with perfect lighting and professional backgrounds for virtual meetings.",
      icon: <Laptop className="w-8 h-8" />,
      benefits: ["Virtual Meetings", "Presentation Backgrounds", "Screen Recording", "Webcam Lighting"]
    }
  ];

  const testimonials = [
    {
      text: "Essential tool for my photography studio. The pure white screen is perfect for product shots.",
      author: "Sarah J.",
      role: "Professional Photographer"
    },
    {
      text: "I use it daily for monitor testing in our IT department. Simple yet incredibly effective.",
      author: "Michael R.",
      role: "IT Manager"
    },
    {
      text: "The best solution for creating consistent lighting in my video calls and presentations.",
      author: "Emma L.",
      role: "Digital Content Creator"
    }
  ];

  const faqs = [
    {
      question: "Why use White Screen for monitor testing?",
      answer: "White Screen provides a pure, full-screen color display that's perfect for detecting dead pixels, testing color accuracy, and checking screen uniformity. It's especially useful for professional monitor calibration and quality assurance."
    },
    {
      question: "Does White Screen work on all devices?",
      answer: "Yes! White Screen is compatible with any device that has a web browser supporting fullscreen mode, including computers, tablets, and smartphones. No installation or special software required."
    },
    {
      question: "Can I use White Screen for photography?",
      answer: "Absolutely! Many photographers use White Screen for product photography, creating consistent lighting conditions, and as a clean background. It's particularly useful for small product shots and digital content creation."
    },
    {
      question: "How does the fullscreen mode work?",
      answer: "Simply click on any color tile to enter fullscreen mode. The selected color will fill your entire screen. To exit, just press the ESC key on your keyboard or use your device's standard exit fullscreen gesture."
    },
    {
      question: "Is White Screen free to use?",
      answer: "Yes, White Screen is completely free to use with no registration required. We believe in providing accessible tools for professionals and enthusiasts alike."
    }
  ];

  const stats = [
    { number: "1M+", label: "Monthly Users" },
    { number: "50+", label: "Countries" },
    { number: "4.9", label: "User Rating" },
    { number: "24/7", label: "Availability" }
  ];

  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-8 pb-16">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Professional Screen Testing & <br className="hidden md:block" />
            <span className="text-blue-600">Color Display Tool</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            The perfect solution for monitor testing, photography lighting, and professional presentations.
            Used by professionals worldwide for accurate color display and screen testing.
          </p>
        </div>
      </section>

      {/* Color Grid Section */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {colors.map((item) => (
            <button
              key={item.name}
              onClick={() => handleFullscreen(item.color)}
              className="relative h-40 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden transform hover:-translate-y-1"
              style={{ backgroundColor: item.color }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-20 transition-opacity" />
              <span className={`absolute inset-0 flex items-center justify-center text-lg font-medium ${
                item.color === '#ffffff' || item.color === '#ffc107' 
                  ? 'text-gray-800' 
                  : 'text-white'
              }`}>
                {t.colors[item.name]}
              </span>
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className={`h-6 w-6 ${
                  item.color === '#ffffff' || item.color === '#ffc107' 
                    ? 'text-gray-800' 
                    : 'text-white'
                }`} />
              </div>
            </button>
          ))}
        </div>
      </section>

{/* Features Section */}
<section className="container mx-auto px-4 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Professional Features
            </h2>
            <p className="text-xl text-gray-600">
              Discover why professionals trust our tool for their work
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-blue-600 mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            What Our Users Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-gray-600 italic mb-6">"{testimonial.text}"</div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-gray-500 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  {openFaqIndex === index ? (
                    <Minus className="h-5 w-5 text-gray-600 flex-shrink-0" />
                  ) : (
                    <Plus className="h-5 w-5 text-gray-600 flex-shrink-0" />
                  )}
                </button>
                {openFaqIndex === index && (
                  <div className="px-6 py-4 bg-gray-50">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience White Screen?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Start using our professional tool for free - no registration required!
          </p>
          <button
            onClick={() => handleFullscreen('#ffffff')}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors transform hover:-translate-y-1 duration-200 shadow-lg hover:shadow-xl"
          >
            Try White Screen Now
          </button>
        </div>
      </section>
    </div>
  );
}