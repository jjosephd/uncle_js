import type { StateCreator } from 'zustand';
import type { CartSlice, StoreState, CartItem } from './types';

export const createCartSlice: StateCreator<StoreState, [], [], CartSlice> = (
  set
) => ({
  cart: [],
  isCartOpen: false,
  addToCart: (item: CartItem) =>
    set((state) => {
      const existingItem = state.cart.find(
        (cartItem) => cartItem.id === item.id
      );
      if (existingItem) {
        const updatedCart = state.cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
        return { cart: updatedCart };
      } else {
        return { cart: [...state.cart, { ...item, quantity: 1 }] };
      }
    }),
  removeItem: (itemId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== itemId),
    })),
  decrementItem: (itemId) =>
    set((state) => {
      const existingItem = state.cart.find(
        (cartItem) => cartItem.id === itemId
      );
      if (existingItem && existingItem.quantity > 1) {
        const updatedCart = state.cart.map((cartItem) =>
          cartItem.id === itemId
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
        return { cart: updatedCart };
      } else {
        return { cart: state.cart.filter((item) => item.id !== itemId) };
      }
    }),
  clearCart: () => set({ cart: [] }),
  toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
});
