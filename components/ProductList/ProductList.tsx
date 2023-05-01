import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
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
    <div className="container mx-auto px-4 py-8">
  <div className="flex justify-center">
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
      {/* Replace `products` with your own array of products */}
      {products.map((product) => (
        <div key={product.id} className="bg-white p-4 rounded-md shadow-md transition duration-300 transform hover:scale-95 hover:shadow-lg relative" onMouseEnter={() => setHoveredProductId(product.id)} onMouseLeave={() => setHoveredProductId(null)}>
          
            <div className="h-48 w-full relative">
        <Link href={`/products/${product._id}`}>
              <img src={product.image} alt={product.name} className="md:h-full md:w-full object-cover rounded-md" />
        </Link>
              <div className="absolute bottom-0 right-0 mr-4 mb-4 bg-gray-800 text-white p-1 rounded-md">
                ${product.price.toFixed(2)}
              </div>
            </div>
            <h2 className="mt-2 text-gray-800 font-semibold text-lg">{product.name}</h2>
            
          
       
      </div>
      ))}
    </div>
  </div>
</div>


  );
};

export default ProductList;