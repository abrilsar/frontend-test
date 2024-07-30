'use client';
import React, { useState } from 'react';
import { Carousel } from '@material-tailwind/react';
import { sliders } from '@/constants/constats';
import Starts from '../starts/Starts';

export default function Slider() {
  const [actualImagen, setActualImagen] = useState('picture_blonde.jpg');

  return (
    <div className="mt-10 max-w-7xl mb-10 ">
      <div className="mx-auto max-w-7xl rounded-2xl sm:rounded-r-3xl sm:flex sm:flex-cols lg:max-w-none bg-primaryColor">
        <div className="flex justify-center sm:justify-start sm:pb-0 w-full sm:w-96 lg:w-[40%] flex-grow">
          <div className="aspect-h-1 aspect-w-1 h-60 w-full sm:h-full overflow-hidden col-span-1 p-2 rounded-b-none rounded-t-2xl sm:rounded-l-2xl sm:rounded-r-none">
            <img
              alt="picture"
              src={actualImagen}
              className="object-cover object-top sm:object-center w-full"
            />
          </div>
        </div>
        <div className="flex items-center justify-center py-4 sm:justify-start sm:pl-10 lg:pl-14 sm:py-10 md:py-14 lg:py-16 w-full sm:w-[60%]">
          <Carousel
            className="w-full sm:max-w-sm md:max-w-[34rem] lg:max-w-2xl overflow-hidden"
            navigation={({ setActiveIndex, activeIndex, length }) => (
              <div className="absolute bottom-0 flex sm:block sm:left-0 w-full justify-center">
                <div className="flex flex-row gap-x-4">
                  {new Array(length).fill('').map((_, i) => (
                    <span
                      key={i}
                      className={`block size-[9px] cursor-pointer rounded-full transition-colors content-[''] ${activeIndex === i ? 'bg-white' : 'bg-white/35'}`}
                      onClick={() => {
                        setActiveIndex(i);
                        setActualImagen(sliders[i]!.img);
                      }}
                    />
                  ))}
                </div>
              </div>
            )}
            prevArrow={({ handlePrev }) => <div className="hidden" />}
            nextArrow={({ handleNext }) => <div className="hidden" />}
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            transition={{ duration: 0.4 }}
          >
            {sliders.map((slider, key) => (
              <div
                key={key}
                className="flex flex-col items-center sm:items-start lg:max-w-3xl px-4 py-2 mb-6 sm:mb-10 sm:p-0 sm:pr-2"
              >
                <Starts classNameCustom="pb-4 text-[#FDB022]" number={5} />
                <h1 className="text-center sm:text-start text-lg font-medium tracking-tight text-white sm:text-xl md:text-2xl lg:text-4xl lg:max-w-[37rem] leading-tight pr-2 lg:pr-0">
                  {slider.text}
                </h1>
                <div className="flex flex-col gap-y-1 mt-2 sm:mt-8 lg:mt-10">
                  <h4 className="flex justify-center items-center sm:justify-start text-bgColor font-semibold text-sm md:text-base lg:text-lg">
                    {slider.author}
                  </h4>
                  <p className="font-normal text-bgColor text-sm lg:text-base">
                    {slider.position}
                  </p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
