'use client'
import { useSiteStore } from "@/store/sites";
import _ from "lodash";
import { PropsWithChildren, useEffect, useState } from "react";
import GlobalSpinner from "./spinner";

export default function Provider({children}: PropsWithChildren) {
  const [isLoading, setIsLoading] = useState(true)
  const addSite = useSiteStore().addSite
  const sites = useSiteStore().sites

  useEffect(
    () => {
      const storedSites = localStorage.getItem('sites')
      if (storedSites) {
        const sites = JSON.parse(storedSites)
        _.forEach(sites, addSite)
      }
      setIsLoading(false)
    },
    []
  )

  useEffect(
    () => {
      localStorage.setItem('sites', JSON.stringify(sites))
    },
    [sites]
  )

  if (isLoading) return <GlobalSpinner />
  return children
}