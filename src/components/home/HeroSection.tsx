


import React from "react";
import "./style.css";
import Link from "next/link";

function Hero() {
  return (
    <div id="home" className="bg-black text-white border-none">
      
      {/* Background Image Container */}
      <div className="relative md:h-[650px] bg-cover bg-center overflow-hidden opacity-90" 
           style={{ backgroundImage: "url(/images/image67.png)" }}>

        {/* Content Wrapper */}
        <div className="flex flex-col w-11/12 md:w-3/4 m-auto items-center justify-center min-h-[80vh] lg:min-h-[650px]">
          
          {/* Badge */}
          <div className="flex mt-10 md:mt-14 border border-gray-500 w-48 md:w-60 p-2 rounded-2xl justify-center bg-black font-bold items-center">
            <img src="/images/rocket.png" alt="rocket" className="w-4 md:w-5" />
            <div className="ml-2 text-xs md:text-sm">#1 RESUME BUILDER TOOL</div>
          </div>

          {/* Main Heading */}
          <div className="mt-4 text-center text-2xl md:text-4xl lg:text-5xl font-bold gradient-text leading-snug">
            Resume Templates <br /> For Every Career Path
          </div>

          {/* Description */}
          <div className="text-center mt-6 text-gray-400 text-sm md:text-base leading-relaxed">
            Welcome to <span className="font-semibold">Rizzume</span>, where crafting your perfect resume 
            is as simple as a few clicks. <br className="hidden md:block" /> Our intuitive platform offers expertly 
            designed templates to help you <br className="hidden md:block" /> stand out in today's competitive job market.
          </div>

          {/* CTA Button */}
          <Link href='/templates'>
          <div className="mt-8 md:mt-6">
            <button className="border bg-white text-black w-48 md:w-56 font-semibold h-10 rounded flex justify-center items-center cursor-pointer hover:shadow-md hover:shadow-slate-500 transition-all duration-300">
              Create My Resume Now
            </button>
          </div>
          </Link>

        </div>
      </div>
    </div>
  );
}

export default Hero;
