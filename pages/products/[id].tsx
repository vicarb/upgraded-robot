import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Product } from '@/types/Product';
import { useCart } from '@/context/CartContext';
import { GetStaticProps, GetStaticPaths } from 'next';

interface Props {
  product: Product;
}

const ProductDetail: React.FC<Props> = ({ product }) => {
  const router = useRouter();
  const { cartItems, addToCart } = useCart();
  const [isLoaded, setIsLoaded] = useState(false);
  const [mainImage, setMainImage] = useState(product.image);
  const [thumbnails, setThumbnails] = useState([  "https://via.placeholder.com/250",  "https://via.placeholder.com/152",  "https://via.placeholder.com/153"]);


  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const cartTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 via-red-500 to-orange-500">
    <div
      className={` mt-16 min-h-screen text-white z-10 ${
        isLoaded ? 'opacity-100 transition-opacity duration-500' : 'opacity-0'
      }`}
    >
    
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="relative w-full h-80 z-40">
            <Image src={mainImage} alt={product.name} layout="fill" objectFit="cover" />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-lg mb-6">{product.description}</p>
            <div className="flex items-center">
              <span className="text-3xl font-bold">
                ${product.price.toLocaleString('en-US', { minimumFractionDigits: 3 }).replace(',', '.').slice(0, -4)}
              </span>
  
              <button
                className="px-4 py-2 ml-6 bg-white text-gray-800 text-sm font-semibold rounded-md shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
          <div className="col-span-2 mt-4">
            {thumbnails.map((thumbnail) => (
              <button
                key={thumbnail}
                className="mr-4 mb-4"
                onClick={() => setMainImage(thumbnail)}
              >
                <Image src={thumbnail} alt={product.name} width="60" height="60" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default ProductDetail;



export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch('https://singular-marzipan-df9366.netlify.app/api/products');
  const data = await response.json();

  const paths = data.products.map((product: Product) => ({
    params: { id: product._id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params) {
    return {
      notFound: true,
    };
  }

  const { id } = params;
  const response = await fetch(`https://singular-marzipan-df9366.netlify.app/api/products/${id}`);
  const product = await response.json();

  return { props: { product } };
};
