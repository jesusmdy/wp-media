import { useCurrentSiteStore } from "@/store/site";
import { useSiteNavigation } from "@/store/siteNavigation";
import { TSite } from "@/store/sites";
import { useRouter } from "next/navigation";

function PageControls() {
  const {page, setPage} = useSiteNavigation()
  const {currentSite} = useCurrentSiteStore()
  const router = useRouter()

  const handleNext = () => {
    setPage(String((prevPage: number) => prevPage + 1))
    router.push(`/site/${currentSite?.id}/page/${page + 1}`)
  }

  const handlePrevious = () => {
    if (page > 1) {
      setPage(String((prevPage: number) => prevPage - 1))
      router.push(`/site/${currentSite?.id}/page/${page - 1}`)
    }
  }

  return (
    <div className="flex items-center gap-4 z-10">
      <button className="rounded px-4 py-1 bg-zinc-900 text-sm font-semibold text-zinc-300 disabled:text-zinc-600" onClick={handlePrevious} disabled={page === 1}>Previous</button>
      <button className="rounded px-4 py-1 bg-zinc-900 text-sm font-semibold text-zinc-300 disabled:text-zinc-600" onClick={handleNext}>Next</button>
    </div>
  )
}

export default function SiteHeader({site}: {site: TSite}) {
  return (
    <div className="border-b border-inherit border-zinc-700 flex p-4 items-center gap-2 sticky top-0 bg-black/90 backdrop-blur-sm">
      <div className="flex items-center flex-1 gap-2">
        <p>🔒</p>
        <a href={site.url} target="_blank" className="block py-2 px-4 text-zinc-300 font-semibold rounded bg-zinc-900 text-xs">{site.url}</a>
      </div>
      <PageControls />
    </div>
  )
}