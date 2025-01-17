"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import SwiperCore from 'swiper';
import {
    Navigation
  } from "swiper/modules";


SwiperCore.use([Navigation]);

import { CaruselCard } from '../card';
import './style.css'



const Carusel = ({text , bg}) => {
  return (
    <div className="justify-start flex  w-full items-center container mx-auto px-10">
      <Swiper
        spaceBetween={50}
        slidesPerView={4}
        navigation
        loop={true}
        className="mySwiper"
      >
        <div className='test-Carusel bg-red-500 '>
            <SwiperSlide style={{borderRadius: 10}}><CaruselCard text={text} bg={bg}/></SwiperSlide>
            <SwiperSlide style={{borderRadius: 10}}><CaruselCard text={text} bg={bg}/></SwiperSlide>
            <SwiperSlide style={{borderRadius: 10}}><CaruselCard text={text} bg={bg}/></SwiperSlide>
            <SwiperSlide style={{borderRadius: 10}}><CaruselCard text={text} bg={bg}/></SwiperSlide>
            <SwiperSlide style={{borderRadius: 10}}><CaruselCard text={text} bg={bg}/></SwiperSlide>
            <SwiperSlide style={{borderRadius: 10}}><CaruselCard text={text} bg={bg}/></SwiperSlide>
            <SwiperSlide style={{borderRadius: 10}}><CaruselCard text={text} bg={bg}/></SwiperSlide>
            <SwiperSlide style={{borderRadius: 10}}><CaruselCard text={text} bg={bg}/></SwiperSlide>
            <SwiperSlide style={{borderRadius: 10}}><CaruselCard text={text} bg={bg}/></SwiperSlide>
            <SwiperSlide style={{borderRadius: 10}}><CaruselCard text={text} bg={bg}/></SwiperSlide>

        </div>
        {/* Add more slides as needed */}
      </Swiper>
    </div>
  );
};
  Carusel.displayName = 'Carusel';
export default Carusel;
 