'use client'
import React, { Children } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Navigation, Autoplay, Pagination } from 'swiper/modules';



const Slider = ({ children, slidesPerView }) => {
    return (
        <Swiper slidesPerView={slidesPerView} loop={true} autoplay={{ delay: 1000 }} navigation={true} modules={[Navigation, Autoplay, Pagination]} className="mySwiper">
            {children}
        </Swiper>
    )
}

export default Slider