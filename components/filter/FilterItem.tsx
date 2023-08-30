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
          `relative cursor-pointer select-none px-4 py-2 text-neutral-300 ${
            active ? "underline underline-offset-4" : null
          }`
        }
        value={filterItem}>
        {({ selected }) => (
          <span
            className={`block truncate ${
              selected ? "font-medium" : "font-normal"
            }`}>
            {filterItem.title}
          </span>
        )}
      </Listbox.Option>
    </Link>
  );
};

export default FilterItem;
