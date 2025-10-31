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
  filterActive: boolean;
  toggleFilter: () => void;
  activeCategory: string | null;
  setActiveCategory: (category: string | null) => void;
}

export interface ReviewItem {
  id: number;
  name: string;
  email: string;
  review: string;
  rating: number;
  submittedAt: Date; // Field to track when the review was submitted
}

export interface ReviewSlice {
  reviews: ReviewItem[];
  addReview: (review: ReviewItem) => void;
}
  


export type StoreState = CartSlice & UserSlice & UiSlice & ReviewSlice;
