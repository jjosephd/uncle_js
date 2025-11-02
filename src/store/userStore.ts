import type { StateCreator } from 'zustand';
import type { UserSlice, StoreState } from './types';

export const createUserSlice: StateCreator<StoreState, [], [], UserSlice> = (
  set
) => ({
  isAuthenticated: false,
  isLoginOpen: true,
  username: null,
  authenticateUser: (username: string) => set({ isAuthenticated: true, username }),
  logoutUser: () => set({ isAuthenticated: false, username: null }),
  toggleLogin: () => set((state) => ({ isLoginOpen: !state.isLoginOpen })),
});
