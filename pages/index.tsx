import Image from 'next/image'
import { Inter } from 'next/font/google'
import ProductList from '@/components/ProductList/ProductList'
import ImageSection from '@/components/ImageSection/ImageSection'
import { Product } from '@/types/Product'
import PList from '@/components/PList'
import { GetStaticProps, InferGetStaticPropsType } from 'next';
const inter = Inter({ subsets: ['latin'] })
import { useState, useEffect } from 'react'


interface Props {
  products: Product[];
}

const images = [
"https://cdn.shopify.com/s/files/1/0156/6146/files/GY77468_C66-017_INTL_Web_Banner_Desktop_3800x1700px_Dual_1900x.jpg?v=1675881254",
  "https://cdn.i-scmp.com/sites/default/files/styles/1200x800/public/d8/images/methode/2020/09/07/ab66042a-e69c-11ea-8600-abe4f45458c9_image_hires_212131.jpg?itok=_ushpKs-&v=1599484916",
  "https://assets.vogue.com/photos/63b5f090634e59b2c425b6c2/1:1/w_1561,h_1561,c_limit/TS_FW21_CAMPAIGN_SHOT_23_034_CROP_RGB150_LR.jpg",
   
  

];

export default function Home({ products }: Props) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);
  return (
    <>
      <div className={`transition-opacity duration-500 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <ImageSection images={images} />
        <ProductList products={products} />
      </div>
    </>
  )
}

// Fetch data at build time
export const getStaticProps: GetStaticProps<Props> = async () => {
  const response = await fetch('https://singular-marzipan-df9366.netlify.app/api/products');
  const data = await response.json();
  
  return {
    props: {
      products: data.products,
    },
    revalidate: 60, // revalidate every 60 seconds (1 minute)
  };
};