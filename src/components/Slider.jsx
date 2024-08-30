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
        slidesPerView={2}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="rounded">
        <div className="grid justify-center ">
             <div className="flex items-center">
             <a href="https://media-cdn.tripadvisor.com/media/photo-s/12/e2/17/48/payung-masjid-nabawi.jpg" target="_blank" rel="noopener noreferrer">
               <img
                 className="rounded"
                 src="https://media-cdn.tripadvisor.com/media/photo-s/12/e2/17/48/payung-masjid-nabawi.jpg"
                 alt="logo"
                 width={10}
                 height={10}
                 style={{ objectFit: "contain" }}
               /></a>
             </div>
             <div className="p-6 space-y-2">
              <div className="">
                <p className="text-sm text-black leading-normal text-justify">
                Madinah, kota suci yang menawarkan ketenangan di Masjid Nabawi, tempat Rasulullah SAW disemadikan. Ziarahi tempat bersejarah seperti Jabal Uhud, Masjid Quba, dan Masjid Qiblatain. Nikmati suasana unik di Pasar Kurma. Kami menyediakan perjalanan selesa dan bermakna, menjadikan ziarah anda ke Madinah satu kenangan abadi.</p>
              </div>
              <div className="flex justify-start">
                <a href="/"className="flex bg-cyan-600 text-sm font-semibold p-2 px-6 rounded text-white">
                <h>READ MORE</h>
                <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 11L6 4L10.5 7.5L6 11Z" fill="currentColor"></path></svg>
                </a>
              </div>
             </div>
           </div>
        </SwiperSlide>
        <SwiperSlide className="rounded">
        <div className="grid justify-center">
             <div className="flex items-center">
             <a href="https://www.hostelworld.com/blog/wp-content/uploads/2018/11/NZ-weather.jpg" target="_blank" rel="noopener noreferrer">
               <img
                 className="rounded"
                 src="https://www.hostelworld.com/blog/wp-content/uploads/2018/11/NZ-weather.jpg"
                 alt="logo"
                 width={10}
                 height={20}
                 style={{ objectFit: "contain" }}
               /></a>
             </div>
             <div className="p-6 space-y-2">
              <div className="">
                <p className="text-sm text-black leading-normal text-justify">New Zealand, sebuah negara yang memukau dengan pemandangan indah, menawarkan gunung-gunung yang menakjubkan, tasik yang tenang, dan bandar-bandar yang meriah. Terokai keindahan Milford Sound, beraksi di Queenstown, dan alami budaya Maori. Sama ada mencari alam semula jadi, pengembaraan, atau ketenangan.</p>
              </div>
              <div className="flex justify-start">
                <a href="/"className="flex bg-cyan-600 text-sm font-semibold p-2 px-6 rounded text-white">
                <h>READ MORE</h>
                <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 11L6 4L10.5 7.5L6 11Z" fill="currentColor"></path></svg>
                </a>
              </div>
             </div>
           </div>
        </SwiperSlide>
        <SwiperSlide className="rounded">
        <div className="grid justify-center">
             <div className="flex items-center">
             <a href="https://i0.wp.com/handluggageonly.co.uk/wp-content/uploads/2019/03/Hand-Luggage-Only-12.jpg?resize=1000%2C731&ssl=1" target="_blank" rel="noopener noreferrer">
               <img
                 className="rounded"
                 src="https://i0.wp.com/handluggageonly.co.uk/wp-content/uploads/2019/03/Hand-Luggage-Only-12.jpg?resize=1000%2C731&ssl=1"
                 alt="logo"
                 width={10}
                 height={20}
                 style={{ objectFit: "contain" }}
               /></a>
             </div>
             <div className="p-6 space-y-2">
              <div className="">
                <p className="text-sm text-black leading-normal text-justify">Belanda, negara yang terkenal dengan kincir angin, bunga tulip, dan terusan yang indah. Nikmati keunikan Amsterdam, lawati taman tulip Keukenhof, dan terokai budaya di muzium-muzium terkenal. Kami menyediakan perjalanan yang selesa dan menarik, memastikan pengalaman anda di Belanda penuh dengan kenangan yang menakjubkan.</p>
              </div>
              <div className="flex justify-start">
                <a href="/"className="flex bg-cyan-600 text-sm font-semibold p-2 px-6 rounded text-white">
                <h>READ MORE</h>
                <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 11L6 4L10.5 7.5L6 11Z" fill="currentColor"></path></svg>
                </a>
              </div>
             </div>
           </div>
        </SwiperSlide>
        <SwiperSlide className="rounded">
        <div className="grid justify-center">
             <div className="flex items-center">
             <a href="https://i0.wp.com/handluggageonly.co.uk/wp-content/uploads/2019/03/Hand-Luggage-Only-12.jpg?resize=1000%2C731&ssl=1" target="_blank" rel="noopener noreferrer">
               <img
                 className="rounded"
                 src="https://www.tourcompass.dk/wp-content/uploads/2023/03/Hero-singapore-720-540.webp"
                 alt="logo"
                 width={10}
                 height={20}
                 style={{ objectFit: "contain" }}
               /></a>
             </div>
             <div className="p-5 space-y-2">
              <div className="">
                <p className="text-sm text-black leading-normal text-justify">Singapura, destinasi moden yang menawarkan gabungan budaya, makanan, dan hiburan. Terokai Marina Bay Sands, Gardens by the Bay, dan Orchard Road. Nikmati pelbagai hidangan tempatan di hawker center. Kami memastikan perjalanan anda di Singapura selesa dan menarik, memberikan pengalaman bandar yang tidak dapat dilupakan.</p>
              </div>
              <div className="flex justify-start">
                <a href="/"className="flex bg-cyan-600 text-sm font-semibold p-2 px-6 rounded text-white">
                <h>READ MORE</h>
                <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 11L6 4L10.5 7.5L6 11Z" fill="currentColor"></path></svg>
                </a>
              </div>
             </div>
           </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}