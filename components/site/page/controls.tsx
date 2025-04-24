"use client";
import { NextArrow, PreviousArrow } from "@/components/icons";
import { useCurrentSiteStore } from "@/store/site";
import { useSiteNavigation } from "@/store/siteNavigation";
import classNames from "classnames";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import {
  ButtonHTMLAttributes,
  FC,
  PropsWithChildren,
  PropsWithRef,
} from "react";

const ButtonElement = (
  props: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>,
) => (
  <button
    {...props}
    className={classNames(
      "flex items-center gap-2 px-4 py-2 rounded-full text-xs text-zinc-300",
      "border border-transparent hover:border-indigo-700",
      "bg-transparent hover:bg-indigo-900 hover:text-indigo-300",
      "transition-all duration-75",
    )}
  >
    {props.children}
  </button>
);

const PreviousButton = () => {
  const { page, setPage } = useSiteNavigation();
  const { currentSite } = useCurrentSiteStore();
  const router = useRouter();

  const handlePrevious = () => {
    if (page > 1) {
      setPage(String((prevPage: number) => prevPage - 1));
      router.push(`/site/${currentSite?.id}/page/${page - 1}`);
    }
  };

  return (
    <ButtonElement onClick={handlePrevious}>
      <PreviousArrow />
      <span>Previous</span>
    </ButtonElement>
  );
};
const NextButton = () => {
  const { page, setPage } = useSiteNavigation();
  const { currentSite } = useCurrentSiteStore();
  const router = useRouter();

  const handleNext = () => {
    setPage(String((prevPage: number) => prevPage + 1));
    router.push(`/site/${currentSite?.id}/page/${page + 1}`);
  };
  return (
    <ButtonElement onClick={handleNext}>
      <span>Next</span>
      <NextArrow />
    </ButtonElement>
  );
};

const PageControls: FC = () => {
  return (
    <div className="border-t border-zinc-700 p-2 flex items-center justify-center gap-4">
      <div className="flex-1"></div>
      <PreviousButton />
      <NextButton />
    </div>
  );
};

export default PageControls;
