'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { PlayCircle, Image as ImageIcon, ChevronRight, ChevronLeft } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from './LanguageContext';

interface ProductProps {
  id: number;
  title: string;
  category: string;
  description: string;
  images: string[];
  videoUrl?: string;
  colors?: { name: string, hex: string }[];
  sizes?: string[]; // إضافة دعم المقاسات
}

export default function ProductCard({ id, title, category, description, images, videoUrl, colors, sizes }: ProductProps) {
  const [currentImgIdx, setCurrentImgIdx] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const { t } = useLanguage();

  const nextImg = (e: React.MouseEvent) => {
    e.preventDefault(); e.stopPropagation();
    setCurrentImgIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  const prevImg = (e: React.MouseEvent) => {
    e.preventDefault(); e.stopPropagation();
    setCurrentImgIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <Link href={`/products/${id}`} className="block h-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -5 }}
        className="group relative bg-neutral-900 border border-neutral-800 rounded-3xl p-4 overflow-hidden transition-all duration-500 hover:border-orange-500/50 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)] flex flex-col h-full cursor-pointer"
      >
        <div className="relative h-72 w-full rounded-2xl overflow-hidden bg-neutral-950 mb-6 group/media border border-white/5">
          {showVideo && videoUrl ? (
            <div className="absolute inset-0 bg-black">
               <video src={videoUrl} autoPlay loop muted playsInline className="w-full h-full object-contain" />
            </div>
          ) : (
            <>
              <AnimatePresence mode='wait'>
                <motion.img
                  key={currentImgIdx}
                  src={images[currentImgIdx]}
                  initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
                  className="w-full h-full object-contain opacity-90 group-hover/media:opacity-100 transition-opacity bg-white/5"
                  alt={title}
                />
              </AnimatePresence>
              <button onClick={prevImg} className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full opacity-0 group-hover/media:opacity-100 transition-opacity backdrop-blur-sm"><ChevronLeft className="w-4 h-4"/></button>
              <button onClick={nextImg} className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full opacity-0 group-hover/media:opacity-100 transition-opacity backdrop-blur-sm"><ChevronRight className="w-4 h-4"/></button>
            </>
          )}
          <div className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-xs text-orange-400 font-semibold tracking-wider shadow-lg">
            {category}
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2 bg-black/60 backdrop-blur-md p-1 rounded-full border border-white/10" onClick={(e) => e.preventDefault()}>
             <button onClick={(e) => { e.preventDefault(); setShowVideo(false); }} className={`p-2 rounded-full transition-colors ${!showVideo ? 'bg-orange-500 text-white' : 'text-neutral-400 hover:text-white'}`}><ImageIcon className="w-4 h-4" /></button>
             <button onClick={(e) => { e.preventDefault(); setShowVideo(true); }} className={`p-2 rounded-full transition-colors ${showVideo ? 'bg-orange-500 text-white' : 'text-neutral-400 hover:text-white'}`}><PlayCircle className="w-4 h-4" /></button>
          </div>
        </div>

        <div className="relative z-20 px-2 flex flex-col flex-grow">
          <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">{title}</h3>
          <p className="text-sm text-neutral-400 mb-4 flex-grow line-clamp-2">{description}</p>

          {/* عرض المقاسات إذا توفرت */}
          {sizes && sizes.length > 0 && (
            <div className="mb-4">
              <div className="flex gap-2 flex-wrap">
                {sizes.map((s, idx) => (
                  <span key={idx} className="text-[10px] font-bold bg-neutral-800 text-neutral-300 px-2 py-1 rounded-md border border-neutral-700 uppercase tracking-wider">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="w-full mt-auto flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-orange-600 to-orange-500 text-white font-bold hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all duration-300">
            <span>عرض التفاصيل</span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}