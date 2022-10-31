import React, { useRef } from "react";
import { Fade } from "react-awesome-reveal";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/all";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import Home_Slider1 from "../../assets/Home_Slider1.png";
import Home_Slider2 from "../../assets/Home_Slider2.png";
import Home_Slider3 from "../../assets/Home_Slider3.png";
import Home_Slider4 from "../../assets/Home_Slider4.png";
import Home_Slider5 from "../../assets/Home_Slider5.png";
import Header from "../../Components/Header/Header";
import HomeBrands from "./HomeBrands";

const HomeBanner = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <Header>
      <div className="pt-10 flex flex-col items-center ">
        <Fade triggerOnce={true}>
          <h1 className="text-center text-9xl font-bold mb-10 md:text-8xl sm:text-6xl">
            your daily <br />
            <span className="text-[#CD4631]">podcast</span>
          </h1>
          <p className=" my-10 sm:text-center">
            We cover all kinds of categories and a weekly special guest.
          </p>
          <button className="bg-black text-white w-36 py-3 rounded-md">
            Subscribe
          </button>
        </Fade>
        <div className="mt-10 w-full flex justify-center items-center">
          <Swiper
            slidesPerView={3}
            spaceBetween={40}
            // slidesPerGroup={1}
            //loop={true}
            // loopFillGroupWithBlank={true}
            allowSlideNext={true}
            allowSlidePrev={true}
            pagination={{
              clickable: true,
            }}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            modules={[Pagination, Navigation]}
            rewind={true}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            breakpoints={{
              // when window width is >= 320px
              0: {
                slidesPerView: 1,
                // spaceBetween: 20,
              },
              // when window width is >= 480px
              590: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
              // when window width is >= 640px
              950: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="mySwiper mx-auto flex justify-center  w-10/12"
          >
            <SwiperSlide>
              <HomeSlider imgsrc={Home_Slider1} />
            </SwiperSlide>
            <SwiperSlide>
              <HomeSlider imgsrc={Home_Slider2} />
            </SwiperSlide>
            <SwiperSlide className="w-max">
              <HomeSlider imgsrc={Home_Slider3} />
            </SwiperSlide>
            <SwiperSlide className="w-max">
              <HomeSlider imgsrc={Home_Slider4} />
            </SwiperSlide>
            <SwiperSlide className="w-max">
              <HomeSlider imgsrc={Home_Slider5} />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="mt-10 w-10/12 ">
          <button
            className="text-3xl mx-3 prev-btn  review-swiper-button-prev "
            ref={navigationPrevRef}
          >
            <IoIosArrowDropleftCircle />
          </button>
          <button
            className="text-3xl next-btn review-swiper-button-next"
            ref={navigationNextRef}
          >
            <IoIosArrowDroprightCircle />
          </button>
        </div>

        <HomeBrands />
      </div>
    </Header>
  );
};

const HomeSlider = (props) => {
  return (
    <>
      <div className="w-[373px] h-[373px] lg:w-[260px] sm:mb-4 sm:w-full mx-auto">
        <img src={props.imgsrc} alt="" loading="lazy" />
      </div>
    </>
  );
};

export default HomeBanner;
