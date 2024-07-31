'use client';

import CustomButton from '../custom-button/CustomButton';

export default function MasonryGrid() {
  return (
    <div className="max-h-fit">
      <div className="mx-auto max-w-7xl grid grid-row-1 gap-y-12 sm:grid-cols-[auto_1fr] h-full">
        <div className="flex flex-col sm:max-w-xs md:max-w-md lg:max-w-lg justify-center items-center sm:items-start lg:pr-4 pt-8 sm:pt-0">
          <div className="flex flex-col gap-y-2 sm:gap-y-6 justify-center items-center sm:justify-start sm:items-start">
            <h1 className="text-3xl font-semibold tracking-tight leading-snug text-gray-900 sm:text-[28px] md:text-[32px] lg:text-[43px] text-center sm:text-start">
              No long-term contracts.
            </h1>
            <h1 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-[28px] md:text-[32px] lg:text-[43px]">
              No catches.
            </h1>
          </div>
          <p className="flex justify-start text-start text-sm sm:text-base lg:text-xl text-gray-600 font-light mt-4 sm:mt-7">
            Start your 30-day free trial today.
          </p>
          <div className="flex flex-row mt-6 sm:mt-10 gap-x-3">
            <CustomButton title="Learn more" custom={false}></CustomButton>
            <CustomButton title="Get Started" custom={true}></CustomButton>
          </div>
        </div>
        <div className="grid grid-rows-2 h-full w-fit lg:ml-2 overflow-hidden gap-y-4">
          <div className="row-span-1">
            <div className="grid grid-cols-2 md:grid-cols-4 md:gap-x-3 w-full h-full gap-x-3">
              <div className="col-start-1 md:col-start-2 col-span-1 h-full grid grid-rows-1 sm:grid-rows-2">
                <div className="grid justify-end items-end row-start-2 row-span-1 h-full grid-cols-3 md:grid-cols-1">
                  <div className="flex col-span-2 col-start-2 md:col-span-1 md:col-start-1 aspect-square sm:aspect-1 overflow-hidden justify-end">
                    <img
                      alt="picture"
                      src="picture_reading.jpg"
                      className="w-[90%] sm:w-full h-hit object-scale-down sm:object-cover object-center"
                    />
                  </div>
                </div>
              </div>
              <div className="grid justify-start items-end col-start-2 md:col-start-3 col-span-1 h-fulloverflow-hidden grid-cols-3 md:grid-cols-1">
                <div className="col-span-2 col-start-1 md:col-span-1 flex items-end aspect-[9/16] w-full">
                  <img
                    alt="picture"
                    src="picture_blue_dress.jpg"
                    className="w-full h-hit object-contain object-left-bottom sm:object-center"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row-span-1 sm:px-4 md:px-12 lg:px-20">
            <div className="grid grid-cols-3 w-full h-full gap-x-3">
              <div className="col-start-1 col-span-1 h-full grid grid-rows-2 w-full ">
                <div className="row-start-1 row-span-1 h-full">
                  <div className="aspect-video w-full">
                    <img
                      alt="pictures"
                      src="picture_chinese.jpg"
                      className="sm:w-full h-full object-scale-down object-left-top sm:object-center"
                    />
                  </div>
                </div>
              </div>
              <div className="col-start-2 col-span-1 h-full">
                <div className="flex aspect-[9/16] w-full">
                  <img
                    alt="picture"
                    src="picture_sitting.jpg"
                    className="w-full h-fit object-contain object-left-top sm:object-center"
                  />
                </div>
              </div>
              <div className="col-start-3 col-span-1 h-full grid grid-rows-2 w-full ">
                <div className="aspect-video w-full">
                  <img
                    alt="pictures"
                    src="picture_office.jpg"
                    className="sm:w-full h-fit object-scale-down object-left-top sm:object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
