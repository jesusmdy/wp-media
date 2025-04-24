import { SiteMenu } from "@/components/header/siteMenu";
import MediaTypeFilter from "./mediaType";
import OrderFilter from "./order";
import OrderByFilter from "./orderBy";
import PerPageFilter from "./perPage";
import SearchFilter from "./search";
import StatusFilter from "./status";
import { useCurrentSiteStore } from "@/store/site";
import BookmarkLink from "../media/bookmarkLink";
import AddButton from "../site/add";

export default function FilterList() {
  const site = useCurrentSiteStore().currentSite;
  return (
    <div className="flex flex-col h-full">
      <div className="p-2 border-b border-zinc-700 flex items-center">
        <div className="flex-1">{site && <SiteMenu site={site} />}</div>
        <AddButton />
      </div>
      <div className="flex flex-col gap-4 p-4">
        <SearchFilter />
        <PerPageFilter />
        <StatusFilter />
        <OrderFilter />
        <OrderByFilter />
        <MediaTypeFilter />
      </div>
      <div className="flex-1"></div>
      <div className="p-2 border-t border-zinc-700">
        <BookmarkLink />
      </div>
    </div>
  );
}
