import React, { useState } from 'react';
import Link from 'next/link';
import { Product } from '@/types/Product';

interface Props {
  products: Product[];
}

const ProductList = ({ products }: Props) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [hoveredProductId, setHoveredProductId] = useState<number | null>(null);

  const handleAddToCart = (product: Product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className="min-h-fit bg-gradient-to-br from-pink-500 via-red-500 to-orange-500 text-white">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold mb-8 text-center">Our Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-md shadow-md transition duration-300 transform hover:scale-105"
              onMouseEnter={() => setHoveredProductId(product.id)}
              onMouseLeave={() => setHoveredProductId(null)}
            >
              <div className="h-64 w-full relative">
                <Link href={`/products/${product._id}`}>
                  <img src={product.image} alt={product.name} className="h-full w-full object-cover rounded-t-md" />
                </Link>
                <div className="absolute bottom-0 right-0 mr-4 mb-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-2 py-1 rounded-md">
                ${product.price.toLocaleString('en-US', { minimumFractionDigits: 3 }).replace(',', '.').slice(0, -4)}
                  
                </div>
                <Link href={`/products/${product._id}`}>
                  <span className={`absolute bottom-0 right-0 mr-4 mb-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-4 py-2 rounded-md transition-opacity duration-300 ${hoveredProductId === product.id ? 'opacity-100' : 'opacity-0'}`}>
                    Ver Producto
                  </span>
                </Link>
                <button
                  className={`absolute bottom-0 left-0 ml-4 mb-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-4 py-2 rounded-md transition-opacity duration-300 ${hoveredProductId === product.id ? 'opacity-100' : 'opacity-0'}`}
                  onClick={() => handleAddToCart(product)}
                >
                  <span className="sr-only">Agregar al Carrito</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
              <h2 className="px-4 py-2 text-gray-800 font-semibold text-lg">{product.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
