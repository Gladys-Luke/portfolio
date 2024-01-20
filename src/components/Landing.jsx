import React from "react";
import { useEffect } from "react";
import { Link } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoMdArrowDown } from "react-icons/io";

// ... (import statements remain unchanged)

function Landing() {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <div id="component5" className="w-full min-h-screen">
      <div className="bg-[#2e304b] min-h-screen flex flex-col gap-4 items-center justify-center">
        <div
          data-aos="zoom-in"
          className="w-[90%] sm:w-[50%] text-[#ffffff] text-sm sm:text-2xl lg:text-4xl xl:text-5xl flex flex-col items-center text-center"
        >
          <h1>
            Hello, I'm <span className="text-[#e31b6d]">Gladys Luke.</span>
          </h1>
          <h1>I craft visually stunning and seamless user experiences with code.</h1>
        </div>
        <div
          data-aos="zoom-in"
          className="text-[#ffffff] border-solid border-2 mt-10 border-[#e31b6d] mb-8"
        >
          <Link to="component2" smooth={true} duration={500}>
            <a
              href="url"
              className="flex gap-3 text-lg px-4 py-2 items-center hover:bg-[#e31b6d] hover:transition hover:delay-300 hover:duration-700 hover:ease-in-out"
            >
              View my work <IoMdArrowDown className="animate-bounce" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Landing;
