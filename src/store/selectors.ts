import { useStore } from './store';

// Selector to get the total number of items in the cart
export const useCartTotal = () => {
  const cart = useStore((state) => state.cart);
  return cart.reduce((total, item) => total + item.quantity, 0);
};

// Selector to get the total price of items in the cart
export const useCartTotalPrice = () => {
  const cart = useStore((state) => state.cart);
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
};