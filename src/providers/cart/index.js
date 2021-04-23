import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem('cart')) || []
  );

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart, setCart]);

  const getCart = () => {
    setCart(JSON.parse(localStorage.getItem('cart')));
  };

  const resetCart = () => {
    setCart("")
    localStorage.removeItem('cart')
  };

  const deleteProduct = (productId) => {
    setCart(cart.filter(({ id }) => id !== productId));
  };

  return (
    <CartContext.Provider value={{ cart, getCart, setCart, deleteProduct, resetCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
