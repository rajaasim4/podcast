import React from "react";
import avatar from "../../assets/avatar.png";
import Home_Slider from "../../assets/Home_Slider4.svg";
import Header from "../../Components/Header/Header";
const DetailsBanner = () => {
  let date = new Date().toLocaleDateString();
  return (
    <Header>
      <div className="w-10/12  mx-auto ">
        <div className="flex justify-around md:flex-col md:items-center md:gap-y-10 sm:gap-y-5">
          <div className="w-5/12 md:w-full md:flex md:justify-center">
            <img src={Home_Slider} alt="" className="w-[472px] h-[472px]" />
          </div>
          <div className="w-1/2 py-6 px-3  md:w-full sm:py-3">
            <span className="text-[#CD4631] ">Episode 1</span>
            <h1 className="text-4xl font-bold my-3 border-b border-black py-3 ">
              Are you a preplexed mind person
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud.
            </p>
            <div className=" mt-7 flex justify-between items-center flex-wrap sm:justify-center">
              <div className=" flex items-center">
                <img src={avatar} alt="" />
                Hosted By: John doe
              </div>
              <span>{date}</span>
            </div>
            <div className="mt-7 w-3/5 flex justify-between items-center lg:w-4/5 sm:w-full flex-wrap sm:gap-y-7 sm:justify-center">
              <button className="bg-black text-white rounded-md px-4 py-3">
                Subscribe
              </button>
              <button className=" text-black rounded-md px-4 py-3 border-2 border-black">
                Listen now <span className="text-[#CD4631]">(46 min)</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Header>
  );
};

export default DetailsBanner;
