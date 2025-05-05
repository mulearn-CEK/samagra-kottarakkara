'use client';

import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { useTranslation } from '../../hooks/useTranslation';

export default function WasteManagement() {
  const { t } = useTranslation();

  const recyclingSteps = [
    {
      title: t('wasteGenerationTitle'),
      description: t('wasteGenerationDesc'),
      image: '/images/waste-management/generation.jpg'
    },
    {
      title: t('segregationTitle'),
      description: t('segregationDesc'),
      image: '/images/waste-management/segregation.jpg'
    },
    {
      title: t('collectionTitle'),
      description: t('collectionDesc'),
      image: '/images/waste-management/collection.jpg'
    },
    {
      title: t('transportationTitle'),
      description: t('transportationDesc'),
      image: '/images/waste-management/transportation.jpg'
    },
    {
      title: t('processingTitle'),
      description: t('processingDesc'),
      image: '/images/waste-management/processing.jpg'
    },
    {
      title: t('manufacturingTitle'),
      description: t('manufacturingDesc'),
      image: '/images/waste-management/manufacturing.jpg'
    }
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <h1 className="text-5xl font-bold mb-6">{t('wasteManagement')}</h1>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                {t('wasteManagementDesc')}
              </p>
              <button className="btn btn-primary group">
                {t('learnMore')}
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="flex-1">
              <div className="relative h-[400px] w-full rounded-2xl overflow-hidden">
                <Image
                  src="/images/waste-management/hero.jpg"
                  alt={t('wasteManagement')}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waste Collection Process */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="/images/waste-management/workers.jpg"
                alt={t('wasteCollectionWorkers')}
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">{t('wasteCollectionProcess')}</h2>
              <div className="relative">
                <Image
                  src="/images/waste-management/haritha-karma-sena.png"
                  alt={t('harithaKarmaSena')}
                  width={150}
                  height={150}
                  className="mb-6"
                />
              </div>
              <p className="text-gray-300 leading-relaxed">
                {t('harithaKarmaSenaDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recycling Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">{t('recyclingProcess')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recyclingSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-sage-700">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Goals */}
      <section className="py-20 bg-sage-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">{t('sustainabilityCommitment')}</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-12">
              {t('sustainabilityDesc')}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-3 text-sage-700">{t('reduce')}</h3>
                <p className="text-gray-600">{t('reduceDesc')}</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-3 text-sage-700">{t('reuse')}</h3>
                <p className="text-gray-600">{t('reuseDesc')}</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-3 text-sage-700">{t('recycle')}</h3>
                <p className="text-gray-600">{t('recycleDesc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 