'use client';

import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function About() {
  const focusAreas = [
    {
      title: 'Education',
      description: 'Enhancing educational infrastructure and opportunities through modernization of schools, skill development programs, and digital learning initiatives.',
      icon: '🎓',
      stats: 'Supporting 50+ educational institutions',
    },
    {
      title: 'Agriculture',
      description: 'Promoting sustainable farming practices, supporting local farmers, and implementing modern agricultural technologies for improved yield.',
      icon: '🌾',
      stats: 'Benefiting 1000+ farmers',
    },
    {
      title: 'Livelihood',
      description: 'Creating employment opportunities through IT parks, industrial zones, and skill development centers for sustainable income generation.',
      icon: '💼',
      stats: 'Creating 500+ job opportunities',
    },
    {
      title: 'Tourism',
      description: 'Developing tourist destinations while preserving cultural heritage and natural beauty of Kottarakkara.',
      icon: '🏛️',
      stats: 'Developing 10+ tourist spots',
    },
    {
      title: 'Waste Management',
      description: 'Implementing efficient waste collection and processing systems for a cleaner, greener Kottarakkara.',
      icon: '♻️',
      stats: 'Processing 10 tons daily',
    },
  ];

  const initiatives = [
    {
      title: 'Work Near Home',
      description: 'Kerala s first Work Near Home IT Park in Kottarakkara, providing local employment opportunities in the IT sector.',
      image: '/images/news-2.jpeg',
    },
    {
      title: 'Desire 2025',
      description: 'A comprehensive development initiative led by Finance Minister of Kerala & MLA of Kottarakkara for sustainable growth.',
      image: '/images/news-1.jpeg',
    },
  ];

  const achievements = [
    {
      title: 'IT Infrastructure',
      count: '1st',
      description: 'Work Near Home IT Park in Kerala',
    },
    {
      title: 'Education',
      count: '50+',
      description: 'Educational institutions supported',
    },
    {
      title: 'Employment',
      count: '500+',
      description: 'New job opportunities created',
    },
    {
      title: 'Development',
      count: '5+',
      description: 'Major projects in progress',
    },
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center bg-gradient-to-r from-sage-700 to-sage-900">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Transforming Kottarakkara
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Samagra Kottarakkara is a comprehensive development initiative aimed at 
              transforming Kottarakkara into a model town through sustainable development, 
              technological advancement, and community empowerment.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gradient">Our Vision</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              To develop Kottarakkara as a model town that seamlessly blends tradition with 
              modernity, fostering sustainable growth while preserving its rich cultural heritage. 
              Through innovative initiatives in education, agriculture, livelihood, tourism, and 
              waste management, we aim to enhance the quality of life for all residents.
            </p>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-20 bg-sage-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Focus Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {focusAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{area.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
                <p className="text-gray-600 mb-4">{area.description}</p>
                <div className="text-sage-600 font-medium">{area.stats}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Initiatives */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Initiatives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {initiatives.map((initiative, index) => (
              <div key={index} className="group">
                <div className="relative h-64 rounded-xl overflow-hidden mb-6">
                  <Image
                    src={initiative.image}
                    alt={initiative.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-3">{initiative.title}</h3>
                <p className="text-gray-600">{initiative.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-sage-400 mb-2">{achievement.count}</div>
                <div className="text-xl font-semibold mb-2">{achievement.title}</div>
                <p className="text-gray-400">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Leadership</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Under the visionary leadership of Shri K N Balagopal, Honorable Finance Minister 
              of Kerala & MLA of Kottarakkara, Samagra Kottarakkara is transforming the 
              landscape of development in the region through innovative initiatives and 
              sustainable solutions.
            </p>
            <div className="mt-8">
              <button className="btn btn-primary group">
                Join Our Initiative
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 