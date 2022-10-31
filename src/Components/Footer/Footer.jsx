import React from "react";
import { FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";
import apple_podcast from "../../assets/apple_podcast.svg";
import app_store from "../../assets/app_store.png";
import googlepodcast from "../../assets/googlepodcast.svg";
import google_play from "../../assets/google_play.svg";
import logo from "../../assets/logo.png";
import spotify from "../../assets/spotify_icon.svg";

const Footer = () => {
  return (
    <footer className="w-full py-10 mt-7 flex items-center justify-center">
      <div className="w-10/12   flex flex-wrap justify-between ">
        <div className="w-3/12 lg:w-5/12  sm:w-full sm:flex flex-col sm:items-center">
          <img src={logo} alt="" />
          <p className="my-7">
            Lorem ipsum dolor sit amet,
            <br /> consectetur adipiscing elit.
          </p>
          <div className="flex justify-between items-center w-1/2">
            <FaTwitter className="text-2xl hover:text-[#CD4631] duration-150 cursor-pointer" />
            <FaInstagram className="text-2xl hover:text-[#CD4631] duration-150 cursor-pointer" />
            <FaTiktok className="text-2xl hover:text-[#CD4631] duration-150 cursor-pointer" />
          </div>
        </div>
        <div className=" w-40 sm:w-1/2 sm:mt-7  sm:flex flex-col items-center">
          <ul>
            <li className="mb-4">
              <a href="/#" className="hover:text-[#cd4631]">
                About
              </a>
            </li>
            <li className="mb-4">
              <a href="/#" className="hover:text-[#cd4631]">
                Testimonials
              </a>
            </li>
            <li className="mb-4">
              <a href="/#" className="hover:text-[#cd4631]">
                Features
              </a>
            </li>
          </ul>
        </div>
        <div className="w-40 sm:w-1/2 sm:mt-7 sm:flex flex-col items-center">
          <ul>
            <li className="mb-4">
              <a href="/#" className="hover:text-[#cd4631]">
                Episodes
              </a>
            </li>
            <li className="mb-4">
              <a href="/#" className="hover:text-[#cd4631]">
                Pricing
              </a>
            </li>
            <li className="mb-4">
              <a href="/#" className="hover:text-[#cd4631]">
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div className="w-5/12  lg:w-full lg:mt-5 sm:w-full">
          <p>Listen to episodes on your fav platform:</p>
          <div className="flex justify-between flex-wrap gap-y-4 mt-3 lg:w-4/5 sm:justify-evenly sm:w-full">
            <span className="flex items-center gap-x-2">
              <img src={spotify} alt="" className="w-8" />
              Spotify
            </span>
            <span className="flex items-center gap-x-2">
              <img src={googlepodcast} alt="" className="w-8" />
              Google Podcast
            </span>
            <span className="flex items-center gap-x-2">
              <img src={apple_podcast} alt="" className="w-8" />
              Apple Podcast
            </span>
          </div>
          <div className="mt-10 sm:mx-auto w-2/6">
            <p className="my-6 ">Avialabe on:</p>
            <div className="flex justify-between gap-y-5 w-28">
              <img src={app_store} alt="" className="cursor-pointer" />
              <img src={google_play} alt="" className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
