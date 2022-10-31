import React from "react";
import { Slide } from "react-awesome-reveal";
import article_img from "../../assets/article_img1.png";
import article_img2 from "../../assets/article_img2.png";
import Articles from "../../Components/Articles/Articles";
import ArticlesCard from "../../Components/Articles/ArticlesCard";
import Available from "../../Components/Available/Available";
import Episodes from "../../Components/Episodes/Episodes";
import Footer from "../../Components/Footer/Footer";
import HomeAbout from "./HomeAbout";
import HomeBanner from "./HomeBanner";
import HomeSponsor from "./HomeSponsor";
import HomeTestimonials from "./HomeTestimonials";
import MemberShip from "./MemberShip";
const Home = () => {
  return (
    <>
      <HomeBanner />
      <HomeAbout />
      <HomeTestimonials />
      <MemberShip />
      <Episodes title={"Recent Episodes"} bg={"bg-red-100"} />
      <HomeSponsor />
      <Articles heading={"Latest Articles & News"}>
        <ArticlesCard
          imgsrc={article_img}
          title={"PODCAST"}
          main_title={"Setup your own Podcast"}
        />

        <ArticlesCard
          imgsrc={article_img2}
          title={"tips & tricks"}
          main_title={"Doodle artwork 101"}
        />
      </Articles>
      <Available />
      <Footer />
    </>
  );
};

export default Home;
