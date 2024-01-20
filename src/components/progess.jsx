import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
import Profile from "../Assets/profile.jpeg";

function Progess() {
  return (
    <div className="overflow-hidden w-full flex flex-col sm:flex-row sm:items-center  gap-6 justify-center pt-[100px]">
        <div
          data-aos="fade-up-right"
          className="flex flex-col text-center items-center gap-4 sm:w-full md:w-[50%]"
        >
          <img
            src={Profile}
            alt="profile"
            className="w-[200px] h-[270px] rounded-full"
          />
          <h1 className="text-[20px] font-bold text-[#616161]">MEET ME!</h1>
          <p className="text-[#616161] w-[90%] sm:w-[60%]">
            I am an experienced Front-end Developer with a proven track record
            in creating visually engaging and user-centric web applications. I
            am a skilled problem-solver and team player. Let's discuss!
          </p>
        </div>
        <div
          data-aos="fade-up-left"
          className="flex flex-col  gap-8 md:gap-8 sm:mr-10 sm:w-[50%] mx-[10px]"
        >
          <div className="flex text-center items-center ">
            <div className='bg-[#04c2c9]  w-[100%]'>
            <h6 className=" text-[13px]  text-[#ffffff] font-bold ">
              HTML
            </h6>
            </div>
            <ProgressBar
              completed={90}
              borderRadius="0"
              bgColor="#16A596"
              customLabel="90%"
              className="w-[500px]"
            />
          </div>
          <div className="flex text-center items-center ">
           <div className='bg-[#04c2c9]  w-[100%]'>
           <h6 className=" text-[13px]  text-[#ffffff] font-bold">
              CSS
            </h6>
           </div>
            <ProgressBar
              completed={90}
              borderRadius="0"
              bgColor="#16A596"
              customLabel="90%"
              className="w-[500px]"
            />
          </div>
          <div className="flex text-center items-center ">
           <div className='bg-[#04c2c9]  w-[100%]'>
           <h6 className="text-[13px]  text-[#ffffff] font-bold ">
              TAILWIND
            </h6>
           </div>
            <ProgressBar
              completed={90}
              borderRadius="0"
              bgColor="#16A596"
              customLabel="90%"
              className="w-[500px]"
            />
          </div>
          <div className="flex text-center items-center ">
            <div className='bg-[#04c2c9]  w-[100%]'>
            <h6 className= "text-[13px]  text-[#ffffff] font-bold ">
              BOOTSTRAP
            </h6>
            </div>
            <ProgressBar
              completed={90}
              borderRadius="0"
              bgColor="#16A596"
              customLabel="90%"
              className="w-[500px]"
            />
          </div>
          <div className="flex text-center items-center ">
            <div className='bg-[#04c2c9]  w-[100%]'>
            <h6 className=" text-[13px]  text-[#ffffff] font-bold ">
              JAVASCRIPT
            </h6>
            </div>
            <ProgressBar
              completed={80}
              borderRadius="0"
              bgColor="#16A596"
              customLabel="80%"
              className="w-[500px]"
            />
          </div>
          <div className="flex text-center items-center ">
            <div className='bg-[#04c2c9]  w-[100%]'>
            <h6 className="text-[13px]  text-[#ffffff] font-bold ">
              REACT
            </h6>
            </div>
            <ProgressBar
              completed={80}
              borderRadius="0"
              bgColor="#16A596"
              customLabel="80%"
              className="w-[500px]"
            />
          </div>
          <div className="flex text-center items-center ">
           <div className='bg-[#04c2c9]  w-[100%]'>
           <h6 className=" text-[13px]  text-[#ffffff] font-bold ">
              TYPESCRIPT
            </h6>
           </div>
            <ProgressBar
              completed={60}
              borderRadius="0"
              bgColor="#16A596"
              customLabel="60%"
              className="w-[500px]"
            />
          </div>
          <div className="flex text-center items-center ">
            <div className='bg-[#04c2c9]  w-[100%]'>
            <h6 className="text-[13px]  text-[#ffffff] font-bold ">
              NEXT.JS
            </h6>
            </div>
            <ProgressBar
              completed={60}
              borderRadius="0"
              bgColor="#16A596"
              customLabel="60%"
              className="w-[500px]"
            />
          </div>
          <div className="flex text-center items-center ">
            <div className='bg-[#04c2c9]  w-[100%]'>
            <h6 className="text-[13px]  text-[#ffffff] font-bold">
              ANGULAR
            </h6>
            </div>
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
  )
}

export default Progess;