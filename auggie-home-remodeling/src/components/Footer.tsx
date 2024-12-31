import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4">
          <h2 className="text-2xl font-bold">Auggie’s Home Remodeling</h2>
          <p className="text-gray-400">Building spaces you'll love to live in.</p>
        </div>
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="hover:text-yellow-500" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="hover:text-yellow-500" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="hover:text-yellow-500" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="hover:text-yellow-500" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Auggie’s Home Remodeling. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
