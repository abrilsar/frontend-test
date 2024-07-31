import Card from '@/components/card/Card';
import Stats from '@/components/stats/Stats';
import CustomButton from '@/components/custom-button/CustomButton';
import Input from '@/components/input/Input';
import Footer from '@/components/footer/Footer';
import ImageCard from '@/components/image-card/ImageCard';
import QuestionField from '@/components/question-field/QuestionField';
// import Navbar from "@/components/navbar/Navbar";
import { questions } from '@/constants/constats';
import { StarIcon } from '@heroicons/react/20/solid';
import { MinusIcon } from '@heroicons/react/24/outline';
import Slider from './Slider';
import Chart from './Chart';
import ProgressChart from './ProgressChart';
import MainPage from './MainSection';
import IntegrationSection from './IntegrationSection';
import Title from '../title/Title';
import Features from './Features';
import CarouselSection from './CarouselSection';
import InfoSection from './InfoSection';

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="bg-bgColor w-[95%] px-2 sm:px-0">
        {/* Section 1 */}
        <MainPage />
        {/* Section 2 */}
        <IntegrationSection />
        {/* Section 3 */}
        <div className="flex flex-col justify-center mt-4 sm:mt-10 lg:mt-20">
          <Title
            title="Unleash the full power of data"
            text="Everything you need to convert, engage, and retain more users."
          ></Title>
          <div className="my-10 sm:my-16">
            <Stats></Stats>
          </div>
        </div>
        {/*Secction 4 Features*/}
        <Features />
        {/*Seccion 5 Slider */}
        <div className="my-24">
          <Slider></Slider>
        </div>

        {/* 6 Section */}
        {/* <div className="relative overflow-hidden bg-white mt-11"> */}
        <div className="bg-[#F9FAFB] max-h-fit">
          <div className="mx-auto max-w-7xl grid grid-row-1 gap-y-12 sm:grid-cols-[auto_1fr] h-full">
            <div className="flex flex-col sm:max-w-xs md:max-w-md lg:max-w-lg justify-center items-center sm:items-start lg:pr-4 pt-164 sm:pt-0">
              <div className="flex flex-col gap-y-2 sm:gap-y-6 justify-center items-center sm:justify-start sm:items-start">
                <h1 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-[28px] md:text-[32px] lg:text-[45px]">
                  No long-term contracts.
                </h1>
                <h1 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-[28px] md:text-[32px] lg:text-[45px]">
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
        {/* Section 7 */}
        <div className="mt-16 sm:mt-20 lg:mt-36">
          <Title
            title="Frequently asked questions"
            text="Everything you need to know about the product and billing."
          ></Title>
          <div>
            <div className="flex flex-col mt-5 justify-center items-center">
              {questions.map((question, key) => (
                <QuestionField
                  key={key}
                  title={question.title}
                  description={question.description}
                ></QuestionField>
              ))}
            </div>
          </div>
        </div>

        {/* Section 8 */}
        <CarouselSection />

        {/* 9 section */}
        <InfoSection />
        <div className="mt-12 sm:mt-20">
          <Footer></Footer>
        </div>

        {/* Final */}
        <div className="flex justify-end flex-col items-start sm:items-center gap-y-3 sm:flex-row sm:justify-between pb-12 pt-6 sm:pt-8 border-t-[1px] border-gray-200">
          <div className="flex gap-3 items-center">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img alt="logo" src="logo.png" className="size-8 lg:size-10" />
            </a>
            <p className="text-base lg:text-xl text-gray-900 font-semibold leading-6">
              Untitled UI
            </p>
          </div>
          <div className="flex justify-center items-center w-fit font-normal text-xs lg:text-base text-[#667085]">
            © 2077 Untitled UI. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
