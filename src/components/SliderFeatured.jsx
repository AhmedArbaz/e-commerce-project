import FeaturedProducts from './FeaturedProducts';
import Slider from './Slider';


const SliderFeatured = () => {
  const products = [
    {
      id: 1,
      name: 'Modern Lounge Chair',
      price: 299.99,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=400',
    },
    {
      id: 2,
      name: 'Minimalist Desk Lamp',
      price: 89.99,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=400',
    },
    {
      id: 3,
      name: 'Ceramic Vase Set',
      price: 149.99,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&q=80&w=400',
    },
  ];

  return (
    <div>
      <FeaturedProducts />
      <Slider items={products} />
    </div>
  );
};

export default SliderFeatured;
