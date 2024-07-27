'use client';

import { ArrowRightIcon } from '@heroicons/react/24/outline';
import React from 'react';
interface CardProps {
  name: string;
  description: string;
  imageUrl: string;
  customClass?: React.ReactNode;
}
export default function Card({
  customClass,
  name,
  description,
  imageUrl,
}: CardProps) {
  return (
    <article className="flex max-w-xl flex-col items-start justify-between py-2 px-0">
      <div className="flex flex-col items-center">
        <div className="rounded-md border border-gray-200 bg-white p-2">
          {customClass ? (
            <div>{customClass}</div>
          ) : (
            <img alt={name} src={imageUrl} className="size-9" />
          )}
          {/* <CalendarDaysIcon aria-hidden="true" className="h-6 w-6 text-black" /> */}
        </div>
        <dt className="mt-4 font-semibold text-xl text-gray-900 text-center">
          {name}
        </dt>
        <dd className="mt-2 leading-7 text-base text-center text-gray-600">
          {description}
        </dd>
        <div className="inline-flex items-center gap-x-1 pt-2.5 text-base font-semibold leading-2 text-secondaryColor">
          <span>{customClass ? 'Learn More' : 'View integration'}</span>
          <ArrowRightIcon
            aria-hidden="true"
            className="size-5 pt-1 font-bold"
          />
        </div>
      </div>
    </article>
  );
}
