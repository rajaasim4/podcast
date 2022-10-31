import React from "react";
import Available from "../../Components/Available/Available";
import Footer from "../../Components/Footer/Footer";
import AboutBanner from "./AboutBanner";
import AboutForm from "./AboutForm";
import AboutMain from "./AboutMain";
import AboutSponsor from "./AboutSponsor";

const About = () => {
  return (
    <div className="">
      <AboutBanner />
      <AboutMain />
      <AboutSponsor />
      <AboutForm />
      <Available />
      <Footer />
    </div>
  );
};

export default About;
