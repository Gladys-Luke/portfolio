import React from "react";
import { RxTimer } from "react-icons/rx";
import { MdOutlineImportantDevices } from "react-icons/md";
import { HiOutlineLightBulb } from "react-icons/hi";
import { BsLightningFill } from "react-icons/bs";


function About() {
  return (
    <div
      className=" w-full m-auto items-center justify-center self-center flex flex-col md:w-[100%] md:m-auto sm:flex sm:items-center sm:justify-center gap-10"
      id="component1"
    >
      <div className="w-full flex flex-col items-center justify-center sm:items-stretch sm:justify-center sm:align-middle sm:m-auto">
        <div className="pb-[5rem] pt-[5rem]" >
          <h1
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="overflow-hidden text-4xl text-center font-bold"
          >
            ABOUT
          </h1>
          <hr
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-delay="900"
            className="w-[5rem] h-[5px] top-0 bg-[#000000] mx-auto"
          />
        </div>
        <div className="overflow-hidden md:ml-36 lg:mx-20 mx-5 grid grid-cols-2  sm:grid-cols-2 lg:flex gap-4">
          <div
            data-aos="flip-right"
            data-aos-duration="1000"
            className="flex flex-col items-center w-full md:w-1/2"
          >
            <RxTimer className="bg-[#16A596] p-[25px] w-[100px] h-[100px] rounded-l-lg text-[#ffffff]  shadow-xl" />
            <h1 className="font-semibold sm:text-[25px] text-[20px]  text-[#616161] pt-2">
              Fast
            </h1>
            <p className="text-[14px] text-center sm:text-[18px] text-[#616161]">
              Fast load times and lag free interaction, my highest priority.
            </p>
          </div>
          <div
            data-aos="flip-right"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="flex flex-col items-center w-[100%] md:w-1/2"
          >
            <MdOutlineImportantDevices className="bg-[#16A596] p-[25px] w-[100px] h-[100px] rounded-r-lg text-[#ffffff] shadow-xl" />
            <h1 className="font-semibold sm:text-[25px] text-[20px] text-[#616161] pt-2">
              Responsive
            </h1>
            <p className="text-[14px] text-center sm:text-[18px] text-[#616161]">
              My layouts will work on any device, big or small.
            </p>
          </div>
          <div
            data-aos="flip-right"
            data-aos-duration="1000"
            data-aos-delay="300"
            className="flex flex-col items-center w-full md:w-1/2"
          >
            <HiOutlineLightBulb className="bg-[#16A596] p-[25px] w-[100px] h-[100px] rounded-l-lg text-[#ffffff] shadow-xl" />
            <h1 className="font-semibold sm:text-[25px] text-[20px] text-[#616161] pt-2">
              Intuitive
            </h1>
            <p className="text-[14px] text-center sm:text-[18px] text-[#616161]">
              Strong preference for easy to use, intuitive UX/UI.
            </p>
          </div>
          <div
            data-aos="flip-right"
            data-aos-duration="1000"
            data-aos-delay="400"
            className="flex flex-col items-center text-center  w-full md:w-1/2"
          >
            <BsLightningFill className="bg-[#16A596] p-[25px] w-[100px] h-[100px] rounded-r-lg text-[#ffffff] shadow-xl" />
            <h1 className="font-semibold sm:text-[25px] text-[20px] text-[#616161] pt-2">
              Dynamic
            </h1>
            <p className="text-[14px] text-center sm:text-[18px] text-[#616161]">
              Websites don't have to be static, I love making pages come to
              life.
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default About;
