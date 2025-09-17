import type { StateCreator } from 'zustand';
import type { UserSlice, StoreState } from './types';

export const createUserSlice: StateCreator<StoreState, [], [], UserSlice> = (
  set
) => ({
  isAuthenticated: false,
  isLoginOpen: true,
  authenticateUser: () => set({ isAuthenticated: true }),
  logoutUser: () => set({ isAuthenticated: false }),
  toggleLogin: () => set((state) => ({ isLoginOpen: !state.isLoginOpen })),
});
