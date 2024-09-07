'use client'

import { TMedia } from "@/store/media";
import { useMemo } from "react";

export function MediaItem({media}: {media: TMedia}) {

  const mediaRenderer = useMemo(
    () => {
      switch(media.mime_type) {
        case 'image/jpeg':
        case 'image/png':
        case 'image/gif':
        case 'image/svg':
        case 'image/tiff':
        case 'image/webp':
          return <img loading="lazy" src={media.source_url} className="w-full h-full object-contain object-center" />
        case 'video/mp4':
          return <video autoPlay={false} preload="metadata" src={media.source_url} className="w-full h-[300px]" controls />
        default:
          return <div>Unsupported media type</div>
      }
    },
    [media]
  )

  const handleMediaExternalOpen = () => {
    window.open(media.source_url, '_blank')
  }

  const handlePostExternalOpen = () => {
    window.open(media.link, '_blank')
  }

  return (
    <div key={media.id} className="m-4 border border-zinc-700 rounded">
      <div className="h-[300px]">
        {mediaRenderer}
      </div>
      <div className="flex items-center border-t p-2 border-inherit gap-2">
        <p className="truncate flex-1 text-xs text-zinc-300">{media.title.rendered}</p>
        <button onClick={handlePostExternalOpen}>🌎</button>
        <button onClick={handleMediaExternalOpen}>🔗</button>
      </div>
    </div>
  )
}