import _ from "lodash";
import { create } from "zustand";

type TFilter = {
  label: string;
  value: string;
};

interface IMediaFilters {
  filters: Record<string, any>;
  addFilter: (label: string, value: any) => void;
  removeFilter: (filter: string) => void;
}

export const useMediaFilters = create<IMediaFilters>((set) => ({
  filters: {
    per_page: 50,
  },
  addFilter: (label, value) =>
    set((state) => {
      if (_.isEmpty(value)) {
        state.removeFilter(label);
        return state;
      } else {
        return {
          filters: {
            ...state.filters,
            [label]: value,
          },
        };
      }
    }),
  removeFilter: (filter) =>
    set((state) => {
      let filters = state.filters;
      delete filters[filter];
      return { filters };
    }),
}));
