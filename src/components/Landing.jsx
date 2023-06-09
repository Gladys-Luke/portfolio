import React from "react";
import { useEffect } from 'react';
import { BiRightArrowAlt } from 'react-icons/bi';
import AOS from 'aos';
import 'aos/dist/aos.css';



function Landing() {
  useEffect(() => {
    AOS.init({
      duration: 3000, // animation duration in ms
      easing: 'ease-in-out', // animation easing
      once: true, // animation occurs only once
      mirror: false // animation occurs only once
    });
  }, []);
  return (
    <div id="component5" className="w-full">
        <div  className="bg-[#2e304b] h-[100vh] flex flex-col gap-4  items-center justify-center">
      <div data-aos="zoom-in" className="w-[50%] text-[#ffffff] text-[20px] sm:text-[40px] flex flex-col items-center text-center">
        <h1>
          Hello, I'm <span className="text-[#e31b6d]">Gladys Luke.</span>
        </h1>
        <h1>I Craft visually stunning and seamless user experiences with code.</h1>
      </div>
      <div data-aos="zoom-in" className=" text-[#ffffff] border-solid border-2 border-[#e31b6d] ">
      <a href="url" className="flex text-[25px] px-4 py-2 flex items-center hover:bg-[#e31b6d] hover:transition hover:delay-300 hover:duration-700 hover:ease-in-out">View my work <BiRightArrowAlt  /></a>
      </div>
    </div>
    
    </div>
  );
}

export default Landing;
