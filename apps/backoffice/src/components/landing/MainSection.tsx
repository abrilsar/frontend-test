'use client';
import Input from '@/components/input/Input';
import CustomButton from '../custom-button/CustomButton';
import Chart from './Chart';
import ProgressChart from './ProgressChart';
import { useEffect, useState } from 'react';

export default function MainPage() {
  const [screenSize, setScreenSize] = useState('');

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth < 576) {
        setScreenSize('sm');
        console.log('holis');
      } else if (screenWidth < 768) {
        setScreenSize('md');
        console.log('chais');
      } else {
        setScreenSize('lg');
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize(); // Llamar a la función una vez para establecer el tamaño inicial

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative isolate px-0">
      <div className="mb-[240px] sm:mb-[350px] md:mb-[370px] lg:mb-[450px]">
        <div className="w-full h-[470px] sm:h-[500px] lg:h-[650px] bg-primaryColor rounded-3xl  flex flex-col justify-center items-center my-2 lg:my-7 overflow-visible">
          <div className="sm:max-w-6xl">
            <h1 className="flex justify-center items-center text-center text-3xl font-semibold tracking-tight text-bgColor sm:text-5xl lg:text-7xl pb-3 lg:pb-5">
              Grow your users.
            </h1>
            <h1 className="flex justify-center text-3xl font-semibold tracking-tight text-subtitleColor-200 sm:text-5xl lg:text-7xl">
              Smarter.
            </h1>
            <p className="flex justify-center text-center mt-5 sm:mt-8 text-sm max-w-xl2 sm:text-base lg:text-lg text-subtitleColor-200 font-light px-4">
              Powerful, self-serve product and growth analytics to help you
              convert, engage, and retain more users. Trusted by over 4,000
              startups.
            </p>
          </div>
          <div className="flex justify-center w-full">
            <div className="py-6 px-4 sm:px-0 sm:py-10 sm:pr-10 w-full sm:w-[65%] lg:w-[43%]">
              <Input></Input>
              <div className="flex justify-center mt-14 pb-2 sm:hidden">
                <CustomButton title="Get started" custom={true}></CustomButton>
              </div>
            </div>
          </div>
          {/* AQUIII */}
          <div className="absolute top-[calc(92%-10px)] sm:top-[calc(92%-18px)] md:top-[calc(92%-22px)] lg:top-[calc(90%-10px)] h-[230px] sm:h-4/6 w-[75%] lg:w-[67%] bg-white rounded-md p-5 shadow-xl border border-gray-200">
            <Chart />
            <div className="hidden lg:block absolute bottom-0 right-[-70px]">
              <ProgressChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
