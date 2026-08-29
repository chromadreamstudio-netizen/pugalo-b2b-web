'use client';
import { useParams } from 'next/navigation';
import { useLanguage } from '@/components/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LeadModal from '@/components/LeadModal';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlayCircle, CheckCircle, Factory, Box, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export default function ProductPage() {
  const params = useParams();
  const productId = Number(params.id);
  const { t, lang } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImgIdx, setCurrentImgIdx] = useState(0);

  const product = t.products.find((p: any) => p.id === productId);
  const currentLang = (lang as 'ar' | 'en' | 'tr') || 'ar';
  
  let productColors = [];
  let productSizes = [] as string[];
  let images = [];
  
  if (productId === 1) {
    productColors = [{ name: currentLang === 'ar' ? 'أنثراسيت' : 'Anthracite', hex: '#3b3e46' }, { name: currentLang === 'ar' ? 'رمادي' : 'Grey', hex: '#9ca3af' }, { name: currentLang === 'ar' ? 'كريمي' : 'Cream', hex: '#fef3c7' }];
    images = [`/products/1/5.jpeg`, `/products/1/6.jpeg`, `/products/1/7.jpeg`, `/products/1/1.PNG`, `/products/1/2.jpg`, `/products/1/3.PNG`, `/products/1/4.PNG`];
  } 
  else if (productId === 2) {
    productColors = [
      { name: currentLang === 'ar' ? 'أسود' : currentLang === 'en' ? 'Black' : 'Siyah', hex: '#111827' },
      { name: currentLang === 'ar' ? 'رمادي' : currentLang === 'en' ? 'Grey' : 'Gri', hex: '#9ca3af' },
      { name: currentLang === 'ar' ? 'أخضر' : currentLang === 'en' ? 'Green' : 'Yeşil', hex: '#166534' },
      { name: currentLang === 'ar' ? 'أزرق' : currentLang === 'en' ? 'Blue' : 'Mavi', hex: '#1d4ed8' },
      { name: currentLang === 'ar' ? 'أحمر' : currentLang === 'en' ? 'Red' : 'Kırmızı', hex: '#dc2626' }
    ];
    images = [`/products/2/8.jpeg`, `/products/2/9.jpeg`, `/products/2/1.png`, `/products/2/2.png`, `/products/2/3.png`, `/products/2/4.png`, `/products/2/5.png`, `/products/2/6.png`, `/products/2/7.png`];
  }
  else if (productId === 3) {
    productColors = [{ name: currentLang === 'ar' ? 'أنثراسيت' : 'Anthracite', hex: '#3b3e46' }, { name: currentLang === 'ar' ? 'رمادي' : 'Grey', hex: '#9ca3af' }, { name: currentLang === 'ar' ? 'كريمي' : 'Cream', hex: '#fef3c7' }, { name: currentLang === 'ar' ? 'وردي' : 'Pink', hex: '#fbcfe8' }, { name: currentLang === 'ar' ? 'برتقالي' : 'Orange', hex: '#f97316' }];
    images = [`/products/3/6.jpeg`, `/products/3/7.jpeg`, `/products/3/1.png`, `/products/3/2.png`, `/products/3/3.png`, `/products/3/4.png`, `/products/3/5.png`];
  }
  else if (productId === 4) {
    productColors = [{ name: currentLang === 'ar' ? 'أنثراسيت' : 'Anthracite', hex: '#3b3e46' }, { name: currentLang === 'ar' ? 'رمادي' : 'Grey', hex: '#9ca3af' }, { name: currentLang === 'ar' ? 'كريمي' : 'Cream', hex: '#fef3c7' }, { name: currentLang === 'ar' ? 'وردي' : 'Pink', hex: '#fbcfe8' }, { name: currentLang === 'ar' ? 'برتقالي' : 'Orange', hex: '#f97316' }];
    images = [`/products/4/5.jpeg`, `/products/4/1.png`, `/products/4/2.png`, `/products/4/3.png`, `/products/4/4.png`];
  }
  else if (productId === 5) {
    productColors = [{ name: currentLang === 'ar' ? 'أصفر ذهبي' : currentLang === 'en' ? 'Golden Yellow' : 'Altın Sarısı', hex: '#fbbf24' }];
    productSizes = ['S', 'M', 'L', 'XL', 'XXL'];
    images = [`/products/5/5.jpeg`, `/products/5/6.jpeg`, `/products/5/1.png`, `/products/5/2.png`, `/products/5/3.png`, `/products/5/4.png`];
  }
  else if (productId === 6) {
    productColors = [
      { name: currentLang === 'ar' ? 'رمادي' : currentLang === 'en' ? 'Grey' : 'Gri', hex: '#9ca3af' },
      { name: currentLang === 'ar' ? 'كحلي' : currentLang === 'en' ? 'Navy Blue' : 'Lacivert', hex: '#1e3a8a' },
      { name: currentLang === 'ar' ? 'وردي قطيفة' : currentLang === 'en' ? 'Plush Pink' : 'Peluş Pembe', hex: '#be185d' },
      { name: currentLang === 'ar' ? 'وردي' : currentLang === 'en' ? 'Pink' : 'Pembe', hex: '#fbcfe8' },
      { name: currentLang === 'ar' ? 'أصفر' : currentLang === 'en' ? 'Yellow' : 'Sarı', hex: '#fde047' },
      { name: currentLang === 'ar' ? 'شامبين' : currentLang === 'en' ? 'Champagne' : 'Şampanya', hex: '#f3e5ab' }
    ];
    images = [`/products/6/6.jpeg`, `/products/6/7.jpeg`, `/products/6/1.png`, `/products/6/2.png`, `/products/6/3.png`, `/products/6/4.png`, `/products/6/5.png`];
  }
  else if (productId === 7) {
    productColors = [];
    productSizes = [];
    images = [`/products/7/4.jpeg`, `/products/7/5.jpeg`, `/products/7/1.png`, `/products/7/2.png`, `/products/7/3.png`];
  }
  else if (productId === 8) {
    productColors = [
      { name: currentLang === 'ar' ? 'أنثراسيت' : currentLang === 'en' ? 'Anthracite' : 'Antrasit', hex: '#3b3e46' },
      { name: currentLang === 'ar' ? 'رمادي' : currentLang === 'en' ? 'Grey' : 'Gri', hex: '#9ca3af' },
      { name: currentLang === 'ar' ? 'وردي' : currentLang === 'en' ? 'Pink' : 'Pembe', hex: '#fbcfe8' },
      { name: currentLang === 'ar' ? 'بيج' : currentLang === 'en' ? 'Beige' : 'Bej', hex: '#f5f5dc' },
      { name: currentLang === 'ar' ? 'أزرق فاتح' : currentLang === 'en' ? 'Light Blue' : 'Açık Mavi', hex: '#7dd3fc' }
    ];
    productSizes = ['M', 'L', 'XL'];
    images = [
      `/products/8/6.jpeg`, 
      `/products/8/7.jpeg`, 
      `/products/8/1.png`, 
      `/products/8/2.png`, 
      `/products/8/3.png`, 
      `/products/8/4.png`,
      `/products/8/5.png`
    ];
  }
  else if (productId === 9) {
    productColors = [
      { name: currentLang === 'ar' ? 'رمادي' : currentLang === 'en' ? 'Grey' : 'Gri', hex: '#9ca3af' },
      { name: currentLang === 'ar' ? 'كحلي' : currentLang === 'en' ? 'Navy' : 'Lacivert', hex: '#1e3a8a' },
      { name: currentLang === 'ar' ? 'بيج' : currentLang === 'en' ? 'Beige' : 'Bej', hex: '#f5f5dc' },
      { name: currentLang === 'ar' ? 'وردي' : currentLang === 'en' ? 'Pink' : 'Pembe', hex: '#fbcfe8' },
      { name: currentLang === 'ar' ? 'أزرق فاتح' : currentLang === 'en' ? 'Light Blue' : 'Açık Mavi', hex: '#7dd3fc' },
      { name: currentLang === 'ar' ? 'تركواز' : currentLang === 'en' ? 'Turquoise' : 'Turkuaz', hex: '#2dd4bf' },
      { name: currentLang === 'ar' ? 'أخضر' : currentLang === 'en' ? 'Green' : 'Yeşil', hex: '#22c55e' },
      { name: currentLang === 'ar' ? 'برتقالي' : currentLang === 'en' ? 'Orange' : 'Turuncu', hex: '#f97316' }
    ];
    productSizes = ['40x60', '60x80'];
    images = [`/products/9/1.jpeg`, `/products/9/8.jpeg`, `/products/9/2.png`, `/products/9/3.png`, `/products/9/4.png`, `/products/9/5.png`, `/products/9/6.png`, `/products/9/7.png`];
  }
  else {
    images = [`/products/${productId}/a.png`, `/products/${productId}/b.png`];
  }

  const videoUrl = `/products/${productId}/video.mp4`;

  const nextImg = () => setCurrentImgIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  const prevImg = () => setCurrentImgIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  if (!product) return <div className="min-h-screen bg-neutral-950 flex items-center justify-center text-white">{t.product_not_found}</div>;

  return (
    <main className="min-h-screen bg-neutral-950 selection:bg-orange-500 selection:text-white pt-24 pb-12">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-2 text-sm text-neutral-500 mb-8 font-medium">
          <span className="hover:text-orange-500 cursor-pointer">{t.nav_catalog}</span>
          <span>/</span>
          <span className="hover:text-orange-500 cursor-pointer">{product.category}</span>
          <span>/</span>
          <span className="text-neutral-300">{product.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="relative aspect-square w-full bg-neutral-900/50 rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl group flex items-center justify-center p-4">
              <AnimatePresence mode='wait'>
                <motion.img
                  key={currentImgIdx}
                  src={images[currentImgIdx]}
                  initial={{ opacity: 0, scale: 1.02 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}
                  className="max-w-full max-h-full object-contain drop-shadow-2xl"
                  alt={product.title}
                />
              </AnimatePresence>
              
              <button onClick={prevImg} className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/60 backdrop-blur-md text-white rounded-full opacity-0 group-hover:opacity-100 transition-all hover:bg-orange-500"><ChevronLeft className="w-5 h-5"/></button>
              <button onClick={nextImg} className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/60 backdrop-blur-md text-white rounded-full opacity-0 group-hover:opacity-100 transition-all hover:bg-orange-500"><ChevronRight className="w-5 h-5"/></button>

              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-orange-400 font-bold tracking-widest text-xs uppercase shadow-lg">
                {product.category}
              </div>
            </div>

            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setCurrentImgIdx(idx)}
                  className={`flex-shrink-0 w-20 h-20 rounded-2xl overflow-hidden border-2 bg-neutral-900 p-1 transition-all ${currentImgIdx === idx ? 'border-orange-500 scale-105 shadow-[0_0_15px_rgba(249,115,22,0.4)]' : 'border-neutral-800 opacity-60 hover:opacity-100'}`}
                >
                  <img src={img} alt="" className="w-full h-full object-contain" />
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="relative aspect-square w-full bg-black rounded-3xl overflow-hidden border border-orange-500/30 shadow-[0_0_40px_rgba(249,115,22,0.15)] group flex items-center justify-center">
              <video src={videoUrl} autoPlay loop muted playsInline className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent pointer-events-none"></div>
              
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-orange-500/40 text-orange-300 text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5 text-orange-400 animate-pulse" />
                <span>UGC Interactive Video</span>
              </div>
            </div>

            <div className="bg-neutral-900/80 backdrop-blur-md border border-neutral-800 rounded-2xl p-4 flex items-center justify-around text-center">
              <div>
                <span className="block text-[10px] text-neutral-400 uppercase tracking-wider">SKU Code</span>
                <span className="text-white font-bold text-sm">PUG-{productId}00{productId}</span>
              </div>
              <div className="w-[1px] h-8 bg-neutral-800"></div>
              <div>
                <span className="block text-[10px] text-neutral-400 uppercase tracking-wider">Supply Status</span>
                <span className="text-green-400 font-bold text-sm">EXW Ready</span>
              </div>
              <div className="w-[1px] h-8 bg-neutral-800"></div>
              <div>
                <span className="block text-[10px] text-neutral-400 uppercase tracking-wider">Logistics</span>
                <span className="text-orange-400 font-bold text-sm">Full Containers</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-t border-white/10 pt-12">
          <div className="lg:col-span-7 flex flex-col">
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">{product.title}</h1>
            <p className="text-lg text-neutral-300 leading-relaxed mb-8">{product.description}</p>

            {productColors.length > 0 && (
              <div className="mb-6">
                <h3 className="text-white font-bold mb-4 flex items-center gap-2 text-sm uppercase tracking-wider text-orange-400">
                  {t.product_colors_title}
                </h3>
                <div className="flex flex-wrap gap-4">
                  {productColors.map((c, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-neutral-900 border border-neutral-800 px-4 py-2.5 rounded-2xl shadow-sm">
                      <div className="w-5 h-5 rounded-full border border-neutral-700 shadow-sm" style={{ backgroundColor: c.hex }}></div>
                      <span className="text-sm font-semibold text-neutral-200">{c.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {productSizes.length > 0 && (
              <div className="mb-8">
                <h3 className="text-white font-bold mb-4 flex items-center gap-2 text-sm uppercase tracking-wider text-orange-400">
                  {currentLang === 'ar' ? 'المقاسات المتاحة للإنتاج:' : currentLang === 'en' ? 'Available Sizes:' : 'Mevcut Bedenler:'}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {productSizes.map((s, idx) => (
                    <div key={idx} className="flex items-center justify-center min-w-[3.5rem] px-3 h-12 bg-neutral-900 border border-neutral-800 hover:border-orange-500/50 rounded-xl shadow-sm text-sm font-bold text-neutral-200 transition-colors cursor-pointer">
                      {s}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-5">
            <div className="bg-neutral-900 border border-orange-500/40 p-8 rounded-3xl relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/15 rounded-full blur-[90px] pointer-events-none"></div>
              <h3 className="text-2xl font-bold text-white mb-2">{t.product_cta_title}</h3>
              <p className="text-neutral-400 text-sm mb-8 leading-relaxed">{t.product_cta_desc}</p>
              
              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full py-4 px-8 rounded-2xl bg-gradient-to-r from-orange-600 to-orange-500 text-white font-black text-lg hover:shadow-[0_0_40px_rgba(249,115,22,0.4)] hover:scale-[1.02] transition-all duration-300"
              >
                {t.card_btn}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <LeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} productName={product.title} />
      <Footer />
    </main>
  );
}