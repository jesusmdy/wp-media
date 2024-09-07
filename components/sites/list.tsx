"use client";

import { TSite, useSiteStore } from "@/store/sites";
import Controls from "./add";
import _ from "lodash";
import Link from "next/link";
import { useMemo } from "react";
import { useCurrentSiteStore } from "@/store/site";

function Site({site}: {site: TSite}) {
  const {currentSite} = useCurrentSiteStore()
  const isCurrent = useMemo(
    () => site.id === currentSite?.id,
    [site, currentSite]
  )
  return (
    <div className={`flex items-center w-full ${isCurrent && 'bg-zinc-900'}`}>

      <Link href={`/site/${site.id}`} className="text-xs font-semibold text-zinc-300 flex-1 py-4 truncate">{site.url}</Link>
      <Link href={`/site/${site.id}`} className="text-xs font-semibold text-zinc-300 px-4 py-2 bg-zinc-700 rounded">Visit</Link>
    </div>
  )
}

export function SiteList() {
  const sites = useSiteStore().sites

  const siteList = useMemo(() => _.reverse(sites), [sites])
  return (
    <div className="p-4 flex flex-col">
      {
        _.map(
          _.reverse(siteList),
          (site) => <Site key={site.id} site={site} />
        )
      }
    </div>
  )
}

export default function Sites() {
  return (
    <div className="border w-full max-w-xl border-zinc-800 bg-zinc-900 rounded-md overflow-auto">
      <Controls />
      <SiteList />
    </div>
  );
}
