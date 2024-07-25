'use client';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

export default function AppButton() {
  return (
    <div className="">
      <div
        key="holis"
        className="group relative flex gap-x-2 rounded-lg border-1 items-center justify-start border-gray-300 bg-black shadow-sm max-w-40 h-12"
      >
        {/* <div className=" flex h-11 w-11 ml-1.5 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"> */}
        {/* </div> */}
        <QuestionMarkCircleIcon className="mt-1 ml-1.5 size-4 text-gray-600 group-hover:text-indigo-600"></QuestionMarkCircleIcon>
        {/* <img
          alt=""
          src="https://i.pinimg.com/originals/5e/67/1c/5e671cbe6457e88c59d9f82b8270749d.jpg"
          className="ml-1.5 h-9 text-gray-600 group-hover:text-indigo-600 items-center"
        /> */}
        <div className="flex flex-col">
          <a href={'2'} className="font-medium text-white text-tiny">
            {'Download on The'}
          </a>
          <p className="text-white font-medium text-base py-0">{'App Store'}</p>
        </div>
      </div>
    </div>
  );
}
