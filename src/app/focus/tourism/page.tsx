'use client';

import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { useTranslation } from '../../hooks/useTranslation';

export default function Tourism() {
  const { t } = useTranslation();

  const mainAttractions = [
    {
      title: t('templeTitle'),
      description: t('templeDesc'),
      image: '/images/tourism/temple1.jpg'
    },
    {
      title: t('lakesTitle'),
      description: t('lakesDesc'),
      image: '/images/tourism/lake.jpg'
    },
    {
      title: t('museumsTitle'),
      description: t('museumsDesc'),
      image: '/images/tourism/museum.jpg'
    },
    {
      title: t('marketsTitle'),
      description: t('marketsDesc'),
      image: '/images/tourism/market.jpg'
    }
  ];

  const recommendations = [
    {
      title: t('hotelsTitle'),
      description: t('hotelsDesc'),
      image: '/images/tourism/hotel.jpg'
    },
    {
      title: t('cuisineTitle'),
      description: t('cuisineDesc'),
      image: '/images/tourism/cuisine.jpg'
    },
    {
      title: t('culturalTitle'),
      description: t('culturalDesc'),
      image: '/images/tourism/culture.jpg'
    }
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <h1 className="text-5xl font-bold mb-6">{t('tourism')}</h1>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                {t('tourismDesc')}
              </p>
              <button className="btn btn-primary group">
                {t('exploreMore')}
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="flex-1">
              <div className="relative h-[600px] w-full rounded-2xl overflow-hidden">
                <Image
                  src="/images/tourism/hero.jpg"
                  alt={t('tourism')}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Attractions */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">{t('mainAttractions')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mainAttractions.map((attraction, index) => (
              <div key={index} className="bg-gray-800 rounded-xl overflow-hidden hover:bg-gray-700 transition-colors">
                <div className="relative h-48">
                  <Image
                    src={attraction.image}
                    alt={attraction.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{attraction.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{attraction.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31559.083074100985!2d76.76894611354053!3d9.000423576679012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05fd3dd93e0ebf%3A0x5e10c8c4ad0c4a4f!2sKottarakkara%2C%20Kerala!5e0!3m2!1sen!2sin!4v1708068144317!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
              ></iframe>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">{t('touristMap')}</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                {t('touristMapDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recommendations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">{t('recommendations')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recommendations.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 