'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import Swiper styles
import { Pagination, Navigation } from 'swiper/modules';
import { testimonials } from '@/constants/constats';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import Starts from '../starts/Starts';

export default function Carousel() {
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
        // spaceBetween={30}
        // slidesPerView={3}
        breakpoints={{
          100: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 60,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        loop={true}
        className="mySwiper"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide
            key={index}
            className="rounded-none shadow-lg my-6  w-full h-36 aspect-1 sm:aspect-[1/1.5] md:aspect-[1/1.1] lg:aspect-[1/1.3]"
          >
            <img
              src={testimonial.imageUrl}
              alt={testimonial.name}
              className="w-full h-full object-cover object-center"
            />
            {/* 
              <div className="absolute inset-0 bg-white opacity-30 backdrop-blur-2xl" />
             */}
            <div className="absolute bottom-0 w-full p-6">
              <div className="backdrop-blur-[2px]">
                <div className="flex flex-col px-8 py-4 bg-white opacity-40 border-[3px]">
                  {/* <div id="hosad" className="isolate"> */}
                  {testimonial.quote && (
                    <p className="text-base lg:text-[20px] font-semibold mb-2 lg:mb-6">
                      "{testimonial.quote}"
                    </p>
                  )}
                  <Starts classNameCustom="text-black" number={5} />
                  <h1 className="text-[23px] sm:text-2xl lg:text-3xl font-semibold py-2 sm:py-4">
                    {testimonial.name}
                  </h1>
                  <p className="text-sm sm:text-lg font-semibold">
                    {testimonial.role}
                  </p>
                  <p className="text-sm sm:text-base font-medium">
                    {testimonial.agency}
                  </p>
                  {/* </div> */}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div
          id="test"
          className="p-2 flex flex-row gap-x-6 sm:gap-x-8 justify-center sm:justify-start items-center"
        >
          <div className="custom-prev gap-x-3 bg-white border-[1.5px] border-gray-300 hover:bg-gray-300 p-3 lg:p-4 rounded-full shadow-md cursor-pointer w-fit">
            <ArrowLeftIcon className="text-[#667085] size-5" />
          </div>
          <div className="custom-next gap-x-3 bg-white border-[1.5px] border-gray-300 hover:bg-gray-300 p-3 lg:p-4 rounded-full shadow-md cursor-pointer w-fit">
            <ArrowRightIcon className="text-[#667085] font-extrabold size-5" />
          </div>
        </div>
      </Swiper>
    </div>
  );
}
