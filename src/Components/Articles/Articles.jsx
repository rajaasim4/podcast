import React from "react";
import scribble from "../../assets/scribble.png";
import ArticlesCard from "./ArticlesCard";

const Articles = (props) => {
  return (
    <section className={`w-full  py-32   relative `}>
      <img src={scribble} className="absolute bottom-0 right-0 w-36" alt="" />
      <h2 className="text-4xl px-4 text-center font-extrabold sm:text-3xl">
        {props.heading}
      </h2>
      <p className="my-10 text-center">news,tips,tricks and more</p>
      <div className="w-10/12  mx-auto flex justify-around items-center flex-wrap gap-y-10 sm:w-11/12">
        {props.children}
      </div>
      <div className="mt-10 flex justify-center items-center">
        <button className="bg-black text-white px-4 py-3 rounded-md">
          Browse All Categories
        </button>
      </div>
    </section>
  );
};

export default Articles;
