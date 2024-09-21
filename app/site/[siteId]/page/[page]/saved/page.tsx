'use client'

import { MediaGridLayout } from "@/components/site/media/grid";
import { MediaItem } from "@/components/site/media/item";
import { useBookmarksStore } from "@/store/bookmarks";
import _ from "lodash";
import { Fragment } from "react";

export default function SavedPage() {
  const { bookmarks } = useBookmarksStore();
  return (
    <MediaGridLayout>
      {_.map(bookmarks, (bookmark) => (
        <MediaItem key={bookmark.id} media={bookmark} />
      ))}
    </MediaGridLayout>
  );
}
