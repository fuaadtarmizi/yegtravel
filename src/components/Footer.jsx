import React from 'react'
import Image from "next/image"


function footer() {
  return (
    <div>
    <section13>
      <div className="w-full h-full">
        <div className=" bg-yellow-600 grid grid-cols-1 lg:grid-cols-3">
        <div className="bg-slate-800 py-4 ">
          <a className="flex justify-center" href="/">
          <Image
            className="" 
            src="/logo.svg"
            alt="logoyeg"
            width="100"
            height="10"
            style={{
              objectFit:"contain",
            }}/>
            <div className="bg-red-300 flex items-center">
            <span className="text-white font-bold text-3xl pr-1">YEG</span>
            <span className="text-xl border-white text-white border-2 px-1">TRAVEL</span>
            </div>
            
          </a>
          
          <div className="grid p-8 lg:px-28 px-14 text-white text-xs">
            <h className="">YEG Travels Tour Sdn Bhd</h> 
            <h1>BLOK E-2-2, The Strand Garden Office,</h1>
            <h2>Jalan PJU 5/1 Kota Damandsara,</h2>
            <h3>47810,Petaling Jaya, Selangor</h3> 
            <div className="grid py-6 ">
            <h>Email: info@yegtraveltours.com</h>
            <div className="grid py-2">
            <h>Management Office: +60 3 12345678</h>
            </div>
            
          <div className="grid space-y-6">
          <h>@ 2023 YEG Academy (M) Sdn Bhd 1334979-W | Hak Cipta Terpelihara</h>
         
          </div>
          <div className="pt-6 grid space-y-2">
          <h>Developed by PetalCode Labs</h>
          </div>
            
            </div>
          </div>
          </div>
          <div className=" col-span-2 p-8">
            <div className=" text-white text-xs grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            
            
            <div className="grid space-y-3 py-3">
            <a className="text-xl font-bold" href="../article">Home</a>
            <a className="text-xl font-bold" href="../testimoni">Destination</a>
            <a className="text-xl font-bold" href="../career">Contact Us</a>
            <a className="text-xl font-bold" href="../">Blog</a> 
            </div>
            </div>
          </div>
        </div>
      </div>
    </section13>
    </div>
  )
}

export default footer