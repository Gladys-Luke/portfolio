import React from "react";
import Crypto from "../Assets/Crypto.png";
import Furniture from "../Assets/Furniture.png";
import Weather from "../Assets/Weather.png";

function Projects() {
  return (
    <div className="h-[100%] flex flex-col" id="component2">
      <div className="pb-[5rem] pt-[5rem]">
        <h1
          // data-aos="fade-left"
          // data-aos-duration="1000"
          // data-aos-offset="300"
          // data-aos-easing="ease-in-sine"
          className="flex justify-center items-center  text-[45px] text-[#2e304b] font-bold "
        >
          PROJECTS
        </h1>
        <hr
          // data-aos="fade-left"
          // data-aos-duration="1000"
          // data-aos-offset="300"
          // data-aos-easing="ease-in-sine"
          // data-aos-delay="900"
          className="w-[5rem] h-[5px] top-0 bg-[#000000] flex items-center justify-center text-center m-auto"
        />
      </div>
      <div
        data-aos="fade-up"
        className=" flex flex-col justify-center items-center"
      >
        <div className="flex  flex-col sm:flex-row gap-4">
          <div class="relative">
            <img
              src={Furniture}
              alt="furniture"
              className="w-[400px] h-[200px]"
            />
            <span class="absolute bg-[#ffffff] top-0 left-0 w-full h-full opacity-0 transition-opacity duration-300 ease-in-out text-gray-600 hover:opacity-100 flex flex-col items-center justify-center gap-4">
              <h1 className="text-[26px]">Furniture Website</h1>
              <h1 className="text-[#e31b6d]">React.JS/Tailwind Css</h1>
              <a
                href="https://fur-repo.vercel.app/"
                target="_blank" rel={'noreferrer'}
                className="border-2 border-solid border-[#e31b6d] px-6 p4-2 hover:bg-[#e31b6d] hover:text-[#ffffff]"
              >
                See More
              </a>
            </span>
          </div>
          <div class="relative">
          <img src={Crypto} alt="crypto" className="w-[400px] h-[200px] " />
            <span class="absolute bg-[#ffffff] top-0 left-0 w-full h-full opacity-0 transition-opacity duration-300 ease-in-out text-gray-600 hover:opacity-100 flex flex-col items-center justify-center gap-4">
              <h1 className="text-[26px]">Crypto Website</h1>
              <h1 className="text-[#e31b6d]">HTML/CSS</h1>
              <a
                href="https://devcareer-task-crypto-website.netlify.app/"
                target="_blank" rel={'noreferrer'}
                className="border-2 border-solid border-[#e31b6d] px-6 p4-2 hover:bg-[#e31b6d] hover:text-[#ffffff]"
              >
                See More
              </a>
            </span>
          </div>
          <div class="relative">
          <img src={Weather} alt="weather" className="w-[400px] h-[200px] " />
            <span class="absolute bg-[#ffffff] top-0 left-0 w-full h-full opacity-0 transition-opacity duration-300 ease-in-out text-gray-600 hover:opacity-100 flex flex-col items-center justify-center gap-4">
              <h1 className="text-[26px]">Digital Clock</h1>
              <h1 className="text-[#e31b6d]">JavaScript</h1>
              <a
                href="https://gladys-luke.github.io/digital-clock/"
                target="_blank" rel={'noreferrer'}
                className="border-2 border-solid border-[#e31b6d] px-6 p4-2 hover:bg-[#e31b6d] hover:text-[#ffffff]"
              >
                See More
              </a>
            </span>
          </div>
          
          
        </div>
      </div>
    </div>
  );
}

export default Projects;
