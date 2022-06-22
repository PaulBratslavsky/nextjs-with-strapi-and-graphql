/* This example requires Tailwind CSS v2.0+ */
import { useState } from "react";
import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  MenuIcon,
  UsersIcon,
} from "@heroicons/react/outline";
import Header from "../Header";

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
        {/* Static sidebar for desktop */}
        <div className="hidden md:flex md:w-96 md:flex-col md:fixed md:inset-y-0">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              {logo && (
                <div className="flex items-center flex-shrink-0 px-4">
                  <h2>logo here</h2>
                </div>
              )}
              {sidebar}
            </div>
            {footer && (
              <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
                {footer}
              </div>
            )}
          </div>
        </div>
        <div className="md:pl-96 flex flex-col flex-1">
          <div className="sticky top-0 z-10 md:hidden p-1 sm:p-3">{header}</div>
          <main className="flex-1">
            <div className="py-6">
              <div className="hidden md:block mx-auto px-4 sm:px-6 md:px-8">
                {header}
              </div>
              <div className=" mx-auto px-4 sm:px-6 md:px-8">
                {content || children && children || content}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
