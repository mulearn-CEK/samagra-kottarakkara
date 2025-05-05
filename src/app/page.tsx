'use client';
import { Analytics } from "@vercel/analytics/react"
import Image from "next/image";
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import EducationalInstitutions from './components/EducationalInstitutions';
import { useRouter } from 'next/navigation';
import { useTranslation } from './hooks/useTranslation';

export default function Home() {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[600px] h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/Rectangle 2.png"
            alt={t('kottarakkaraMountains')}
            fill
            className="object-cover brightness-75"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl animate-[fadeIn_1s_ease-out]">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              {t('transformingKottarakkara')}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-xl">
              {t('transformationDesc')}
            </p>
            <button 
              onClick={() => {
                const headerHeight = 80; // height of fixed header
                const scrollDistance = window.innerHeight * 0.8 - headerHeight;
                window.scrollTo({
                  top: scrollDistance,
                  behavior: 'smooth'
                });
              }}
              className="btn btn-primary group"
            >
              {t('learnMore')}
              <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about-section" className="section-padding bg-sage-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white p-6 sm:p-8 md:p-12 rounded-2xl shadow-xl">
            <h2 className="text-gradient text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-center">{t('aboutKottarakkara')}</h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-center">
              {t('aboutKottarakkaraDesc')}
            </p>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section id="featured-articles" className="section-padding">
        <div className="container mx-auto px-4">
          <div className="section-header">
            <h2 className="text-3xl sm:text-4xl font-bold text-gradient">{t('featuredArticles')}</h2>
          </div>
          <div className="modern-grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { key: 'news', image: 'article-1.jpg' },
              { key: 'currentIssues', image: 'article-2.jpg' },
              { key: 'updates', image: 'article-3.jpg' },
              { key: 'education', image: 'article-4.jpg' }
            ].map((item, index) => (
              <div key={index} className="modern-card group">
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <Image
                    src={`/images/${item.image}`}
                    alt={t(item.key)}
                    fill
                    className="image-hover object-cover"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="font-semibold text-lg sm:text-xl mb-2 sm:mb-3 group-hover:text-sage-600 transition-colors">
                    {t(item.key)}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-4">
                    Latest updates and information
                  </p>
                  <button className="text-sage-600 font-medium inline-flex items-center group-hover:text-sage-700">
                    {t('readMore')}
                    <ArrowRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section-padding bg-gradient-to-b from-sage-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="animate-[slideIn_0.6s_ease-out]">
              <h2 className="text-3xl sm:text-4xl font-bold text-gradient mb-4 sm:mb-6">{t('education')}</h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                {t('educationDesc')}
              </p>
              <button 
                onClick={() => router.push('/focus/education')}
                className="btn btn-primary group"
              >
                {t('explorePrograms')}
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 animate-[fadeIn_0.8s_ease-out]">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <div key={num} className="relative h-24 sm:h-32 rounded-xl overflow-hidden shadow-lg group">
                  <Image
                    src={`/images/education-${num}.jpg`}
                    alt={`${t('educationImage')} ${num}`}
                    fill
                    className="image-hover object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="section-header">
            <h2 className="text-3xl sm:text-4xl font-bold text-gradient">{t('upcomingEvents')}</h2>
          </div>
          <div className="modern-card bg-gradient-to-r from-purple-900 to-purple-700 text-white overflow-hidden">
            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-4 text-purple-200 text-sm sm:text-lg">
                <span>{t('date')}</span>
                <span className="hidden sm:inline">|</span>
                <span>{t('location')}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 leading-tight">
                {t('desire2025')}
                <span className="block mt-2">
                  {t('desire2025Desc')}
                </span>
              </h3>
              <a 
                href="https://forms.gle/YGrjF21jABSTKqMu8" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn bg-white text-purple-900 hover:bg-purple-50 group inline-flex items-center"
              >
                {t('bookNow')}
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Video Gallery Section */}
      <section className="section-padding bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="section-header">
            <h2 className="text-3xl sm:text-4xl font-bold text-gradient-white mb-12">{t('videoGallery')}</h2>
          </div>
          <div className="relative">
            {/* Video Carousel */}
            <div className="overflow-hidden">
              <div className="flex gap-6 overflow-x-auto snap-x pb-8 -mx-4 px-4 scroll-smooth">
                {[
                  {
                    id: "W670QFLbV84",
                    title: t('workNearHome')
                  },
                  {
                    id: "B-uJfKoZblM",
                    title: t('campusIndustrial')
                  },
                  {
                    id: "FPh2IQaCEyg",
                    title: t('uniqueTouristSpot')
                  }
                ].map((video, index) => (
                  <div key={index} className="min-w-[300px] sm:min-w-[400px] snap-start">
                    <div className="bg-black rounded-xl overflow-hidden shadow-lg">
                      <div className="relative pb-[56.25%]">
                        <iframe
                          src={`https://www.youtube.com/embed/${video.id}`}
                          title={video.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="absolute inset-0 w-full h-full"
                        />
                      </div>
                    </div>
                    <h3 className="text-white mt-4 text-lg font-medium line-clamp-2">{video.title}</h3>
                  </div>
                ))}
              </div>
            </div>
            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  className="w-3 h-3 rounded-full bg-white/30 hover:bg-white/50 transition-colors"
                  aria-label={`${t('goToSlide')} ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News Reports */}
      <section className="section-padding bg-gradient-to-b from-sage-50 to-white">
        <div className="container mx-auto px-4">
          <div className="section-header">
            <h2 className="text-3xl sm:text-4xl font-bold text-gradient">{t('latestNews')}</h2>
          </div>
          <div className="modern-grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              t('desire2025'),
              t('workNearHome')
            ].map((title, index) => (
              <div key={index} className="modern-card group">
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <Image
                    src={`/images/news-${index + 1}.jpeg`}
                    alt={title}
                    fill
                    className="image-hover object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 group-hover:text-sage-600 transition-colors">{title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-4">
                    {t('latestUpdates')}
                  </p>
                  <button className="text-sage-600 font-medium inline-flex items-center group-hover:text-sage-700">
                    {t('readMore')}
                    <ArrowRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Analytics />
    </main>
  );
}
