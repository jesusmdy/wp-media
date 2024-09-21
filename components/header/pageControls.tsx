import { useCurrentSiteStore } from "@/store/site";
import { useSiteNavigation } from "@/store/siteNavigation";
import { Button } from "@headlessui/react";
import { useRouter } from "next/navigation";

function ChevronRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m8.25 4.5 7.5 7.5-7.5 7.5"
      />
    </svg>
  );
}

function ChevronLeft() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 19.5 8.25 12l7.5-7.5"
      />
    </svg>
  );
}

export function PageControls() {
  const { page, setPage } = useSiteNavigation();
  const { currentSite } = useCurrentSiteStore();
  const router = useRouter();

  const handleNext = () => {
    setPage(String((prevPage: number) => prevPage + 1));
    router.push(`/site/${currentSite?.id}/page/${page + 1}`);
  };

  const handlePrevious = () => {
    if (page > 1) {
      setPage(String((prevPage: number) => prevPage - 1));
      router.push(`/site/${currentSite?.id}/page/${page - 1}`);
    }
  };

  return (
    <div className="flex items-center z-10 border rounded-lg border-inherit">
      <Button
        onClick={handlePrevious}
        disabled={page === 1}
        className="inline-flex items-center gap-2 rounded-l-lg py-1.5 px-3 text-sm/6 font-semibold text-white data-[hover]:bg-zinc-900 disabled:opacity-50 border-r border-inherit"
      >
        <ChevronLeft />
      </Button>
      <Button
        onClick={handleNext}
        className="inline-flex items-center gap-2 rounded-r-lg py-1.5 px-3 text-sm/6 font-semibold text-white data-[hover]:bg-zinc-900"
      >
        <ChevronRight />
      </Button>
    </div>
  );
}
