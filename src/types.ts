/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface BenefitItem {
  id: string;
  text: string;
  iconType: "purple" | "orange" | "pink" | "blue" | "green";
}

export interface PlanFeature {
  text: string;
  available: boolean;
}

export interface PricingPlan {
  id: string;
  badge?: string;
  title: string;
  subtitle: string;
  description: string;
  priceOriginal: number;
  priceCurrent: number;
  features: PlanFeature[];
  buttonText: string;
  isPopular: boolean;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  text: string;
  avatarUrl: string;
}
