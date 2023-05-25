import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Collapse from "../components/Collapse/Collapse";
import aboutCollapseDatas from "../assets/data/aboutCollapse.json";

const About = () => {

  return (
    <div>
      <Header />
      {aboutCollapseDatas.map((data, index ) => (
        <Collapse key={index} title={data.title} description={data.description} page={"about"} />
      ))}
      <Footer />
    </div>
  );
};

export default About;
