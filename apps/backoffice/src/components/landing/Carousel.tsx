'use client';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import Swiper styles
import { Pagination, Navigation } from 'swiper/modules';

export default function Carousel() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper h-96 w-full"
      >
        <SwiperSlide className="bg-violet-300 w-28 h-32">Slide 1</SwiperSlide>
        <SwiperSlide className="bg-violet-300 w-14 h-32">Slide 2</SwiperSlide>
        <SwiperSlide className="bg-violet-300 w-14 h-32">Slide 3</SwiperSlide>
        <SwiperSlide className="bg-violet-300 w-14 h-32">Slide 4</SwiperSlide>
        <SwiperSlide className="bg-violet-300 w-14 h-32">Slide 6</SwiperSlide>
        <SwiperSlide className="bg-violet-300 w-14 h-32">Slide 7</SwiperSlide>
        <SwiperSlide className="bg-violet-300 w-14 h-32">Slide 8</SwiperSlide>
        <SwiperSlide className="bg-violet-300 w-14 h-32">Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
