import React from 'react';

const Hero = () => {
  return (
    <section className="bg-cover bg-center h-screen flex items-center justify-center" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}>
      <div className="text-center text-white px-4">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">Your Dream Construction Starts Here</h2>
        <p className="text-lg md:text-2xl mb-6">Building Quality Spaces Tailored to Your Vision</p>
        <a href="#contact" className="bg-yellow-500 text-gray-800 py-3 px-6 rounded-lg text-lg font-bold hover:bg-yellow-600">Get a Quote</a>
      </div>
    </section>
  );
};

export default Hero;
