
import React, { useState } from 'react';

const AiFeature = () => {
  const [isTyping, setIsTyping] = useState(false);
  const [query, setQuery] = useState('');
  const [recommendation, setRecommendation] = useState<string | null>(null);

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const generateRecommendation = (userQuery: string) => {
    setIsTyping(true);
    
    // Simulate AI processing
    setTimeout(() => {
      let result = '';
      
      // Simple keyword matching for the demo
      const lowerQuery = userQuery.toLowerCase();
      
      if (lowerQuery.includes('spicy') || lowerQuery.includes('hot')) {
        result = "Based on your preference for spicy food, I recommend our 'Diavola' pizza with spicy salami and Calabrian chili. It has just the right amount of heat!";
      } else if (lowerQuery.includes('vegetarian') || lowerQuery.includes('veggie')) {
        result = "For a vegetarian option, our 'Ortolana' pizza is perfect with fresh seasonal vegetables and a delicious pesto drizzle.";
      } else if (lowerQuery.includes('cheese') || lowerQuery.includes('formaggi')) {
        result = "For a cheese lover, our 'Quattro Formaggi' is a dream with four Italian cheeses that create a perfect harmony of flavors.";
      } else if (lowerQuery.includes('classic') || lowerQuery.includes('traditional')) {
        result = "For a classic Italian experience, you can't go wrong with our 'Margherita'. Simple, authentic, and delicious with San Marzano tomatoes and buffalo mozzarella.";
      } else if (lowerQuery.includes('truffle') || lowerQuery.includes('luxury')) {
        result = "For a gourmet experience, try our 'Tartufo' pizza with truffle cream, mushrooms, and prosciutto. It's a luxurious treat!";
      } else if (lowerQuery === '') {
        result = "Please tell me what kind of pizza you're in the mood for, or any dietary preferences you have.";
      } else {
        result = "Based on your preferences, I'd recommend our 'Margherita' pizza - it's our most popular and a true Italian classic!";
      }
      
      setRecommendation(result);
      setIsTyping(false);
    }, 1500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    generateRecommendation(query);
  };

  return (
    <section id="ai-assistant" className="py-20 ai-gradient">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2">
            <span className="inline-block px-3 py-1 bg-pizza-green bg-opacity-10 text-pizza-green rounded-full text-sm font-medium mb-4">
              AI-Powered
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-pizza-orange-dark mb-4">
              Let Our AI <span className="text-pizza-orange">Chef Assistant</span> Help You Choose
            </h2>
            <p className="text-gray-700 mb-6">
              Not sure what to order? Our AI recommendation system analyzes your preferences to suggest the perfect pizza for your taste buds.
            </p>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="query" className="block text-sm font-medium text-gray-700 mb-1">
                    Tell us what you're in the mood for:
                  </label>
                  <input
                    type="text"
                    id="query"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pizza-orange focus:border-transparent transition duration-200"
                    placeholder="e.g., 'Something spicy' or 'Vegetarian options'"
                    value={query}
                    onChange={handleQueryChange}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-pizza-orange text-white font-medium py-3 rounded-lg shadow hover:bg-pizza-orange-dark transition duration-300"
                  disabled={isTyping}
                >
                  {isTyping ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Thinking...
                    </span>
                  ) : (
                    "Get My Recommendation"
                  )}
                </button>
              </form>
              
              {recommendation && (
                <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-100 animate-fade-in">
                  <p className="text-gray-800">{recommendation}</p>
                </div>
              )}
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-pizza-orange rounded-full opacity-20"></div>
              <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-pizza-green rounded-full opacity-20"></div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg relative z-10">
                <h3 className="text-xl font-bold text-pizza-orange-dark mb-4">How Our AI Assistant Works</h3>
                
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="bg-pizza-orange bg-opacity-10 text-pizza-orange w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Tell Us Your Preferences</h4>
                      <p className="text-sm text-gray-600">Share your taste preferences, dietary restrictions, or just what you're in the mood for.</p>
                    </div>
                  </li>
                  
                  <li className="flex gap-3">
                    <div className="bg-pizza-orange bg-opacity-10 text-pizza-orange w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">AI Analysis</h4>
                      <p className="text-sm text-gray-600">Our AI analyzes your input and matches it with our menu items and ingredient combinations.</p>
                    </div>
                  </li>
                  
                  <li className="flex gap-3">
                    <div className="bg-pizza-orange bg-opacity-10 text-pizza-orange w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Personalized Recommendation</h4>
                      <p className="text-sm text-gray-600">Receive a tailored pizza recommendation that perfectly matches your tastes.</p>
                    </div>
                  </li>
                </ul>
                
                <div className="mt-6 p-4 bg-pizza-orange bg-opacity-5 rounded-lg">
                  <p className="text-sm text-gray-700 italic">
                    "Our AI has been trained on thousands of flavor combinations and customer preferences to deliver spot-on recommendations!"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiFeature;
