import { create } from "zustand"

export type User = {
    email: string,
    author: string,

    setData: (email: string, author: string) => void
}

export const userStore = create<User>((set) => ({
    email: '',
    author: '',
    
    setData: (email: string, author: string) => set({ email: email, author: author })
}))