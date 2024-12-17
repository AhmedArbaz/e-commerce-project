  
const products = [
    {
      id: 1,
      name: 'Modern Lounge Chair',
      image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=400',
    },
    {
      id: 2,
      name: 'Minimalist Desk Lamp',
      image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=400',
    },
    {
      id: 3,
      name: 'Ceramic Vase Set',
      image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&q=80&w=400',
    },
    {
      id: 4,
      name: 'Wooden Coffee Table',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=400',
    },
    {
      id: 5,
      name: 'Stylish Armchair',
      image: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&q=80&w=400',
    },
    {
      id: 6,
      name: 'Decorative Rug',
      image: 'https://images.unsplash.com/photo-1505691723518-36a1b38f6ebf?auto=format&fit=crop&q=80&w=400',
    },
    {
      id: 7,
      name: 'Wall Art',
      image: 'https://images.unsplash.com/photo-1535294021407-4c0f9ab69dfb?auto=format&fit=crop&q=80&w=400',
    },
    {
      id: 8,
      name: 'Pendant Lights',
      image: 'https://images.unsplash.com/photo-1490623970972-ae8bb3da443e?auto=format&fit=crop&q=80&w=400',
    },
  ];

const FourPictureCard = () => {
    return (
      <div className="bg-dark-light rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 p-4">
        <h3 className="text-lg font-bold text-white mb-4">Product Highlights</h3>
        <div className="grid grid-cols-2 gap-2">
          {products.slice(0, 4).map((product, index) => (
            <img
              key={index}
              src={product.image}
              alt={product.name}
              className="w-full h-24 object-cover rounded-md"
            />
          ))}
        </div>
        <div className="mt-4">
          <button className="w-full bg-accent text-white py-2 px-4 rounded-md hover:bg-accent-dark transition-colors duration-200">
            View More
          </button>
        </div>
      </div>
    );
  };
  
  export default FourPictureCard;
  