import React from "react";
import Available from "../../Components/Available/Available";
import Episodes from "../../Components/Episodes/Episodes";
import Footer from "../../Components/Footer/Footer";
import DetailsBanner from "./DetailsBanner";
const Details = () => {
  return (
    <div className="">
      <DetailsBanner />
      <Episodes title={"Latest Episodes"} bg={"bg-white"} />
      <Available />
      <Footer />
    </div>
  );
};

export default Details;
