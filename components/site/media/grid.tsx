"use client";
import { useMediaStore } from "@/store/media";
import _ from "lodash";
import { MediaItem } from "./item";
import { Fragment, PropsWithChildren } from "react";
import FilterList from "../filters";
import SkeletonItem from "./skeleton";
import PageControls from "../page/controls";

export function MediaGridLayout(props: PropsWithChildren) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 mb-12 p-4 gap-4 flex-1">
      {props.children}
    </div>
  );
}

export default function MediaGrid() {
  const { media: mediaList, loading } = useMediaStore();

  return (
    <div className="flex-1 overflow-auto">
      <MediaGridLayout>
        {loading
          ? _.map([1, 2, 3, 4, 5], (i) => <SkeletonItem key={i} />)
          : _.map(mediaList, (media) => <MediaItem media={media} />)}
      </MediaGridLayout>
    </div>
  );
}
