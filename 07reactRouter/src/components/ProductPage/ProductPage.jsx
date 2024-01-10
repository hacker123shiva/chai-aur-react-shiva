// ProductPage.js

import React from 'react';

const ProductPage = () => {
  // Sample product data for dogs and cats
  const dogProducts = [
    {
      id: 3,
      name: 'Healthy Dog Treats',
      category: 'Treats',
      price: 12.99,
      image: 'https://source.unsplash.com/1400x400/?dogfood,treats',
    },
    {
      id: 4,
      name: 'Cozy Dog Bed',
      category: 'Sleep',
      price: 29.99,
      image: 'https://source.unsplash.com/1400x400/?dog,bed',
    },
    {
      id: 5,
      name: 'Dog Grooming Kit',
      category: 'Grooming',
      price: 24.99,
      image: 'https://source.unsplash.com/1400x400/?dog,grooming',
    },
    {
      id: 6,
      name: 'Durable Dog Leash',
      category: 'Walk',
      price: 15.99,
      image: 'https://source.unsplash.com/1400x400/?dog,leash',
    },
    {
      id: 7,
      name: 'Interactive Dog Puzzle',
      category: 'Play',
      price: 17.99,
      image: 'https://source.unsplash.com/1400x400/?dog,puzzle',
    },
    {
      id: 8,
      name: 'Reflective Dog Collar',
      category: 'Accessories',
      price: 8.99,
      image: 'https://source.unsplash.com/1400x400/?dog,collar',
    },
    {
      id: 9,
      name: 'Dog Training Clicker',
      category: 'Training',
      price: 5.99,
      image: 'https://source.unsplash.com/1400x400/?dog,training',
    },
    {
      id: 10,
      name: 'Dog Raincoat',
      category: 'Weather',
      price: 21.99,
      image: 'https://source.unsplash.com/1400x400/?dog,raincoat',
    },
    {
      id: 11,
      name: 'Orthopedic Dog Bed',
      category: 'Sleep',
      price: 34.99,
      image: 'https://source.unsplash.com/1400x400/?dog,orthopedic',
    },
    {
      id: 12,
      name: 'Dog Dental Chews',
      category: 'Health',
      price: 14.99,
      image: 'https://source.unsplash.com/1400x400/?dog,dental',
    },
    {
      id: 13,
      name: 'Dog Agility Set',
      category: 'Play',
      price: 27.99,
      image: 'https://source.unsplash.com/1400x400/?dog,agility',
    },
    {
      id: 14,
      name: 'Portable Dog Water Bottle',
      category: 'Travel',
      price: 9.99,
      image: 'https://source.unsplash.com/1400x400/?dog,water',
    },
    {
      id: 15,
      name: 'Dog Poop Bags',
      category: 'Clean',
      price: 6.99,
      image: 'https://source.unsplash.com/1400x400/?dog,poop',
    },
    {
      id: 16,
      name: 'Dog Winter Coat',
      category: 'Weather',
      price: 18.99,
      image: 'https://source.unsplash.com/1400x400/?dog,wintercoat',
    },
    {
      id: 17,
      name: 'Dog Nail Clippers',
      category: 'Grooming',
      price: 7.99,
      image: 'https://source.unsplash.com/1400x400/?dog,nailclippers',
    },
    {
      id: 18,
      name: 'Dog Cooling Mat',
      category: 'Weather',
      price: 22.99,
      image: 'https://source.unsplash.com/1400x400/?dog,coolingmat',
    },
    {
      id: 19,
      name: 'Dog GPS Tracker',
      category: 'Safety',
      price: 39.99,
      image: 'https://source.unsplash.com/1400x400/?dog,gpstracker',
    },
    {
      id: 20,
      name: 'Dog Birthday Cake',
      category: 'Celebration',
      price: 13.99,
      image: 'https://source.unsplash.com/1400x400/?dog,birthdaycake',
    },
    // Add more dog products as needed
  ];

  const catProducts = [
    {
      id: 3,
      name: 'Premium Cat Treats',
      category: 'Treats',
      price: 10.99,
      image: 'https://source.unsplash.com/1400x400/?cat,treats',
    },
    {
      id: 4,
      name: 'Cat Scratch Post',
      category: 'Play',
      price: 19.99,
      image: 'https://source.unsplash.com/1400x400/?cat,scratchpost',
    },
    {
      id: 5,
      name: 'Interactive Cat Feather Toy',
      category: 'Play',
      price: 8.99,
      image: 'https://source.unsplash.com/1400x400/?cat,feathertoy',
    },
    {
      id: 6,
      name: 'Cat Grooming Brush',
      category: 'Grooming',
      price: 12.99,
      image: 'https://source.unsplash.com/1400x400/?cat,groomingbrush',
    },
    {
      id: 7,
      name: 'Cozy Cat Bed',
      category: 'Sleep',
      price: 24.99,
      image: 'https://source.unsplash.com/1400x400/?cat,bed',
    },
    {
      id: 8,
      name: 'Catnip Bubbles',
      category: 'Play',
      price: 6.99,
      image: 'https://source.unsplash.com/1400x400/?cat,catnipbubbles',
    },
    {
      id: 9,
      name: 'Automatic Cat Feeder',
      category: 'Eat',
      price: 29.99,
      image: 'https://source.unsplash.com/1400x400/?cat,automaticfeeder',
    },
    {
      id: 10,
      name: 'Cat Harness and Leash',
      category: 'Walk',
      price: 15.99,
      image: 'https://source.unsplash.com/1400x400/?cat,harnessandleash',
    },
    {
      id: 11,
      name: 'Cat Dental Chews',
      category: 'Health',
      price: 11.99,
      image: 'https://source.unsplash.com/1400x400/?cat,dentalchews',
    },
    {
      id: 12,
      name: 'Cat Puzzle Feeder',
      category: 'Play',
      price: 18.99,
      image: 'https://source.unsplash.com/1400x400/?cat,puzzlefeeder',
    },
    {
      id: 13,
      name: 'Collapsible Cat Tunnel',
      category: 'Play',
      price: 14.99,
      image: 'https://source.unsplash.com/1400x400/?cat,cattunnel',
    },
    {
      id: 14,
      name: 'Cat Water Fountain',
      category: 'Eat',
      price: 22.99,
      image: 'https://source.unsplash.com/1400x400/?cat,waterfountain',
    },
    {
      id: 15,
      name: 'Cat Window Perch',
      category: 'Play',
      price: 17.99,
      image: 'https://source.unsplash.com/1400x400/?cat,windowperch',
    },
    {
      id: 16,
      name: 'Cat Hairball Remedy',
      category: 'Health',
      price: 9.99,
      image: 'https://source.unsplash.com/1400x400/?cat,hairballremedy',
    },
    {
      id: 17,
      name: 'Cat Litter Mat',
      category: 'Clean',
      price: 7.99,
      image: 'https://source.unsplash.com/1400x400/?cat,littermat',
    },
    {
      id: 18,
      name: 'Cat Teaser Wand',
      category: 'Play',
      price: 5.99,
      image: 'https://source.unsplash.com/1400x400/?cat,teaserwand',
    },
    {
      id: 19,
      name: 'Cat Anxiety Relief Spray',
      category: 'Health',
      price: 13.99,
      image: 'https://source.unsplash.com/1400x400/?cat,anxietyrelief',
    },
    {
      id: 20,
      name: 'Cat Collar with Bell',
      category: 'Accessories',
      price: 8.99,
      image: 'https://source.unsplash.com/1400x400/?cat,catcollar',
    },
    // Add more cat products as needed
  ];

  const rabbitProducts = [
    {
      id: 21,
      name: 'Rabbit Pellets',
      category: 'Eat',
      price: 12.99,
      image: 'https://source.unsplash.com/1400x400/?rabbit,pellets',
    },
    {
      id: 22,
      name: 'Rabbit Hay',
      category: 'Eat',
      price: 8.99,
      image: 'https://source.unsplash.com/1400x400/?rabbit,hay',
    },
    {
      id: 23,
      name: 'Rabbit Chew Sticks',
      category: 'Play',
      price: 6.99,
      image: 'https://source.unsplash.com/1400x400/?rabbit,chewsticks',
    },
    {
      id: 24,
      name: 'Rabbit Hut',
      category: 'Shelter',
      price: 29.99,
      image: 'https://source.unsplash.com/1400x400/?rabbit,rabbithut',
    },
    {
      id: 25,
      name: 'Rabbit Grooming Brush',
      category: 'Grooming',
      price: 11.99,
      image: 'https://source.unsplash.com/1400x400/?rabbit,groomingbrush',
    },
    {
      id: 26,
      name: 'Rabbit Water Bottle',
      category: 'Eat',
      price: 14.99,
      image: 'https://source.unsplash.com/1400x400/?rabbit,waterbottle',
    },
    {
      id: 27,
      name: 'Rabbit Tunnel System',
      category: 'Play',
      price: 18.99,
      image: 'https://source.unsplash.com/1400x400/?rabbit,tunnelsystem',
    },
    {
      id: 28,
      name: 'Rabbit Litter',
      category: 'Clean',
      price: 7.99,
      image: 'https://source.unsplash.com/1400x400/?rabbit,litter',
    },
    {
      id: 29,
      name: 'Rabbit Harness and Leash',
      category: 'Walk',
      price: 15.99,
      image: 'https://source.unsplash.com/1400x400/?rabbit,harnessandleash',
    },
    {
      id: 30,
      name: 'Rabbit Chew Toys',
      category: 'Play',
      price: 9.99,
      image: 'https://source.unsplash.com/1400x400/?rabbit,chewtoys',
    },
    {
      id: 31,
      name: 'Rabbit Nesting Material',
      category: 'Shelter',
      price: 5.99,
      image: 'https://source.unsplash.com/1400x400/?rabbit,nestingmaterial',
    },
    {
      id: 32,
      name: 'Rabbit Cooling Mat',
      category: 'Play',
      price: 16.99,
      image: 'https://source.unsplash.com/1400x400/?rabbit,coolingmat',
    },
    {
      id: 33,
      name: 'Rabbit Nail Clippers',
      category: 'Grooming',
      price: 10.99,
      image: 'https://source.unsplash.com/1400x400/?rabbit,nailclippers',
    },
    {
      id: 34,
      name: 'Rabbit Exercise Wheel',
      category: 'Play',
      price: 22.99,
      image: 'https://source.unsplash.com/1400x400/?rabbit,exercisewheel',
    },
    {
      id: 35,
      name: 'Rabbit Bedding',
      category: 'Sleep',
      price: 13.99,
      image: 'https://source.unsplash.com/1400x400/?rabbit,bedding',
    },
    {
      id: 36,
      name: 'Rabbit Salad Mix',
      category: 'Eat',
      price: 17.99,
      image: 'https://source.unsplash.com/1400x400/?rabbit,saladmix',
    },
    {
      id: 37,
      name: 'Rabbit Hideout House',
      category: 'Shelter',
      price: 26.99,
      image: 'https://source.unsplash.com/1400x400/?rabbit,hideouthouse',
    },
    {
      id: 38,
      name: 'Rabbit Water Fountain',
      category: 'Eat',
      price: 20.99,
      image: 'https://source.unsplash.com/1400x400/?rabbit,waterfountain',
    },
    {
      id: 39,
      name: 'Rabbit Ball Toy',
      category: 'Play',
      price: 8.99,
      image: 'https://source.unsplash.com/1400x400/?rabbit,balltoy',
    },
    {
      id: 40,
      name: 'Rabbit Grooming Wipes',
      category: 'Grooming',
      price: 6.99,
      image: 'https://source.unsplash.com/1400x400/?rabbit,groomingwipes',
    },
    // Add more rabbit products as needed
  ];

  return (
    <div className="product-page-container p-6">
      <h1 className="text-4xl font-bold mb-8">Products for Dogs and Cats</h1>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Dog Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dogProducts.map((product) => (
            <div
              key={product.id}
              className="product-item p-4 border rounded-md"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-500">Category: {product.category}</p>
              <p className="text-green-600">
                Price: ${product.price.toFixed(2)}
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-700">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Cat Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {catProducts.map((product) => (
            <div
              key={product.id}
              className="product-item p-4 border rounded-md"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-500">Category: {product.category}</p>
              <p className="text-green-600">
                Price: ${product.price.toFixed(2)}
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-700">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Rabbit Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rabbitProducts.map((product) => (
            <div
              key={product.id}
              className="product-item p-4 border rounded-md"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-500">Category: {product.category}</p>
              <p className="text-green-600">
                Price: ${product.price.toFixed(2)}
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-700">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
