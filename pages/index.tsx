import Image from 'next/image'
import { Inter } from 'next/font/google'
import ProductList from '@/components/ProductList/ProductList'

import { Product } from '@/types/Product'
const inter = Inter({ subsets: ['latin'] })

interface Props {
  products: Product[];
}

export default function Home({ products }: Props) {
  return (
   <>
   <h1 className='text-4xl font-bold text-center mt-8'>Gym Clothing</h1>
   <ProductList products={products} />
   </>
  )
}

// Fetch data at build time
export async function getStaticProps() {
  const products = [
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

  return {
    props: {
      products,
    },
  };
}
