import React from "react";
import Crypto from "../Assets/Crypto.png";
import Furniture from "../Assets/Furniture.png";
import Weather from "../Assets/Weather.png";
import Emwesto from "../Assets/Emwesto.png";
import Ametshop from "../Assets/Ametshop.png";
import NFT from "../Assets/NFT.png";

function Projects() {
  return (
    <div className="h-[100%] flex flex-col" id="component2">
      <div className="pb-[5rem] pt-[5rem]">
        <h1 className="flex justify-center items-center  text-[45px] text-[#2e304b] font-bold ">
          PROJECTS
        </h1>
        <hr className="w-[5rem] h-[5px] top-0 bg-[#000000] flex items-center justify-center text-center m-auto" />
      </div>
      <div
        data-aos="fade-up"
        className=" flex flex-col justify-center items-center"
      >
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mx-14">
          <div class="relative">
            <img
              src={Emwesto}
              alt="furniture"
              className="w-[400px] h-[200px]"
            />
            <span class="absolute bg-[#ffffff] top-0 left-0 w-full h-full opacity-0 transition-opacity duration-300 ease-in-out text-gray-600 hover:opacity-100 flex flex-col items-center justify-center gap-4">
              <h1 className="text-[26px]">Emwesto Website</h1>
              <h1 className="text-[#e31b6d]">React.JS/Tailwind Css</h1>
              <a
                href="https://emwesto-website.vercel.app/"
                target="_blank"
                rel={"noreferrer"}
                className="border-2 border-solid border-[#e31b6d] px-6 p4-2 hover:bg-[#e31b6d] hover:text-[#ffffff]"
              >
                See More
              </a>
            </span>
          </div>
          <div class="relative">
            <img
              src={Ametshop}
              alt="furniture"
              className="w-[400px] h-[200px]"
            />
            <span class="absolute bg-[#ffffff] top-0 left-0 w-full h-full opacity-0 transition-opacity duration-300 ease-in-out text-gray-600 hover:opacity-100 flex flex-col items-center justify-center gap-4">
              <h1 className="text-[26px]">Ametshop Website</h1>
              <h1 className="text-[#e31b6d]">React.JS/Tailwind Css</h1>
              <a
                href="https://customerfrontend.vercel.app/"
                target="_blank"
                rel={"noreferrer"}
                className="border-2 border-solid border-[#e31b6d] px-6 p4-2 hover:bg-[#e31b6d] hover:text-[#ffffff]"
              >
                See More
              </a>
            </span>
          </div>
          <div class="relative">
            <img src={NFT} alt="furniture" className="w-[400px] h-[200px]" />
            <span class="absolute bg-[#ffffff] top-0 left-0 w-full h-full opacity-0 transition-opacity duration-300 ease-in-out text-gray-600 hover:opacity-100 flex flex-col items-center justify-center gap-4">
              <h1 className="text-[26px]">Blockchain Website</h1>
              <h1 className="text-[#e31b6d]">React.JS/Tailwind Css</h1>
              <a
                href="https://nft-web-snowy.vercel.app/"
                target="_blank"
                rel={"noreferrer"}
                className="border-2 border-solid border-[#e31b6d] px-6 p4-2 hover:bg-[#e31b6d] hover:text-[#ffffff]"
              >
                See More
              </a>
            </span>
          </div>

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
                target="_blank"
                rel={"noreferrer"}
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
                target="_blank"
                rel={"noreferrer"}
                className="border-2 border-solid border-[#e31b6d] px-6 p4-2 hover:bg-[#e31b6d] hover:text-[#ffffff]"
              >
                See More
              </a>
            </span>
          </div>
          <div class="relative">
            <img src={Weather} alt="weather" className="w-[400px] h-[200px] " />
            <span class="absolute bg-[#ffffff] top-0 left-0 w-full h-full opacity-0 transition-opacity duration-300 ease-in-out text-gray-600 hover:opacity-100 flex flex-col items-center justify-center gap-4">
              <h1 className="text-[26px]">Weather website</h1>
              <h1 className="text-[#e31b6d]">JavaScript</h1>
              <a
                href="https://weather-app-gamma.vercel.app/"
                target="_blank"
                rel={"noreferrer"}
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
