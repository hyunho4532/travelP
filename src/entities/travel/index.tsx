import { create } from "zustand"

export type Travel = {
    items: string[],
    setItems: (newItems: string[]) => void
}

export const travelStore = create<Travel>((set) => ({
    items: [],
    setItems: (newItems: string[]) => set({ items: newItems }),
}));