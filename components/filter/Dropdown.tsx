import { IFilterItem } from "@/types/filterItems";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import FilterItem from "./FilterItem";

type Props = {
  filterItems: IFilterItem[];
};

const Dropdown = ({ filterItems }: Props) => {
  const [selected, setSelected] = useState(filterItems[0]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="relative mt-1">
        <Listbox.Button className="relative w-full cursor-pointer rounded-lg px-4 py-2 pl-3 pr-10 text-left text-sm tracking-wider shadow-md ring-1 ring-neutral-400/50 focus:outline-none focus-visible:ring-opacity-75 focus-visible:ring-offset-1  sm:text-sm">
          <span className="block truncate text-neutral-300">
            {selected.title}
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronDownIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-grayDark py-3 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filterItems.map((item, i) => (
              <FilterItem key={i} filterItem={item} />
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

export default Dropdown;
