import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { MdClose } from "react-icons/md";
import { ISidebarSlideOverProps } from "@organisms/o-dashboard-mobile-sidebar-slideover/SidebarSlideOverProps.types";
import Sidebar from "@molecules/m-side-bar";

export default function SidebarSlideOver({
  openSidebar,
  toggleOpenSidebar,
  children,
}: ISidebarSlideOverProps) {
  return (
    <Transition show={openSidebar} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-scroll"
        onClose={toggleOpenSidebar}
      >
        {/* Background overlay */}
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </Transition.Child>

        {/* Sidebar container */}
        <div className="fixed inset-y-0 left-0 flex">
          <Transition.Child
            as={Fragment}
            enter="transform transition ease-in-out duration-500 sm:duration-700"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition ease-in-out duration-500 sm:duration-700"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative w-screen max-w-md">
              {/* Close button */}
              <div className="absolute  left-[10rem] top-0  flex pt-4 pr-2 sm:pr-4">
                <button
                  type="button"
                  className="rounded-md bg-white text-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                  onClick={toggleOpenSidebar}
                >
                  <span className="sr-only">Close panel</span>
                  <MdClose className="h-7 w-7" aria-hidden="true" />
                </button>
              </div>

              {/* Sidebar content */}
              <div className="flex h-full w-[7.25rem] flex-col bg-white py-0 shadow-xl">
                <div className="relative mt-0 overflow-y-auto overflow-x-hidden scrollbar-hide flex-1 px-0 sm:px-0">
                  {React.cloneElement(
                    children as React.ReactElement<typeof Sidebar | any>,
                    { toggleOpenSidebar }
                  )}
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
