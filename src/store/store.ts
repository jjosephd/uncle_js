import { create } from 'zustand';

// Define the interface for a single cart item
export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

// Define the interface for the store's state
export interface StoreState {
  cart: CartItem[];
  isCartOpen: boolean;
  addToCart: (item: CartItem) => void;
  removeItem: (itemId: number) => void;
  decrementItem: (itemId: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
}

export const useStore = create<StoreState>((set) => ({
  // Initial state
  cart: [],
  isCartOpen: false,

  // Action to add an item to the cart, or increment if it already exists
  addToCart: (item) =>
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

  // Action to completely remove an item from the cart
  removeItem: (itemId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== itemId),
    })),

  // Action to decrement an item's quantity, or remove if quantity is 1
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

  // Action to clear the entire cart
  clearCart: () => set({ cart: [] }),

  // Action to toggle the cart visibility
  toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
}));
