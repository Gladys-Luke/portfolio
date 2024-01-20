import React from "react";

function Contact() {
  return (
    <div
      className="w-full sm:w-auto bg-[#2e304b] flex flex-col justify-center items-center gap-8 sm:gap-10 mt-[10rem] pb-[10rem]"
      id="component4"
    >
      <div>
        <h1
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="text-[60px] font-[bold] text-[#ffffff]"
        >
          Contact
        </h1>
        <hr
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="w-[7rem] h-[5px] top-0 bg-[#ffffff] flex items-center justify-center text-center m-auto"
        />
      </div>
      <h3  data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine" className="text-[20px] text-[#16A596] text-center">
        Have a question or want to work together?
      </h3>
      <div data-aos="zoom-in-up" className="w-[80%]">
        <form className="flex flex-col gap-1 justify-center  w-full sm:w-auto sm:m-[10px]">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-2 outline-none border-0 text-sm  text-gray-900 focus:ring-0 dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            className="p-2 outline-none border-0 text-sm  text-gray-900 focus:ring-0 dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
          />
          <textarea
            id="comment"
            rows="7"
            className=" p-2 text-sm text-gray-900 bg-white outline-none border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
            placeholder="Write a comment..."
            required
          ></textarea>

          <div className="flex justify-end px-2 p-2">
            <input
              type="submit"
              value="SUBMIT"
              className=" border-solid border-2 border-[#ffffff] w-[100px] p-1.5 text-[#ffffff] hover:bg-[#16A596] hover:border-solid hover:border-2  hover:border-[#16A596] hover:transition hover:delay-200 hover:duration-700 hover:ease-in-out"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
