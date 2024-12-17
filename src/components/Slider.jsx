import { useState } from 'react';

const Slider = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative bg-dark-light rounded-lg overflow-hidden shadow-lg mt-12">
      <div className="relative h-64">
        {/* Slider Content */}
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div key={index} className="flex-shrink-0 w-full h-full">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
        {/* Controls */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-accent text-white p-2 rounded-full hover:bg-accent-dark transition-colors"
        >
          &#8249; {/* Left arrow */}
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-accent text-white p-2 rounded-full hover:bg-accent-dark transition-colors"
        >
          &#8250; {/* Right arrow */}
        </button>
      </div>
      {/* Dots */}
      <div className="flex justify-center mt-4">
        {items.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 mx-1 rounded-full ${
              index === currentIndex ? 'bg-accent' : 'bg-gray-400'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
