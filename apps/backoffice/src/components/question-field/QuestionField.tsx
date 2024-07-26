'use client';

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/24/outline';

export default function QuestionField() {
  return (
    <div className="w-full px-6 sm:px-0 sm:w-[62%]">
      <Disclosure as="div" className="p-6" defaultOpen={true}>
        <div className="border-b border-gray-200 pb-6">
          <DisclosureButton className="group flex w-full items-center justify-between">
            {({ open }) => (
              <>
                <span className="text-sm/6 lg:text-base font-medium text-gray-900 ">
                  Is there a free trial available?
                </span>
                {open ? (
                  <MinusCircleIcon className="size-6 text-gray-400" />
                ) : (
                  <PlusCircleIcon className="size-6 text-gray-400" />
                )}
              </>
            )}
          </DisclosureButton>
          <DisclosurePanel className="mt-2 text-sm text-gray-500 lg:text-base pr-5">
            Yes, you can try us for free for 30 days. If you want, we'll provide
            you with a free, personalized 30-minute onboarding call to get you
            up and running as soon as possible.
          </DisclosurePanel>
        </div>
      </Disclosure>
    </div>
  );
}
