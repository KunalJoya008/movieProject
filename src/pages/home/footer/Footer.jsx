// Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto">
        <div className="flex  items-center">
          <nav className="space-x-4 text-end">
            <a href="/" className="text-sm hover:text-gray-300">Home</a>
            <a href="/#" className="text-sm hover:text-gray-300">Movies</a>
            <a href="/#" className="text-sm hover:text-gray-300">About Us</a>
            <a href="/#" className="text-sm hover:text-gray-300">Contact Us</a>
          </nav>
        </div>
        <div className="mt-4 text-end">
          <p className="text-sm">Know about your favorite movies</p>
          <div className="flex space-x-4 mt-2 text-end">
            <a href="#" className="text-sm hover:text-gray-300">Facebook</a>
            <a href="#" className="text-sm hover:text-gray-300">Twitter</a>
            <a href="#" className="text-sm hover:text-gray-300">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
