import React from 'react';
import AboutSection from './AboutSection';
import QuickLinks from './QuickLinks';
import ContactInfo from './ContactInfo';
import NewsletterForm from './NewsletterForm';

const Footer = () => {
  return (
    <footer className="bg-dark-light text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <AboutSection />
          <QuickLinks />
          <ContactInfo />
          <NewsletterForm />
        </div>
        
        <div className="mt-8 pt-8 border-t border-dark-lighter text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Your Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;