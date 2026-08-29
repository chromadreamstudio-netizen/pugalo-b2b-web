'use client';
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'ar' | 'en' | 'tr';

const dictionary = {
  ar: {
    nav_catalog: 'كتالوج الجملة', nav_factory: 'عن المصنع', nav_shipping: 'الشحن والجمارك',
    hero_badge: 'الذراع التصديري الرسمي للشرق الأوسط', hero_title1: 'مستلزمات حيوانات أليفة', hero_title2: 'بمعايير أوروبية لأسواق الخليج',
    hero_desc: 'نوفر لك أفضل منتجات PUGALO بأسعار الجملة (EXW).', btn_catalog: 'تصفح كتالوج الجملة',
    catalog_title: 'الكتالوج المخصص للتصدير', catalog_desc: 'تصفح تشكيلتنا من المنتجات الأعلى ربحية للموزعين في الشرق الأوسط.',
    feat1_title: 'قدرة إنتاجية ضخمة', feat1_desc: 'تصنيع وتوريد حاويات كاملة بأسعار أرض المصنع (EXW).',
    feat2_title: 'معايير الجودة الأوروبية', feat2_desc: 'مواد خام فائقة الجودة تضمن لك أعلى هوامش الربح.',
    feat3_title: 'تجهيز لوجستي سريع', feat3_desc: 'تغليف احترافي للبالتات جاهز للتصدير والتخليص الجمركي.',
    card_btn: 'طلب تسعير الجملة', watch_video: 'شاهد عرض المنتج',
    footer_desc: 'البوابة الرسمية لتصدير مستلزمات الحيوانات الأليفة التركية. جودة عالمية، توريد مباشر.',
    footer_links: 'روابط سريعة', footer_contact: 'التواصل للموزعين',
    link_cat: 'طلب كتالوج 2026', link_sample: 'سياسة العينات', link_terms: 'شروط التصدير (EXW)',
    modal_title: 'طلب تسعير جملة', modal_product: 'المنتج:', modal_success: 'تم استلام طلبك بنجاح! سيتواصل معك قسم التصدير قريباً.',
    modal_company: 'اسم المتجر / الشركة', modal_company_ph: 'مثال: متجر أليف', modal_country: 'الدولة', modal_country_opt: 'اختر الدولة', 
    modal_ksa: 'المملكة العربية السعودية', modal_uae: 'الإمارات العربية المتحدة', modal_whatsapp: 'رقم الواتساب للتواصل', modal_submit: 'إرسال الطلب', modal_submitting: 'جاري الإرسال...',
    
    product_ready: 'جاهز للتصدير (EXW)',
    product_shipping_type: 'شحن حاويات وبالتات',
    product_colors_title: 'الخيارات المتاحة للإنتاج:',
    product_cta_title: 'تسعير الجملة للموزعين',
    product_cta_desc: 'احصل على قائمة أسعار التصدير الصافية من أرض المصنع (EXW) شاملة خيارات التعبئة.',
    product_not_found: 'المنتج غير موجود',

    products: [
      { id: 9, title: 'بساط التبريد والتدفئة (Thermo Mat)', category: '🔥 المنتج البطل', description: 'بساط ذكي 2 في 1 يوفر تبريداً في الصيف ودفئاً في الشتاء. الأفضل مبيعاً لأسواق الخليج بفضل النسيج المتين وسهل التنظيف.' },
      { id: 1, title: 'برج تخديش من طابقين 82 سم', category: 'أثاث قطط', description: 'مزود بنعناع بري وسطح مبطن للراحة، متاح بـ 3 ألوان.' },
      { id: 2, title: 'حقيبة ظهر فاخرة للحيوانات الأليفة', category: 'الأكثر طلباً', description: 'تصميم مريح مع تهوية ممتازة، متاح للتوريد بالحاويات.' },
      { id: 3, title: 'برج تخديش بمنصة وجه القطة', category: 'أثاث قطط', description: 'تصميم فريد مع منصة علوية على شكل وجه قطة، مصنوع من مواد صديقة للبيئة.' },
      { id: 4, title: 'عمود تخديش عملاق 90 سم', category: 'أثاث قطط', description: 'أنابيب سميكة مع نعناع بري مدمج لجذب القطط.' },
      { id: 5, title: 'سرير سوهو فائق النعومة XXL', category: 'مستلزمات نوم', description: 'حشوة ألياف عالية الكثافة لراحة تدوم طويلاً.' },
      { id: 6, title: 'سرير دفاية للقطط مخملي واسع', category: 'مستلزمات نوم شتوية', description: 'سرير دافئ يثبت بسهولة على الرادياتير، يوفر بيئة نوم مريحة وصحية للقطط في الشتاء.' },
      { id: 7, title: 'مزيل روائح الفضلات بالكربون النشط', category: 'عناية ونظافة', description: 'عبوة 420 جرام فعالة جداً في تحييد روائح فضلات القطط بفضل الكربون النشط عالي الامتصاص.' },
      { id: 8, title: 'سرير دائري مخملي (دونات)', category: 'مستلزمات نوم', description: 'سرير اقتصادي فائق النعومة، يوفر شعوراً بالأمان والدفء للحيوانات الأليفة بفضل تصميمه الدائري العميق.' }
    ]
  },
  en: {
    nav_catalog: 'Wholesale Catalog', nav_factory: 'About Factory', nav_shipping: 'Shipping & Customs',
    hero_badge: 'Official Export Arm for the Middle East', hero_title1: 'Premium Pet Supplies', hero_title2: 'European Standards for Gulf Markets',
    hero_desc: 'Get the best PUGALO products at EXW wholesale prices.', btn_catalog: 'Browse Wholesale Catalog',
    catalog_title: 'Exclusive Export Catalog', catalog_desc: 'Browse our highest-profit margin products for distributors.',
    feat1_title: 'Huge Production Capacity', feat1_desc: 'Manufacturing and supplying full containers at EXW prices.',
    feat2_title: 'European Quality Standards', feat2_desc: 'Premium raw materials ensuring the highest profit margins.',
    feat3_title: 'Fast Logistics Ready', feat3_desc: 'Professional pallet packaging ready for immediate export.',
    card_btn: 'Request Wholesale Price', watch_video: 'Watch Product Demo',
    footer_desc: 'The official export portal for premium Turkish pet supplies. Global quality, direct supply.',
    footer_links: 'Quick Links', footer_contact: 'Distributor Contact',
    link_cat: 'Request 2026 Catalog', link_sample: 'Sample Policy', link_terms: 'EXW Terms',
    modal_title: 'Request Wholesale Quote', modal_product: 'Product:', modal_success: 'Request received! Our team will contact you shortly.',
    modal_company: 'Company / Store Name', modal_company_ph: 'e.g., Pet Palace', modal_country: 'Country', modal_country_opt: 'Select Country', 
    modal_ksa: 'Saudi Arabia', modal_uae: 'United Arab Emirates', modal_whatsapp: 'WhatsApp Number', modal_submit: 'Submit Request', modal_submitting: 'Submitting...',
    
    product_ready: 'Ready for Export (EXW)',
    product_shipping_type: 'Container & Pallet Shipping',
    product_colors_title: 'Available Production Options:',
    product_cta_title: 'Wholesale Pricing for Distributors',
    product_cta_desc: 'Get net EXW factory export price lists including packaging options.',
    product_not_found: 'Product not found',

    products: [
      { id: 9, title: 'Thermo Mat 2-in-1 Cushion', category: '🔥 Hero Product', description: 'Smart 2-in-1 mat providing cooling in summer and warmth in winter. Best-seller for Gulf markets with durable, easy-to-clean fabric.' },
      { id: 1, title: '82cm Two-Tier Scratching Post', category: 'Cat Furniture', description: 'Infused with catnip and features a padded surface, available in 3 colors.' },
      { id: 2, title: 'Premium Pet Carrier Backpack', category: 'High Demand', description: 'Ergonomic design with excellent ventilation, ready for container export.' },
      { id: 3, title: 'Stepped Cat Faced Platform Post', category: 'Cat Furniture', description: 'Unique scratching post featuring a cat-faced top platform, made from eco-friendly materials.' },
      { id: 4, title: '90cm Giant Scratching Post', category: 'Cat Furniture', description: 'Thick tubes infused with catnip for maximum engagement.' },
      { id: 5, title: 'Soho Ultra Soft Pet Bed XXL', category: 'Sleeping Gear', description: 'High-density fiberfill for long-lasting comfort.' },
      { id: 6, title: 'Plush Cat Radiator Bed', category: 'Winter Sleeping Gear', description: 'Cozy radiator bed offering a comfortable and warm sleeping experience for cats during winter.' },
      { id: 7, title: 'Activated Carbon Odor Eliminator', category: 'Hygiene', description: '420g pack highly effective in neutralizing litter odors with high-absorbency activated carbon.' },
      { id: 8, title: 'Plush Round Pet Bed (Bagel)', category: 'Sleeping Gear', description: 'Economical ultra-soft bed providing a sense of security and warmth with its deep circular design.' }
    ]
  },
  tr: {
    nav_catalog: 'Toptan Katalog', nav_factory: 'Fabrika Hakkında', nav_shipping: 'Kargo ve Gümrük',
    hero_badge: 'Orta Doğu Resmi İhracat Kolu', hero_title1: 'Premium Evcil Hayvan Ürünleri', hero_title2: 'Körfez Pazarı İçin Avrupa Standartları',
    hero_desc: 'En iyi PUGALO ürünlerini EXW toptan fiyatlarıyla alın.', btn_catalog: 'Toptan Kataloğu İncele',
    catalog_title: 'Özel İhracat Kataloğu', catalog_desc: 'Orta Doğu distribütörleri için en yüksek kâr marjlı ürünlerimizi inceleyin.',
    feat1_title: 'Dev Üretim Kapasitesi', feat1_desc: 'EXW fiyatlarıyla tam konteyner üretimi ve tedariki.',
    feat2_title: 'Avrupa Kalite Standartları', feat2_desc: 'En yüksek kâr marjlarını sağlayan birinci sınıf hammaddeler.',
    feat3_title: 'Hızlı Lojistik Hazırlığı', feat3_desc: 'Hemen ihracata hazır profesyonel palet paketleme.',
    card_btn: 'Toptan Fiyat İste', watch_video: 'Ürün Videosunu İzle',
    footer_desc: 'Premium Türk evcil hayvan ürünleri için resmi ihracat portalı. Küresel kalite, doğrudan tedarik.',
    footer_links: 'Hızlı Bağlantılar', footer_contact: 'Distribütör İletişimi',
    link_cat: '2026 Kataloğu İste', link_sample: 'Örnek Politikası', link_terms: 'EXW Şartları',
    modal_title: 'Toptan Fiyat Teklifi İste', modal_product: 'Ürün:', modal_success: 'Talebiniz alındı! Ekibimiz yakında sizinle iletişime geçecek.',
    modal_company: 'Şirket / Mağaza Adı', modal_company_ph: 'Örn: Pet Shop', modal_country: 'Ülke', modal_country_opt: 'Ülke Seçin', 
    modal_ksa: 'Suudi Arabistan', modal_uae: 'Birleşik Arap Emirlikleri', modal_whatsapp: 'WhatsApp Numarası', modal_submit: 'Talebi Gönder', modal_submitting: 'Gönderiliyor...',
    
    product_ready: 'İhracata Hazır (EXW)',
    product_shipping_type: 'Konteyner ve Palet Sevkiyatı',
    product_colors_title: 'Mevcut Üretim Seçenekleri:',
    product_cta_title: 'Distribütörler İçin Toptan Fiyatlandırma',
    product_cta_desc: 'Ambalaj seçenekleri dahil net EXW fabrika ihracat fiyat listelerini alın.',
    product_not_found: 'Ürün bulunamadı',

    products: [
      { id: 9, title: 'Thermo Mat 2\'si 1 Arada Minder', category: '🔥 Şampiyon Ürün', description: 'Yazın serinlik, kışın sıcaklık sağlayan akıllı 2\'si 1 arada minder. Dayanıklı ve kolay temizlenebilir kumaşıyla Körfez pazarı için en çok satan.' },
      { id: 1, title: '82cm İki Katlı Tırmalama Sütunu', category: 'Kedi Mobilyası', description: 'Kedi nanesi ile zenginleştirilmiş ve yastıklı yüzeye sahip, 3 renk seçeneği.' },
      { id: 2, title: 'Premium Evcil Hayvan Taşıma Sırt Çantası', category: 'Çok Satan', description: 'Mükemmel havalandırmalı ergonomik tasarım, konteyner ihracatına hazır.' },
      { id: 3, title: 'Kedi Yüzlü Platform Tırmalama Sütunu', category: 'Kedi Mobilyası', description: 'Kedi yüzü şeklinde üst platforma sahip benzersiz tırmalama sütunu.' },
      { id: 4, title: '90cm Dev Tırmalama Sütunu', category: 'Kedi Mobilyası', description: 'Maksimum etkileşim için kedi nanesi ile zenginleştirilmiş kalın borular.' },
      { id: 5, title: 'Soho Ultra Yumuşak Yatak XXL', category: 'Uyku Ürünleri', description: 'Uzun süreli konfor için yüksek yoğunluklu elyaf dolgu.' },
      { id: 6, title: 'Peluş Kedi Kalorifer Yatağı', category: 'Kışlık Uyku Ürünleri', description: 'Kediler için kış aylarında sıcak ve rahat bir uyku deneyimi sunan kalorifer yatağı.' },
      { id: 7, title: 'Aktif Karbon Koku Giderici', category: 'Hijyen', description: 'Yüksek emici aktif karbon sayesinde kedi kumu kokularını nötralize etmede son derece etkili 420g paket.' },
      { id: 8, title: 'Peluş Yuvarlak Yatak (Simit)', category: 'Uyku Ürünleri', description: 'Derin dairesel tasarımıyla evcil hayvanlara güvenlik ve sıcaklık hissi veren ekonomik, ultra yumuşak yatak.' }
    ]
  }
};

const LanguageContext = createContext<any>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>('ar');
  const t = dictionary[lang];

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);