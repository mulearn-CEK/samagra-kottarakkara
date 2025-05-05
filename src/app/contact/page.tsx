'use client';

import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function Contact() {
  const contactInfo = [
    {
      icon: <PhoneIcon className="w-6 h-6" />,
      title: 'Phone',
      details: 'Coming Soon',
    },
    {
      icon: <EnvelopeIcon className="w-6 h-6" />,
      title: 'Email',
      details: 'Coming Soon',
    },
    {
      icon: <MapPinIcon className="w-6 h-6" />,
      title: 'Address',
      details: 'Kottarakkara, Kerala, India',
    },
  ];

  return (
    <main className="min-h-screen pt-20">
      <section className="relative min-h-[400px] flex items-center bg-gradient-to-r from-sage-700 to-sage-900">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              We're working on setting up our contact channels. Soon you'll be able to 
              reach out to us directly through this page. In the meantime, you can find 
              our basic contact information below.
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 rounded-lg text-white/90 backdrop-blur-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sage-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-sage-500"></span>
              </span>
              Full Contact Form Coming Soon
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-sage-100 text-sage-600 mb-4">
                    {info.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
                  <p className="text-gray-600">{info.details}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-sage-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gradient">Get Notified</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Want to know when our contact form goes live? Leave your email address 
              and we'll notify you as soon as it's ready.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent"
              />
              <button className="btn btn-primary group">
                Notify Me
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31559.083074100985!2d76.76894611354053!3d9.000423576679012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05fd3dd93e0ebf%3A0x5e10c8c4ad0c4a4f!2sKottarakkara%2C%20Kerala!5e0!3m2!1sen!2sin!4v1708068144317!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
        ></iframe>
      </section>
    </main>
  );
} 