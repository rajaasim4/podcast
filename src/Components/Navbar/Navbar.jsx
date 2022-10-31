import React, { useRef, useState } from "react";
import { BiMenuAltRight, VscChromeClose } from "react-icons/all";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import logo from "../../assets/logo.png";
import useClickOutsideDetector from "../../Hooks/useClickOutsideDetector";
const Navbar = () => {
  const [show, setShow] = useState(false);
  let mainmenu = useRef("main_nav");
  useClickOutsideDetector(mainmenu, () => {
    setShow(false);
  });
  return (
    <>
      <nav className="w-full  h-24 flex items-center justify-center mb-10 ">
        <div className="w-11/12   flex items-center justify-evenly  md:justify-between md:w-10/12 ">
          <Link to="/" className="cursor-pointer">
            <img src={logo} alt="" />
          </Link>
          <div
            className={` ${
              show ? "md:w-9/12" : "md:w-0"
            } w-4/5  flex items-center justify-around md:fixed md:top-0 md:left-0 md:h-full md:flex-col md:bg-slate-200 md:justify-evenly md:overflow-hidden md:duration-300 ease-in z-20`}
            ref={mainmenu}
          >
            <div className="w-5/12 md:h-3/5 sm:w-7/12 ">
              <ul className="flex justify-evenly md:flex-col md:h-full">
                <li>
                  <Link to="/" className=" text-base">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/About"
                    className=" text-base"
                    onClick={() => setShow(!show)}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/News"
                    className=" text-base"
                    onClick={() => setShow(!show)}
                  >
                    News
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-2/5 md:w-5/12  flex justify-evenly lg:w-max md:flex-col md:h-2/5 sm:w-max">
              {/* <ScrollLink > */}
              <ScrollLink
                smooth
                to="Episodes"
                className="px-4 py-2 border-black border-2 rounded-md cursor-pointer"
                onClick={() => setShow(!show)}
              >
                Recent Episodes
              </ScrollLink>
              {/* </ScrollLink> */}
              <button
                className="px-5 py-2 bg-black  rounded-md text-white ml-5 md:m-0"
                onClick={() => setShow(!show)}
              >
                Subscribe
              </button>
            </div>
          </div>
          <div
            className="text-3xl hidden md:block  cursor-pointer"
            onClick={() => setShow(!show)}
          >
            {show ? <VscChromeClose /> : <BiMenuAltRight />}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
