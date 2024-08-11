import { create } from "zustand"

export type State = {
    level: number,
    setLevel: (level: number) => void,

    load: string,
    setLoad: (load: string) => void
}

export type Open = {
    travelCourseOpen: boolean,
    loginOpen: boolean,

    setTravelCourseOpen: (isOpen: boolean) => void,
    setLoginOpen: (isOpen: boolean) => void
}

export const stateStore = create<State>((set) => ({
    level: 0,
    load: '',

    setLevel: (level: number) => set({ level: level }),
    setLoad: (load: string) => set({ load: load })
}));

export const openStore = create<Open>((set) => ({
    travelCourseOpen: false,
    setTravelCourseOpen: (isOpen: boolean) => set({ travelCourseOpen: isOpen }),

    loginOpen: false,
    setLoginOpen: (isOpen: boolean) => set({ loginOpen: isOpen }) 
}));