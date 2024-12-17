import FourPictureCard from "./FourPictureCard";

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


const CardsWithFourPictures = () => {
    const cards = [];
  
    // Split products into groups of 4 for each card
    for (let i = 0; i < products.length; i += 4) {
      cards.push(products.slice(i, i + 4));
    }
  
    return (
      <section id="products" className="bg-dark py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Product Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map((group, index) => (
              <FourPictureCard key={index} products={group} />
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default CardsWithFourPictures;
  