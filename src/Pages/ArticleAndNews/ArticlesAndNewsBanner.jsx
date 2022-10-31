import React from "react";
import { Fade } from "react-awesome-reveal";
import Header from "../../Components/Header/Header";
const ArticlesAndNewsBanner = () => {
  return (
    <Header>
      <div className="">
        <Fade triggerOnce={true}>
          <h1 className="text-center text-9xl font-bold mb-10 md:text-8xl sm:text-6xl">
            Articles and <br />
            <span className="text-[#CD4631]">news</span>
          </h1>
          <div className="w-2/4 mx-auto sm:w-11/12">
            <p className=" my-10 text-center z-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam–quis.
            </p>
          </div>
        </Fade>
      </div>
    </Header>
  );
};

export default ArticlesAndNewsBanner;
