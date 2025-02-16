'use client';

import Image from "next/image";
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import EducationalInstitutions from './components/EducationalInstitutions';

export default function Home() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[600px] h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/Rectangle 2.png"
            alt="Kottarakkara Mountains"
            fill
            className="object-cover brightness-75"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl animate-[fadeIn_1s_ease-out]">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Samagra<br />
              <span className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">Kottarakkara</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-xl">
              Discover the rich heritage and vibrant future of our historic town
            </p>
            <button className="btn btn-primary group">
              Explore More
              <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-sage-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white p-6 sm:p-8 md:p-12 rounded-2xl shadow-xl">
            <h2 className="text-gradient text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-center">About Kottarakkara</h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-center">
              Kottarakkara is a historic town in Kerala, known for its rich cultural heritage and natural beauty.
              The region has played a significant role in the state's artistic and educational development.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="section-header">
            <h2 className="text-3xl sm:text-4xl font-bold text-gradient">Featured Articles</h2>
          </div>
          <div className="modern-grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {['News', 'Current Issues', 'Updates', 'Education'].map((title, index) => (
              <div key={index} className="modern-card group">
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <Image
                    src={`/images/article-${index + 1}.jpg`}
                    alt={title}
                    fill
                    className="image-hover object-cover"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="font-semibold text-lg sm:text-xl mb-2 sm:mb-3 group-hover:text-sage-600 transition-colors">{title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-4">Latest updates and information about {title.toLowerCase()}</p>
                  <button className="text-sage-600 font-medium inline-flex items-center group-hover:text-sage-700">
                    Read More
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
              <h2 className="text-3xl sm:text-4xl font-bold text-gradient mb-4 sm:mb-6">Education</h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                Discover educational resources and opportunities in Kottarakkara.
                Our institutions are committed to nurturing the next generation of leaders.
              </p>
              <button className="btn btn-primary">
                Explore Programs
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 animate-[fadeIn_0.8s_ease-out]">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <div key={num} className="relative h-24 sm:h-32 rounded-xl overflow-hidden shadow-lg group">
                  <Image
                    src={`/images/education-${num}.jpg`}
                    alt={`Education ${num}`}
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gradient">Upcoming Events</h2>
          </div>
          <div className="modern-card bg-gradient-to-r from-purple-900 to-purple-700 text-white overflow-hidden">
            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-4 text-purple-200 text-sm sm:text-lg">
                <span>February 22, 2024</span>
                <span className="hidden sm:inline">|</span>
                <span>KOTTARAKKARA</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 leading-tight">
                Desire 2025
                <span className="block mt-2">
                  An initiative by Honorable Finance Minister of Kerala & MLA of Kottarakkara <br />Shri K N Balagopal
                </span>
              </h3>
              <a 
                href="https://forms.gle/YGrjF21jABSTKqMu8" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn bg-white text-purple-900 hover:bg-purple-50 group inline-flex items-center"
              >
                BOOK NOW
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gradient-white mb-12">Video Gallery</h2>
          </div>
          <div className="relative">
            {/* Video Carousel */}
            <div className="overflow-hidden">
              <div className="flex gap-6 overflow-x-auto snap-x pb-8 -mx-4 px-4 scroll-smooth">
                {[
                  {
                    id: "W670QFLbV84",
                    title: "വീടിന് അടുത്ത് തൊഴിലിടം; ആദ്യ 'വർക്ക് നിയർ ഹോം' ഐ.ടി.പാർക്ക് കൊട്ടാരക്കരയിൽ"
                  },
                  {
                    id: "B-uJfKoZblM",
                    title: "Kerala's First Campus Industrial Park & Zoho R&D Labs"
                  },
                  {
                    id: "FPh2IQaCEyg",
                    title: "കൊട്ടാരക്കരയിലെ വ്യത്യസ്തമായ ടൂറിസ്റ്റ് കേന്ദ്രം"
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
                  aria-label={`Go to slide ${index + 1}`}
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gradient">Latest News</h2>
          </div>
          <div className="modern-grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              'Desire 2025',
              'Visit IT Park In Kottarakkara'
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
                    Latest updates and information about the event
                  </p>
                  <button className="text-sage-600 font-medium inline-flex items-center group-hover:text-sage-700">
                    Read More
                    <ArrowRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
