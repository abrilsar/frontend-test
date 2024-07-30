'use client';
import { LineChart } from '@tremor/react';

const chartdata = [
  {
    date: '   Jan 22',
    SolarPanels: 2890,
    Inverters: 2338,
  },
  {
    date: 'Feb 22',
    SolarPanels: 2756,
    Inverters: 2103,
  },
  {
    date: 'Mar 22',
    SolarPanels: 3322,
    Inverters: 2194,
  },
  {
    date: 'Apr 22',
    SolarPanels: 3470,
    Inverters: 2108,
  },
  {
    date: 'May 22',
    SolarPanels: 3475,
    Inverters: 1812,
  },
  {
    date: 'Jun 22',
    SolarPanels: 3129,
    Inverters: 1726,
  },
  {
    date: 'Jul 22',
    SolarPanels: 3490,
    Inverters: 1982,
  },
  {
    date: 'Aug 22',
    SolarPanels: 2903,
    Inverters: 2012,
  },
  {
    date: 'Sep 22',
    SolarPanels: 2643,
    Inverters: 2342,
  },
  {
    date: 'Oct 22',
    SolarPanels: 2837,
    Inverters: 2473,
  },
  {
    date: 'Nov 22',
    SolarPanels: 2954,
    Inverters: 3848,
  },
  {
    date: 'Dec 22',
    SolarPanels: 3239,
    Inverters: 3736,
  },
];

export default function LineChartUsageExample() {
  return (
    <>
      <h3 className="text-lg font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
        Newsletter revenue over time (USD)
      </h3>
      <LineChart
        className="h-72 p-4"
        data={chartdata}
        index="date"
        yAxisWidth={95}
        categories={['model1', 'model2', 'model3']}
        colors={['indigo', 'cyan']}
        showLegend={false}
        showYAxis={false}
      />
    </>
  );
}
