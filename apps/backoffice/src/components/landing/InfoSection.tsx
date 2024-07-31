'use client';

import CustomButton from '../custom-button/CustomButton';

export default function InfoSection() {
  return (
    <div className="mt-16 sm:mt-24 max-w-7xl">
      <div className="mx-auto max-w-7xl rounded-2xl sm:rounded-r-3xl sm:grid sm:grid-cols-2 lg:max-w-none bg-primaryColor">
        <div className="flex items-center justify-center py-6 sm:justify-start sm:p-8 md:pr-0 sm:py-20 lg:py-28 lg:pl-14">
          <div className="flex flex-col items-center sm:items-start sm:max-w-6xl py-6 sm:py-0">
            <h1 className="text-3xl font-semibold tracking-tight text-bgColor sm:text-[35px]">
              Give us a shot
            </h1>
            <p className="flex justify-start  text-base lg:text-lg text-bgColor font-light mt-5 px-4 sm:px-0 text-center sm:text-start">
              Join over 4,000+ startups already growing with Untitled.
            </p>
            <div className="flex flex-row mt-8 lg:mt-14 gap-x-3">
              <CustomButton title="Learn more" custom={false}></CustomButton>
              <CustomButton title="Get Started" custom={true}></CustomButton>
            </div>
          </div>
        </div>
        <div className="flex justify-center sm:justify-start sm:pb-0 sm:pl-10 md:pl-20 lg:pl-28">
          {/* <div className="rounded-r-2xl bg-gray-300 w-full h-full"> */}
          <div className="aspect-h-1 aspect-w-1 h-64 w-full sm:h-full overflow-hidden col-span-1 p-2 rounded-t-none rounded-b-2xl sm:rounded-r-2xl sm:rounded-l-none">
            <img
              alt="picture office"
              src="picture_office.jpg"
              className="object-cover object-center w-full"
            />
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
