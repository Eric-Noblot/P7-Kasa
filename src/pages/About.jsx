import React from "react";
import Collapse from "../components/Collapse/Collapse";
import aboutCollapseDatas from "../assets/data/aboutCollapse.json";
import "../styles/pages/about.scss"
import Banner from "../components/Header/Banner"


const About = () => {

  return (
    <>
      <div class = "baner_container">
        <Banner>
          <div className = "banner_about banner"></div>
        </Banner>
      </div>

      <main className="collapse_container">
        {aboutCollapseDatas.map((data, index ) => (
          <Collapse key={index} title={data.title} datas={data.description} page={"about"} />
        ))}
      </main>
    </>
  );
};

export default About;
