'use client';

import { ProgressCircle } from '@tremor/react';
import { ProgressChartProps } from 'types/interface';

export default function ProgressChart({ radio, width }: ProgressChartProps) {
  return (
    <div className="">
      <ProgressCircle
        radius={radio[0]}
        strokeWidth={width}
        color="violet-800"
        className="bg-white rounded-full"
        value={85}
      >
        <ProgressCircle
          radius={radio[1]}
          strokeWidth={width}
          color="violet-600"
          value={77}
        >
          <ProgressCircle
            radius={radio[2]}
            strokeWidth={width}
            color="violet-400"
            value={66}
          >
            <div className="hidden sm:flex sm:flex-col items-center p-4">
              <p className="font-normal text-[10px] lg:text-sm text-gray-500">
                active users
              </p>
              <h3 className="font-semibold text-lg lg:text-2xl text-center text-gray-900">
                1,000
              </h3>
            </div>
            <p className="text-[10px] text-gray-800 sm:hidden">1,000</p>
          </ProgressCircle>
        </ProgressCircle>
      </ProgressCircle>
    </div>
  );
}
