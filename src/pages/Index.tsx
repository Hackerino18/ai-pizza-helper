
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Menu from '../components/Menu';
import AiFeature from '../components/AiFeature';
import Footer from '../components/Footer';

const Index = () => {
  // Add smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.slice(1);
        if (id) {
          const element = document.getElementById(id);
          if (element) {
            window.scrollTo({
              top: element.offsetTop - 80, // Account for fixed navbar
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-pizza-cream">
      <Navbar />
      <Hero />
      <Menu />
      <AiFeature />
      
      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <span className="inline-block px-3 py-1 bg-pizza-orange bg-opacity-10 text-pizza-orange rounded-full text-sm font-medium mb-4">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-pizza-orange-dark mb-4">
                Tradition Meets <span className="text-pizza-orange">Innovation</span>
              </h2>
              <p className="text-gray-700 mb-4">
                Zi' Catié was founded in 1985 by the Cataldi family, who brought their secret pizza recipes from Naples to share with the world. For decades, we've been serving authentic Neapolitan pizza made with the finest ingredients and traditional methods.
              </p>
              <p className="text-gray-700 mb-4">
                In 2023, we embraced innovation by integrating AI technology into our customer experience, helping our guests discover their perfect pizza match while maintaining the authentic craftsmanship that defines Italian cuisine.
              </p>
              <p className="text-gray-700">
                Our mission is to preserve the art of traditional pizza making while enhancing the customer experience through thoughtful technological innovation.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full bg-pizza-green rounded-xl opacity-10 transform rotate-3"></div>
                <div className="absolute -bottom-4 -right-4 w-full h-full bg-pizza-orange rounded-xl opacity-10 transform -rotate-3"></div>
                <div className="relative bg-white p-6 rounded-xl shadow-lg z-10">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 text-center">
                      <div className="bg-pizza-orange bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-pizza-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                      </div>
                      <h3 className="font-bold text-lg text-pizza-orange-dark mb-2">38+</h3>
                      <p className="text-sm text-gray-600">Years of Experience</p>
                    </div>
                    <div className="p-4 text-center">
                      <div className="bg-pizza-green bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-pizza-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                        </svg>
                      </div>
                      <h3 className="font-bold text-lg text-pizza-orange-dark mb-2">100%</h3>
                      <p className="text-sm text-gray-600">Authentic Ingredients</p>
                    </div>
                    <div className="p-4 text-center">
                      <div className="bg-pizza-orange bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-pizza-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                        </svg>
                      </div>
                      <h3 className="font-bold text-lg text-pizza-orange-dark mb-2">50K+</h3>
                      <p className="text-sm text-gray-600">Happy Customers</p>
                    </div>
                    <div className="p-4 text-center">
                      <div className="bg-pizza-green bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-pizza-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                        </svg>
                      </div>
                      <h3 className="font-bold text-lg text-pizza-orange-dark mb-2">4.9/5</h3>
                      <p className="text-sm text-gray-600">Customer Rating</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-pizza-green bg-opacity-10 text-pizza-green rounded-full text-sm font-medium mb-4">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-pizza-orange-dark mb-4">
              Visit Us or <span className="text-pizza-orange">Order Online</span>
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Stop by our pizzeria to experience the perfect blend of tradition and innovation, 
              or order online for a convenient dining experience at home.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2 bg-white p-8 rounded-xl shadow-lg">
              <form>
                <h3 className="text-xl font-bold text-pizza-orange-dark mb-6">Send Us a Message</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pizza-orange focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pizza-orange focus:border-transparent transition"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pizza-orange focus:border-transparent transition"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pizza-orange focus:border-transparent transition"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-pizza-orange text-white font-medium py-3 px-6 rounded-lg shadow hover:bg-pizza-orange-dark transition"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            <div className="md:w-1/2 grid grid-cols-1 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-pizza-orange-dark mb-4">Location</h3>
                <div className="bg-gray-200 rounded-lg h-64 mb-4">
                  {/* This would be replaced with an actual map */}
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    Map Placeholder
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-pizza-orange mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <p className="text-gray-700">
                    123 Pizza Street, Naples, Italy
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-pizza-orange-dark mb-4">Order Now</h3>
                <p className="text-gray-700 mb-4">
                  Ready to taste our incredible pizza? Order now for takeaway or delivery!
                </p>
                <div className="flex justify-center space-x-4">
                  <a 
                    href="#" 
                    className="bg-pizza-orange text-white py-2 px-4 rounded-lg hover:bg-pizza-orange-dark transition flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                    Order Online
                  </a>
                  <a 
                    href="tel:+391234567890" 
                    className="bg-pizza-green text-white py-2 px-4 rounded-lg hover:bg-pizza-green-dark transition flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                    Call Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
