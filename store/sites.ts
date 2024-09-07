import { create } from "zustand";

export type TSite = {
  id: string;
  url: string;
}

interface ISiteStore {
  sites: TSite[];
  addSite: (site: TSite) => void;
  deleteSite: (id: string) => void;
}

export const useSiteStore = create<ISiteStore>(
  (set) => ({
    sites: [],
    addSite: (site) => set((state) => ({...state, sites: [...state.sites, site] })),
    deleteSite: (id) => set((state) => ({
      ...state,
      sites: state.sites.filter((site) => site.id!== id),
    })),
  })
)
