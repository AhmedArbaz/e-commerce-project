import { Search, ShoppingCart, Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-dark-light shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button className="sm:hidden p-2">
              <Menu className="h-6 w-6 text-accent" />
            </button>
            <div className="text-2xl font-bold text-accent">shopify</div>
          </div>

          <nav className="hidden sm:flex space-x-8">
            <a href="#" className="text-white hover:text-accent">Home</a>
            <a href="#products" className="text-white hover:text-accent">Products</a>
            <a href="#about" className="text-white hover:text-accent">About</a>
            <a href="#contact" className="text-white hover:text-accent">Contact</a>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center bg-dark-lighter rounded-full px-4 py-2">
              <Search className="h-5 w-5 text-accent" />
              <input
                type="text"
                placeholder="Search products..."
                className="bg-transparent border-none focus:outline-none ml-2 w-40 text-white placeholder-gray-400"
              />
            </div>
            <button className="relative p-2">
              <ShoppingCart className="h-6 w-6 text-accent" />
              <span className="absolute top-0 right-0 bg-primary text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;