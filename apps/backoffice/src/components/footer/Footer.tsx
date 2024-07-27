'use client';

import {
  PopoverPanel,
  PopoverGroup,
  PopoverButton,
  Popover,
} from '@headlessui/react';
import AppButton from './AppButton';
import { apps, sectionFooter } from '@/constants/constats';

export default function Footer() {
  return (
    // <div className="bg-white">
    <div className="mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-x-8 gap-y-10 py-16">
        <div className="row-start-1 lg:col-span-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-20 gap-y-10 text-sm">
          {sectionFooter.map((section, key) => (
            <div key={key}>
              <p
                id={`${section.name}-heading`}
                className="font-[550] text-gray-900"
              >
                {section.name}
              </p>
              <ul
                role="list"
                aria-labelledby={`${section.name}-heading`}
                className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
              >
                {section.items.map((item) => (
                  <li key={item.name} className="flex gap-x-2">
                    <a
                      href={item.href}
                      className="font-[570] text-secondaryColor hover:text-primaryColor"
                    >
                      {item.name}
                    </a>
                    {item.new && (
                      <div className="flex leading-none items-center border-[1.5px] border-buttonColor-100 text-secondaryColor font-medium rounded-xl text-[10px] px-1.5 py-0">
                        New
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="w-full lg:hidden">
            <div className="flex flex-col gap-y-2 w-fit">
              <p
                id="Get the app-heading"
                className="font-[550] text-gray-900 text-sm "
              >
                Get the app
              </p>
              <div className="grid grid-row-2 gap-y-4 mt-2 sm:mt-1.5">
                {apps.map((app, key) => (
                  <div key={key} className="lg:w-[138px]">
                    <AppButton
                      name={app.name}
                      logoUrl={app.logoUrl}
                      subtitle={app.subtitle}
                    ></AppButton>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="justify-end w-full hidden lg:flex">
          <div className="flex flex-col gap-y-2 w-fit">
            <p
              id="Get the app-heading"
              className="font-[550] text-gray-900 text-sm"
            >
              Get the app
            </p>
            <div className="grid grid-row-2 gap-y-4 mt-2 sm:mt-1.5">
              {apps.map((app, key) => (
                <div key={key} className="lg:w-[138px]">
                  <AppButton
                    name={app.name}
                    logoUrl={app.logoUrl}
                    subtitle={app.subtitle}
                  ></AppButton>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}
