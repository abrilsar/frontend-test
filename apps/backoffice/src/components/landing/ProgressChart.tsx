'use client';
// import { Doughnut } from 'react-chartjs-2';
// import { ArcElement, Tooltip, Legend, Chart as ChartJS } from 'chart.js';
// ChartJS.register(ArcElement, Tooltip, Legend);

// export default function MultiLayeredDoughnutChart() {
//   const data = {
//     labels: [],
//     datasets: [
//       {
//         label: 'First Layer',
//         data: [320, 50],
//         backgroundColor: ['#FF6384', '#36A2EB'],
//         hoverOffset: 4,
//         weight: 3,
//         borderWidth: 10,
//       },
//       {
//         label: 'Second Layer',
//         data: [100, 200],
//         backgroundColor: ['rgba(255, 99, 132, 0.5)', 'rgba(54, 162, 235, 0.5)'],
//         hoverOffset: 4,
//         weight: 3,
//         borderWidth: 10,
//       },
//     ],
//   };

//   return (
//     <div className="flex justify-center items-center h-screen">
//       <Doughnut data={data} />
//     </div>
//   );
// }

import { Card, ProgressCircle } from '@tremor/react';

export default function ProgressChart() {
  return (
    <div className="">
      <ProgressCircle
        radius={120}
        strokeWidth={16}
        color="violet-800"
        className="bg-bgColor rounded-full"
        value={2}
      >
        <ProgressCircle
          value={24}
          radius={100}
          strokeWidth={16}
          color="violet-600"
        >
          <ProgressCircle
            value={23}
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
