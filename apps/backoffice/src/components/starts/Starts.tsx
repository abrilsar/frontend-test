'use client';

import { StarIcon } from '@heroicons/react/20/solid';
import { StartsProps } from 'types/interface';

export default function Starts({ classNameCustom, number }: StartsProps) {
  return (
    <div className={`flex felx-col gap-x-1 ${classNameCustom}`}>
      {Array.from({ length: number }, (_, index) => (
        <StarIcon key={index} className="size-4 sm:size-5" />
      ))}
    </div>
  );
}
