'use client';

import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function Livelihood() {
  const mainLivelihoods = [
    {
      title: 'Agriculture',
      description: 'Rubber, coconut, pepper, and cardamom cultivation.',
      image: '/images/livelihood/agriculture.jpg'
    },
    {
      title: 'Small-scale Industries',
      description: 'Rubber processing units, handloom weaving.',
      image: '/images/livelihood/industry.jpg'
    },
    {
      title: 'Tourism',
      description: 'Scenic beauty, historical sites (Kundara).',
      image: '/images/livelihood/tourism.jpg'
    },
    {
      title: 'Education and Healthcare',
      description: 'Schools, hospitals, and related services.',
      image: '/images/livelihood/education-health.jpg'
    }
  ];

  const kudumbashreeInitiatives = [
    {
      title: 'Green Way Gardens',
      year: 2017,
      investment: 300000,
      income: 12000,
      description: 'Operating under the Kizhakekara ADS in Kottarakkara, this venture focuses on orchid cultivation. With an initial investment of Rs. 300,000, the enterprise generates a monthly income of Rs. 12,000, showcasing the potential of sustainable livelihoods.',
      image: '/images/livelihood/green-way.jpg'
    },
    {
      title: 'J Stores',
      year: 2017,
      investment: 250000,
      income: 10000,
      description: 'Operating under the ETC ADS in Kottarakkara, this individual enterprise caters to the needs of the community by providing stationery supplies. With an initial investment of Rs. 250,000, the unit generates a consistent monthly income of Rs. 10,000.',
      image: '/images/livelihood/j-stores.jpg'
    }
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <h1 className="text-5xl font-bold mb-6">Livelihood</h1>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Kottarakkara's economy thrives on agriculture, trade, and small-scale industries, 
                balanced with emerging opportunities in entrepreneurship. Rooted in tradition yet 
                forward-looking, the town fosters sustainable and vibrant livelihoods.
              </p>
              <button className="btn btn-primary group">
                Explore Opportunities
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="flex-1">
              <div className="relative h-[600px] w-full rounded-2xl overflow-hidden">
                <Image
                  src="/images/livelihood/hero.jpg"
                  alt="Livelihood in Kottarakkara"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Livelihoods Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">List Of Main Livelihood</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="/images/livelihood/main-livelihood.jpg"
                alt="Main Livelihoods"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              {mainLivelihoods.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2 rounded-full bg-sage-400 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Kudumbashree Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Kudumbashree Initiatives</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Kudumbashree is a poverty eradication and women empowerment program in Kerala, 
              India. It operates through a three-tiered structure of Neighborhood Groups (NHGs), 
              Area Development Societies (ADSs), and Community Development Societies (CDSs). 
              Kudumbashree has been successful in empowering women, generating employment, 
              alleviating poverty, and initiating various social initiatives.
            </p>
          </div>

          <div className="space-y-20">
            {kudumbashreeInitiatives.map((initiative, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className={`space-y-6 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <h3 className="text-2xl font-bold text-sage-700">{initiative.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="px-3 py-1 bg-sage-100 text-sage-700 rounded-full">
                      Established: {initiative.year}
                    </span>
                    <span className="px-3 py-1 bg-sage-100 text-sage-700 rounded-full">
                      Investment: ₹{initiative.investment.toLocaleString()}
                    </span>
                    <span className="px-3 py-1 bg-sage-100 text-sage-700 rounded-full">
                      Monthly Income: ₹{initiative.income.toLocaleString()}
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
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 