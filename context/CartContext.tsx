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
    const itemIndex = cartItems.findIndex((item) => item.id === product.id);
    if (itemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      console.log("notupdated quantity", updatedCartItems[itemIndex].quantity);
      updatedCartItems[itemIndex].quantity += 1;
      console.log("updated quantity", updatedCartItems[itemIndex].quantity);
      
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
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
