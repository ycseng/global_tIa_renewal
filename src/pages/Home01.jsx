import React from "react";
import Header from "../components/header/Header";
import About from "../components/layouts/About";
import BlockChain from "../components/layouts/BlockChain";

import SliderOne from "../components/slider/SliderOne";
import Footer from "../components/footer/Footer";
import Contact from "../components/layouts/Contact";
import Career from "../components/layouts/Career";
import dataCareer from "../assets/fake-data/data-career";

const Home01 = () => {
  return (
    <div>
      <Header />
      <SliderOne />
      <About />
      <BlockChain />
      <Contact />
      <Career data={dataCareer} />
      <Footer />
    </div>
  );
};

export default Home01;
