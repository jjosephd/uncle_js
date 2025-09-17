
// Define the interface for a single cart item
export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export interface CartSlice {
  cart: CartItem[];
  isCartOpen: boolean;
  addToCart: (item: CartItem) => void;
  removeItem: (itemId: number) => void;
  decrementItem: (itemId: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
}

export interface UserSlice {
  isAuthenticated: boolean;
  isLoginOpen: boolean;
  toggleLogin: () => void;
  authenticateUser: () => void;
  logoutUser: () => void;
}

export interface UiSlice {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

export type StoreState = CartSlice & UserSlice & UiSlice;
