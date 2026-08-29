'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Globe } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export default function Hero() {
  const { t, lang } = useLanguage();

  return (
    <div className="relative min-h-[100dvh] flex items-center overflow-hidden bg-neutral-950 text-white pt-20">
      {/* خلفية الإضاءة المتدرجة */}
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-900/20 via-neutral-950 to-neutral-950 z-0"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center mt-10 lg:mt-0">
          
          {/* قسم النصوص (يستجيب تلقائياً لاتجاه اللغة) */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-start z-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6"
            >
              <Globe className="w-4 h-4 text-orange-400" />
              <span className="text-xs md:text-sm font-medium tracking-wide text-neutral-300">
                {t.hero_badge}
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-[1.1]"
            >
              <span className="block mb-3">{t.hero_title1}</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-200">
                {t.hero_title2}
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg text-neutral-400 mb-10 max-w-lg leading-relaxed"
            >
              {t.hero_desc}
            </motion.p>

            <motion.button
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-orange-500 rounded-2xl text-white font-bold text-lg overflow-hidden shadow-[0_0_40px_rgba(249,115,22,0.3)] hover:shadow-[0_0_60px_rgba(249,115,22,0.5)] transition-shadow"
            >
              <span className="relative z-10">{t.btn_catalog}</span>
              <ArrowRight className={`w-5 h-5 transition-transform relative z-10 ${lang === 'ar' ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-orange-600 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left z-0"></div>
            </motion.button>
          </div>

          {/* قسم الصور الفاخرة المتداخلة */}
          <div className="relative h-[400px] sm:h-[500px] lg:h-[650px] w-full hidden md:block">
            
            {/* إطار الكلب (الخلفي) */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-4 lg:top-10 end-4 lg:end-10 w-[65%] h-[70%] bg-neutral-800 rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl z-10"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent z-10"></div>
              {/* صورة مؤقتة عالية الجودة لكلب */}
              <img src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=1000&auto=format&fit=crop" alt="Premium Dog" className="w-full h-full object-cover opacity-90" />
              <div className="absolute bottom-6 start-6 z-20 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-orange-300 text-xs font-bold tracking-wider">
                Premium Dogs
              </div>
            </motion.div>

            {/* إطار القط (الأمامي) */}
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-4 lg:bottom-10 start-4 lg:start-0 w-[60%] h-[65%] bg-neutral-900 rounded-[2rem] border border-orange-500/40 overflow-hidden shadow-[0_0_50px_rgba(249,115,22,0.2)] z-20"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-transparent to-transparent z-10"></div>
              {/* صورة مؤقتة عالية الجودة لقط */}
              <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1000&auto=format&fit=crop" alt="Premium Cat" className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700" />
              <div className="absolute bottom-6 start-6 z-20 bg-orange-500/20 backdrop-blur-md px-4 py-2 rounded-full border border-orange-500/50 text-white text-xs font-bold tracking-wider">
                Luxury Cats
              </div>
            </motion.div>

            {/* عنصر زخرفي (Glow Effect) خلف الصور */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-500/20 rounded-full blur-[80px] z-0"></div>
          </div>

        </div>
      </div>
    </div>
  );
}