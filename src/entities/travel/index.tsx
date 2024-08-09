import { create } from "zustand"

export type Travel = {
    items: string[],
    setItems: (newItems: string[]) => void,

    markersLat: string[],
    markersLng: string[],
    setMarkers: (newLat: string, newLng: string) => void
}

export const travelStore = create<Travel>((set) => ({
    items: [],
    setItems: (newItems: string[]) => set({ items: newItems }),
    
    markersLat: [],
    markersLng: [],
    setMarkers: (newLat: string, newLng: string) => set((state) => ({
        markersLat: [...state.markersLat, newLat],
        markersLng: [...state.markersLng, newLng]
    }))
}));