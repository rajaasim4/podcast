import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../Pages/About/About";
import ArticleAndNews from "../Pages/ArticleAndNews/ArticleAndNews";
import Home from "../Pages/Home/Home";
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/News" element={<ArticleAndNews />} />
    </Routes>
  );
};

export default Routers;
