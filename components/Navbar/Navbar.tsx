import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { CartPopup } from '../CartPopup/CartPopup';


interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems } = useCart();
  const [isCartPopupOpen, setIsCartPopupOpen] = useState(false);

  const cartItemCount = cartItems.length;

  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 p-6 z-50">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link href="/">
            <span className="font-semibold text-xl tracking-tight">Gym Clothing</span>
          </Link>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <div className="text-sm lg:flex-grow lg:text-right">
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4"
            >
              Docs
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4"
            >
              Examples
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200"
            >
              Blog
            </a>
          </div>
          <div className="flex items-center lg:ml-4">
            <div className="flex items-center" onClick={() => setIsCartPopupOpen(!isCartPopupOpen)}>
              <FaShoppingCart
                size={20}
                className="text-white flex-1 cursor-pointer"
              />
              {cartItemCount > 0 && (
                <span className="bg-white text-pink-500 font-bold py-1 px-2 rounded-full ml-2">
                  {cartItemCount}
                </span>
              )}
            </div>
          </div>
        </div>
      </nav>
      {isCartPopupOpen && <CartPopup onClose={() => setIsCartPopupOpen(false)} />}
    </>
  );
};

export default Navbar;
