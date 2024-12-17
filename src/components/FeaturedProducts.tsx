import { Star } from 'lucide-react';


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
  {
    id: 3,
    name: 'Ceramic Vase Set',
    price: 149.99,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 3,
    name: 'Ceramic Vase Set',
    price: 149.99,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 3,
    name: 'Ceramic Vase Set',
    price: 149.99,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&q=80&w=400',
  },
];

const FeaturedProducts = () => {
  return (
    <section id="products" className="bg-dark py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-dark-light rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-base font-semibold text-white">{product.name}</h3>
                <div className="flex items-center mt-2">
                  <Star className="h-4 w-4 text-accent fill-current" />
                  <span className="ml-1 text-sm text-gray-300">{product.rating}</span>
                </div>
                <p className="mt-2 text-lg font-bold text-primary-light">${product.price}</p>
                <button className="mt-4 w-full bg-accent text-white py-2 px-4 rounded-md hover:bg-accent-dark transition-colors duration-200">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
