export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  currency: string;
  period: 'month' | 'year';
  features: PricingFeature[];
  isPopular?: boolean;
}

export interface PricingFeature {
  id: string;
  name: string;
  included: boolean;
  limit?: number;
}
