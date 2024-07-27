'use client';

import CustomButton from '../custom-button/CustomButton';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

export default function Input() {
  return (
    <div className="flex max-w-2xl gap-x-6 px-5 mx-auto items-center">
      <label htmlFor="email-address" className="sr-only">
        Email address
      </label>
      <div className="relative flex w-full items-center">
        <QuestionMarkCircleIcon className="w-4 cursor-pointer text-blue-gray-500 items-center justify-center absolute right-3 text-gray-500 mr-0.5" />
        <input
          id="email-address"
          name="email"
          type="email"
          required
          placeholder="Enter your email"
          autoComplete="email"
          className="min-w-0 flex-auto rounded-md px-3.5 py-2.5 border border-gray-300 text-gray-700 shadow-sm  ring-inset focus:ring-2 focus:ring-inset focus:ring-buttonColor-100 sm:text-sm sm:leading-6"
        />
        <p className="absolute mt-20 pt-2 text-bgColor font-light text-sm items-start">
          We care about your data in our{' '}
          <span className="underline">privacy policy</span>.
        </p>
      </div>
      <div className="hidden sm:flex">
        <CustomButton title="Get Started" custom={true}></CustomButton>
      </div>
    </div>
  );
}
