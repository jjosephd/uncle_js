import type { StateCreator } from 'zustand';
import type { ReviewSlice, StoreState, ReviewItem } from './types';

export const createReviewSlice: StateCreator<StoreState, [], [], ReviewSlice> = (
  set
) => ({
  reviews: [],
  addReview: (review: ReviewItem) => set((state) => ({ reviews: [...state.reviews, review] })),
});