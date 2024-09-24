'use client'

import SiteHeader from "@/components/site/header";
import { SiteList } from "@/components/sites/list";
import GlobalSpinner from "@/components/spinner";
import { useCurrentSiteStore } from "@/store/site";
import { TSite, useSiteStore } from "@/store/sites";
import _ from "lodash";
import { usePathname, useRouter } from "next/navigation";
import { Fragment, PropsWithChildren, useEffect, useState } from "react";

interface props extends PropsWithChildren {
  params: {
    siteId: string;
  }
}

export default function SiteLayout({children, params}: props) {
  const siteId = params.siteId
  const {currentSite, setCurrentSite} = useCurrentSiteStore()
  const {sites} = useSiteStore()
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(
    () => {
      const site = _.find(sites, {id: siteId})
      if (site) {
        setCurrentSite(site)
      }
      setIsLoading(false)
    },
    []
  )

  useEffect(
    () => {
      if (currentSite && pathname === `/site/${currentSite.id}`) {
        router.push(`/site/${currentSite.id}/page/1`)
      }
    },
    [currentSite, pathname]
  )

  if (isLoading) return <GlobalSpinner />

  return (
    <div className="w-screen h-screen flex flex-col">
      <SiteHeader site={currentSite as TSite} />
      {children}
    </div>
  )
}