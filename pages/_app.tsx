import React from 'react'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import CartProvider from '@/context/CartContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <CartProvider>

    <Navbar/>
    <Component {...pageProps} />
    <Footer/>

    </CartProvider>
    </>
    )
}
