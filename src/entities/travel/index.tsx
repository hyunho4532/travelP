import { create } from "zustand"

export type Travel = {
    items: string[],
    setItems: (newItems: string[]) => void,

    markersLat: number[],
    markersLng: number[],
    setMarkers: (newLat: number, newLng: number) => void
}

export const travelStore = create<Travel>((set) => ({
    items: [],
    setItems: (newItems: string[]) => set({ items: newItems }),
    
    markersLat: [],
    markersLng: [],
    setMarkers: (newLat: number, newLng: number) => set((state) => ({
        markersLat: [...state.markersLat, newLat],
        markersLng: [...state.markersLng, newLng]
    }))
}));