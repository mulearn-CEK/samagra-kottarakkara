import Image from "next/image";
import { ArrowRightIcon } from '@heroicons/react/24/outline';

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
              <span className="text-3xl sm:text-4xl md:text-6xl opacity-90">Kottarakkara</span>
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
      <section className="section-padding bg-sage-50 flex items-center justify-center">
        <div className="container mx-auto px-4 flex items-center justify-center">
          <div className="max-w-4xl mx-auto bg-white p-6 sm:p-8 md:p-12 rounded-2xl shadow-xl transform -translate-y-16 sm:-translate-y-20">
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
              {[1, 2, 3, 4, 5].map((num) => (
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
              <button className="btn bg-white text-purple-900 hover:bg-purple-50 group">
                BOOK NOW
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
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
              'Senior School Week Annual 2024',
              'Visit IT Park In Kottarakkara',
              'Historic Moments',
              'School Annual Day',
              'Education Technology',
              'Moving Next Home'
            ].map((title, index) => (
              <div key={index} className="modern-card group">
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <Image
                    src={`/images/news-${index + 1}.jpg`}
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
