const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  // More products...
];

const callout = {
  name: 'Desk and Office',
  description: 'Work from home accessories',
  imageSrc:
    'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
  imageAlt:
    'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
  href: '#',
};

export default function ImageCard() {
  return (
    // <div className="bg-white">
    //   <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    //     <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
    //       {/* {products.map((product) => ( */}
    //       <div key={1} className="group relative">
    //         {/* <div className="aspect-h-1 aspect-w-1 lg:max-w-sm overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-[500px]"> */}
    //         <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
    //           <img
    //             alt={'jos'}
    //             src={
    //               'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg'
    //             }
    //             className="h-full w-full object-cover object-center lg:h-full lg:w-full"
    //           />
    //         </div>
    //         {/* <div className="mt-4 flex justify-between">
    //             <div>
    //               <h3 className="text-sm text-gray-700">
    //                 <a href={product.href}>
    //                   <span aria-hidden="true" className="absolute inset-0" />
    //                   {product.name}
    //                 </a>
    //               </h3>
    //               <p className="mt-1 text-sm text-gray-500">{product.color}</p>
    //             </div>
    //             <p className="text-sm font-medium text-gray-900">
    //               {product.price}
    //             </p>
    //           </div> */}
    //       </div>
    //       {/* ))} */}
    //     </div>
    //   </div>
    // </div>
    // <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">

    // <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    //   <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
    //     <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
    //       {/* {callouts.map((callout) => ( */}
    //       <div key={callout.name} className="group relative">
    //         <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-2 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 ">
    //           <img
    //             alt={callout.imageAlt}
    //             src={callout.imageSrc}
    //             className="h-full w-full object-cover object-center"
    //           />
    //         </div>
    //       </div>
    //       {/* ))} */}
    //     </div>
    //   </div>
    // </div>

    //   {/* <div className="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
    //     <img
    //       alt={callout.imageAlt}
    //       src={callout.imageSrc}
    //       className="object-cover object-center"
    //     />
    //   </div> */}
    // </div>

    // <div className="relative flex aspect-h-2 aspect-w-2 w-96 items-center  px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
    //   <div className="aspect-2-2 w-96 items-start ">
    //     <div className="aspect-h-3 aspect-w-2 w-96 h-96 overflow-hidden rounded-lg bg-gray-100 ">
    //       <img
    //         alt={callout.imageAlt}
    //         src={callout.imageSrc}
    //         className="object-cover object-center"
    //       />
    //     </div>
    //   </div>
    // </div>

    // <div className="relative flex w-full items-center overflow-hidden bg-gray-300 px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
    //   <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
    //     <div className="aspect-h-2 aspect-w-2 w-[350px] overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
    //       <img
    //         alt={callout.imageAlt}
    //         src={callout.imageSrc}
    //         className="object-cover object-center"
    //       />
    //     </div>
    //   </div>
    // </div>

    <div></div>
  );
}
