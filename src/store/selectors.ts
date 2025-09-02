import type { StoreState } from './store';

export const getTotalItems = (state: StoreState) =>
  state.cart.reduce((total, item) => total + item.quantity, 0);

export const getTotalPrice = (state: StoreState) =>
  state.cart.reduce((total, item) => total + item.price * item.quantity, 0);
