/**
 * شريط مزايا الشواء والخدمة السريعة أسفل قسم العرض السينمائي،
 * مرتبط مباشرة بإعدادات المطعم الحية (الوقت المتوقع، التوصيل المجاني، ونقاط الولاء).
 */
import React from 'react';
import { Award, Clock, Flame, Truck } from 'lucide-react';
import { formatPrice } from '../config/restaurant';
import { useSite } from '../context/SiteContext';

export const SignatureCraftStrip: React.FC = () => {
  const { siteConfig } = useSite();
  const { restaurant } = siteConfig;

  const pillars = [
    {
      icon: Flame,
      title: 'شواء الصخر البركاني',
      detail: 'تحضير يومي طازج على نار هادئة متزنة',
    },
    {
      icon: Clock,
      title: 'توصيل سريع ودقيق',
      detail: `الزمن المتوقع ${restaurant.estimatedDeliveryMinutes}`,
    },
    {
      icon: Truck,
      title:
        restaurant.freeDeliveryThreshold && restaurant.freeDeliveryThreshold > 0
          ? 'توصيل مجاني'
          : 'توصيل لباب البيت',
      detail:
        restaurant.freeDeliveryThreshold && restaurant.freeDeliveryThreshold > 0
          ? `للطلبات بقيمة ${formatPrice(restaurant.freeDeliveryThreshold, restaurant.currency)} فأكثر`
          : `برسوم توصيل ${formatPrice(restaurant.deliveryFee, restaurant.currency)}`,
    },
    {
      icon: Award,
      title: 'نقاط ولاء zoldix',
      detail: `${restaurant.loyaltyPointsPerUnit} نقاط مقابل كل 1 ${restaurant.currency}`,
    },
  ];

  return (
    <section
      aria-label="مزايا الخدمة والجودة"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2"
    >
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {pillars.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-hairline)] p-3.5 sm:p-4 flex items-start gap-3"
            >
              <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[var(--accent-gold-soft)] text-[var(--accent-gold)] flex items-center justify-center shrink-0">
                <Icon className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <h3 className="font-display font-extrabold text-xs sm:text-sm text-[var(--text-primary)] leading-snug">
                  {item.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-[var(--text-secondary)] mt-0.5 leading-relaxed tabular-nums">
                  {item.detail}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
