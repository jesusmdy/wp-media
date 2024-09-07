import { create } from "zustand";

interface ISiteNavigation {
  page: number;
  setPage(page: string): void
}

export const useSiteNavigation = create<ISiteNavigation>(
  (set) => ({
    page: 1,
    setPage: (page) => set((state) => ({...state, page: parseInt(page) })),
  })
)
