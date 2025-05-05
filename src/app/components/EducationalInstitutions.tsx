'use client';

import Image from 'next/image';
import { useTranslation } from '../hooks/useTranslation';

export default function EducationalInstitutions() {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-sage-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">{t('listOfEducationInstitutions')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-sage-700">{t('schools')}</h3>
              <ul className="space-y-4">
                {t('schoolsList').split('|').map((school, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 mt-2 rounded-full bg-sage-600 flex-shrink-0" />
                    <p className="text-gray-700">{school}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-sage-700">{t('colleges')}</h3>
              <ul className="space-y-4">
                {t('collegesList').split('|').map((college, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 mt-2 rounded-full bg-sage-600 flex-shrink-0" />
                    <p className="text-gray-700">{college}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <Image
              src="/images/education/campus.jpg"
              alt={t('educationalCampus')}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
} 