"use client";

import PageControls from "@/components/site/page/controls";
import FilterList from "@/components/site/filters";
import GlobalSpinner from "@/components/spinner";
import { useCurrentSiteStore } from "@/store/site";
import { useSiteStore } from "@/store/sites";
import _ from "lodash";
import { usePathname, useRouter } from "next/navigation";
import { PropsWithChildren, useEffect, useState } from "react";

interface props extends PropsWithChildren {
  params: {
    siteId: string;
  };
}

export default function SiteLayout({ children, params }: props) {
  const siteId = params.siteId;
  const { currentSite, setCurrentSite } = useCurrentSiteStore();
  const { sites } = useSiteStore();
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const site = _.find(sites, { id: siteId });
    if (site) {
      setCurrentSite(site);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (currentSite && pathname === `/site/${currentSite.id}`) {
      router.push(`/site/${currentSite.id}/page/1`);
    }
  }, [currentSite, pathname]);

  if (isLoading) return <GlobalSpinner />;

  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="flex">
        <div className="size-2/12 sticky top-0 border-r border-zinc-700 bg-zinc-900 h-screen">
          <FilterList />
        </div>
        <div className="flex-1 flex flex-col h-screen">
          {children}

          <PageControls />
        </div>
      </div>
    </div>
  );
}
