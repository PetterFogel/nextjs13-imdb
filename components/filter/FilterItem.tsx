import { Listbox } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";
import { IFilterItem } from "@/types/filterItems";
import Link from "next/link";

type Props = {
  filterItem: IFilterItem;
};

const FilterItem = ({ filterItem }: Props) => {
  return (
    <Link href={filterItem.path}>
      <Listbox.Option
        className={({ active }) =>
          `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
            active ? "bg-amber-100 text-black" : "text-neutral-400"
          }`
        }
        value={filterItem}>
        {({ selected }) => (
          <>
            <span
              className={`block truncate ${
                selected ? "font-medium" : "font-normal"
              }`}>
              {filterItem.title}
            </span>
            {selected ? (
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                <CheckIcon className="h-5 w-5" aria-hidden="true" />
              </span>
            ) : null}
          </>
        )}
      </Listbox.Option>
    </Link>
  );
};

export default FilterItem;
