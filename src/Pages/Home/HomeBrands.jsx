import React from "react";
import { Zoom } from "react-awesome-reveal";
import google_podcast from "../../assets/google_podcast.png";
import spotify from "../../assets/Spotify.png";

import youtube from "../../assets/youtube.png";

const HomeBrands = () => {
  return (
    <>
      <Zoom triggerOnce={true}>
        <div className="mt-10  mx-auto py-8 border-y border-black flex justify-between items-center flex-wrap md:px-10 lg:justify-evenly">
          <h3 className="font-semibold">Supported by:</h3>
          <img src={spotify} alt="" />
          <img src={google_podcast} alt="" />
          <img src={youtube} alt="" />
        </div>
      </Zoom>
    </>
  );
};

export default HomeBrands;
