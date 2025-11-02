// Imports the main 'create' function from the Zustand library,
// which is used to build the store.
import { create } from 'zustand';

// Imports the main type definition for the entire store. This helps
// TypeScript understand the complete shape of the state.
import type { StoreState } from './types';

// Imports the "slice creator" functions from their respective files.
// Each function is responsible for creating a piece of the total state.
import { createCartSlice } from './cartStore';
import { createUserSlice } from './userStore';
import { createUiSlice } from './uiStore';
import { createReviewSlice } from './reviewsStore';
import { createReservationSlice } from './reservationStore';

// This is where the magic happens!
export const useStore = create<StoreState>()((set, get, api) => ({
  ...createCartSlice(set, get, api),
  ...createUserSlice(set, get, api),
  ...createUiSlice(set, get, api),
  ...createReviewSlice(set, get, api),
  ...createReservationSlice(set,get,api)
}));
