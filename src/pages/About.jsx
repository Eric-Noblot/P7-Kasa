import React from "react";
import Header from "../components/Header/Header";
import Collapse from "../components/Collapse/Collapse";
import aboutCollapseDatas from "../assets/data/aboutCollapse.json";
import "../styles/pages/about.scss"

const About = () => {

  return (
    <>
      <Header />
      <main className="collapse_container">
        {aboutCollapseDatas.map((data, index ) => (
          <Collapse key={index} title={data.title} datas={data.description} page={"about"} />
        ))}
      </main>
    </>
  );
};

export default About;
