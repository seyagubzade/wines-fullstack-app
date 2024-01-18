import React from "react";
import HeroSlider from "../../components/HeroSlider";
import OurProducts from "./OurProducts";
import Blog from "./Blog";
import Welcome from "./Welcome";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Wine-Home</title>
      </Helmet>
      <HeroSlider />
      <OurProducts />
      <Welcome />
      <Blog />
    </div>
  );
};

export default Home;
