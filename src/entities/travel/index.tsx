import { create } from "zustand"

export type Travel = {
    items: string[],
    setItems: (newItems: string[]) => void,

    markersLat: number[],
    markersLng: number[],
    setMarkers: (newLat: number, newLng: number) => void,

    gpxPath: string,
    setGpxPath: (newPath: string) => void
}

export type TourSpot = {
    items: string[],
    spot: string,
    _contentType: number,

    setItems: (newItems: string[]) => void
    setSpot: (newSpot: string) => void
    setContentType: (newContentType: number) => void
}

export const travelStore = create<Travel>((set) => ({
    items: [],
    setItems: (newItems: string[]) => set({ items: newItems }),
    
    markersLat: [],
    markersLng: [],
    setMarkers: (newLat: number, newLng: number) => set((state) => ({
        markersLat: [...state.markersLat, newLat],
        markersLng: [...state.markersLng, newLng]
    })),

    gpxPath: '',
    setGpxPath: (newPath: string) => set({ gpxPath: newPath })
}));

export const tourSpotStore = create<TourSpot>((set) => ({
    items: [],
    setItems: (newItems: string[]) => set({ items: newItems }),

    spot: '',
    setSpot: (newSpot: string) => set({ spot: newSpot }),

    _contentType: 0,
    setContentType: (newContentType: number) => set({ _contentType: newContentType })
}));