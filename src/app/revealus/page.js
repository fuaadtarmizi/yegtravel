import React from 'react'
import Image from "next/image"
import Testimonials from "@/components/Testimonials"
function page() {
  return (
    <main className="">
        <section>
            <div className="flex w-full py-4 bg-slate-200">
                <div className="grid space-y-3 container py-2 ">
                    <h className="text-slate-700 text-2xl font-black">WHO WE ARE?</h>
                    <h className="text-slate-700 text-xl">YEG Travel & Tours Sdn. Bhd. 
                        established with the mission to 
                        provide high quality tourism 
                        services, especially in Hajj and 
                        Umrah travel management. With 
                        years of experience in the travel 
                        industry, we are committed to 
                        providing an unforgettable 
                        experience to our customers</h>
                        <h className="text-slate-700 text-2xl font-black">COMPANY DETAIL</h>
                    <h className="text-slate-700 text-xl font-bold">Address:</h>
                    <h className="text-slate-700 text-xl">E-2-2, Strand Garden Office, Jalan PJU 5/1, Kota Damansara, 47810 Petaling Jaya, Selangor</h>
                    <h className="text-slate-700 text-xl font-bold">Contact:</h>
                    <h className="text-slate-700 text-xl">Email: info@yegtraveltours.com</h>
                    <h className="text-slate-700 text-xl">Telephone: +60312345678</h>
                </div>
                {/* <div className="bg-green-300">
                <div className="flex justify-center">
                    <Image className=""
                        src="/travel1.jpg"
                        alt="innovativelogo"
                        width="370"
                        height="100"
                        style={{objectFit:"contain"}}/>
                    </div>
                    </div> */}
            </div>
        </section>
        <section>
            <div className="py-4" style={{ backgroundImage: 'url("/bgyegtravel.svg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="grid-cols-1 space-y-4 ">
                    <div className="container space-y-4 lg:w-lvw">
                        <div className="bg-inherit rounded shadow-md p-4 py-6" style={{backgroundColor: 'rgba(255, 255, 255, 0.4)',backdropFilter: 'blur(10px)'}}>
                            <div className="grid p-2 space-y-2">
                            <h className="text-center font-bold text-xl">VISION</h>
                            <h className="text-center text-xl">To be the leading provider of Hajj and Umrah travel services in Malaysia and around the world.</h>
                            </div>
                        </div>
                        <div className="bg-slate-100 rounded shadow-md p-4 py-6" style={{backgroundColor: 'rgba(255, 255, 255, 0.4)',backdropFilter: 'blur(10px)'}}>
                            <div className="grid p-2 space-y-2">
                            <h className="text-center font-bold text-xl">MISSION</h>
                            <h className="text-center text-xl">Providing safe, comfortable, and affordable travel services.</h>
                            <h className="text-center text-xl">Provide full guidance and support to Hajj and Umrah pilgrims.</h>
                            <h className="text-center text-xl">Increase awareness of important Islamic tourism destinations.</h>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="lg:py-10"></div>
        <section>
            <div className="w-full bg-slate-100 p-4">
            <div className="grid p-4">
            <h className="font-bold text-3xl">OBJECTIVE.</h>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 lg:px-8">
                <div className="p-2">
                    <div className="bg-slate-700 grid p-6 rounded space-y-8">
                    <h className="text-xl text-white font-bold">1.</h>
                    <h className="text-xl text-white font-bold">Ensuring that every Hajj and Umrah journey runs smoothly and satisfactorily.</h>
                    <h className="flex justify-end"><svg width="45" height="45" viewBox="0 0 15 5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.877075 7.49991C0.877075 3.84222 3.84222 0.877075 7.49991 0.877075C11.1576 0.877075 14.1227 3.84222 14.1227 7.49991C14.1227 11.1576 11.1576 14.1227 7.49991 14.1227C3.84222 14.1227 0.877075 11.1576 0.877075 7.49991ZM7.49991 1.82708C4.36689 1.82708 1.82708 4.36689 1.82708 7.49991C1.82708 10.6329 4.36689 13.1727 7.49991 13.1727C10.6329 13.1727 13.1727 10.6329 13.1727 7.49991C13.1727 4.36689 10.6329 1.82708 7.49991 1.82708Z" fill="white" fill-rule="evenodd" clip-rule="evenodd"></path></svg></h>
                    </div>
                </div>
                <div className="p-2">
                    <div className="bg-slate-700 grid p-6 rounded space-y-8">
                    <h className="text-xl text-white font-bold">2.</h>
                    <h className="text-xl text-white font-bold">Ensuring that every Hajj and Umrah journey runs smoothly and satisfactorily.</h>
                    <h className="flex justify-end"><svg width="45" height="45" viewBox="0 0 15 5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.24182 2.32181C3.3919 2.23132 3.5784 2.22601 3.73338 2.30781L12.7334 7.05781C12.8974 7.14436 13 7.31457 13 7.5C13 7.68543 12.8974 7.85564 12.7334 7.94219L3.73338 12.6922C3.5784 12.774 3.3919 12.7687 3.24182 12.6782C3.09175 12.5877 3 12.4252 3 12.25V2.75C3 2.57476 3.09175 2.4123 3.24182 2.32181ZM4 3.57925V11.4207L11.4288 7.5L4 3.57925Z" fill="white" fill-rule="evenodd" clip-rule="evenodd"></path></svg></h>
                    </div>
                </div>
                <div className="p-2">
                    <div className="bg-slate-700 grid p-6 rounded space-y-4">
                    <h className="text-xl text-white font-bold">3.</h>
                    <h className="text-xl text-white font-bold">Provide education and worship guidance to pilgrims before, during, and after the trip.</h>
                    <h className="flex justify-end"><svg width="45" height="45" viewBox="0 0 15 5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 2H2.5C2.22386 2 2 2.22386 2 2.5V12.5C2 12.7761 2.22386 13 2.5 13H12.5C12.7761 13 13 12.7761 13 12.5V2.5C13 2.22386 12.7761 2 12.5 2ZM2.5 1C1.67157 1 1 1.67157 1 2.5V12.5C1 13.3284 1.67157 14 2.5 14H12.5C13.3284 14 14 13.3284 14 12.5V2.5C14 1.67157 13.3284 1 12.5 1H2.5Z" fill="white" fill-rule="evenodd" clip-rule="evenodd"></path></svg></h>
                </div>
                </div>
            </div>
            </div>
        </section>
        <div className="lg:py-10"></div>
        <section>
        {/* for lg view */}
        <div className="hidden lg:block">
            <div className="bg-white">
                <div className=" flex justify-center">
                <Image className=""
                    src="/valuelg.jpg"
                    alt="valuelg"
                    width="1000"
                    height="10"
                    style={{objectFit:"contain"}}/></div>
            </div>
        </div>
        {/* for phone view */}
        <div className="lg:hidden">
            <div className="bg-green-300">
                <div className=" flex justify-center">
                <Image className="w-full"
                    src="/valuesm.jpg"
                    alt="valuesm"
                    width="800"
                    height="10"
                    style={{objectFit:"contain"}}/></div>
            </div>
        </div>
        </section>
        <div className="lg:py-10"></div>
        <section>
        <div className="container">
        <div className="grid justify-start ">
        <h3 className=" text-4xl font-extrabold text-slate-800">OUR PRODUCTS
        AND SERVICES:</h3>
        </div>
        </div>
        <div>
        <div className="container">
            <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center"> 
            <card className="rounded-xl w-full h-full p-8 space-y-8 hover:bg-cyan-900 duration-200 border-r-2 hover:shadow-xl group">
            <div className="" >
                <svg width="35" height="35" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.4986 0C6.3257 0 5.36107 0.38943 4.73753 1.19361C4.23745 1.83856 4 2.68242 4 3.63325H5C5 2.84313 5.19691 2.23312 5.5278 1.80636C5.91615 1.30552 6.55152 1 7.4986 1C8.35683 1 8.96336 1.26502 9.35846 1.68623C9.75793 2.11211 10 2.76044 10 3.63601V6H3C2.44772 6 2 6.44772 2 7V13C2 13.5523 2.44772 14 3 14H12C12.5523 14 13 13.5523 13 13V7C13 6.44771 12.5523 6 12 6H11V3.63601C11 2.58135 10.7065 1.66167 10.0878 1.0021C9.46477 0.337871 8.57061 0 7.4986 0ZM3 7H12V13H3V7Z" fill="white" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
            </div>
            <div className="">
                <span className="font-sans text-yellow-600 font-bold text-xl">Product</span>
            </div>
            <div className="">
                <li className="text-base font-bold text-slate-500 group-hover:text-white">Hajj and Umrah packages.</li>
                <li className="text-base font-bold text-slate-500 group-hover:text-white">Domestic and International Travel Packages.</li>
            </div>
            </card>
            
            <card2 className="rounded-xl w-full h-full p-8 space-y-8 hover:bg-cyan-900 duration-200 border-r-2 hover:shadow-xl group">
            <div className="">
                <svg width="35" height="35" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 7.50003C5 8.32845 4.32843 9.00003 3.5 9.00003C2.67157 9.00003 2 8.32845 2 7.50003C2 6.6716 2.67157 6.00003 3.5 6.00003C4.32843 6.00003 5 6.6716 5 7.50003ZM5.71313 8.66388C5.29445 9.45838 4.46048 10 3.5 10C2.11929 10 1 8.88074 1 7.50003C1 6.11931 2.11929 5.00003 3.5 5.00003C4.46048 5.00003 5.29445 5.54167 5.71313 6.33616L9.10424 4.21671C9.03643 3.98968 9 3.74911 9 3.50003C9 2.11932 10.1193 1.00003 11.5 1.00003C12.8807 1.00003 14 2.11932 14 3.50003C14 4.88074 12.8807 6.00003 11.5 6.00003C10.6915 6.00003 9.97264 5.61624 9.51566 5.0209L5.9853 7.22738C5.99502 7.31692 6 7.40789 6 7.50003C6 7.59216 5.99502 7.68312 5.9853 7.77267L9.51567 9.97915C9.97265 9.38382 10.6915 9.00003 11.5 9.00003C12.8807 9.00003 14 10.1193 14 11.5C14 12.8807 12.8807 14 11.5 14C10.1193 14 9 12.8807 9 11.5C9 11.2509 9.03643 11.0104 9.10425 10.7833L5.71313 8.66388ZM11.5 5.00003C12.3284 5.00003 13 4.32846 13 3.50003C13 2.6716 12.3284 2.00003 11.5 2.00003C10.6716 2.00003 10 2.6716 10 3.50003C10 4.32846 10.6716 5.00003 11.5 5.00003ZM13 11.5C13 12.3285 12.3284 13 11.5 13C10.6716 13 10 12.3285 10 11.5C10 10.6716 10.6716 10 11.5 10C12.3284 10 13 10.6716 13 11.5Z" fill="white" fill-rule="evenodd" clip-rule="evenodd"></path></svg> 
            </div>
            <div className="">
                <span className="font-sans text-yellow-600 font-bold text-xl">Service</span>
            </div>
            <div h-full className="">
                <li className=" text-base font-bold text-slate-500 group-hover:text-white">Flight Ticket Booking.</li>
                <li className=" text-base font-bold text-slate-500 group-hover:text-white">Hotel accommodation.</li>
                <li className=" text-base font-bold text-slate-500 group-hover:text-white">Land transportation.</li>
                <li className=" text-base font-bold text-slate-500 group-hover:text-white">Worship Guidance.</li>
            </div>
            <div className=" "></div>     
            </card2>
            
            </div>
            </div>
        </div>
        </section>
        <div className="lg:py-10"></div>
        <section>
            <div className="lg:container flex justify-center">
            <Image className="w-full"
                src="/travelmadinah.jpg"
                alt="travelmadinah"
                width="1300"
                height="10"
                style={{objectFit:"contain"}}/>
            </div>
        </section>
        <div className="lg:py-10"></div>
        <section>
        <div className="container">
        <div className="grid justify-start py-2">
        <h3 className=" text-4xl font-extrabold text-slate-800">PORTFOLIO AND MAIN PROJECTS</h3>
        </div>
        </div>
        <div>
        <div className="container">
            <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 justify-center"> 
            <card className="shadow-md rounded-xl w-full h-full p-8 space-y-8 hover:bg-cyan-900 duration-200 border-r-2 hover:shadow-xl group">
            <div className="" >
                <svg width="35" height="35" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.4986 0C6.3257 0 5.36107 0.38943 4.73753 1.19361C4.23745 1.83856 4 2.68242 4 3.63325H5C5 2.84313 5.19691 2.23312 5.5278 1.80636C5.91615 1.30552 6.55152 1 7.4986 1C8.35683 1 8.96336 1.26502 9.35846 1.68623C9.75793 2.11211 10 2.76044 10 3.63601V6H3C2.44772 6 2 6.44772 2 7V13C2 13.5523 2.44772 14 3 14H12C12.5523 14 13 13.5523 13 13V7C13 6.44771 12.5523 6 12 6H11V3.63601C11 2.58135 10.7065 1.66167 10.0878 1.0021C9.46477 0.337871 8.57061 0 7.4986 0ZM3 7H12V13H3V7Z" fill="white" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
            </div>
            <div className="">
                <span className="font-sans text-yellow-600 font-bold text-xl">First project:</span>
            </div>
            <div className="flex space-x-1">
                <p><svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 11L6 4L10.5 7.5L6 11Z" fill="gray"></path></svg></p>
                <p className="text-base font-bold text-slate-500 group-hover:text-white"> We manage academic excellence in the Hajj and Umrah industry in producing Hajj and Umrah professionals. Among the programs we offer are SPHU and Diploma.</p>
            </div>
            </card>
            
            <card2 className="shadow-md rounded-xl w-full h-full p-8 space-y-4 hover:bg-cyan-900 duration-200 border-r-2 hover:shadow-xl group">
            <div className="py-2">
                <svg width="35" height="35" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 7.50003C5 8.32845 4.32843 9.00003 3.5 9.00003C2.67157 9.00003 2 8.32845 2 7.50003C2 6.6716 2.67157 6.00003 3.5 6.00003C4.32843 6.00003 5 6.6716 5 7.50003ZM5.71313 8.66388C5.29445 9.45838 4.46048 10 3.5 10C2.11929 10 1 8.88074 1 7.50003C1 6.11931 2.11929 5.00003 3.5 5.00003C4.46048 5.00003 5.29445 5.54167 5.71313 6.33616L9.10424 4.21671C9.03643 3.98968 9 3.74911 9 3.50003C9 2.11932 10.1193 1.00003 11.5 1.00003C12.8807 1.00003 14 2.11932 14 3.50003C14 4.88074 12.8807 6.00003 11.5 6.00003C10.6915 6.00003 9.97264 5.61624 9.51566 5.0209L5.9853 7.22738C5.99502 7.31692 6 7.40789 6 7.50003C6 7.59216 5.99502 7.68312 5.9853 7.77267L9.51567 9.97915C9.97265 9.38382 10.6915 9.00003 11.5 9.00003C12.8807 9.00003 14 10.1193 14 11.5C14 12.8807 12.8807 14 11.5 14C10.1193 14 9 12.8807 9 11.5C9 11.2509 9.03643 11.0104 9.10425 10.7833L5.71313 8.66388ZM11.5 5.00003C12.3284 5.00003 13 4.32846 13 3.50003C13 2.6716 12.3284 2.00003 11.5 2.00003C10.6716 2.00003 10 2.6716 10 3.50003C10 4.32846 10.6716 5.00003 11.5 5.00003ZM13 11.5C13 12.3285 12.3284 13 11.5 13C10.6716 13 10 12.3285 10 11.5C10 10.6716 10.6716 10 11.5 10C12.3284 10 13 10.6716 13 11.5Z" fill="white" fill-rule="evenodd" clip-rule="evenodd"></path></svg> 
            </div>
            <div className="">
                <span className="font-sans text-yellow-600 font-bold text-xl">Hajj and Umrah Profesional</span>
            </div>
            
            <div className=" ">
                <span className="font-sans text-yellow-600 font-bold text-xl">Certificate</span>
            <div className="flex space-x-1">
                <p><svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 11L6 4L10.5 7.5L6 11Z" fill="gray"></path></svg></p>
                <p className="text-base font-bold text-slate-500 group-hover:text-white">Certified Professional Mutawwif Program at Bagan Lalang for their final test to get their Mutawwif certificate.</p>
            </div>
            <div className="flex space-x-1">
                <p><svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 11L6 4L10.5 7.5L6 11Z" fill="gray"></path></svg></p>
                <p className="text-base font-bold text-slate-500 group-hover:text-white"> Train The Trainer Program where we sent our trainee to Mecca and Medina.</p>
            </div>
                </div>
            </card2>

            <card className="shadow-md rounded-xl w-full h-full p-8 space-y-8 hover:bg-cyan-900 duration-200 border-r-2 hover:shadow-xl group">
            <div className="" >
            <svg width="35" height="35" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 9C3 6.5 4.5 4.25 7.5 1.5C10.5 4.25 12 6.5 12 9C12 11.4853 9.98528 13.5 7.5 13.5C5.01472 13.5 3 11.4853 3 9ZM10.9524 8.30307C9.67347 7.82121 8.2879 8.46208 6.98956 9.06259C5.9327 9.55142 4.93365 10.0135 4.09695 9.82153C4.03357 9.55804 4 9.28294 4 9C4 7.11203 5.02686 5.27195 7.5 2.87357C9.66837 4.97639 10.725 6.65004 10.9524 8.30307Z" fill="white" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
            </div>
            <div className="">
                <span className="font-sans text-yellow-600 font-bold text-xl">Diploma Hajj and Umrah</span>
            </div>
            <div className=" ">
                <span className="font-sans text-yellow-600 font-bold text-xl">Management</span>
            <div className="flex space-x-1">
                <p><svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 11L6 4L10.5 7.5L6 11Z" fill="gray"></path></svg></p>
                <p className="text-base font-bold text-slate-500 group-hover:text-white">Diploma in Hajj and Umrah Management where the student study theory at Innovative University College, IUC and undergo pratical work in Mecca and Medina</p>
            </div>
                </div>
            </card>
            </div>
            </div>
        </div>
        </section>
        <div className="lg:py-10"></div>
        <section>
        <div className="container">
        <div className="grid justify-start py-2">
        <h3 className=" text-4xl font-extrabold text-slate-800">TESTIMONIALS</h3>
        </div>
        <Testimonials/>
        </div>
       
            
      
        </section>
        <div className="lg:py-10"></div>



    </main>
  )
}

export default page