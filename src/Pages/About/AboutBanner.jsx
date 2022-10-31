import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import Header from "../../Components/Header/Header";

const AboutBanner = () => {
  return (
    <Header>
      <Fade triggerOnce={true}>
        <h1 className="text-center text-9xl font-bold mb-10 md:text-8xl sm:text-6xl">
          About <br />
          <span className="text-[#CD4631]">Pod of Cast</span>
        </h1>
        <div className="w-2/4 mx-auto sm:w-11/12">
          <p className=" my-10 text-center ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam–quis.
          </p>
        </div>
      </Fade>
      <div className="mt-7 w-3/12 mx-auto flex justify-between items-center lg:w-2/5 sm:w-full flex-wrap sm:gap-y-7 sm:justify-center sm:gap-x-5">
        <button className=" text-black rounded-md px-4 py-3 border-2 border-black">
          Become Sponsor
        </button>
        <button className="bg-black text-white rounded-md px-4 py-3">
          Subscribe
        </button>
      </div>
      <div className="mt-12 w-10/12 mx-auto flex justify-around flex-wrap gap-y-8">
        <Slide cascade damping={0.1} triggerOnce={true}>
          <AboutBannerCard number={76} name={"Community Manager"} />
          <AboutBannerCard number={128} name={"Podcast Subscribers"} />
          <AboutBannerCard number={59} name={"Daily Subscribers"} />
        </Slide>
      </div>
    </Header>
  );
};

const AboutBannerCard = (props) => {
  return (
    <>
      <div className="w-[370px] h-[235px] bg-white rounded-md py-10  flex flex-col justify-around items-center shadow-lg border border-black cursor-pointer sm:w-11/12 ">
        <h3 className="text-5xl font-bold">
          {props.number}
          <span className="text-[#cd4631]">K</span>
        </h3>
        <span className="text-2xl sm:text-center">{props.name}</span>
      </div>
    </>
  );
};
export default AboutBanner;
