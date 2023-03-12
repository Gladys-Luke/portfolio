import React from "react";
import { RxTimer } from "react-icons/rx";
import { MdOutlineImportantDevices } from "react-icons/md";
import { HiOutlineLightBulb } from "react-icons/hi";
import { BsLightningFill } from "react-icons/bs";
import Profile from "../Assets/profile.jpeg";
import ProgressBar from "@ramonak/react-progress-bar";

function About() {
  return (
    <div className="h-[100%] flex flex-col gap-10" id="component1">
      <div  className="pb-[5rem] pt-[5rem]">
        <h1 data-aos="fade-right"
        data-aos-duration="1000"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="flex justify-center items-center  text-[45px] text-[#2e304b] font-bold ">
          ABOUT
        </h1>
        <hr data-aos="fade-right"
        data-aos-duration="1000"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
     data-aos-delay="900" className="w-[5rem] h-[5px] top-0 bg-[#000000] flex items-center justify-center text-center m-auto " />
      </div>
      <div className="grid grid-cols-2 grid-rows sm:flex gap-4">
        <div data-aos="flip-right"
        data-aos-duration="1000" className="flex flex-col items-center w-full md:w-1/2">
          <RxTimer className="bg-[#16A596] p-[25px] w-[100px] h-[100px] rounded-l-lg text-[#ffffff]  shadow-xl" />
          <h1 className="font-semibold text-[25px] text-[#616161] pt-2">
            Fast
          </h1>
          <p className="text-[14px] text-center sm:text-[18px] text-[#616161]">
            Fast load times and lag free interaction, my highest priority.
          </p>
        </div>
        <div  data-aos="flip-right"
        data-aos-duration="1000"
        data-aos-delay="200" className="flex flex-col items-center w-full md:w-1/2">
          <MdOutlineImportantDevices className="bg-[#16A596] p-[25px] w-[100px] h-[100px] rounded-r-lg text-[#ffffff] shadow-xl" />
          <h1 className="font-semibold text-[25px] text-[#616161] pt-2">
            Responsive
          </h1>
          <p className="text-[14px] text-center sm:text-[18px] text-[#616161]">
            My layouts will work on any device, big or small.
          </p>
        </div>
        <div data-aos="flip-right"
        data-aos-duration="1000"
        data-aos-delay="300" className="flex flex-col items-center w-full md:w-1/2">
          <HiOutlineLightBulb className="bg-[#16A596] p-[25px] w-[100px] h-[100px] rounded-l-lg text-[#ffffff] shadow-xl" />
          <h1 className="font-semibold text-[25px] text-[#616161] pt-2">
            Intuitive
          </h1>
          <p className="text-[14px] text-center sm:text-[18px] text-[#616161]">
            Strong preference for easy to use, intuitive UX/UI.
          </p>
        </div>
        <div data-aos="flip-right"
        data-aos-duration="1000"
        data-aos-delay="400" className="flex flex-col items-center text-center  w-full md:w-1/2">
          <BsLightningFill className="bg-[#16A596] p-[25px] w-[100px] h-[100px] rounded-r-lg text-[#ffffff] shadow-xl" />
          <h1 className="font-semibold text-[25px] text-[#616161] pt-2">
            Dynamic
          </h1>
          <p className="text-[14px] text-center sm:text-[18px] text-[#616161]">
            Websites don't have to be static, I love making pages come to life.
          </p>
        </div>
      </div>
      <div className="w-[90%] flex flex-col sm:flex-row gap-6 justify-center pt-[100px] ">
        <div data-aos="fade-up-right" className="flex flex-col text-center  items-center gap-4">
          <img
            src={Profile}
            alt="profile"
            className="w-[200px] h-[270px] rounded-full  "
          />
          <h1 className="text-[20px] font-bold text-[#616161]">MEET ME!</h1>
          <p className=" text-[#616161] w-[60%]">
            I'm a Front-End Developer for ChowNow in Los Angeles, CA. I have
            serious passion for UI effects, animations and creating intuitive,
            dynamic user experiences. Let's make something special.
          </p>
        </div>
        <div data-aos="fade-up-left" className="flex flex-col gap-8">
          <div  className="flex text-center items-center ">
            <h6 className="bg-[#04c2c9] text-[13px]  text-[#ffffff] font-bold w-[100px]">
              HTML
            </h6>
            <ProgressBar
              completed={90}
              borderRadius="0"
              bgColor="#16A596"
              customLabel="90%"
              className="w-[500px]"
            />
          </div>
          <div className="flex text-center items-center ">
            <h6 className="bg-[#04c2c9] text-[13px]  text-[#ffffff] font-bold w-[100px]">
              CSS
            </h6>
            <ProgressBar
              completed={90}
              borderRadius="0"
              bgColor="#16A596"
              customLabel="90%"
              className="w-[500px]"
            />
          </div>
          <div className="flex text-center items-center ">
            <h6 className="bg-[#04c2c9] text-[13px]  text-[#ffffff] font-bold w-[100px]">
              TAILWIND
            </h6>
            <ProgressBar
              completed={90}
              borderRadius="0"
              bgColor="#16A596"
              customLabel="90%"
              className="w-[500px]"
            />
          </div>
          <div className="flex text-center items-center ">
            <h6 className="bg-[#04c2c9] text-[13px]  text-[#ffffff] font-bold w-[100px]">
              BOOTSTRAP
            </h6>
            <ProgressBar
              completed={90}
              borderRadius="0"
              bgColor="#16A596"
              customLabel="90%"
              className="w-[500px]"
            />
          </div>
          <div className="flex text-center items-center ">
            <h6 className="bg-[#04c2c9] text-[13px]  text-[#ffffff] font-bold w-[100px]">
              JAVASCRIPT
            </h6>
            <ProgressBar
              completed={80}
              borderRadius="0"
              bgColor="#16A596"
              customLabel="80%"
              className="w-[500px]"
            />
          </div>
          <div className="flex text-center items-center ">
            <h6 className="bg-[#04c2c9] text-[13px]  text-[#ffffff] font-bold w-[100px]">
              REACT
            </h6>
            <ProgressBar
              completed={80}
              borderRadius="0"
              bgColor="#16A596"
              customLabel="80%"
              className="w-[500px]"
            />
          </div>
          <div className="flex text-center items-center ">
            <h6 className="bg-[#04c2c9] text-[13px]  text-[#ffffff] font-bold w-[100px]">
              TYPESCRIPT
            </h6>
            <ProgressBar
              completed={60}
              borderRadius="0"
              bgColor="#16A596"
              customLabel="60%"
              className="w-[500px]"
            />
          </div>
          <div className="flex text-center items-center ">
            <h6 className="bg-[#04c2c9] text-[13px]  text-[#ffffff] font-bold w-[100px]">
              NEXT.JS
            </h6>
            <ProgressBar
              completed={60}
              borderRadius="0"
              bgColor="#16A596"
              customLabel="60%"
              className="w-[500px]"
            />
          </div>
          <div className="flex text-center items-center ">
            <h6 className="bg-[#04c2c9] text-[13px]  text-[#ffffff] font-bold w-[100px]">
              ANGULAR
            </h6>
            <ProgressBar
              completed={50}
              borderRadius="0"
              bgColor="#16A596"
              customLabel="50%"
              className="w-[500px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
