import type { StoreState, CartItem } from './types';

// Selector to get the total number of items in the cart
export const selectCartTotal = (state: StoreState) =>
  state.cart.reduce(
    (total: number, item: CartItem) => total + item.quantity,
    0
  );

// Selector to get the total price of items in the cart
export const selectCartTotalPrice = (state: StoreState) =>
  state.cart.reduce(
    (total: number, item) => total + item.price * item.quantity,
    0
  );
