import { create } from "zustand"

export type State = {
    open: boolean,
    setOpen: (isOpen: boolean) => void
}

export const stateStore = create<State>((set) => ({
    open: false,
    setOpen: (isOpen: boolean) => set({ open: isOpen })
}));