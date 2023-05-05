import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Product } from '@/types/Product';

const PList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://singular-marzipan-df9366.netlify.app/api/products');
      const data = await response.json();
      setProducts(data.products);
    };
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-md shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 ease-in-out">
            <div className="relative w-full h-60">
              <Image src={product.image} alt={product.name} layout="fill" objectFit="cover" />
            </div>
            <div className="mt-4">
              <h2 className="text-lg font-bold text-gray-800">{product.name}</h2>
              <p className="mt-2 text-gray-600">{product.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-gray-800 font-bold text-lg">${product.price.toFixed(2)}</span>
                <button className="px-4 py-2 bg-gray-800 text-white text-sm font-semibold rounded-md shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PList;