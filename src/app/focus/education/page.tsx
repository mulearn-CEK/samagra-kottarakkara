'use client';

import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import EducationalInstitutions from '@/app/components/EducationalInstitutions';
import { useTranslation } from '../../hooks/useTranslation';

export default function Education() {
  const { t } = useTranslation();

  const educationalInstitutions = {
    schools: t('schoolsList').split('|'),
    colleges: t('collegesList').split('|'),
    others: t('othersList').split('|')
  };

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <h1 className="text-5xl font-bold mb-6">{t('education')}</h1>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                {t('educationDesc')}
              </p>
              <button className="btn btn-primary group">
                {t('exploreInstitutions')}
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative h-48 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/education/edu-1.jpg"
                    alt={t('education')}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 rounded-2xl overflow-hidden mt-8">
                  <Image
                    src="/images/education/edu-2.jpg"
                    alt={t('schools')}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/education/edu-3.jpg"
                    alt={t('colleges')}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 rounded-2xl overflow-hidden mt-8">
                  <Image
                    src="/images/education/edu-4.jpg"
                    alt={t('educationImage')}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">{t('insightsIntoEducation')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                {t('educationalInsightsDesc')}
              </p>
            </div>
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
              <h2 className="text-3xl font-bold mb-6">{t('educationalInstitutionsMap')}</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                {t('mapDescription')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Institutions Section */}
      <EducationalInstitutions />
    </main>
  );
} 