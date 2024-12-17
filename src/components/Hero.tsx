
const Hero = () => {
  return (
    <div className="relative bg-dark-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Discover Your Style,
              <span className="text-accent"> Define Your Space</span>
            </h1>
            <p className="mt-4 text-xl text-gray-300">
              Shop our curated collection of premium products designed to elevate your lifestyle.
            </p>
            <div className="mt-8">
              <a
                href="#products"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent hover:bg-white hover:text-accent transition-colors duration-200"
              >
                Shop Now
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <img
              src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&q=80&w=800"
              alt="Hero"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;