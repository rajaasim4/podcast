import React from "react";
import { Autoplay } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import google from "../../assets/google_podcast.png";
import spotify from "../../assets/Spotify.png";
import youtube from "../../assets/youtube.png";

const AboutSponsor = () => {
  return (
    <section className="mt-10  bg-[#F7EDE8] py-10 ">
      <h2 className="text-4xl px-4 text-center font-extrabold my-3 sm:text-3xl">
        Our Sponsors
      </h2>
      <p className="text-center">our current official Partners</p>
      <div className="w-7/12  mx-auto md:w-11/12 flex justify-center mt-8 lg:w-8/12">
        <Swiper
          autoplay={true}
          modules={[Autoplay]}
          className="mySwiper  mx-auto "
        >
          <SwiperSlide>
            <AboutSponsorCard imgsrc={spotify} />
          </SwiperSlide>
          <SwiperSlide>
            <AboutSponsorCard imgsrc={google} />{" "}
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <AboutSponsorCard imgsrc={youtube} />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

const AboutSponsorCard = (props) => {
  return (
    <>
      <div className="w-[570px] h-[245px] rounded-md bg-white border-2 border-black mx-auto flex flex-col items-center py-6 px-7 sm:w-full sm:h-max ">
        <img src={props.imgsrc} alt="" />
        <div className="border-b-2 border-black h-1 w-full mb-4"></div>
        <p className="text-center">
          Quis dictum cursus faucibus mattis dignissim. Pellentes que purus in
          sed sodales in mauris molestie. Eleifend estcon sctetur interdum eu in
          auctor. Gravida leo et.
        </p>
      </div>
    </>
  );
};

export default AboutSponsor;
