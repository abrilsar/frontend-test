'use client';

import CustomButton from '../custom-button/CustomButton';
import Carousel from './Carousel';

export default function CarouselSection() {
  return (
    <div className="mt-20 sm:mt-32">
      <div className="flex flex-col items-center sm:items-start sm:flex-row sm:justify-between mb-8">
        <div className="flex flex-col gap-y-5 w-fit md:max-w-[470px] lg:max-w-full">
          <h1 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-2xl lg:text-[35px] text-center sm:text-start">
            Don't just take our word for it
          </h1>
          <p className="flex justify-start text-center sm:text-start text-sm sm:text-base lg:text-lg text-gray-600 font-normal w-full md:w-full sm:pr-6 md:pr-0">
            Hear from some of our amazing customers who are automating their
            finances.
          </p>
        </div>
        <div>
          <div className="flex flex-row sm:flex-col md:flex-row gap-x-3 gap-y-1 sm:gap-y-3 w-fit sm:w-36 md:w-fit pt-6 sm:pt-0 ">
            <CustomButton title="Our customers" custom={false}></CustomButton>
            <CustomButton title="Create account" custom={true}></CustomButton>
          </div>
        </div>
      </div>
      <Carousel></Carousel>
    </div>
  );
}
