import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <div className="flex flex-col items-center p-6 bg-dark rounded-lg transform hover:scale-105 transition-transform duration-300">
      <div className="p-3 bg-dark-lighter rounded-full mb-4">
        <Icon className="h-8 w-8 text-accent" />
      </div>
      <h3 className="text-lg font-semibold text-white text-center mb-2">{title}</h3>
      <p className="text-gray-300 text-center">{description}</p>
    </div>
  );
};

export default FeatureCard;