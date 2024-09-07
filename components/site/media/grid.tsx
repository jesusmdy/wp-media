'use client'
import { useMediaStore } from "@/store/media"
import _ from "lodash"
import { MediaItem } from "./item"

export default function MediaGrid() {
  const {media: mediaList, loading} = useMediaStore()

  if(loading) return <div>Loading...</div>

  return (
    <div className="grid grid-cols-4 mb-12">
      {
        _.map(
          mediaList,
          media => <MediaItem media={media} />
        )
      }
    </div>
  )
}