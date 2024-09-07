'use client'
import { useCurrentSiteStore } from "@/store/site"
import { useRouter } from "next/navigation";
import { Fragment, useEffect } from "react";

export default function SitePage() {
  const currentSite = useCurrentSiteStore().currentSite
  
  if (!currentSite) return (
    <div>Not found</div>
  )

  return <Fragment />
}