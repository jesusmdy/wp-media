import { useCurrentSiteStore } from "@/store/site";
import { useSiteNavigation } from "@/store/siteNavigation";
import Link from "next/link";

function BookmarkListIcon() {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9"
      />
    </svg>
  );
}

export default function BookmarkLink() {
  const { currentSite } = useCurrentSiteStore();
  const { page } = useSiteNavigation();

  if (!currentSite || !page) return null;
  return (
    <Link
      href={`/site/${currentSite.id}/page/${page}/saved`}
      className="size-8 border rounded flex items-center justify-center border-zinc-700 text-zinc-400"
    >
      <BookmarkListIcon />
    </Link>
  );
}
