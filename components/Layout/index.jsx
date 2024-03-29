/* This example requires Tailwind CSS v2.0+ */
import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Layout({
  logo,
  header,
  sidebar,
  content,
  footer,
  children,
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 md:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 flex z-40">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex-1 flex flex-col max-w-xs w-full bg-base-200">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                      <button
                        type="button"
                        className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex-1 h-0 pb-4 overflow-y-auto">
                    {sidebar(setSidebarOpen)}
                  </div>
                  { footer && <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
                    {footer}
                  </div> }
                </Dialog.Panel>
              </Transition.Child>
              <div className="flex-shrink-0 w-14">
                {/* Force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>
        {/* Static sidebar for desktop */}
        <div className="hidden md:flex md:w-96 md:flex-col md:fixed md:inset-y-0">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex-1 flex flex-col min-h-0 border-r border-base-100 bg-base-200">
            <div className="flex-1 flex flex-col pb-4 overflow-y-auto">
              {logo && (
                <div className="flex items-center flex-shrink-0 px-4">
                  <h2>logo here</h2>
                </div>
              )}
              {sidebar(setSidebarOpen)}
            </div>
            {footer && (
              <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
                {footer}
              </div>
            )}
          </div>
        </div>
        <div className="md:pl-96 flex flex-col flex-1">
          <div className="sticky top-0 z-10 md:hidden p-1 sm:p-3">{header(setSidebarOpen)}</div>
          <main className="flex-1">
            <div className="py-6">
              <div className="hidden md:block mx-auto px-4 sm:px-6 md:px-8">
                {header(setSidebarOpen)}
              </div>
              <div className=" mx-auto px-4 sm:px-6 md:px-8 bg-base-100">
                {content || (children && children) || content}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
