'use client';
import { useLanguage } from './LanguageContext';

export default function Footer() {
  const { t, lang } = useLanguage();

  return (
    <footer className="bg-neutral-950 border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-2">
          <span className="text-2xl font-black tracking-tighter text-white mb-4 block">
            PUGALO<span className="text-orange-500">B2B</span>
          </span>
          <p className="text-neutral-400 max-w-sm leading-relaxed">
            {t.footer_desc}
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-4">{t.footer_links}</h4>
          <ul className="space-y-2 text-neutral-400">
            <li><a href="#" className="hover:text-orange-400">{t.link_cat}</a></li>
            <li><a href="#" className="hover:text-orange-400">{t.link_sample}</a></li>
            <li><a href="#" className="hover:text-orange-400">{t.link_terms}</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">{t.footer_contact}</h4>
          <ul className="space-y-2 text-neutral-400">
            <li>Bursa, Türkiye</li>
            <li dir="ltr" className={`text-neutral-400 block ${lang === 'ar' ? 'text-right' : 'text-left'}`}>export@pugalopet-b2b.com</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 pt-8 border-t border-white/10 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} Pugalo B2B Export Division. All rights reserved.
      </div>
    </footer>
  );
}