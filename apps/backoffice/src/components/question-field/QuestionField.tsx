'use client';

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/24/outline';

interface QuestionFieldProps {
  title: string;
  description: string;
}
export default function QuestionField({
  title,
  description,
}: QuestionFieldProps) {
  return (
    <div className="w-full px-2 sm:px-0 sm:w-[78%] lg:w-[68%]">
      <Disclosure as="div" className="p-3 sm:py-4 lg:p-6" defaultOpen={false}>
        <div className="border-b border-gray-200 pb-6">
          <DisclosureButton className="group flex w-full items-center justify-between">
            {({ open }) => (
              <>
                <span className="text-sm/6 lg:text-lg font-medium text-gray-900 ">
                  {title}
                </span>
                {open ? (
                  <MinusCircleIcon className="size-6 text-gray-400" />
                ) : (
                  <PlusCircleIcon className="size-6 text-gray-400" />
                )}
              </>
            )}
          </DisclosureButton>
          <DisclosurePanel className="mt-2 text-sm text-gray-500 lg:text-base pr-8">
            {description}
          </DisclosurePanel>
        </div>
      </Disclosure>
    </div>
  );
}
