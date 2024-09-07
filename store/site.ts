import { create } from "zustand";
import { TSite } from "./sites";

interface ISiteStore {
  currentSite: TSite | undefined;
  setCurrentSite: (site: TSite | undefined) => void;
}

export const useCurrentSiteStore = create<ISiteStore>(
  (set) => ({
    currentSite: undefined,
    setCurrentSite: (site) => set((state) => ({...state, currentSite: site })),
  })
)
