import React from "react";
import { Zoom } from "react-awesome-reveal";
import About_avatar1 from "../../assets/About_avatar1.png";
import About_avatar2 from "../../assets/About_avatar2.png";
import face from "../../assets/About_face.png";
import About_img from "../../assets/About_img.png";
import star from "../../assets/About_star.png";
import instagram from "../../assets/instagram.svg";
import sparkle from "../../assets/sparkle.png";
import tiktok from "../../assets/tiktok.svg";
import twitter from "../../assets/twitter.svg";
const AboutMain = () => {
  return (
    <section className="my-10 py-5 ">
      <h2 className="text-4xl px-4 text-center font-extrabold my-3 sm:text-3xl">
        What our listners say
      </h2>
      <p className="text-center">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, earum.
      </p>
      <div className=" mt-10 w-10/12 mx-auto grid place-items-center">
        <img src={About_img} alt="" />
      </div>

      <div className="relative mt-10 py-10 border-b-2 border-black w-10/12 mx-auto">
        <img
          src={sparkle}
          className="absolute top-0 left-1/3 sm:left-0"
          alt=""
        />
        <h3 className="text-3xl text-center font-bold ">About And History</h3>
        <div className="flex justify-around mt-10 sm:flex-col">
          <div className="w-5/12 sm:w-full sm:mt-5">
            Eu non
            <strong> diam </strong>
            phasellus vestibulum lorem. Fringilla est ullamcorper eget nulla
            facilisi etiam dignissim. Id diam vel quam
            <strong> elementum </strong>
            <strong>
              pulvinar. <br />
            </strong>
            <br /> Elementum eu facilisis sed odio morbi quis
            <strong> commodo </strong>. Sed odio morbi quis commodo odio aenean
            sed adipiscing odio diam. uno fablotoson louw uit.
          </div>
          <div className="w-5/12 sm:w-full sm:mt-5">
            Lorem ipsum dolor sit amet,
            <strong> consectetur </strong>
            adipiscing elit. Quam pellentesque at bibendum
            <strong> euismod </strong>
            tellus duis cursus dignissim odio. Sit vulputate et integer in. Sit
            vel, senectus iaculis morbi. Amet interdum imperdiet laoreet morbi
            tincidunt
            <strong> fermentum </strong>, libero. Ante enim
            <strong> eget.</strong>
            <br />
            <br />
            Viverra at porttitor accumsan. Orci non here
          </div>
        </div>
      </div>
      <div className="mt-5 w-10/12 mx-auto lg:w-11/12">
        <h3 className="text-3xl text-center font-bold my-10 ">
          Founders and Main Host
        </h3>
        <Zoom triggerOnce={true}>
          <div className="flex justify-between md:flex-col gap-y-10 ">
            <AboutMainCard
              mainimg={About_avatar1}
              relativeimg={face}
              title={"Porter Severus"}
              subtitle={"Host 1"}
            />
            <AboutMainCard
              mainimg={About_avatar2}
              relativeimg={star}
              title={"Marques Keith"}
              subtitle={"Host 2"}
            />
          </div>
        </Zoom>
      </div>
    </section>
  );
};

const AboutMainCard = (props) => {
  return (
    <>
      <div className="px-3 py-3 flex justify-between w-[47%]  border border-black rounded-md md:w-full xsm:flex-col">
        <div className="w-1/2 lg:w-[48%] xsm:w-full">
          <img src={props.mainimg} alt="" className="xsm:w-full" />
        </div>
        <div className="w-1/2 px=3 py-3 flex flex-col justify-end relative lg:w-[48%] xsm:w-full">
          <img
            src={props.relativeimg}
            className="absolute top-0 right-0 sm:hidden"
            alt=""
          />
          <span>{props.subtitle}</span>
          <h2 className="text-2xl font-bold">{props.title}</h2>
          <p className="py-5 border-b-2 border-black">
            Lorem ipsum dolor sit amet con sectet piscing elit, sed do eiusmod
            tempor rarylet podofcast.
          </p>
          <div className="flex justify-end gap-x-4 sm:flex-wrap">
            follow me:
            <img src={tiktok} alt="" />
            <img src={twitter} alt="" />
            <img src={instagram} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutMain;
