'use client';

import {
  PopoverPanel,
  PopoverGroup,
  PopoverButton,
  Popover,
} from '@headlessui/react';
import AppButton from './AppButton';

const navigation = {
  categories: [
    {
      id: 'women',
      name: 'Women',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
          imageAlt:
            'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Basic Tees',
          href: '#',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
          imageAlt:
            'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
      ],
      sections: [
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', href: '#' },
            { name: 'Wallets', href: '#' },
            { name: 'Bags', href: '#' },
            { name: 'Sunglasses', href: '#' },
            { name: 'Hats', href: '#' },
            { name: 'Belts', href: '#' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Full Nelson', href: '#' },
            { name: 'My Way', href: '#' },
            { name: 'Re-Arranged', href: '#' },
            { name: 'Counterfeit', href: '#' },
            { name: 'Significant Other', href: '#' },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: 'Company', href: '#' },
    { name: 'Stores', href: '#' },
  ],
};

const sections = [
  {
    id: 'accessories',
    name: 'Accessories',
    items: [
      { name: 'Watches', href: '#' },
      { name: 'Wallets', href: '#' },
      { name: 'Bags', href: '#' },
      { name: 'Sunglasses', href: '#' },
      { name: 'Hats', href: '#' },
      { name: 'Belts', href: '#' },
    ],
  },
  {
    id: 'brands',
    name: 'Brands',
    items: [
      { name: 'Full Nelson', href: '#' },
      { name: 'My Way', href: '#' },
      { name: 'Re-Arranged', href: '#' },
      { name: 'Counterfeit', href: '#' },
      { name: 'Significant Other', href: '#' },
    ],
  },
  {
    id: 'accessories',
    name: 'Accessories',
    items: [
      { name: 'Watches', href: '#' },
      { name: 'Wallets', href: '#' },
      { name: 'Bags', href: '#' },
      { name: 'Sunglasses', href: '#' },
      { name: 'Hats', href: '#' },
      { name: 'Belts', href: '#' },
    ],
  },
  {
    id: 'accessories',
    name: 'Accessories',
    items: [
      { name: 'Watches', href: '#' },
      { name: 'Wallets', href: '#' },
      { name: 'Bags', href: '#' },
      { name: 'Sunglasses', href: '#' },
      { name: 'Hats', href: '#' },
      { name: 'Belts', href: '#' },
    ],
  },
  {
    id: 'accessories',
    name: 'Accessories',
    items: [
      { name: 'Watches', href: '#' },
      { name: 'Wallets', href: '#' },
      { name: 'Bags', href: '#' },
      { name: 'Sunglasses', href: '#' },
      { name: 'Hats', href: '#' },
      { name: 'Belts', href: '#' },
    ],
  },
];

export default function Footer() {
  return (
    // <div>
    //   <PopoverGroup className="lg:ml-8 lg:block lg:self-stretch">
    //     <div className="flex h-full space-x-8">
    //       <Popover className="flex">
    //         <div className="relative bg-white">
    //           <div className="mx-auto max-w-7xl px-8">
    //             <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
    //               <div className="row-start-1 grid grid-cols-3 lg:grid-cols-5 gap-x-10 gap-y-10 text-sm">
    //                 {sections.map((section) => (
    //                   <div key={section.name}>
    //                     <p
    //                       id={`${section.name}-heading`}
    //                       className="font-medium text-gray-900"
    //                     >
    //                       {section.name}
    //                     </p>
    //                     <ul
    //                       role="list"
    //                       aria-labelledby={`${section.name}-heading`}
    //                       className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
    //                     >
    //                       {section.items.map((item) => (
    //                         <li key={item.name} className="flex">
    //                           <a
    //                             href={item.href}
    //                             className="hover:text-gray-800"
    //                           >
    //                             {item.name}
    //                           </a>
    //                         </li>
    //                       ))}
    //                     </ul>
    //                   </div>
    //                 ))}
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </Popover>
    //     </div>
    //   </PopoverGroup>
    // </div>

    // <div className="bg-white">
    <div className="mx-auto px-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10 py-16">
        <div className="row-start-1 lg:col-span-3 grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-5 gap-x-10 gap-y-10 text-sm">
          {/* <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10 py-16">
        <div className="row-start-1 col-span-3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-10 gap-y-10 text-sm">
      */}
          {sections.map((section) => (
            <div key={section.name}>
              <p
                id={`${section.name}-heading`}
                className="font-medium text-gray-900"
              >
                {section.name}
              </p>
              <ul
                role="list"
                aria-labelledby={`${section.name}-heading`}
                className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
              >
                {section.items.map((item) => (
                  <li key={item.name} className="flex">
                    <a href={item.href} className="hover:text-gray-800">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <AppButton></AppButton>
        {/* <div className="">holass</div> */}
      </div>
    </div>
    // </div>
  );
}
