'use client';
import { useLanguage } from './LanguageContext';
import { Globe, Sun, Moon, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Header() {
  const { lang, setLang, t } = useLanguage();
  const pathname = usePathname();
  const isHome = pathname === '/';

  // حالة الوضع الليلي / النهاري
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // التحقق من الثيم المخزن أو الافتراضي
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* الشعار وزر الرجوع */}
        <div className="flex items-center gap-6">
          {!isHome && (
            <Link 
              href="/" 
              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:border-orange-500 transition-all text-xs font-bold"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>الكتالوج الرئيسي</span>
            </Link>
          )}

          <Link href="/" className="text-2xl font-black tracking-tighter text-white">
            PUGALO<span className="text-orange-500">B2B</span>
          </Link>
        </div>

        {/* روابط التنقل السريع (تظهر في الرئيسية فقط) */}
        {isHome && (
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-300">
            <a href="#catalog" className="hover:text-orange-400 transition-colors">{t.nav_catalog}</a>
            <a href="#factory" className="hover:text-orange-400 transition-colors">{t.nav_factory}</a>
            <a href="#shipping" className="hover:text-orange-400 transition-colors">{t.nav_shipping}</a>
          </nav>
        )}

        {/* أدوات التحكّم: تبديل اللغات + زر الثيم الليلي/النهاري */}
        <div className="flex items-center gap-3">
          
          {/* زر تبديل الثيم الليلي / النهاري */}
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-orange-400 hover:border-orange-500/50 transition-all"
            title="تبديل الوضع المظلم/المضيء"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-blue-400" />}
          </button>

          {/* محول اللغات الثلاث */}
          <div className="relative flex items-center bg-neutral-900 border border-neutral-800 rounded-xl px-3 py-2 gap-2">
            <Globe className="w-4 h-4 text-orange-400" />
            <select 
              value={lang} 
              onChange={(e) => setLang(e.target.value as any)}
              className="bg-transparent text-white text-xs font-bold focus:outline-none cursor-pointer"
            >
              <option value="ar" className="bg-neutral-900 text-white">العربية</option>
              <option value="en" className="bg-neutral-900 text-white">English</option>
              <option value="tr" className="bg-neutral-900 text-white">Türkçe</option>
            </select>
          </div>

        </div>

      </div>
    </header>
  );
}