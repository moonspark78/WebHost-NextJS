"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/effect-cards"
import { EffectCards } from 'swiper/modules';

const SwiperSlider = () => {
  return (
    <Swiper
        effect={""}
        grabCursor={true}
        modules={[EffectCards]}
        className='w-[280px] h-[380px] md:w-[500px] md:h-[380px] p-8'
    >
        <SwiperSlide className="swiper_slider bg-[#ce1111]">Content</SwiperSlide>
    </Swiper>
  )
}

export default SwiperSlider