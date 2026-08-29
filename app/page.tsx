'use client';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import ProductCard from '@/components/ProductCard';
import Footer from '@/components/Footer';
import { useLanguage } from '@/components/LanguageContext';

export default function Home() {
  const { t, lang } = useLanguage();

  const currentLang = (lang as 'ar' | 'en' | 'tr') || 'ar';

  const productsData = t.products.map((prod: any) => {
    let productColors = [];
    let productImages = [];
    let productSizes = [] as string[];

    if (prod.id === 1) {
      productColors = [{ name: currentLang === 'ar' ? 'أنثراسيت' : 'Anthracite', hex: '#3b3e46' }, { name: currentLang === 'ar' ? 'رمادي' : 'Grey', hex: '#9ca3af' }, { name: currentLang === 'ar' ? 'كريمي' : 'Cream', hex: '#fef3c7' }];
      productImages = [`/products/1/5.jpeg`, `/products/1/6.jpeg`, `/products/1/7.jpeg`, `/products/1/1.PNG`, `/products/1/2.jpg`, `/products/1/3.PNG`, `/products/1/4.PNG`];
    } 
    else if (prod.id === 2) {
      productColors = [
        { name: currentLang === 'ar' ? 'أسود' : currentLang === 'en' ? 'Black' : 'Siyah', hex: '#111827' },
        { name: currentLang === 'ar' ? 'رمادي' : currentLang === 'en' ? 'Grey' : 'Gri', hex: '#9ca3af' },
        { name: currentLang === 'ar' ? 'أخضر' : currentLang === 'en' ? 'Green' : 'Yeşil', hex: '#166534' },
        { name: currentLang === 'ar' ? 'أزرق' : currentLang === 'en' ? 'Blue' : 'Mavi', hex: '#1d4ed8' },
        { name: currentLang === 'ar' ? 'أحمر' : currentLang === 'en' ? 'Red' : 'Kırmızı', hex: '#dc2626' }
      ];
      productImages = [`/products/2/8.jpeg`, `/products/2/9.jpeg`, `/products/2/1.png`, `/products/2/2.png`, `/products/2/3.png`, `/products/2/4.png`, `/products/2/5.png`, `/products/2/6.png`, `/products/2/7.png`];
    }
    else if (prod.id === 3) {
      productColors = [{ name: currentLang === 'ar' ? 'أنثراسيت' : 'Anthracite', hex: '#3b3e46' }, { name: currentLang === 'ar' ? 'رمادي' : 'Grey', hex: '#9ca3af' }, { name: currentLang === 'ar' ? 'كريمي' : 'Cream', hex: '#fef3c7' }, { name: currentLang === 'ar' ? 'وردي' : 'Pink', hex: '#fbcfe8' }, { name: currentLang === 'ar' ? 'برتقالي' : 'Orange', hex: '#f97316' }];
      productImages = [`/products/3/6.jpeg`, `/products/3/7.jpeg`, `/products/3/1.png`, `/products/3/2.png`, `/products/3/3.png`, `/products/3/4.png`, `/products/3/5.png`];
    }
    else if (prod.id === 4) {
      productColors = [{ name: currentLang === 'ar' ? 'أنثراسيت' : 'Anthracite', hex: '#3b3e46' }, { name: currentLang === 'ar' ? 'رمادي' : 'Grey', hex: '#9ca3af' }, { name: currentLang === 'ar' ? 'كريمي' : 'Cream', hex: '#fef3c7' }, { name: currentLang === 'ar' ? 'وردي' : 'Pink', hex: '#fbcfe8' }, { name: currentLang === 'ar' ? 'برتقالي' : 'Orange', hex: '#f97316' }];
      productImages = [`/products/4/5.jpeg`, `/products/4/1.png`, `/products/4/2.png`, `/products/4/3.png`, `/products/4/4.png`];
    }
    else if (prod.id === 5) {
      productColors = [{ name: currentLang === 'ar' ? 'أصفر ذهبي' : currentLang === 'en' ? 'Golden Yellow' : 'Altın Sarısı', hex: '#fbbf24' }];
      productSizes = ['S', 'M', 'L', 'XL', 'XXL'];
      productImages = [`/products/5/5.jpeg`, `/products/5/6.jpeg`, `/products/5/1.png`, `/products/5/2.png`, `/products/5/3.png`, `/products/5/4.png`];
    }
    else if (prod.id === 6) {
      productColors = [
        { name: currentLang === 'ar' ? 'رمادي' : currentLang === 'en' ? 'Grey' : 'Gri', hex: '#9ca3af' },
        { name: currentLang === 'ar' ? 'كحلي' : currentLang === 'en' ? 'Navy Blue' : 'Lacivert', hex: '#1e3a8a' },
        { name: currentLang === 'ar' ? 'وردي قطيفة' : currentLang === 'en' ? 'Plush Pink' : 'Peluş Pembe', hex: '#be185d' },
        { name: currentLang === 'ar' ? 'وردي' : currentLang === 'en' ? 'Pink' : 'Pembe', hex: '#fbcfe8' },
        { name: currentLang === 'ar' ? 'أصفر' : currentLang === 'en' ? 'Yellow' : 'Sarı', hex: '#fde047' },
        { name: currentLang === 'ar' ? 'شامبين' : currentLang === 'en' ? 'Champagne' : 'Şampanya', hex: '#f3e5ab' }
      ];
      productImages = [`/products/6/6.jpeg`, `/products/6/7.jpeg`, `/products/6/1.png`, `/products/6/2.png`, `/products/6/3.png`, `/products/6/4.png`, `/products/6/5.png`];
    }
    else if (prod.id === 7) {
      productColors = [];
      productSizes = [];
      productImages = [`/products/7/4.jpeg`, `/products/7/5.jpeg`, `/products/7/1.png`, `/products/7/2.png`, `/products/7/3.png`];
    }
    else if (prod.id === 8) {
      // سرير دونات (تم تحديث المسارات لتطابق مجلدك)
      productColors = [
        { name: currentLang === 'ar' ? 'أنثراسيت' : currentLang === 'en' ? 'Anthracite' : 'Antrasit', hex: '#3b3e46' },
        { name: currentLang === 'ar' ? 'رمادي' : currentLang === 'en' ? 'Grey' : 'Gri', hex: '#9ca3af' },
        { name: currentLang === 'ar' ? 'وردي' : currentLang === 'en' ? 'Pink' : 'Pembe', hex: '#fbcfe8' },
        { name: currentLang === 'ar' ? 'بيج' : currentLang === 'en' ? 'Beige' : 'Bej', hex: '#f5f5dc' },
        { name: currentLang === 'ar' ? 'أزرق فاتح' : currentLang === 'en' ? 'Light Blue' : 'Açık Mavi', hex: '#7dd3fc' }
      ];
      productSizes = ['M', 'L', 'XL'];
      productImages = [
        `/products/8/6.jpeg`, 
        `/products/8/7.jpeg`, 
        `/products/8/1.png`, 
        `/products/8/2.png`, 
        `/products/8/3.png`, 
        `/products/8/4.png`,
        `/products/8/5.png`
      ];
    }
    else if (prod.id === 9) {
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
      productImages = [`/products/9/1.jpeg`, `/products/9/8.jpeg`, `/products/9/2.png`, `/products/9/3.png`, `/products/9/4.png`, `/products/9/5.png`, `/products/9/6.png`, `/products/9/7.png`];
    }
    else {
      productImages = [`/products/${prod.id}/a.png`, `/products/${prod.id}/b.png`];
    }

    return {
      ...prod,
      images: productImages,
      videoUrl: `/products/${prod.id}/video.mp4`,
      colors: productColors,
      sizes: productSizes
    };
  });

  return (
    <main className="min-h-screen bg-neutral-950 selection:bg-orange-500 selection:text-white">
      <Header />
      <Hero />
      <Features />
      
      <section id="catalog" className="py-24 px-4 max-w-7xl mx-auto relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{t.catalog_title}</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">{t.catalog_desc}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productsData.map((product: any) => (
            <ProductCard 
              key={product.id}
              id={product.id}
              title={product.title}
              category={product.category}
              description={product.description}
              images={product.images}
              videoUrl={product.videoUrl}
              colors={product.colors}
              sizes={product.sizes}
            />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}