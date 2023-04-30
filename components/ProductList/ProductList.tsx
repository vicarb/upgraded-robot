import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Link from 'next/link';
import { Product } from '@/types/Product';

export const products = [
    {
      id: 1,
      name: 'Men’s Sleeveless Shirt',
      image: 'https://via.placeholder.com/150',
      price: 24.99,
      description: 'A comfortable and stylish sleeveless shirt for men.'
    },
    {
      id: 2,
      name: 'Women’s Leggings',
      image: 'https://via.placeholder.com/150',
      price: 34.99,
      description: 'Comfortable leggings with a flattering fit for women.'
    },
    {
      id: 3,
      name: 'Men’s Shorts',
      image: 'https://via.placeholder.com/150',
      price: 29.99,
      description: 'Lightweight and breathable shorts for men.'
    },
    {
      id: 4,
      name: 'Women’s Tank Top',
      image: 'https://via.placeholder.com/150',
      price: 19.99,
      description: 'A classic tank top for women.'
    },
    {
      id: 5,
      name: 'Men’s T-Shirt',
      image: 'https://via.placeholder.com/150',
      price: 19.99,
      description: 'A basic and comfortable t-shirt for men.'
    },
    {
      id: 6,
      name: 'Women’s Sports Bra',
      image: 'https://via.placeholder.com/150',
      price: 24.99,
      description: 'A supportive and comfortable sports bra for women.'
    },
    {
      id: 7,
      name: 'Men’s Athletic Pants',
      image: 'https://via.placeholder.com/150',
      price: 39.99,
      description: 'Sweat-wicking and comfortable pants for men.'
    },
    {
      id: 8,
      name: 'Women’s Athletic Shorts',
      image: 'https://via.placeholder.com/150',
      price: 29.99,
      description: 'Comfortable and breathable shorts for women.'
    }
  ];
  
  



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
    <div className="container mx-auto px-4 py-8">
  <div className="flex justify-center">
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
      {/* Replace `products` with your own array of products */}
      {products.map((product) => (
        <div key={product.id} className="bg-white p-4 rounded-md shadow-md transition duration-300 transform hover:scale-95 hover:shadow-lg relative" onMouseEnter={() => setHoveredProductId(product.id)} onMouseLeave={() => setHoveredProductId(null)}>
          <Link href={`/products/${product.id}`}>
            <span className="absolute top-0 left-0 w-full h-full"></span>
          </Link>
          <div className="h-48 w-full relative">
            <img src={product.image} alt={product.name} className="md:h-full md:w-full object-cover rounded-md" />
            <div className="absolute bottom-0 right-0 mr-4 mb-4 bg-gray-800 text-white p-1 rounded-md">
              ${product.price.toFixed(2)}
            </div>
          </div>
          <h2 className="mt-2 text-gray-800 font-semibold text-lg">{product.name}</h2>
          <p className="mt-1 text-gray-600 truncate">{product.description}</p>
          {hoveredProductId === product.id && (
            <button onClick={() => handleAddToCart(product)} className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-gray-800 via-gray-800 to-transparent text-white px-4 py-2 rounded-md flex justify-center items-center hover:from-gray-700 shadow-lg shadow-green-transparent transition duration-300">
              <FaShoppingCart className="inline-block mr-2" /> Add to Cart
            </button>
          )}
        </div>
      ))}
    </div>
  </div>
</div>


  );
};

export default ProductList;