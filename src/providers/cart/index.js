import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem('cart')) || []
  );

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const getCart = () => {
    setCart(JSON.parse(localStorage.getItem('cart')));
  };

  const deleteProduct = (productId) => {
    setCart(cart.filter(({ id }) => id !== productId));
  };

  return (
    <CartContext.Provider value={{ cart, getCart, setCart, deleteProduct }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
