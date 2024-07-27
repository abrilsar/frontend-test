import Card from '@/components/card/Card';
import Stats from '@/components/stats/Stats';
import CustomButton from '@/components/custom-button/CustomButton';
import Input from '@/components/input/Input';
import Footer from '@/components/footer/Footer';
import ImageCard from '@/components/image-card/ImageCard';
import QuestionField from '@/components/question-field/QuestionField';
// import Navbar from "@/components/navbar/Navbar";
import Title from '@/components/title/Title';
import { Features, integrations, questions } from '@/constants/constats';
import { CheckIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="bg-bgColor w-11/12">
        <div className="relative isolate px-4 lg:px-0">
          {/* First Section */}
          <div className="mb-[80%] sm:mb-[45%] lg:mb-[40%]">
            <div className="w-full h-[550px] sm:h-[500px] lg:h-[650px] bg-primaryColor rounded-3xl  flex flex-col justify-center items-center my-7 overflow-visible">
              <div className="sm:max-w-6xl">
                <h1 className="flex justify-center text-3xl font-semibold tracking-tight text-bgColor sm:text-4xl lg:text-7xl pb-5">
                  Grow your users.
                </h1>
                <h1 className="flex justify-center text-3xl font-semibold tracking-tight text-subtitleColor-200 sm:text-4xl lg:text-7xl">
                  Smarter.
                </h1>
                <p className="flex justify-center text-center mt-8 text-sm max-w-xl2 sm:text-base lg:text-lg text-subtitleColor-200 font-light px-4">
                  Powerful, self-serve product and growth analytics to help you
                  convert, engage, and retain more users. Trusted by over 4,000
                  startups.
                </p>
              </div>
              <div className="flex justify-center w-full">
                <div className="py-6 px-4 sm:px-0 sm:py-10 sm:pr-10 w-full sm:w-[65%] lg:w-[48%]">
                  <Input></Input>
                  <div className="flex justify-center mt-14 sm:hidden">
                    <CustomButton
                      title="Get Started"
                      custom={true}
                    ></CustomButton>
                  </div>
                </div>
              </div>
              {/* AQUIII */}
              <div className="absolute top-[calc(92%-10px)] lg:top-[calc(90%-10px)] h-64 sm:h-4/6 w-[70%] sm:w-[55%] lg:w-[67%] bg-white rounded-md p-5 shadow-lg border border-gray-200">
                <div className="bg-red-400 h-full w-9" />
              </div>
              {/* Agrego absolute y top-full para que se posicione debajo del div anterior */}
            </div>
          </div>
        </div>
        {/* Second Section */}
        <div className="flex flex-col justify-center py-5">
          <Title
            title="Get more value from your tools"
            text="Connect your tools, connect your teams. With over 100 apps already available in our directory, your team's favourite tools are just a click away."
            subtitle="Integrations"
          ></Title>
          <div className="py-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none sm:grid-cols-2 lg:grid-cols-3">
              {integrations.map((integration, key) => (
                <Card
                  key={key}
                  name={integration.name}
                  description={integration.description}
                  imageUrl={integration.imageUrl}
                ></Card>
              ))}
            </div>
          </div>
        </div>
        {/* 3 Section */}
        <div className="flex flex-col justify-center lg:mt-32">
          <Title
            title="Unleash the full power of data"
            text="Everything you need to convert, engage, and retain more users."
          ></Title>
          <div className="my-16">
            <Stats></Stats>
          </div>
        </div>

        {/* 4 Secction */}
        <div className="flex flex-col justify-center py-5">
          <Title
            title="Cutting-edge features for advanced analytics"
            text="Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups."
            subtitle="Features"
          ></Title>
          <div className="py-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none sm:grid-cols-2 lg:grid-cols-3">
              {Features.map((feature, key) => (
                <Card
                  key={key}
                  name={feature.name}
                  description={feature.description}
                  imageUrl=""
                  customClass={feature.icon}
                ></Card>
              ))}
            </div>
          </div>
          {/* </div> */}
        </div>
        {/* 6 Section */}
        {/* <div className="relative overflow-hidden bg-white mt-11"> */}
        <div className="h-[500px]">
          <div className="mx-auto max-w-7xl grid grid-cols-[auto_1fr] h-full">
            <div className="flex flex-col sm:max-w-lg justify-center pr-4">
              <div className="flex flex-col gap-y-3 justify-start items-start">
                <h1 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-[35px]">
                  No long-term contracts.
                </h1>
                <h1 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-[35px]">
                  No catches.
                </h1>
              </div>
              <p className="flex justify-start text-start text-sm sm:text-base lg:text-lg text-gray-600 font-light mt-7">
                Start your 30-day free trial today.
              </p>
              <div className="flex flex-row mt-10 gap-x-3">
                <CustomButton title="Learn more" custom={false}></CustomButton>
                <CustomButton title="Get Started" custom={true}></CustomButton>
              </div>
            </div>
            <div className="flex flex-col bg-violet-500 justify-start w-full">
              <div className="flex-1">
                <div className="grid grid-cols-2 gap-x-1 flex-1">
                  <div className="col-span-1 flex flex-col">
                    <div className="aspect-h-1 aspect-w-1 w-36 h-36 overflow-hidden col-span-1 p-2">
                      <img
                        alt="picture reading"
                        src="picture_reading.jpg"
                        className="object-cover object-center w-full"
                      />
                    </div>
                  </div>
                  <div>holiss</div>
                </div>
              </div>
              <div className="flex-1">
                <div className="grid grid-cols-3 gap-x-1">
                  <div className="flex-shrink-0 w-52 h-32 overflow-hidden col-span-1">
                    <img
                      alt="picture chinese"
                      src="pircutre_chinese.jpg"
                      className="object-cover object-center w-full"
                    />
                  </div>
                  <div className="">holiss</div>
                  <div>holiss</div>
                </div>
              </div>
            </div>
            {/* <div>
                <div className="mt-10">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none lg:mx-auto lg:w-full lg:max-w-7xl"
                  >
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            alt=""
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
          </div>
        </div>
        {/* 7 section */}
        <div className="mt-64">
          <Title
            title="Frequently asked questions."
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
        {/* 9 section */}
        <div className="mt-10 max-w-7xl mb-10 ">
          <div className="mx-auto max-w-7xl rounded-l-2xl rounded-r-3xl sm:grid sm:grid-cols-2 lg:max-w-none bg-primaryColor">
            <div className="flex items-center justify-center py-4 sm:justify-start sm:p-8 md:pr-0 sm:py-20 lg:py-32 lg:pl-14">
              <div className="flex flex-col items-center sm:items-start sm:max-w-6xl py-6 sm:py-0">
                <h1 className="text-3xl font-semibold tracking-tight text-bgColor sm:text-[35px]">
                  Give us a shot
                </h1>
                <p className="flex justify-start  text-base sm:text-base lg:text-xl text-bgColor font-light mt-5 px-3 sm:px-0 text-center sm:text-start">
                  Join over 4,000+ startups already growing with Untitled.
                </p>
                <div className="flex flex-row mt-8 lg:mt-14 gap-x-3">
                  <CustomButton
                    title="Learn more"
                    custom={false}
                  ></CustomButton>
                  <CustomButton
                    title="Get Started"
                    custom={true}
                  ></CustomButton>
                </div>
              </div>
            </div>
            <div className="flex justify-center sm:justify-start pb-10 sm:pb-0 sm:pl-10 md:pl-20 lg:pl-28">
              {/* <div className="rounded-r-2xl bg-gray-300 w-full h-full"> */}
              <div className="aspect-h-1 aspect-w-1 w-[70%] h-64 sm:w-full sm:h-full overflow-hidden col-span-1 p-2 sm:rounded-r-2xl sm:rounded-l-none">
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
      </div>
    </div>
  );
}

{
  /* <CustomButton title="Learn more" custom={false}></CustomButton> */
}

{
  //
}
{
  /* <Card></Card> */
}
{
  /* <Stats></Stats> */
}
{
  /* <Input></Input> */
}
{
  /* <Footer></Footer> */
}
{
  /* <ImageCard></ImageCard> */
}
{
  /* <ImageCard></ImageCard> */
}
{
  /* <QuestionField></QuestionField> */
}
