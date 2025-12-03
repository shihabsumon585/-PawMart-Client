import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import img1 from "../assets/slider1.jpg"
import img2 from "../assets/sliderr2.jpg"
import img3 from "../assets/slider3.jpg"
import img4 from "../assets/slider4.jpg"

const Swipper = () => {
    return (
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide><img className='w-full h-[400px] object-cover' src={img1} alt="" /></SwiperSlide>
            <SwiperSlide><img className='w-full h-[400px] object-cover' src={img2} alt="" /></SwiperSlide>
            <SwiperSlide><img className='w-full h-[400px] object-cover' src={img3} alt="" /></SwiperSlide>
            <SwiperSlide><img className='w-full h-[400px] object-cover' src={img4} alt="" /></SwiperSlide>
        </Swiper>
    );
};

export default Swipper;