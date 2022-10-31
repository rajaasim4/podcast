import React from "react";
import { Slide } from "react-awesome-reveal";
import avatar1 from "../../assets/avatar1.png";
import avatar2 from "../../assets/avatar2.png";
import scribble from "../../assets/scribble.png";
import sparkle from "../../assets/sparkle.png";
import EpisodesData from "../../Data/EpisodesData";
const Episodes = (props) => {
  return (
    <section className={`w-full  py-32  ${props.bg} relative Episodes`}>
      <img
        src={scribble}
        className="absolute bottom-0 left-0 lg:right-0 sm:w-32"
        alt=""
      />
      <img
        src={sparkle}
        className="absolute top-0 left-1/4 lg:right-0 sm:w-32"
        alt=""
      />
      <h2 className="text-4xl px-4 text-center font-extrabold sm:text-3xl">
        {props.title}
      </h2>
      <p className="my-10 text-center">Available on your Favourite Platform</p>
      <div className="w-10/12  mx-auto flex justify-around items-center flex-wrap gap-y-10 sm:w-11/12">
        {EpisodesData.map((Val, Index) => {
          const {
            id,
            epidimgsrc,
            epidname,
            epidtitle,
            epidtitle1,
            epidtitle2,
          } = Val;
          return (
            <Slide cascade damping={0.5} triggerOnce={true} key={Index}>
              <EpisodesCard
                key={id}
                imgsrc={epidimgsrc}
                name={epidname}
                title={epidtitle}
                tag1={epidtitle1}
                tag2={epidtitle2}
              />
            </Slide>
          );
        })}
      </div>
      <div className="mt-12 flex justify-center items-center">
        <button className="px-4 py-2 bg-black text-white rounded-md">
          Browse All Categories
        </button>
      </div>
    </section>
  );
};

const EpisodesCard = (props) => {
  return (
    <>
      <div className="w-[570px] h-[252px] bg-white rounded-md py-4 px-3 shadow-lg sm:w-[95%] sm:h-full">
        <div className="flex justify-between gap-x-2 sm:flex-wrap sm:gap-y-2 sm:justify-center">
          <div className="">
            <img src={props.imgsrc} className="h-[166px] w-[300px] " alt="" />
          </div>
          <div className=" flex flex-col justify-evenly">
            <span className="text-xl text-[#CD4631]">{props.name}</span>
            <h4 className="text-2xl font-semibold text-[#CD4631]">
              {props.title}
            </h4>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ac ultrices odio.{" "}
            </p>
          </div>
        </div>
        <div className=" mt-3 flex justify-between items-center flex-wrap gap-y-4 sm:justify-center">
          <div className="flex gap-y-2">
            <button className="border border-black px-3 py-2 rounded-lg mr-5">
              {props.tag1}
            </button>
            <button className="border border-black px-3 py-2 rounded-lg">
              {props.tag2}
            </button>
          </div>
          <div className=" flex justify-center items-center">
            <span>Hosted By:</span>
            <img src={avatar1} alt="" />
            <img src={avatar2} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Episodes;
