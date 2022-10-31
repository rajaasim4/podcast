import React from "react";
import { Zoom } from "react-awesome-reveal";

const ArticlesCard = (props) => {
  return (
    <div className="w-[570px] h-[634px] shadow-lg py-5 px-8 flex flex-col gap-y-4  border-black border-2 sm:px-5 sm:h-max ">
      <Zoom triggerOnce={true}>
        <img src={props.imgsrc} alt="" />
        <span>{props.title}</span>
        <h2 className="text-2xl font-bold uppercase text-[#CD4631]">
          {props.main_title}
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minimvel iam, quis nostrud exercitation ullamco laboris...
        </p>

        <hr />
      </Zoom>
    </div>
  );
};

export default ArticlesCard;
