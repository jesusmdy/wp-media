'use client'
import { useMediaStore } from "@/store/media"
import _ from "lodash"
import { MediaItem } from "./item"
import { PropsWithChildren } from "react"

export function MediaGridLayout(props: PropsWithChildren) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 mb-12 p-4 gap-4">{props.children}</div>
  )
}

export default function MediaGrid() {
  const {media: mediaList, loading} = useMediaStore()

  if(loading) return <div>Loading...</div>

  return (
    <MediaGridLayout>
      {
        _.map(
          mediaList,
          media => <MediaItem media={media} />
        )
      }
    </MediaGridLayout>
  )
}