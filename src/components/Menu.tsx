
import React from 'react';

// Pizza menu data
const pizzas = [
  {
    id: 1,
    name: "Margherita",
    description: "San Marzano tomatoes, mozzarella di bufala, fresh basil, olive oil",
    price: "€8.50",
    imageUrl: "https://images.unsplash.com/photo-1598023696416-0193a0bcd302?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "Classic",
    ingredients: ["Tomato Sauce", "Mozzarella", "Basil", "Olive Oil"]
  },
  {
    id: 2,
    name: "Diavola",
    description: "Spicy salami, San Marzano tomatoes, mozzarella fior di latte, Calabrian chili",
    price: "€10.50",
    imageUrl: "https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "Spicy",
    ingredients: ["Tomato Sauce", "Mozzarella", "Spicy Salami", "Calabrian Chili"]
  },
  {
    id: 3,
    name: "Quattro Formaggi",
    description: "Mozzarella, gorgonzola, fontina, parmigiano reggiano, light cream base",
    price: "€11.00",
    imageUrl: "https://images.unsplash.com/photo-1573821663912-569905455b1c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "Cheese",
    ingredients: ["Light Cream", "Mozzarella", "Gorgonzola", "Fontina", "Parmigiano"]
  },
  {
    id: 4,
    name: "Prosciutto e Funghi",
    description: "San Marzano tomatoes, mozzarella, prosciutto cotto, mushrooms, thyme",
    price: "€10.00",
    imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "Classic",
    ingredients: ["Tomato Sauce", "Mozzarella", "Ham", "Mushrooms", "Thyme"]
  },
  {
    id: 5,
    name: "Ortolana",
    description: "Grilled zucchini, eggplant, bell peppers, cherry tomatoes, mozzarella, pesto drizzle",
    price: "€9.50",
    imageUrl: "https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "Vegetarian",
    ingredients: ["Tomato Sauce", "Mozzarella", "Grilled Vegetables", "Pesto"]
  },
  {
    id: 6,
    name: "Tartufo",
    description: "Mozzarella fior di latte, mushrooms, truffle cream, prosciutto crudo, arugula",
    price: "€14.00",
    imageUrl: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "Gourmet",
    ingredients: ["Mozzarella", "Mushrooms", "Truffle Cream", "Prosciutto", "Arugula"]
  }
];

const Menu = () => {
  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-pizza-orange bg-opacity-10 text-pizza-orange rounded-full text-sm font-medium mb-4">
            Our Selection
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-pizza-orange-dark mb-4">
            Artisanal <span className="text-pizza-orange">Pizza</span> Menu
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Each pizza is handcrafted with our 72-hour fermented dough and locally sourced ingredients, 
            baked to perfection in our wood-fired oven imported from Naples.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pizzas.map((pizza, index) => (
            <div 
              key={pizza.id} 
              className="card-hover bg-white rounded-xl overflow-hidden shadow-md"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="h-56 overflow-hidden">
                <img 
                  src={pizza.imageUrl} 
                  alt={pizza.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-pizza-orange-dark">{pizza.name}</h3>
                  <span className="bg-pizza-green bg-opacity-10 text-pizza-green-dark px-2 py-1 rounded text-xs font-medium">
                    {pizza.category}
                  </span>
                </div>
                <p className="text-gray-600 mb-4 text-sm">{pizza.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-pizza-orange-dark font-bold">{pizza.price}</span>
                  <button className="text-sm font-medium text-pizza-green-dark hover:text-pizza-green transition-colors">
                    Add to Order
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block px-8 py-3 border-2 border-pizza-orange text-pizza-orange font-medium rounded-full hover:bg-pizza-orange hover:text-white transition-colors"
          >
            View Full Menu
          </a>
        </div>
      </div>
    </section>
  );
};

export default Menu;
