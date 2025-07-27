/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="rounded" style={{ backgroundImage: 'url("/bgyegtravel.svg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="grid justify-center">
             <div className="flex items-center" >
            
             </div>
             <div className="p-6 space-y-2">
              <div className=" w-full grid">
                <p className="text-xl text-white leading-normal text-justify">YEG Travel & Tours provided excellent and satisfactory service. My Umrah experience became more meaningful with their service</p>
                <p className="text-base text-white leading-normal text-right">- Zainab -</p>
              </div>
              
             </div>
           </div>
        </SwiperSlide>
        <SwiperSlide className="rounded" style={{ backgroundImage: 'url("/bgyegtravel.svg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="grid justify-center">
             <div className="flex items-center" >
            
             </div>
             <div className="p-6 space-y-2">
              <div className=" w-full grid">
                <p className="text-base text-white leading-normal text-justify">YEG Travel & Tours provided excellent and satisfactory service. My Umrah experience became more meaningful with their service</p>
                <p className="text-base text-white leading-normal text-right">- Zainab -</p>
              </div>
              
             </div>
           </div>
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}