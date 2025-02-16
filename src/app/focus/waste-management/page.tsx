'use client';

import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function WasteManagement() {
  const recyclingSteps = [
    {
      title: 'Waste Generation',
      description: 'Households, businesses, and institutions generate various types of waste, including biodegradable waste, plastic waste, paper products like newspapers and cardboard, glass bottles, metal cans, electronic waste, and hazardous waste in small quantities.',
      image: '/images/waste-management/generation.jpg'
    },
    {
      title: 'Source Segregation',
      description: 'Source segregation is a crucial step in effective waste management. Households play a vital role by separating their waste into categories such as biodegradable, recyclable (like plastic, paper, metal, glass), and non-recyclable waste.',
      image: '/images/waste-management/segregation.jpg'
    },
    {
      title: 'Collection',
      description: 'Regular door-to-door collection by trained workers ensures efficient waste collection. Workers use designated collection vehicles to gather segregated waste from households and businesses.',
      image: '/images/waste-management/collection.jpg'
    },
    {
      title: 'Transportation',
      description: 'Collected waste is transported to designated Material Collection Facilities (MCF). These facilities play a crucial role in the waste management process.',
      image: '/images/waste-management/transportation.jpg'
    },
    {
      title: 'Sorting and Processing',
      description: 'At processing centers, waste is further sorted and processed according to type. Different materials are handled through specific recycling streams.',
      image: '/images/waste-management/processing.jpg'
    },
    {
      title: 'Manufacturing',
      description: 'Processed recyclable materials are transformed into various new products. Many of the materials like steel, paper, and plastic products can be recycled multiple times.',
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
              <h1 className="text-5xl font-bold mb-6">Waste Management</h1>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Kottarakkara is committed to sustainable waste management through innovative
                practices and community participation. With a focus on recycling, composting,
                and reducing waste, the town strives to maintain a clean and eco-friendly
                environment for future generations.
              </p>
              <button className="btn btn-primary group">
                Learn More
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="flex-1">
              <div className="relative h-[400px] w-full rounded-2xl overflow-hidden">
                <Image
                  src="/images/waste-management/hero.jpg"
                  alt="Waste Management in Kottarakkara"
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
                alt="Waste Collection Workers"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Waste Collection Process</h2>
              <div className="relative">
                <Image
                  src="/images/waste-management/haritha-karma-sena.png"
                  alt="Haritha Karma Sena Logo"
                  width={150}
                  height={150}
                  className="mb-6"
                />
              </div>
              <p className="text-gray-300 leading-relaxed">
                Haritha Karma Sena is a key initiative in the Kottarakkara Municipality's waste management system. 
                Through door-to-door collection of non-biodegradable waste, this green army plays a crucial role 
                in maintaining cleanliness and promoting proper waste disposal practices. The collected materials 
                are transported to Material Collection Facilities (MCF) for sorting and further processing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recycling Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Visualizing the Waste Recycling Process</h2>
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
            <h2 className="text-3xl font-bold mb-6">Our Commitment to Sustainability</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-12">
              Through systematic waste management practices and community engagement, 
              Kottarakkara Municipality aims to achieve zero waste status and create 
              a model for sustainable urban living.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-3 text-sage-700">Reduce</h3>
                <p className="text-gray-600">Minimizing waste generation through awareness and better practices</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-3 text-sage-700">Reuse</h3>
                <p className="text-gray-600">Promoting the reuse of materials to extend their lifecycle</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-3 text-sage-700">Recycle</h3>
                <p className="text-gray-600">Converting waste into valuable resources through recycling</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 