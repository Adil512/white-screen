'use client';
import { useState } from 'react';
import { translations } from '@/translations';
import { 
  Mail, 
  MessageCircle, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

export default function Contact({ currentLang = 'en' }) {
  const t = translations[currentLang];
  const [formStatus, setFormStatus] = useState('idle'); // idle, sending, success, error
  const [selectedDepartment, setSelectedDepartment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      e.target.reset();
    }, 1500);
  };

  const departments = [
    {
      name: 'Technical Support',
      description: 'Get help with technical issues and product functionality',
      icon: <MessageCircle className="w-6 h-6" />
    },
    {
      name: 'Business Inquiries',
      description: 'Discuss partnerships and business opportunities',
      icon: <Mail className="w-6 h-6" />
    },
    {
      name: 'General Questions',
      description: 'For all other inquiries and information',
      icon: <Phone className="w-6 h-6" />
    }
  ];

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone Support',
      details: ['Monday to Friday', '9:00 AM - 6:00 PM EST'],
      action: '+1 (555) 123-4567',
      actionType: 'tel:+15551234567'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Support',
      details: ['24/7 Response', 'Within 24 hours'],
      action: 'support@whitescreen.com',
      actionType: 'mailto:support@whitescreen.com'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      details: ['123 Tech Street', 'New York, NY 10001'],
      action: 'Get Directions',
      actionType: '#'
    }
  ];

  const faqs = [
    {
      question: "What is your typical response time?",
      answer: "We aim to respond to all inquiries within 24 hours during business days."
    },
    {
      question: "Do you offer premium support?",
      answer: "Yes, we offer priority support for business and enterprise customers."
    },
    {
      question: "Can I schedule a consultation?",
      answer: "Absolutely! You can schedule a consultation through our booking system."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl opacity-90 mb-12">
              We're here to help and answer any questions you might have
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
                  <div className="flex justify-center mb-4">{info.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-sm opacity-90">{detail}</p>
                  ))}
                  <a 
                    href={info.actionType}
                    className="mt-4 inline-block text-sm font-semibold hover:underline"
                  >
                    {info.action}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Form */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Department
                    </label>
                    <select
                      value={selectedDepartment}
                      onChange={(e) => setSelectedDepartment(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a department</option>
                      {departments.map((dept) => (
                        <option key={dept.name} value={dept.name}>
                          {dept.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === 'sending'}
                    className={`w-full py-3 px-6 rounded-lg text-white font-semibold flex items-center justify-center space-x-2
                      ${formStatus === 'sending' 
                        ? 'bg-gray-400' 
                        : 'bg-blue-600 hover:bg-blue-700'} 
                      transition-colors`}
                  >
                    <span>Send Message</span>
                    {formStatus === 'sending' ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white"></div>
                    ) : (
                      <Send className="w-5 h-5" />
                    )}
                  </button>

                  {formStatus === 'success' && (
                    <div className="bg-green-50 text-green-600 p-4 rounded-lg flex items-center">
                      <CheckCircle2 className="w-5 h-5 mr-2" />
                      Message sent successfully!
                    </div>
                  )}
                </form>
              </div>

              {/* Departments Info */}
              <div className="space-y-8">
                <h2 className="text-2xl font-bold">Our Departments</h2>
                <div className="space-y-6">
                  {departments.map((dept, index) => (
                    <div 
                      key={index}
                      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="text-blue-600 mb-4">{dept.icon}</div>
                      <h3 className="text-lg font-semibold mb-2">{dept.name}</h3>
                      <p className="text-gray-600">{dept.description}</p>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="bg-gray-100 rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                      <Linkedin className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-blue-400 transition-colors">
                      <Twitter className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-blue-700 transition-colors">
                      <Facebook className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">
                      <Instagram className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-300"
                >
                  <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Need Immediate Assistance?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Our support team is available 24/7 to help you
            </p>
            <a 
              href="tel:+15551234567"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}