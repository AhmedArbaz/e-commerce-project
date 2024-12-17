import { Truck, Shield, Clock, Heart } from 'lucide-react';

const features = [
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
];

const About = () => {
  return (
    <section id="about" className="py-16 bg-dark-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Why Choose Us</h2>
          <p className="mt-4 text-xl text-gray-300">
            We're committed to providing the best shopping experience
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-dark rounded-lg"
            >
              <feature.icon className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
              <p className="mt-2 text-gray-300 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;