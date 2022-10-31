import React from "react";
import Header_shape1 from "../../assets/Header_shape1.svg";
import Header_shape2 from "../../assets/Header_shape2.svg";
import Navbar from "../Navbar/Navbar";

const Header = (props) => {
  return (
    <header className="bg-[#F7EDE8] relative h-max py-10 ">
      <Navbar />
      <img
        src={Header_shape1}
        alt=""
        className="absolute top-[30%] left-0 md:w-4/12 "
      />
      <img src={Header_shape2} className="absolute right-0 top-[35%]" alt="" />
      <div className="relative w-full">{props.children}</div>
    </header>
  );
};

export default Header;
