import React, { createContext, useContext, useState } from 'react';
import { Product } from '@/types/Product';

interface CartContextProps {
  cartItems: Product[];
  addToCart: (product: Product) => void;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextProps>({
  cartItems: [],
  addToCart: () => {},
  clearCart: () => {},
});

export const useCart = () => useContext(CartContext);

const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCartItems(prevCartItems => {
      const itemIndex = prevCartItems.findIndex((item) => item._id === product._id);
      if (itemIndex !== -1) {
        const updatedCartItems = [...prevCartItems];
        updatedCartItems[itemIndex] = {
          ...prevCartItems[itemIndex],
          quantity: prevCartItems[itemIndex].quantity + 1,
        };
  
        return updatedCartItems;
      } else {
        return [...prevCartItems, { ...product, quantity: 1 }];
      }
    });
  };
  
  

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
