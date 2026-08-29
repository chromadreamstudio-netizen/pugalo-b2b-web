'use client';
import { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { X, CheckCircle2, Loader2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
}

export default function LeadModal({ isOpen, onClose, productName }: LeadModalProps) {
  const { t, lang } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    companyName: '',
    country: '',
    whatsappNumber: ''
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const leadPayload = {
        company_name: formData.companyName,
        country: formData.country,
        whatsapp_number: formData.whatsappNumber,
        requested_product: productName,
        status: 'new'
      };

      // 1. حفظ البيانات في قاعدة البيانات (الخطوة الأهم التي بناءً عليها يتحدد النجاح)
      const { error } = await supabase
        .from('b2b_leads')
        .insert([leadPayload]);

      // إذا فشل الحفظ في قاعدة البيانات، أوقف العملية هنا
      if (error) throw error; 

      // 2. إرسال الإشعار لـ n8n في الخلفية بصمت (داخل try/catch منفصلة)
      // حتى لو فشل الإشعار بسبب Vercel أو المتصفح، لن يتأثر العميل
      try {
        await fetch('/api/submit-lead', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ record: leadPayload })
        });
      } catch (notifyError) {
        console.warn('تم حفظ الطلب، ولكن فشل إرسال الإشعار:', notifyError);
      }

      // 3. إظهار رسالة النجاح للعميل فوراً لأن بياناته بأمان في Supabase
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({ companyName: '', country: '', whatsappNumber: '' });
        onClose();
      }, 3000);

    } catch (error: any) {
      console.error('Error submitting lead:', error);
      alert('تفاصيل الخطأ من قاعدة البيانات: ' + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-md bg-neutral-900 border border-neutral-800 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden">
        
        {/* زر الإغلاق */}
        {!isSuccess && (
          <button onClick={onClose} className="absolute top-4 right-4 p-2 bg-neutral-800 text-neutral-400 hover:text-white rounded-full transition-colors">
            <X className="w-5 h-5" />
          </button>
        )}

        {isSuccess ? (
          <div className="text-center py-8">
            <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4 animate-bounce" />
            <h3 className="text-xl font-bold text-white mb-2">{t.modal_success || 'تم الاستلام بنجاح!'}</h3>
            <p className="text-neutral-400 text-sm">سيتواصل معك فريق المبيعات قريباً على الواتساب.</p>
          </div>
        ) : (
          <>
            <h3 className="text-2xl font-bold text-white mb-1">{t.modal_title || 'طلب تسعير جملة'}</h3>
            <p className="text-sm text-orange-400 mb-6 font-medium">{productName}</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2">
                  {t.modal_company || 'اسم الشركة'}
                </label>
                <input 
                  type="text" 
                  required
                  value={formData.companyName}
                  onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
                  placeholder="Pet Shop Store"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2">
                  {t.modal_country || 'الدولة'}
                </label>
                <select 
                  required
                  value={formData.country}
                  onChange={(e) => setFormData({...formData, country: e.target.value})}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors appearance-none"
                >
                  <option value="" disabled>اختر الدولة</option>
                  <option value="KSA">السعودية</option>
                  <option value="UAE">الإمارات</option>
                  <option value="KWT">الكويت</option>
                  <option value="QAT">قطر</option>
                  <option value="OMN">عُمان</option>
                  <option value="BHR">البحرين</option>
                  <option value="OTHER">أخرى</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2">
                  {t.modal_whatsapp || 'رقم الواتساب'}
                </label>
                <input 
                  type="tel" 
                  required
                  value={formData.whatsappNumber}
                  onChange={(e) => setFormData({...formData, whatsappNumber: e.target.value})}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors text-left"
                  placeholder="+966 5X XXX XXXX"
                  dir="ltr"
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full mt-6 flex items-center justify-center gap-2 py-4 rounded-xl bg-orange-600 text-white font-bold hover:bg-orange-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <><Loader2 className="w-5 h-5 animate-spin" /> {t.modal_submitting || 'جاري الإرسال...'}</>
                ) : (
                  t.modal_submit || 'إرسال الطلب'
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}