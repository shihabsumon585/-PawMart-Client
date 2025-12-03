import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import img1 from "../assets/slider1.jpg";
import img2 from "../assets/sliderr2.jpg";
import img3 from "../assets/slider3.jpg";

const slides = [
  { img: img1, tagline: "Find Your Furry Friend Today!" },
  { img: img2, tagline: "Adopt, Don’t Shop — Give a Pet a Home." },
  { img: img3, tagline: "Because Every Pet Deserves Love and Care." },
];

const Swipper = () => {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="relative">
          <img className='w-full h-[400px] object-cover' src={slide.img} alt="" />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <h2 className="text-white text-2xl md:text-4xl font-bold text-center px-4">
              {slide.tagline}
            </h2>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Swipper;
