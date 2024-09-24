import { TSite } from "@/store/sites";
import _ from "lodash";
import { SiteMenu } from "../header/siteMenu";
import { PageControls } from "../header/pageControls";
import BookmarkLink from "./media/bookmarkLink";
import AddButton from "./site/add";

export default function SiteHeader({ site }: { site: TSite }) {
  return (
    <div className="border-b border-inherit border-zinc-700 flex p-4 items-center gap-2 sticky top-0 bg-black/90 backdrop-blur-sm z-20">
      {site && <SiteMenu site={site} />}
      <AddButton />
      <div className="flex-1"></div>
      <BookmarkLink />
    </div>
  );
}
