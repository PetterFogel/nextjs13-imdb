"use client";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { usePathname, useSearchParams } from "next/navigation";
import SearchPanel from "../search-panel/SearchPanel";
import Link from "next/link";

const MobileMenu = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);

  const closeDialog = () => setIsOpen(false);
  const openDialog = () => setIsOpen(true);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname, searchParams]);

  return (
    <>
      <button
        onClick={openDialog}
        aria-label="Open mobile menu"
        className="flex items-center justify-center md:hidden">
        <Bars3Icon className="h-6 text-neutral-400" />
      </button>
      <Transition show={isOpen}>
        <Dialog onClose={closeDialog} className="relative z-50">
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="opacity-0 backdrop-blur-none"
            enterTo="opacity-100 backdrop-blur-[.5px]"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="opacity-100 backdrop-blur-[.5px]"
            leaveTo="opacity-0 backdrop-blur-none">
            <div className="fixed inset-0 bg-grayDark" aria-hidden="true" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="translate-x-[-100%]"
            enterTo="translate-x-0"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-[-100%]">
            <Dialog.Panel className="fixed bottom-0 left-0 right-0 top-0 flex h-full w-full flex-col bg-grayDark pb-6 ">
              <div className="space-y-4 p-4">
                <button
                  className="text-neutral-400"
                  onClick={closeDialog}
                  aria-label="Close mobile menu">
                  <XMarkIcon className="h-8" />
                </button>

                <SearchPanel />
                <ul className="flex w-full flex-col">
                  <li className="py-2 text-xl text-neutral-400 transition-colors hover:text-white">
                    <Link href={"/explore"} onClick={closeDialog}>
                      Explore
                    </Link>
                  </li>
                  <li className="py-2 text-xl text-neutral-400 transition-colors hover:text-white">
                    <Link href={"/watchlist"} onClick={closeDialog}>
                      Watchlist
                    </Link>
                  </li>
                </ul>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
};

export default MobileMenu;
