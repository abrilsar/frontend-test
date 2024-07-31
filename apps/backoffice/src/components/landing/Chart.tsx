'use client';

import { LineChart, AreaChart } from '@tremor/react';
import ProgressChart from './ProgressChart';

const chartdata = [
  {
    date: 'Jan',
    model1: 10,
    model2: 60,
    model3: 100,
  },
  {
    date: 'Feb',
    model1: 15,
    model2: 50,
    model3: 123,
  },
  {
    date: 'Mar',
    model1: 25,
    model2: 58,
    model3: 117,
  },
  {
    date: 'Apr',
    model1: 37,
    model2: 64,
    model3: 124,
  },
  {
    date: 'May',
    model1: 30,
    model2: 72,
    model3: 137,
  },
  {
    date: 'Jun',
    model1: 34,
    model2: 100,
    model3: 123,
  },
  {
    date: 'Jul',
    model1: 40,
    model2: 115,
    model3: 134,
  },
  {
    date: 'Aug',
    model1: 47,
    model2: 110,
    model3: 145,
  },
  {
    date: 'Sep',
    model1: 52,
    model2: 119,
    model3: 137,
  },
  {
    date: 'Oct',
    model1: 48,
    model2: 105,
    model3: 141,
  },
  {
    date: 'Nov',
    model1: 50,
    model2: 100,
    model3: 150,
  },
  {
    date: 'Dic',
    model1: 100,
    model2: 108,
    model3: 135,
  },
];
export default function Chart() {
  return (
    <div className="md:px-3">
      <h3 className="text-sm sm:text-lg font-semibold text-gray-900 lg:pt-3 lg:pb-3">
        User over time
      </h3>
      <AreaChart
        className="relative h-44 sm:h-64 lg:h-80 w-full text-xs text-gray-400 opacity-60"
        data={chartdata}
        index="date"
        categories={['model1', 'model2', 'model3']}
        colors={['violet-900', 'violet-400', 'purple-600']}
        yAxisWidth={10}
        showLegend={false}
        showYAxis={false}
        showTooltip={false}
        showAnimation={false}
      />
    </div>
  );
}
