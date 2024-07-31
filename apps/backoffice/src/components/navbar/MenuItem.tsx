'use client';

import { windowNavbar } from '@/constants/constats';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { ChevronDownIcon, PhoneIcon } from '@heroicons/react/20/solid';
import { MenuItemProps } from 'types/interface';

export default function MenuItem({ name, href, custom }: MenuItemProps) {
  const element = windowNavbar[name as keyof typeof windowNavbar] || {};
  return (
    <Popover className="relative">
      <PopoverButton className="inline-flex items-center gap-x-1 text-base font-semibold leading-2 text-gray-600">
        <span>{name}</span>
        {custom && <ChevronDownIcon aria-hidden="true" className="h-5 w-5" />}
      </PopoverButton>

      {custom && (
        <PopoverPanel
          transition
          className="absolute left-full z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
        >
          <div className="w-screen max-w-2xl flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            <div className=" grid grid-cols-2">
              <div className="px-4 py-5 row-start-1">
                {element.optionsNavbar.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex gap-x-2 rounded-lg px-2 py-3 hover:bg-gray-50"
                  >
                    <div className="flex size-8 flex-none items-start justify-center group-hover:bg-gray-50">
                      <item.icon
                        aria-hidden="true"
                        className="h-6 w-6 text-buttonColor-100 font-semibold"
                      />
                    </div>
                    <div className="">
                      <a
                        href={item.href}
                        className="font-semibold text-base text-gray-900"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-sm text-gray-600 pl-3">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-gray-50">
                <div className="group relative text-sm p-8">
                  <div className="aspect-h-9 aspect-w-16 overflow-hidden rounded-md bg-gray-100 ">
                    <img
                      alt="picture chinese"
                      src={element.imageUrl}
                      className="object-cover object-center w-full"
                    />
                  </div>
                  <div className="flex flex-col justify-center items-start pt-4">
                    <div className="mt-2 font-semibold text-base text-gray-800">
                      We've just released an update!
                    </div>
                    <p aria-hidden="true" className="mt-1 mr-1 text-gray-600">
                      Check out the all new dashboard view. Pages now load
                      faster.
                    </p>
                    <div className="flex gap-x-3 pt-3">
                      <div className="text-sm font-semibold text-gray-700 cursor-pointer">
                        Dismiss
                      </div>
                      <div className="text-sm font-semibold text-buttonColor-100 cursor-pointer">
                        Changelog
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* </div> */}
          </div>
        </PopoverPanel>
      )}
    </Popover>
  );
}
