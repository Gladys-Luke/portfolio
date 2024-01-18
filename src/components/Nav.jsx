import React, { useState } from "react";
import { Link } from "react-scroll";
import { GoThreeBars } from "react-icons/go";
import { FaTimes } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";

function Nav() {
  const isSmallScreen = useMediaQuery({ maxWidth: 768 });
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div
            className={
              isOpen === false
                ? "absolute  inset-y-0 right-[0px] flex items-center sm:hidden"
                : "absolute  left-[300px] top-[10px] flex items-center sm:hidden"
            }
          >
            <button
              type="button"
              className="inline-flex items-end justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#e31b6d]"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={toggleNavbar}
            >
              <span className="sr-only ">Open main menu</span>
              {isOpen ? (
                <FaTimes className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <GoThreeBars className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-end">
            <div className="hidden sm:block sm:ml-6">
            <div className="flex justify-end space-x-4">
              <ul className={`flex flex-wrap justify-end ${isSmallScreen ? "justify-center" : ""}`}>
                  <li className="hover:text-[#e31b6d] cursor-pointer text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md">
                    <Link to="component5" smooth={true} duration={500}>
                      Home
                    </Link>
                  </li>
                  <li className="hover:text-[#e31b6d] cursor-pointer text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md">
                    <Link to="component1" smooth={true} duration={500}>
                      About
                    </Link>
                  </li>
                  <li className="hover:text-[#e31b6d] cursor-pointer text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md">
                    <Link to="component2" smooth={true} duration={500}>
                      Portfolio
                    </Link>
                  </li>
                  <li className="hover:text-[#e31b6d] cursor-pointer text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md">
                    <Link to="component3" smooth={true} duration={500}>
                      Blog
                    </Link>
                  </li>
                  <li className="hover:text-[#e31b6d] cursor-pointer text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md">
                    <Link to="component4" smooth={true} duration={500}>
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className="sm:hidden transition-all duration-500 ease-in-out"
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <ul className=" w-[45%] justify-around text-[15px] sm:text-[25px] text-[#ffffff] py-2">
              <li className="hover:text-[#e31b6d] cursor-pointer text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md">
                <Link to="component5" smooth={true} duration={500}>
                  Home
                </Link>
              </li>
              <li className="hover:text-[#e31b6d] cursor-pointer text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md">
                <Link to="component1" smooth={true} duration={500}>
                  About
                </Link>
              </li>
              <li className="hover:text-[#e31b6d] cursor-pointer text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md">
                <Link to="component2" smooth={true} duration={500}>
                  Portfolio
                </Link>
              </li>
              <li className="hover:text-[#e31b6d] cursor-pointer text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md">
                <Link to="component3" smooth={true} duration={500}>
                  Blog
                </Link>
              </li>
              <li className="hover:text-[#e31b6d] cursor-pointer text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md">
                <Link to="component4" smooth={true} duration={500}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Nav;

//   return (
//     <div className="header">
//       <nav ref={navRef} className={classNames('nav', { 'responsive-nav': isOpen })}>
//         <ul className="flex w-[45%] justify-around text-[20px] text-[#ffffff] py-2">
//           <li className="hover:text-[#fd8e8e] cursor-pointer">
//             <Link to="component5" smooth={true} duration={500}>
//               HOME
//             </Link>
//           </li>
//           <li className="hover:text-[#fd8e8e] cursor-pointer">
//             <Link to="component1" smooth={true} duration={500}>
//               ABOUT
//             </Link>
//           </li>
//           <li className="hover:text-[#fd8e8e] cursor-pointer">
//             <Link to="component2" smooth={true} duration={500}>
//               PORTFOLIO
//             </Link>
//           </li>
//           <li className="hover:text-[#fd8e8e] cursor-pointer">
//             <Link to="component3" smooth={true} duration={500}>
//               BLOG
//             </Link>
//           </li>
//           <li className="hover:text-[#fd8e8e] cursor-pointer">
//             <Link to="component4" smooth={true} duration={500}>
//               CONTACT
//             </Link>
//           </li>
//         </ul>
//         <button onClick={toggleNavbar}  className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 aria-hidden="true">
//           <FaTimes />
//         </button>
//       </nav>
//       <button onClick={toggleNavbar} className={`${isOpen ? "hidden" : "block"} h-6 w-6`} aria-hidden="true">
//   <GoThreeBars />
// </button>
//     </div>
//   );
// }

// export default Nav;
