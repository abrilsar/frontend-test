'use client';
const stats = [
  { id: 1, name: 'Projects completed', value: '400+' },
  { id: 2, name: 'Return on investment', value: '600%' },
  { id: 3, name: 'Global downloads', value: '10k' },
];

export default function Stats() {
  return (
    // <div className="flex w-full justify-center">
    <div className="bg-gray-50 h-auto py-20 sm:py-14 rounded-2xl">
      {/* w-10/12 */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 lg:max-w-5xl">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="mx-auto flex max-w-xs flex-col gap-y-1 sm:gap-y-2"
            >
              <dt className="text-sm sm:text-base font-semibold leading-7 text-gray-900">
                {stat.name}
              </dt>
              <dd className="order-first text-4xl font-semibold tracking-tight text-buttonColor-100 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
    // </div>
  );
}
