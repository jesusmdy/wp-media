import { TSite, useSiteStore } from "@/store/sites";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import classNames from "classnames";
import _ from "lodash";
import Link from "next/link";

function ChevronDownIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m19.5 8.25-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

function CheckIcon() {
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
        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  );
}

function Item({ site, currentSite }: { site: TSite; currentSite: TSite }) {
  const siteDetails = new URL(site.url);
  const isCurrent = site.id === currentSite.id;

  return (
    <MenuItem>
      <Link
        className={classNames(
          "data-[focus]:bg-zinc-700 px-4 py-2 flex items-center rounded-lg gap-2",
          isCurrent && "bg-zinc-800 text-blue-500"
        )}
        href={`/site/${site.id}/page/1`}
      >
        <img
          className="size-6 bg-zinc-700 rounded-md"
          src={`${site.url}/favicon.ico`}
        />
        <span className="flex-1">{siteDetails.host}</span>
        {isCurrent && <CheckIcon />}
      </Link>
    </MenuItem>
  );
}

function AddItem() {
  return (
    <MenuItem>
      <Link
        className={classNames(
          "data-[focus]:bg-zinc-700 px-4 py-2 flex items-center rounded-lg gap-2"
        )}
        href="/"
      >
        <span className="flex-1">Add new site</span>
      </Link>
    </MenuItem>
  );
}

export function SiteMenu({ site }: { site: TSite }) {
  const sites = useSiteStore().sites;
  const siteDetails = new URL(site.url);

  return (
    <div className="flex items-center gap-2 rounded-lg border border-transparent hover:border-zinc-700 hover:bg-zinc-800 transition-all duration-50 text-zinc-400 px-1">
      <a href={site.url} target="_blank">
        <img
          className="size-6 bg-zinc-700 rounded-md"
          src={`${site.url}/favicon.ico`}
        />
      </a>
      <Menu>
        <MenuButton className="flex items-center gap-2 px-2 py-1 rounded-lg">
          <span>{siteDetails.host}</span>
          <ChevronDownIcon />
        </MenuButton>
        <MenuItems
          anchor="bottom"
          className="bg-zinc-900 border border-zinc-700 rounded-xl w-1/2 md:w-1/5 text-zinc-400 p-4 flex flex-col gap-4 z-20"
        >
          <AddItem />
          {_.map(sites, (item) => (
            <Item key={item.id} site={item} currentSite={site} />
          ))}
        </MenuItems>
      </Menu>
    </div>
  );
}
