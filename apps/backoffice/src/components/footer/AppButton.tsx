'use client';

import { AppButtonProps } from 'types/interface';

export default function AppButton({ name, logoUrl, subtitle }: AppButtonProps) {
  return (
    <div className="flex flex-row cursor-pointer gap-x-1 rounded-md border-2 items-center justify-start border-gray-100 bg-black shadow-md py-1.5 pl-1.5 pr-2 sm:p-2 lg:pr-0.5 ">
      <img alt="" src={logoUrl} className="size-4" />
      <div className="flex flex-col">
        <p className="leading-none font-normal text-white text-tiny">
          {subtitle}
        </p>
        <p className="leading-none text-white font-[450] sm:text-md py-0">
          {name}
        </p>
      </div>
    </div>
  );
}
