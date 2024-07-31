'use client';

import { ProgressCircle } from '@tremor/react';

export default function ProgressChart() {
  return (
    <div className="">
      <ProgressCircle
        radius={120}
        strokeWidth={16}
        color="violet-800"
        className="bg-white rounded-full"
        value={85}
      >
        <ProgressCircle
          value={77}
          radius={100}
          strokeWidth={16}
          color="violet-600"
        >
          <ProgressCircle
            value={66}
            radius={80}
            strokeWidth={16}
            color="violet-400"
          >
            <div className="felx felx-col items-center p-4">
              <p className="font-normal text-sm text-gray-500">active users</p>
              <h3 className="font-semibold text-2xl text-center text-gray-900">
                1,000
              </h3>
            </div>
          </ProgressCircle>
        </ProgressCircle>
      </ProgressCircle>
    </div>
  );
}
