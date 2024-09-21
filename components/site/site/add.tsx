import Controls from "@/components/sites/add";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

function PlusCircleIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
  )
}

export default function AddButton() {
  return (
    <Popover>
      <PopoverButton className="size-8 flex items-center justify-center rounded-lg hover:bg-indigo-500 hover:text-indigo-50 text-indigo-500">
        <PlusCircleIcon />
      </PopoverButton>
      <PopoverPanel anchor="bottom start" transition className="z-20">
        <div className="w-[400px] bg-zinc-900 rounded-lg border border-zinc-700 z-20">
          <Controls />
        </div>
      </PopoverPanel>
    </Popover>
  );
}
