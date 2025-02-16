'use client';

import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function Tourism() {
  const mainAttractions = [
    {
      title: 'Kottarakkara Sree Mahaganapathy Temple',
      description: 'A historic temple known for its architectural beauty and spiritual significance.',
      image: '/images/tourism/temple.jpg'
    },
    {
      title: 'Scenic Lakes and Sunsets',
      description: 'Beautiful water bodies offering stunning sunset views and boating experiences.',
      image: '/images/tourism/lake.jpg'
    },
    {
      title: 'Historic Bridges',
      description: 'Colonial-era bridges showcasing architectural heritage.',
      image: '/images/tourism/bridge.jpg'
    },
    {
      title: 'Local Markets',
      description: 'Vibrant traditional markets offering local products and cultural experiences.',
      image: '/images/tourism/market.jpg'
    }
  ];

  const galleryImages = [
    {
      src: '/images/tourism/gallery-1.jpg',
      alt: 'Mountain Landscape'
    },
    {
      src: '/images/tourism/gallery-2.jpg',
      alt: 'Temple Architecture'
    },
    {
      src: '/images/tourism/gallery-3.jpg',
      alt: 'Cultural Festival'
    },
    {
      src: '/images/tourism/gallery-4.jpg',
      alt: 'Natural Beauty'
    }
  ];

  const recommendations = [
    {
      title: 'Hotels & Resorts',
      description: 'Comfortable accommodations with modern amenities and traditional hospitality.',
      image: '/images/tourism/hotel.jpg'
    },
    {
      title: 'Local Cuisine',
      description: 'Authentic Kerala restaurants serving traditional delicacies.',
      image: '/images/tourism/cuisine.jpg'
    },
    {
      title: 'Cultural Centers',
      description: 'Venues showcasing local art forms and cultural performances.',
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
              <h1 className="text-5xl font-bold mb-6">Tourism</h1>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Kottarakkara, a serene town in Kerala, is a blend of spiritual heritage, natural
                beauty, and cultural richness. Famous for the Kottarakkara Sree Mahaganapathy
                Temple and as the birthplace of Kathakali, it offers visitors a chance to
                explore lush landscapes, vibrant traditions, and timeless charm.
              </p>
              <button className="btn btn-primary group">
              Explore More
              <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            </div>
            <div className="flex-1">
              <div className="relative h-[600px] w-full rounded-2xl overflow-hidden">
                <Image
                  src="/images/tourism/hero.jpg"
                  alt="Tourism in Kottarakkara"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Attractions */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-white">Main Attractions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mainAttractions.map((attraction, index) => (
              <div key={index} className="group">
                <div className="relative h-64 rounded-xl overflow-hidden mb-4">
                  <Image
                    src={attraction.image}
                    alt={attraction.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{attraction.title}</h3>
                <p className="text-gray-400">{attraction.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-[#E5C1B3]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">GALLERY</h2>
          <div className="flex gap-6 overflow-x-auto pb-8 snap-x">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="relative min-w-[300px] h-[200px] rounded-xl overflow-hidden snap-center"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
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
              <h2 className="text-3xl font-bold mb-6">Tourist Map</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                This map offers a detailed guide to the region's top tourist attractions and
                recreational spots. From historical landmarks and cultural sites to natural
                wonders and adventure parks, it showcases the diverse experiences available for
                visitors. Whether you're planning a leisurely day exploring scenic beauty,
                engaging in outdoor activities, or immersing yourself in the local heritage,
                this map serves as your perfect companion to discover and enjoy the best
                the area has to offer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recommendations Section */}
      <section className="py-20 bg-sage-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Recommended Hotel and Restaurants</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recommendations.map((item, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg group">
                <div className="relative h-48">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <button className="text-sage-600 font-medium inline-flex items-center group">
                    Learn More
                    <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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