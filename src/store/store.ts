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
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: number) => void;
  clearCart: () => void;
}

export const useStore = create<StoreState>((set) => ({
  // Initial state
  cart: [],

  // Action to add an item to the cart
  addToCart: (item) =>
    set((state) => {
      console.log('Current cart:', state.cart);
      console.log('Item being added:', item);
      const existingItem = state.cart.find(
        (cartItem) => cartItem.id === item.id
      );
      console.log('Existing item found:', existingItem);

      if (existingItem) {
        console.log('Item exists. Incrementing quantity.');
        const updatedCart = state.cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
        console.log('Updated cart:', updatedCart);
        return { cart: updatedCart };
      } else {
        console.log('Item is new. Adding to cart.');
        const newCart = [...state.cart, { ...item, quantity: 1 }];
        console.log('New cart:', newCart);
        return { cart: newCart };
      }
    }),

  // Action to remove an item from the cart
  removeFromCart: (itemId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== itemId),
    })),

  // Action to clear the entire cart
  clearCart: () => set({ cart: [] }),
}));
