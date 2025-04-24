import { CloseIcon, SearchIcon } from "@/components/icons";
import { useMediaFilters } from "@/store/filters";
import { availableFilters } from "@/utils/filters";
import _ from "lodash";

export default function SearchFilter() {
  const filters = useMediaFilters().filters;
  const addFilter = useMediaFilters().addFilter;

  const filter = filters[availableFilters.search.label];

  return (
    <div className="w-full flex-1 border rounded-lg border-zinc-700 bg-zinc-800 p-2 text-xs flex text-zinc-300 gap-2">
      <SearchIcon className="size-4" />
      <input
        value={filter}
        placeholder="Search"
        className="flex-1 outline-0 bg-transparent"
        onChange={(e) =>
          addFilter(availableFilters.search.label, e.target.value)
        }
      />
      {!_.isEmpty(filter) && (
        <button
          onClick={() => addFilter(availableFilters.search.label, void null)}
          className="text-zinc-300"
        >
          <CloseIcon className="size-4" />
        </button>
      )}
    </div>
  );
}
