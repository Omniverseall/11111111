import { PricingPlan } from './types';

export const pricingModel = {
  formatPrice: (price: number, currency: string = 'RUB'): string => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: currency,
    }).format(price);
  },

  calculateYearlyDiscount: (monthlyPrice: number, yearlyPrice: number): number => {
    const yearlyMonthly = yearlyPrice / 12;
    return Math.round(((monthlyPrice - yearlyMonthly) / monthlyPrice) * 100);
  },

  isPopular: (plan: PricingPlan): boolean => {
    return plan.isPopular || false;
  }
};
