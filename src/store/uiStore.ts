import type { StateCreator } from 'zustand';
import type { UiSlice, StoreState } from './types';

export const createUiSlice: StateCreator<StoreState, [], [], UiSlice> = (
  set
) => ({
  isMenuOpen: false,
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  filterActive: false,
  toggleFilter: () => set((state) => ({ filterActive: !state.filterActive })),
  activeCategory: null,
  setActiveCategory: (category) => set(() => ({ activeCategory: category })),
});
