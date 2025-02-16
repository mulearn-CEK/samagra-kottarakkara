'use client';

import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { useTranslation } from '../../hooks/useTranslation';

export default function Livelihood() {
  const { t } = useTranslation();

  const mainLivelihoods = [
    {
      title: t('agricultureTitle'),
      description: t('agricultureLivelihoodDesc'),
      image: '/images/livelihood/agriculture.jpg'
    },
    {
      title: t('smallScaleIndustries'),
      description: t('smallScaleIndustriesDesc'),
      image: '/images/livelihood/industry.jpg'
    },
    {
      title: t('tourismTitle'),
      description: t('tourismLivelihoodDesc'),
      image: '/images/livelihood/tourism.jpg'
    },
    {
      title: t('educationHealthcare'),
      description: t('educationHealthcareDesc'),
      image: '/images/livelihood/education-health.jpg'
    }
  ];

  const kudumbashreeInitiatives = [
    {
      title: t('greenWayGardens'),
      year: 2017,
      investment: 300000,
      income: 12000,
      description: t('greenWayDesc'),
      image: '/images/livelihood/green-way.jpg',
      source: t('kudumbashreeSource')
    },
    {
      title: t('jStores'),
      year: 2017,
      investment: 250000,
      income: 10000,
      description: t('jStoresDesc'),
      image: '/images/livelihood/j-stores.jpg',
      source: t('kudumbashreeSource')
    }
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <h1 className="text-5xl font-bold mb-6">{t('livelihood')}</h1>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                {t('livelihoodDesc')}
              </p>
              <button className="btn btn-primary group">
                {t('exploreMore')}
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="flex-1">
              <div className="relative h-[600px] w-full rounded-2xl overflow-hidden">
                <Image
                  src="/images/livelihood/hero.jpg"
                  alt={t('livelihood')}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Livelihoods Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">{t('mainLivelihoods')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mainLivelihoods.map((item, index) => (
              <div key={index} className="group">
                <div className="relative h-64 rounded-xl overflow-hidden mb-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kudumbashree Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">{t('kudumbashreeInitiatives')}</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              {t('kudumbashreeDesc')}
            </p>
          </div>

          <div className="space-y-20">
            {kudumbashreeInitiatives.map((initiative, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className={`space-y-6 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <h3 className="text-2xl font-bold text-sage-700">{initiative.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="px-3 py-1 bg-sage-100 text-sage-700 rounded-full">
                      {t('established')}: {initiative.year}
                    </span>
                    <span className="px-3 py-1 bg-sage-100 text-sage-700 rounded-full">
                      {t('investment')}: ₹{initiative.investment.toLocaleString()}
                    </span>
                    <span className="px-3 py-1 bg-sage-100 text-sage-700 rounded-full">
                      {t('monthlyIncome')}: ₹{initiative.income.toLocaleString()}
                    </span>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {initiative.description}
                  </p>
                </div>
                <div className={`relative h-[300px] rounded-xl overflow-hidden shadow-lg ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <Image
                    src={initiative.image}
                    alt={initiative.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center"
                    priority
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs p-2 text-right">
                    {t('source')}: {initiative.source}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 