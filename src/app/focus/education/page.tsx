'use client';

import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import EducationalInstitutions from '@/app/components/EducationalInstitutions';

export default function Education() {
  const educationalInstitutions = {
    schools: [
      'St. Gregorios Higher Secondary School: A well-established school known for its academic excellence and holistic development of students.',
      'Mar Gregorios Memorial Residential Public School: A residential school offering a comprehensive curriculum and a nurturing environment.',
      'Govt Higher Secondary School & VHSE: A government-run school providing quality education with diverse backgrounds.',
      'Town UP School, Kottarakkara: A primary school catering to the educational needs of young children in the town.',
      'MTHS, Mathilkom Girls High School: A girls\' school with a focus on academic achievement and character building.',
      'Government LP School Puliyarakonam: A government primary school serving the local community.'
    ],
    colleges: [
      'College of Applied Science',
      'Government Polytechnic College',
      'Industrial Training Institute'
    ],
    others: [
      'Technical Training Centers',
      'Vocational Training Institutes',
      'Skill Development Centers'
    ]
  };

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <h1 className="text-5xl font-bold mb-6">Education</h1>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Kottarakkara stands as a beacon of educational excellence, with renowned
                schools and colleges nurturing talent and inspiring ambition. Rooted in cultural values
                and innovation, the town offers a transformative learning environment,
                shaping bright futures and empowering dreams.
              </p>
              <button className="btn btn-primary group">
                Explore Institutions
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative h-48 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/education/edu-1.jpg"
                    alt="Education in Kottarakkara"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 rounded-2xl overflow-hidden mt-8">
                  <Image
                    src="/images/education/edu-2.jpg"
                    alt="Schools in Kottarakkara"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/education/edu-3.jpg"
                    alt="College Life"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 rounded-2xl overflow-hidden mt-8">
                  <Image
                    src="/images/education/edu-4.jpg"
                    alt="Learning Environment"
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
          <h2 className="text-3xl font-bold mb-12">Insights into Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                Kottarakkara boasts a diverse array of educational institutions that cater to various
                academic and vocational needs. From state-run schools and private CBSE institutions
                to colleges offering undergraduate and postgraduate programs, the city serves as a
                regional hub for learning. This section presents a visual representation of the
                distribution of schools, colleges, and technical institutions in Kottarakkara,
                showcasing the city's commitment to fostering knowledge and skill development.
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
              <h2 className="text-3xl font-bold mb-6">Educational Institutions Map</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                This map provides a comprehensive overview of the educational institutions in
                the area. It highlights schools, colleges, and other learning centers, making it
                easier for students, parents, and visitors to locate and explore these institutions.
                Whether you're looking for primary schools, higher education facilities, or
                specialized training centers, this map serves as a convenient guide to
                understanding the region's educational landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

{/* Educational Institutions Section */}
<EducationalInstitutions />
      {/* List of Institutions 
      <section className="py-20 bg-sage-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">List Of Education Institutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-sage-700">Schools</h3>
                <ul className="space-y-4">
                  {educationalInstitutions.schools.map((school, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 mt-2 rounded-full bg-sage-600 flex-shrink-0" />
                      <p className="text-gray-700">{school}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-sage-700">Colleges</h3>
                <ul className="space-y-4">
                  {educationalInstitutions.colleges.map((college, index) => (
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
                alt="Educational Campus"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>*/}
    </main>
  );
} 