import type { StateCreator } from 'zustand';
import type { ReservationSlice, StoreState, ReservationItem } from './types';
import { v4 as uuidv4 } from 'uuid';
export const createReservationSlice: StateCreator<StoreState, [], [], ReservationSlice> = (
  set
) => ({
  reservations: [],
  addReservation: (reservation: Omit<ReservationItem, 'id'>) => set((state) => ({
    reservations: [...state.reservations, { id: uuidv4(), ...reservation }],
  })),
  removeReservation: (id: string) => set((state)=>({
    reservations: state.reservations.filter((r) => r.id !==  id),
  })),
  updateReservation: (id: string, updated: Partial<Omit<ReservationItem, 'id'>>) => set((state) => ({
    reservations: state.reservations.map((r) => 
      r.id === id ? { ...r, ...updated } : r
    ),
  })),
})