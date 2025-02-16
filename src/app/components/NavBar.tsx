'use client';

import Link from "next/link";
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const focusAreas = [
    { name: 'Agriculture', href: '/focus/agriculture' },
    { name: 'Livelihood', href: '/focus/livelihood' },
    { name: 'Education', href: '/focus/education' },
    { name: 'Waste Management', href: '/focus/waste-management' },
    { name: 'Tourism', href: '/focus/tourism' },
  ];

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
      <nav className="container mx-auto px-4 h-20 flex items-center justify-between relative">
        <Link href="/" className="flex items-center gap-3 relative z-50">
          <img 
            src="/images/logo.png" 
            alt="Samagra Kottarakkara Logo" 
            className="h-8 w-auto"
          />
          <div className="flex flex-col">
            <span className="text-black text-lg sm:text-xl font-medium">Samagra Kottarakkara</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          <Link href="/" className="nav-link hover:text-sage-600 transition-colors">Home</Link>
          <Link href="/about" className="nav-link hover:text-sage-600 transition-colors">About</Link>
          
          {/* Focus Areas Dropdown */}
          <div className="relative group">
            <button 
              className="nav-link flex items-center gap-1 py-2 hover:text-sage-600 transition-colors"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              Focus Areas
              <ChevronDownIcon className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
            </button>
            
            {/* Dropdown Menu */}
            <div 
              className={`absolute left-0 top-full w-56 bg-white rounded-lg shadow-lg py-2 transition-all duration-200 transform
                ${isDropdownOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}
              `}
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              {focusAreas.map((area) => (
                <Link
                  key={area.name}
                  href={area.href}
                  className="block px-4 py-2 text-gray-700 hover:bg-sage-50 hover:text-sage-600 transition-colors"
                >
                  {area.name}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/events" className="nav-link hover:text-sage-600 transition-colors">Events</Link>
          <Link href="/contact" className="nav-link hover:text-sage-600 transition-colors">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden relative z-50 p-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>

        {/* Mobile Navigation Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black/20 z-40 md:hidden" onClick={() => setIsMenuOpen(false)} />
        )}

        {/* Mobile Navigation */}
        <div 
          className={`
            fixed right-0 top-0 w-[300px] h-screen bg-white shadow-2xl
            transform transition-transform duration-300 ease-in-out z-50 md:hidden
            ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          `}
        >
          <div className="flex flex-col pt-24 px-6 h-full overflow-y-auto pb-8">
            <Link 
              href="/" 
              className="py-3 text-lg hover:text-sage-600 transition-colors" 
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="py-3 text-lg hover:text-sage-600 transition-colors" 
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            
            {/* Mobile Focus Areas */}
            <div className="py-4 space-y-3">
              <span className="text-sage-600 font-medium text-lg">Focus Areas</span>
              <div className="flex flex-col space-y-2 pl-4">
                {focusAreas.map((area) => (
                  <Link
                    key={area.name}
                    href={area.href}
                    className="py-2 hover:text-sage-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {area.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link 
              href="/events" 
              className="py-3 text-lg hover:text-sage-600 transition-colors" 
              onClick={() => setIsMenuOpen(false)}
            >
              Events
            </Link>
            <Link 
              href="/contact" 
              className="py-3 text-lg hover:text-sage-600 transition-colors" 
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
} 