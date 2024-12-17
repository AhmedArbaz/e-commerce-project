import React from 'react';
import { Mail } from 'lucide-react';

const NewsletterForm = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
      <form onSubmit={(e) => e.preventDefault()} className="flex">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-2 rounded-l-md bg-dark border border-dark-lighter text-white placeholder-gray-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
        />
        <button 
          type="submit" 
          className="bg-accent px-4 py-2 rounded-r-md hover:bg-accent-dark transition-colors duration-200 flex items-center justify-center"
        >
          <Mail className="h-5 w-5" />
        </button>
      </form>
      <p className="mt-2 text-sm text-gray-400">
        Subscribe to get updates about new products and special offers
      </p>
    </div>
  );
};

export default NewsletterForm;