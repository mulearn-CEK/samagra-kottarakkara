'use client';

import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function Events() {
  return (
    <main className="min-h-screen pt-20">
      <section className="relative min-h-[600px] flex items-center bg-gradient-to-r from-sage-700 to-sage-900">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Events
            </h1>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              Stay tuned for upcoming events and activities in Kottarakkara. 
              We're working on bringing you the latest updates about local gatherings, 
              cultural programs, and community initiatives.
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 rounded-lg text-white/90 backdrop-blur-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sage-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-sage-500"></span>
              </span>
              Coming Soon
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gradient">Get Notified</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Want to stay updated about upcoming events in Kottarakkara? 
              Leave your email address and we'll notify you as soon as we launch our events page.
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
    </main>
  );
} 