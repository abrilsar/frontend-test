'use client';

import { ArrowRightIcon } from '@heroicons/react/24/outline';

const posts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  // More posts...
];

const post = {
  id: 1,
  title: 'Boost your conversion rate',
  href: '#',
  description:
    'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
  date: 'Mar 16, 2020',
  datetime: '2020-03-16',
  category: { title: 'Marketing', href: '#' },
  author: {
    name: 'Michael Foster',
    role: 'Co-Founder / CTO',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
};

interface CardProps {
  customClass?: boolean;
}
export default function Card({ customClass }: CardProps) {
  return (
    // <div className="bg-white py-24 sm:py-32">
    // <div className="mx-auto max-w-7xl px-6 lg:px-8">
    // <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      <article
        key={post.id}
        className="flex max-w-xl flex-col items-start justify-between p-6"
      >
        <div className="flex flex-col items-center">
          <div className="rounded-md border border-gray-200 bg-white p-2 ">
            <img
              alt=""
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              className={`${customClass ? 'size-6' : 'size-9'}`}
            />
            {/* <CalendarDaysIcon aria-hidden="true" className="h-6 w-6 text-black" /> */}
          </div>
          <dt className="mt-4 font-semibold text-xl text-gray-900">
            Weekly articles
          </dt>
          <dd className="mt-2 leading-7 text-base text-center text-gray-600">
            Work faster and smarter by integrating directly with Intercom, right
            in the app.
          </dd>
          <div className="inline-flex items-center gap-x-1 pt-2.5 text-base font-semibold leading-2 text-secondaryColor">
            <span>{customClass ? 'Learn More' : 'View integration'}</span>
            <ArrowRightIcon aria-hidden="true" className="size-5 pt-1" />
          </div>
        </div>
      </article>
    </div>
    // </div >
    // </div>
    // </div>
  );
}
