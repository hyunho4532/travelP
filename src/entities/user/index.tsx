import { create } from "zustand"

export type User = {
    email: string,
    setEmail: (email: string) => void
}

export const userStore = create<User>((set) => ({
    email: '',
    setEmail: (email: string) => set({ email: email })
}))