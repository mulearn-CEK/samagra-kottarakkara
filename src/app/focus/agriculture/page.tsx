'use client';

import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function Agriculture() {
  const mainCrops = [
    { name: 'Rubber', percentage: 29, description: 'Rubber plantations are also prevalent in certain parts of Kottarakkara' },
    { name: 'Rice', percentage: 26, description: 'As a staple food in Kerala, rice cultivation is practiced in suitable areas.' },
    { name: 'Coconut', percentage: 25, description: 'A major cash crop, coconuts are widely grown throughout the region.' },
    { name: 'Spices & Others', percentage: 20, description: 'Spices: Crops like pepper, ginger, and turmeric are cultivated in suitable agro-climatic zones.' }
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <h1 className="text-5xl font-bold mb-6">Agriculture</h1>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Agriculture is the lifeblood of Kottarakkara, with lush fields cultivating crops like rice,
                coconut, and spices. Emphasizing sustainable practices, the region blends traditional
                methods with modern techniques, supporting farmers and preserving its rich agricultural
                heritage.
              </p>
              <button className="btn btn-primary group">
                Learn More
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="flex-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-48 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/agriculture/agri-1.jpg"
                    alt="Agriculture in Kottarakkara"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 rounded-2xl overflow-hidden mt-8">
                  <Image
                    src="/images/agriculture/agri-2.jpg"
                    alt="Farming in Kottarakkara"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/agriculture/agri-3.jpg"
                    alt="Crops in Kottarakkara"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 rounded-2xl overflow-hidden mt-8">
                  <Image
                    src="/images/agriculture/agri-4.jpg"
                    alt="Sustainable farming"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Crops Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Main Crops</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              {mainCrops.map((crop, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2 rounded-full bg-sage-400" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{crop.name}</h3>
                    <p className="text-gray-300">{crop.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative h-80">
              {/* Donut Chart */}
              <div className="w-full h-full flex items-center justify-center">
                <div className="relative w-64 h-64">
                  <svg viewBox="0 0 100 100" className="transform -rotate-90">
                    {mainCrops.map((crop, index) => {
                      const offset = mainCrops
                        .slice(0, index)
                        .reduce((acc, curr) => acc + curr.percentage, 0);
                      return (
                        <circle
                          key={index}
                          r="15.9155"
                          cx="50"
                          cy="50"
                          fill="none"
                          stroke={`hsl(${index * 90}, 70%, 60%)`}
                          strokeWidth="31.831"
                          strokeDasharray={`${crop.percentage} 100`}
                          strokeDashoffset={-offset}
                          className="transition-all duration-1000"
                        />
                      );
                    })}
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 sm:py-20 bg-white flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 flex items-center justify-center">
          <div className="max-w-6xl w-full">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center">Agricultural Locations</h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 sm:mb-10 text-center max-w-3xl mx-auto px-4">
              There are several key locations where main crop cultivation is concentrated in Kottarakkara.
              These areas are strategically chosen based on soil conditions, water availability, and
              traditional farming practices.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12 items-start">
              <div className="relative h-[300px] sm:h-[400px] rounded-xl overflow-hidden shadow-lg w-full">
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
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg">
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="w-2 h-2 mt-2 rounded-full bg-sage-600 flex-shrink-0" />
                    <p className="text-gray-600 text-sm sm:text-base">Rubber plantations in northern regions</p>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="w-2 h-2 mt-2 rounded-full bg-sage-600 flex-shrink-0" />
                    <p className="text-gray-600 text-sm sm:text-base">Rice cultivation in lowland areas</p>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="w-2 h-2 mt-2 rounded-full bg-sage-600 flex-shrink-0" />
                    <p className="text-gray-600 text-sm sm:text-base">Coconut groves throughout the region</p>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="w-2 h-2 mt-2 rounded-full bg-sage-600 flex-shrink-0" />
                    <p className="text-gray-600 text-sm sm:text-base">Spice cultivation in highland zones</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rubber Cultivation Section */}
      <section className="py-20 bg-sage-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Rubber Cultivation</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Rubber is the main crop cultivated in Kottarakkara. Kottarakara, located in Kerala, has favorable
                conditions for rubber cultivation. The region's tropical climate and fertile soil make it an ideal
                place for growing rubber trees, which is why rubber plantations are common there.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Rubber cultivation plays a significant role in the economy of the area, providing employment and
                supporting the local community.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-64 rounded-xl overflow-hidden">
                <Image
                  src="/images/agriculture/rubber-1.jpg"
                  alt="Rubber plantation"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden mt-8">
                <Image
                  src="/images/agriculture/rubber-2.jpg"
                  alt="Rubber tapping"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 