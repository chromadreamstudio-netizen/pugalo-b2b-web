'use client';
import { Factory, ShieldCheck, Truck } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export default function Features() {
  const { t } = useLanguage();

  const features = [
    { icon: <Factory className="w-8 h-8 text-orange-500" />, title: t.feat1_title, desc: t.feat1_desc },
    { icon: <ShieldCheck className="w-8 h-8 text-orange-500" />, title: t.feat2_title, desc: t.feat2_desc },
    { icon: <Truck className="w-8 h-8 text-orange-500" />, title: t.feat3_title, desc: t.feat3_desc }
  ];

  return (
    <section id="factory" className="py-20 bg-neutral-900 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((item, idx) => (
          <div key={idx} className="bg-neutral-950 p-8 rounded-3xl border border-neutral-800 hover:border-orange-500/30 transition-colors">
            <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-6">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
            <p className="text-neutral-400 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}