"use client";
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useInView } from '@/shared/lib/hooks/useInView';
import { useLanguage } from '@/app/providers';
import { TranslationKey } from '@/shared/config/translations';
import { Check } from 'lucide-react';

interface Tariff {
  nameKey: TranslationKey;
  usersKey: TranslationKey;
  priceKey: TranslationKey;
  features: TranslationKey[];
}

const tariffs: Tariff[] = [
  { nameKey: 'tariffStart', usersKey: 'tariffUsers5', priceKey: 'tariffPriceStart', features: ['pricingFeatureUsers5', 'pricingFeatureBasic', 'pricingFeatureEmailSupport']},
  { nameKey: 'tariffTeam', usersKey: 'tariffUsers20', priceKey: 'tariffPriceTeam', features: ['pricingFeatureUsers20', 'pricingFeatureAdvanced', 'pricingFeaturePrioritySupport', 'pricingFeatureCustom']},
  { nameKey: 'tariffPro', usersKey: 'tariffUsers50', priceKey: 'tariffPricePro', features: ['pricingFeatureUsers50', 'pricingFeatureAll', 'pricingFeature247Support']},
  { nameKey: 'tariffEnterprise', usersKey: 'tariffUsers100', priceKey: 'tariffPriceEnterprise', features: ['pricingFeatureUsers100', 'pricingFeatureAll', 'pricingFeaturePersonalManager']},
  { nameKey: 'tariffCorporate', usersKey: 'tariffUsers100plus', priceKey: 'tariffPriceCorporate', features: ['pricingFeatureUsers100plus', 'pricingFeatureCustom', 'pricingFeatureVipSupport', 'pricingFeatureAll']},
];

interface PricingPlansProps {
  onOrderClick?: () => void;
}

export const PricingPlans: React.FC<PricingPlansProps> = ({ onOrderClick }) => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.05, once: true });

  return (
    <section id="pricing-section" ref={sectionRef} className="section">
      <div className="container">
        <div className={`text-center max-w-3xl mx-auto mb-20 ${isInView ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="mb-6">{t('pricingTitle')}</h2>
          <p className="text-lg text-themed-muted">{t('pricingSubtitle')}</p>
        </div>
        <div className={`${isInView ? 'animate-fade-in' : 'opacity-0'}`}>
          <Swiper
            spaceBetween={36}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Navigation, Pagination]}
            className="pb-16"
          >
            {tariffs.map((tariff) => (
              <SwiperSlide key={tariff.nameKey} className="h-auto flex">
                <div className="tech-card w-full flex flex-col min-h-[560px]">
                  <div className="text-center">
                    <h3 className="text-2xl font-semibold mb-3 text-themed-foreground">{t(tariff.nameKey)}</h3>
                    <p className={`font-bold mb-3 ${tariff.priceKey === 'tariffPriceCorporate' ? 'text-4xl' : 'text-5xl'}`}>
                      {t(tariff.priceKey)}
                    </p>
                    <p className="text-themed-muted mb-8">{t(tariff.usersKey)} {t('activeUsers')}</p>
                  </div>
                  <ul className="mb-10 space-y-4 text-themed-muted flex-1">
                    {tariff.features.map((featureKey) => (
                      <li key={featureKey} className="flex items-start gap-3">
                        <Check className="w-6 h-6 text-tech-cyan mt-0.5 flex-shrink-0" />
                        <span className="text-base">{t(featureKey)}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-4">
                    <button
                      className="w-full btn btn-primary py-3 text-lg"
                      onClick={onOrderClick}
                    >
                      {t('pricingOrderBtn')}
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};