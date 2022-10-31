import React from "react";
import { Slide, Zoom } from "react-awesome-reveal";
import avatar from "../../assets/avatar.png";
import Idea from "../../assets/Idea.svg";
import spotify_icon from "../../assets/spotify_icon.svg";
import spring from "../../assets/spring.png";
import star from "../../assets/star.png";
import Thinking from "../../assets/Thinking.svg";
const HomeAbout = () => {
  return (
    <section className="my-10 py-5 ">
      <h2 className="text-4xl px-4 text-center font-extrabold sm:text-3xl">
        Talk. Listen. Get inspired by every minute of it.
      </h2>
      <Slide triggerOnce={true}>
        <div className="flex  w-10/12 mt-10 py-5 items-center justify-evenly mx-auto mb-10 flex-wrap">
          <div className="w-5/12 flex flex-col items-center  sm:w-11/12">
            <img src={Thinking} alt="" />
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ac ultrices odio.{" "}
            </p>
          </div>
          <div className="w-5/12 flex flex-col items-center sm:w-11/12">
            <img src={Idea} alt="" />
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ac ultrices odio.
            </p>
          </div>
        </div>
      </Slide>
      <Zoom triggerOnce={true}>
        <div className="w-10/12 bg-[#F7EDE8] mx-auto my-4 py-10 relative ">
          <h3 className="text-3xl font-bold text-center sm:text-xl">
            One of the best daily podcasts that <br />
            covers every topic on Spotify.
          </h3>
          <img
            src={star}
            className="absolute -top-10 -right-10 sm:w-14 sm:right-0"
            alt=""
          />
          <img
            src={spring}
            className=" absolute bottom-0 -left-10 md:-left-20 sm:w-14 sm:left-0"
            alt=""
          />
          <div className="flex mx-auto w-5/12 lg:w-8/12 md:w-full flex-wrap  py-10  items-center justify-evenly mt-5 rounded-xl sm:justify-around">
            <img src={avatar} alt="" />
            <span>John Smith</span>
            <img src={spotify_icon} alt="" className="w-10" />
            <span className="font-bold text-xl sm:text-center">
              Social Community Manager
            </span>
          </div>
        </div>
      </Zoom>
    </section>
  );
};

export default HomeAbout;
