'use client';

import Link from "next/link";
import { useTranslation } from "../hooks/useTranslation";

export default function Footer() {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div className="space-y-4">
            <h3 className="text-lg md:text-xl font-bold mb-6 text-gradient-white">{t('focusAreas')}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/focus/education" className="text-gray-400 hover:text-white transition-colors">
                  {t('education')}
                </Link>
              </li>
              <li>
                <Link href="/focus/livelihood" className="text-gray-400 hover:text-white transition-colors">
                  {t('livelihood')}
                </Link>
              </li>
              <li>
                <Link href="/focus/agriculture" className="text-gray-400 hover:text-white transition-colors">
                  {t('agriculture')}
                </Link>
              </li>
              <li>
                <Link href="/focus/tourism" className="text-gray-400 hover:text-white transition-colors">
                  {t('tourism')}
                </Link>
              </li>
              <li>
                <Link href="/focus/waste-management" className="text-gray-400 hover:text-white transition-colors">
                  {t('wasteManagement')}
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg md:text-xl font-bold mb-6 text-gradient-white">{t('explore')}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/events" className="text-gray-400 hover:text-white transition-colors">
                  {t('events')}
                </Link>
              </li>
              <li>
                <div className="group relative inline-block">
                  <span className="text-gray-400 cursor-not-allowed">{t('news')}</span>
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {t('comingSoon')}
                  </span>
                </div>
              </li>
              <li>
                <div className="group relative inline-block">
                  <span className="text-gray-400 cursor-not-allowed">{t('gallery')}</span>
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {t('comingSoon')}
                  </span>
                </div>
              </li>
              <li>
                <div className="group relative inline-block">
                  <span className="text-gray-400 cursor-not-allowed">{t('projects')}</span>
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {t('comingSoon')}
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg md:text-xl font-bold mb-6 text-gradient-white">{t('contact')}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  {t('aboutUs')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  {t('contactUs')}
                </Link>
              </li>
              <li>
                <div className="group relative inline-block">
                  <span className="text-gray-400 cursor-not-allowed">{t('newsletter')}</span>
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {t('comingSoon')}
                  </span>
                </div>
              </li>
              <li>
                <div className="group relative inline-block">
                  <span className="text-gray-400 cursor-not-allowed">{t('socialMedia')}</span>
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {t('comingSoon')}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            {t('madeWith')}
            <br />
            © {new Date().getFullYear()} Samagra Kottarakkara. {t('copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
} 