"use client";

import { fetcher } from "@/api/fetcher";
import { useMediaFilters } from "@/store/filters";
import { useMediaStore } from "@/store/media";
import { useCurrentSiteStore } from "@/store/site";
import { useSiteNavigation } from "@/store/siteNavigation";
import { toFilterObject } from "@/utils/filters";
import _, { map } from "lodash";
import { PropsWithChildren, useEffect } from "react";
import useSWR from "swr";

interface props extends PropsWithChildren {
  params: {
    page: number;
  };
}

export default function PageLayout({ children, params }: props) {
  const { currentSite } = useCurrentSiteStore();
  const { page, setPage } = useSiteNavigation();
  const { setMedia, setLoading } = useMediaStore();
  const filters = useMediaFilters().filters;

  const mediaQuery = new URLSearchParams({
    ...filters,
    page,
  } as Record<string, any>);

  const { data, error, isLoading } = useSWR(
    `${currentSite?.url}/wp-json/wp/v2/media?${mediaQuery}`,
    fetcher,
  );

  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading]);

  useEffect(() => {
    if (params.page !== page) {
      setPage(String(params.page));
    }
  }, []);

  useEffect(() => {
    if (data) {
      setMedia(data);
    }
  }, [data]);
  return children;
}
