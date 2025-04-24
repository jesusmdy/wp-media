import { useMediaFilters } from "@/store/filters";
import { availableFilters } from "@/utils/filters";
import _ from "lodash";
import { useEffect, useMemo, useState } from "react";

export default function StatusFilter() {
  const filters = useMediaFilters().filters;
  const addFilter = useMediaFilters().addFilter;

  const filter = filters[availableFilters.status.label];

  return (
    <div className="w-full flex-1">
      <select
        className="bg-zinc-800 border border-zinc-700 w-full px-2 py-1 rounded"
        defaultValue={filter}
        value={filter}
        onChange={(e) =>
          addFilter(availableFilters.status.label, e.target.value)
        }
      >
        {_.map(availableFilters.status.values, ({ label, value }) => (
          <option value={value}>{label}</option>
        ))}
      </select>
    </div>
  );
}
