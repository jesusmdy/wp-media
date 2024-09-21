"use client";

import { TMedia } from "@/store/media";
import { useMemo } from "react";
import MediaOverlay from "./overlay";
import { useToggle } from "@uidotdev/usehooks";

export function MediaItem({ media }: { media: TMedia }) {
  const [on, toggle] = useToggle()
  const mediaRenderer = useMemo(() => {
    switch (media.mime_type) {
      case "image/jpeg":
      case "image/png":
      case "image/gif":
      case "image/svg":
      case "image/tiff":
      case "image/webp":
        return (
          <img
            loading="lazy"
            src={media.source_url}
            className="w-full h-full object-contain object-center border rounded-md border-zinc-700"
            alt={media.alt_text}
          />
        );
      case "video/mp4":
        return (
          <video
            autoPlay={false}
            preload="metadata"
            src={media.source_url}
            className="w-full h-full border rounded-md border-zinc-700"
            controls
            muted
          />
        );
      default:
        return <div>Unsupported media type</div>;
    }
  }, [media]);

  const handleMediaExternalOpen = () => {
    window.open(media.link, "_blank");
  };

  return (
    <div key={media.id} className="m-1 mb-4">
      <MediaOverlay media={media}>{mediaRenderer}</MediaOverlay>
      <div className="flex items-center pt-2 border-inherit gap-2">
        {media.title && (
          <p className="truncate text-xs text-zinc-300">
            {media.title.rendered}
          </p>
        )}
      </div>
    </div>
  );
}
