import React from "react";
import { ImQuotesLeft } from "react-icons/all";
import { Autoplay } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import apple_podcast from "../../assets/apple_podcast.svg";
import avatar1 from "../../assets/avatar1.png";
import avatar2 from "../../assets/avatar2.png";
import avatar3 from "../../assets/avatar3.png";
import googlepodcast from "../../assets/googlepodcast.svg";
import sparkle from "../../assets/sparkle.png";
import spotify from "../../assets/spotify_icon.svg";
const HomeTestimonials = () => {
  return (
    <section className="w-full bg-[#EDF3F7] py-32 relative">
      <img src={sparkle} className="absolute top-10 left-[30%]" alt="" />
      <h2 className="text-4xl px-4 text-center font-extrabold sm:text-3xl">
        What our listeners say
      </h2>
      <p className="my-10 text-center">
        Their experience throughout every platform
      </p>
      <div className="w-7/12  mx-auto md:w-11/12 ">
        <Swiper
          autoplay={true}
          modules={[Autoplay]}
          className="mySwiper w-[100%] "
        >
          <SwiperSlide>
            <TestimonialCard
              imgsrc={avatar1}
              name={"Luna Lovegood"}
              platform={spotify}
              platformname={"Spotify"}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <TestimonialCard
              imgsrc={avatar2}
              name={"Emily Blunt"}
              platform={googlepodcast}
              platformname={"Google Podcast"}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <TestimonialCard
              imgsrc={avatar3}
              name={"Mia Winters"}
              platform={apple_podcast}
              platformname={"Apple Podcast"}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

const TestimonialCard = (props) => {
  return (
    <>
      <div className="w-10/12 bg-white px-10 py-12 mx-auto rounded-md md:w-full">
        <ImQuotesLeft className="text-[#CD4631] text-2xl mb-5 " />
        <p>
          Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod
          tempor incidi ut labore et dolore magna aliqua.{" "}
        </p>
        <div className="mt-10 flex  w-11/12 items-center gap-x-2 flex-wrap">
          <img src={props.imgsrc} alt="" />
          <span>{props.name}</span>
          <img src={props.platform} className="w-30" alt="" />
          <span className="text-xl font-bold">{props.platformname}</span>
        </div>
      </div>
    </>
  );
};

export default HomeTestimonials;
