import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';
import Slider from '@/components/Slider'



export default function Home() {
  return (
    <main className="h-screen w-full" style={{ backgroundImage: 'url("/bgyegtravel.svg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* phone view section */}
      <section className="h-screen lg:hidden flex flex-col ">
      <div className="p-6 lg:hidden items-center flex ">
        <Image className="" src="/logo.svg" alt="logo" width="70" height="70" style={{objectFit:"contain"}}/>
        <span className="text-white font-bold text-3xl pr-1">YEG</span>
        <span className="text-xl border-white text-white border-2 px-1">TRAVEL</span>
      </div>
      <div className="h-full flex justify-between px-10">
      <div className="flex items-start">
          <Image className="" src="/icondot.svg" alt="logo" width="130" height="130" style={{objectFit:"contain"}}/>
        </div>
        <div className="flex items-end ">
          <Image className="" src="/icontriangle.svg" alt="logo" width="130" height="130" style={{objectFit:"contain"}}/>
        </div>
      </div>
      <div className="h-full flex items-end py-14">
      <div className="absolute border-l-4 border-gray-300 h-64 mx-6 bottom-60"></div>
        <div className="mx-10 space-y-5">
          <p className="text-5xl font-extrabold text-white">EXPLORE</p>
          <p className="text-5xl font-extrabold text-white">DREAM</p>
          <p className="text-5xl border-white text-white border-4">DESTINATION</p>
          <div className="py-4 lg:py-8">
            <p className="text-sm text-white">YEG Travel adalah satu company yang dirumus untuk menawarkan perkhidmatan travel yang membawa semua orang kemana sahaja yang depa nak. Selain dari itu, Kami adalah satu agensi bersama YEG yang menghantar student pergi menunaikan Haji ataupown Umrah</p>
          </div>
          <div className="flex items-center">
            <button className="lg:w-1/4 w-1/2 px-4 py-2 bg-cyan-700 text-white rounded-sm hover:bg-cyan-700">
              <p className="font-bold text-sm">REVEAL US</p>
            </button>
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><SiTiktok className="text-white hover:text-slate-400 text-2xl mx-2"/></a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram className="text-white hover:text-slate-400 text-2xl mx-2" /></a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF className="text-white hover:text-slate-400 text-2xl mx-2"/></a>
          </div>
        </div>
      </div> 
      </section>

      {/* monitor view size */}
      <section className="hidden lg:block">
        <div className="flex ">
          <div className="px-6 flex items-center">
            <Image className="" src="/logo.svg" alt="logo" width="60" height="60" style={{objectFit:"contain"}}/>
            <span className="text-white font-bold text-2xl pr-1">YEG</span>
            <span className="text-lg border-white text-white border-2 px-1">TRAVEL</span>
          </div>
          <div className="w-full flex justify-start items-center m-4 ml-10 space-x-28 px-10 ">
            <div className=""><h className="text-white">Home</h></div>
            <div className=""><h className="text-white">Destination</h></div>
            <div className=""><h className="text-white">Contact Us</h></div>
            <div className=""><h className="text-white">Blog</h></div>
          </div>
          <button className="m-4 w-1/6 rounded-full flex justify-start items-center bg-cyan-700 ">
          <div className="flex px-1">
            <Image className="" src="/personaltravel.svg" alt="logo" width="45" height="45" style={{objectFit:"contain"}}/>
            <h className="text-white  flex items-center px-3">Log In</h>
          </div>
          </button>
        </div>  
      </section>
      <section className="hidden lg:block">
        <div className="absolute grid lg:px-2 py-16 space-y-6">
          <div className="border-l-4 border-gray-300 h-72 mx-14"></div>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF className="text-white hover:text-slate-400 text-2xl mx-11"/></a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter className="text-white hover:text-slate-400 text-2xl mx-11"/></a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram className="text-white hover:text-slate-400 text-2xl mx-11" /></a>
          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><SiTiktok className="text-white hover:text-slate-400 text-2xl mx-11"/></a>
        </div>
      </section>
      <div className="lg:py-8"></div>

      <section className="hidden lg:block">
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-center ">
          <div className="space-y-2 grid lg:ml-32 lg:w-2/3">
          <p className="lg:text-7xl text-3xl font-extrabold text-white">EXPLORE</p>
          <p className="lg:text-7xl text-3xl font-extrabold text-white">DREAM</p>
          <p className="lg:text-7xl text-3xl border-white text-white border-4 w-3/5 lg:w-full">DESTINATION</p>
          <div className="py-4 lg:py-8">
            <p className="text-sm text-white">YEG Travel adalah satu company yang dirumus untuk menawarkan perkhidmatan travel yang membawa semua orang kemana sahaja yang depa nak. Selain dari itu, Kami adalah satu agensi bersama YEG yang menghantar student pergi menunaikan Haji ataupown Umrah</p>
          </div>
          <button className="lg:w-1/4 w-1/2 px-4 py-2 bg-cyan-700 text-white rounded hover:bg-green-700">
            <p className="font-bold text-sm">REVEAL US</p>
          </button>
          </div>
          <div>
            <Slider/>
          </div>
          
        </div>
      </section>
      <section></section>













     









    </main>
  );
}
