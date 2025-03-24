
import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="pt-24 pb-20 md:pt-32 md:pb-24 hero-gradient overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-pizza-orange-dark">
                Authentic Italian <span className="text-pizza-orange">Pizza</span> with AI Guidance
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl">
                Experience the perfect blend of traditional Italian craftsmanship and cutting-edge AI technology at Zi' Catié.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#ai-assistant"
                  className="bg-pizza-orange text-white px-8 py-3 rounded-full font-medium shadow-lg hover:bg-pizza-orange-dark transition duration-300 text-center"
                >
                  Try Our AI Assistant
                </a>
                <a
                  href="#menu"
                  className="border-2 border-pizza-green bg-transparent text-pizza-green-dark px-8 py-3 rounded-full font-medium hover:bg-pizza-green hover:text-white transition duration-300 text-center"
                >
                  View Menu
                </a>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="relative w-64 h-64 md:w-80 md:h-80 animate-float">
                <img
                  src="/lovable-uploads/c482042b-76ab-445a-9a7a-1621779df651.png"
                  alt="Zi' Catié Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
