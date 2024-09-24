"use client";

import { PreviousArrow } from "@/components/icons";
import { MediaGridLayout } from "@/components/site/media/grid";
import { MediaItem } from "@/components/site/media/item";
import { useBookmarksStore } from "@/store/bookmarks";
import { useCurrentSiteStore } from "@/store/site";
import { useSiteNavigation } from "@/store/siteNavigation";
import classNames from "classnames";
import _ from "lodash";
import Link from "next/link";

function GoBackButton() {
  const currentSite = useCurrentSiteStore().currentSite;
  const page = useSiteNavigation().page;
  const classList = classNames(
    "flex items-center gap-2 border px-4 py-2 rounded-full border-zinc-900 text-xs text-zinc-300",
    "hover:border-zinc-700 hover:bg-zinc-900"
  );
  if (currentSite)
    return (
      <Link href={`/site/${currentSite.id}/page/${page}`} className={classList}>
        <PreviousArrow />
        <span>Go back to site</span>
      </Link>
    );
  return (
    <Link href="/" className={classList}>
      <PreviousArrow />
      <span>Go back</span>
    </Link>
  );
}

function Header() {
  return (
    <div className="h-20 flex items-center px-4 gap-4">
      <GoBackButton />
      <h1 className="text-xl">Bookmarks</h1>
    </div>
  );
}

const BookmarksPage = () => {
  const { bookmarks } = useBookmarksStore();
  return (
    <div>
      <Header />
      <MediaGridLayout>
        {_.map(bookmarks, (bookmark) => (
          <MediaItem key={bookmark.id} media={bookmark} />
        ))}
      </MediaGridLayout>
    </div>
  );
};

export default BookmarksPage;
