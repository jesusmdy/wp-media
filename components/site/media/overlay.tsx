
import { TMedia } from "@/store/media";
import { useHover } from "@uidotdev/usehooks";
import classNames from "classnames";
import { PropsWithChildren, ReactNode } from "react";
import BookmarButton from "./bookmark";

interface IMediaOverlay extends PropsWithChildren {
  media: TMedia;
}

const OpenIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
</svg>
)
const ViewIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>
)

function OverlayWrapper({isHover, children}: {isHover: boolean, children: ReactNode}) {
  return (
    <div className={
      classNames(
        "absolute top-0 left-0 w-full flex items-center p-2 bg-black/50 z-10 text-zinc-300 gap-2 rounded-t-md",
        "opacity-0 transition-all duration-75",
        {
          "opacity-100 pointer-events-all": isHover,
        }
      )
    }>
      {children}
    </div>
  )
}

const MediaOverlay = ({ media, children }: IMediaOverlay) => {
  const [ref, isHover] = useHover()
  return (
    <div ref={ref} className="h-[250px] relative">
      <OverlayWrapper isHover={isHover}>
        <div className="flex-1"></div>
        <a href={media.link} target="_blank"><OpenIcon /></a>
        <a href={media.source_url} target="_blank"><ViewIcon /></a>
        <BookmarButton media={media} />
      </OverlayWrapper>
      {children}
    </div>
  );
};

export default MediaOverlay;
