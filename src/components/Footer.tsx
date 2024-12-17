import { Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark-light text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-300">
              We're dedicated to bringing you the finest selection of premium products for your lifestyle.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-accent">Home</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-accent">Products</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-accent">About</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-accent">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>123 Store Street</li>
              <li>City, State 12345</li>
              <li>Phone: (123) 456-7890</li>
              <li>Email: info@store.com</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-l-md bg-dark border-dark-lighter text-white placeholder-gray-400 focus:outline-none focus:border-accent"
              />
              <button className="bg-accent px-4 py-2 rounded-r-md hover:bg-accent-dark">
                <Mail className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-dark text-center text-gray-300">
          <p>&copy; 2024 Your Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;