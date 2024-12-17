import { Truck, Shield, Clock, Heart } from 'lucide-react';

export const features = [
  {
    icon: Truck,
    title: 'Free Shipping',
    description: 'On orders over $100',
  },
  {
    icon: Shield,
    title: 'Secure Payment',
    description: '100% secure payment',
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Dedicated support',
  },
  {
    icon: Heart,
    title: 'Money Back',
    description: '30-day guarantee',
  },
] as const;