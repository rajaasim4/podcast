import React from "react";
import { Slide } from "react-awesome-reveal";
import scribble from "../../assets/scribble.png";
import MemberShipData from "../../Data/MemberShipData";
const MemberShip = () => {
  return (
    <section className="w-full  py-32 relative">
      <img
        src={scribble}
        className="absolute top-0 right-[15%] lg:right-0 sm:w-32"
        alt=""
      />
      <h2 className="text-4xl px-4 text-center font-extrabold sm:text-3xl">
        membership benefits
      </h2>
      <p className="my-10 text-center">
        Become our sponsor and get all benefits
      </p>
      <div className="w-10/12  mx-auto md:w-11/12   flex justify-evenly flex-wrap gap-y-10">
        {MemberShipData.map((Val, i) => {
          return (
            <Slide cascade damping={0.3} triggerOnce={true} key={i}>
              <div className="w-[373px] h-[202px] flex flex-col justify-evenly shadow-md cursor-pointer items-center sm:w-11/12">
                <img src={Val.imgsrc} alt="" className="w-max h-14" />
                <h2>{Val.title}</h2>
                <p className="text-center">
                  Lorem ipsum dolor sit amet consectet pis cing elit, sed do
                  eiusmod tempor.
                </p>
              </div>
            </Slide>
          );
        })}
      </div>
      <div className="flex justify-center items-center mt-12">
        <button className="bg-black text-white px-4 py-2 rounded-md shadow-md">
          see pricing
        </button>
      </div>
    </section>
  );
};

export default MemberShip;
