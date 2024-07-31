import Card from '@/components/card/Card';
import Stats from '@/components/stats/Stats';
import CustomButton from '@/components/custom-button/CustomButton';
import Input from '@/components/input/Input';
import Footer from '@/components/footer/Footer';
import ImageCard from '@/components/image-card/ImageCard';
import QuestionField from '@/components/question-field/QuestionField';
// import Navbar from "@/components/navbar/Navbar";
import { questions } from '@/constants/constats';

import Slider from './Slider';
import Chart from './Chart';
import ProgressChart from './ProgressChart';
import MainPage from './MainSection';
import IntegrationSection from './IntegrationSection';
import Title from '../title/Title';
import Features from './Features';
import CarouselSection from './CarouselSection';
import InfoSection from './InfoSection';
import MasonryGrid from './MasonryGrid';

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-center items-center w-full">
        <div className="bg-bgColor w-[93%] sm:w-[95%] px-2 sm:px-0">
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
          <div className="my-20 sm:my-24">
            <Slider></Slider>
          </div>
        </div>
      </div>
      {/* 6 Section */}
      <div className="bg-[#F9FAFB] w-full sm:pt-0">
        <div className="flex flex-col justify-center items-center w-full">
          <div className="w-[93%] sm:w-[95%] px-2 sm:px-0">
            <MasonryGrid />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-full">
        <div className="bg-bgColor w-[93%] sm:w-[95%] px-2 sm:px-0">
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
    </div>
  );
}
