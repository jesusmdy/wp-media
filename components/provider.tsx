'use client'
import { useSiteStore } from "@/store/sites";
import _ from "lodash";
import { PropsWithChildren, useEffect, useState } from "react";
import GlobalSpinner from "./spinner";
import { useBookmarksStore } from "@/store/bookmarks";
import { useLocalStorage } from "@uidotdev/usehooks";

function BookmarksProvider(props: PropsWithChildren) {
  const {bookmarks} = useBookmarksStore()
  
  useEffect(
    () => {
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
    },
    [bookmarks]
  )

  return props.children
}

export default function Provider({children}: PropsWithChildren) {
  const [storedBookmarks, setStoredBookmarks] = useLocalStorage("bookmarks", null)
  console.log(storedBookmarks, 'stored bookmark')

  const [isLoading, setIsLoading] = useState(true)
  const addSite = useSiteStore().addSite
  const sites = useSiteStore().sites
  const {setBookmarks} = useBookmarksStore()

  useEffect(
    () => {
      const storedSites = localStorage.getItem('sites')
      if (storedSites) {
        const sites = JSON.parse(storedSites)
        _.forEach(sites, addSite)
      }
      const storedBookmarks = localStorage.getItem('bookmarks')
      if (storedBookmarks) {
        const bookmarks = JSON.parse(storedBookmarks)
        setBookmarks(bookmarks)
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
  return (
    <BookmarksProvider>{children}</BookmarksProvider>
  )
}