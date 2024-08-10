import { create } from "zustand"

export type State = {
    open: boolean,
    setOpen: (isOpen: boolean) => void,

    level: number,
    setLevel: (level: number) => void,

    load: string,
    setLoad: (load: string) => void
}

export const stateStore = create<State>((set) => ({
    open: false,
    setOpen: (isOpen: boolean) => set({ open: isOpen }),

    level: 0,
    load: '',

    setLevel: (level: number) => set({ level: level }),
    setLoad: (load: string) => set({ load: load })
}));