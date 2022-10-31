import React from "react";
import article_img from "../../assets/article_img1.png";
import article_img2 from "../../assets/article_img2.png";
import article_img3 from "../../assets/article_img3.png";
import article_img4 from "../../assets/article_img4.png";
import Articles from "../../Components/Articles/Articles";
import ArticlesCard from "../../Components/Articles/ArticlesCard";
import Available from "../../Components/Available/Available";
import Footer from "../../Components/Footer/Footer";
import ArticlesAndNewsBanner from "./ArticlesAndNewsBanner";
const ArticleAndNews = () => {
  return (
    <div className="">
      <ArticlesAndNewsBanner />
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
        <ArticlesCard
          imgsrc={article_img3}
          title={"news"}
          main_title={"mother nature taking over"}
        />
        <ArticlesCard
          imgsrc={article_img4}
          title={"productivity"}
          main_title={"How to be productive"}
        />
      </Articles>
      <Available />
      <Footer />
    </div>
  );
};

export default ArticleAndNews;
