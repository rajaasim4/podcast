import React from "react";
import apple_podcast from "../../assets/apple_podcast.svg";
import available1 from "../../assets/available1.png";
import available2 from "../../assets/available2.png";
import googlepodcast from "../../assets/googlepodcast.svg";
import sparkle from "../../assets/sparkle.png";
import spotify from "../../assets/spotify_icon.svg";
const Available = () => {
  return (
    <div className="bg-[#EDF3F7] w-full relative py-10">
      <img
        src={available1}
        alt=""
        className="absolute bottom-0 right-0 w-[200px] md:w-[140px] sm:w-[80px]"
      />
      <img
        src={available2}
        alt=""
        className="absolute bottom-0 left-0 w-[300px] md:w-[200px] sm:w-[100px] "
      />
      <div className="w-10/12 mx-auto flex flex-col items-center ">
        <img src={sparkle} className="absolute top-0 left-1/4" alt="" />
        <button className="text-[#CD4631] border-[#CD4631] border-2 rounded-md px-3 py-2 mb-5">
          BETA
        </button>
        <h2 className="text-4xl font-bold text-center">
          Available now <br />
          Pod of Cast App
        </h2>
        <p className="text-xl text-center my-5">
          We just launched our podcast app!
        </p>
        <div className="py-12 flex flex-col justify-evenly items-center">
          <button className="bg-black text-white px-4 py-3 rounded-md mb-3 ">
            Subscribe
          </button>
          <p>Content Also Avialable on</p>
          <div className="w-56  flex justify-evenly items-center flex-wrap mt-5">
            <img src={spotify} alt="" className="w-8" />
            <img src={googlepodcast} alt="" className="w-8" />
            <img src={apple_podcast} alt="" className="w-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Available;
