import { React, useEffect } from "react";
import "./section1.css";
import { animateScroll as scroll } from "react-scroll";

const Section1 = () => {
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const translateY = `translateY(-${scrollY * 0.2}px)`;
    document.querySelectorAll(".animate-on-scroll").forEach((element) => {
      element.style.transform = translateY;
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="section1">
      <div className="section1-text">
        <h1>One trusted platform for all forms of environmental data</h1>
        <p>Now meet environmental sustainability with</p> <br />
        <p>the help of Aritificial Intelligence</p>
      </div>
      <div
        data-w-id="611a70db-6538-2d66-9cff-a0ab82655da3"
        class="image-container"
      >
        <img
          src="https://assets.website-files.com/6266b5e20215f61058171191/627c10be3ada73fe5a3081a2_home_hero_image%201.png"
          loading="eager"
          width="475"
          sizes="(max-width: 479px) 99vw, 475px"
          srcset="https://assets.website-files.com/6266b5e20215f61058171191/627c10be3ada73fe5a3081a2_home_hero_image%201-p-500.png 500w, https://assets.website-files.com/6266b5e20215f61058171191/627c10be3ada73fe5a3081a2_home_hero_image%201-p-800.png 800w, https://assets.website-files.com/6266b5e20215f61058171191/627c10be3ada73fe5a3081a2_home_hero_image%201.png 900w"
          alt="Two people at a desk using sustainability software."
          class="lifestyle-image animate-on-scroll"
        />
        <img
          src="https://assets.website-files.com/6266b5e20215f61058171191/627ad1ed392f2454ab401bfc_sustain.life-impact-dashboard.svg"
          loading="eager"
          width="500"
          alt="Graph dark green"
          class="impact-chart animate-on-scroll"
        />
        <img
          src="https://assets.website-files.com/6266b5e20215f61058171191/627ad2568a01143856149c19_sustain.life-building-emissions.svg"
          width="243"
          alt="building price white"
          class="category-card animate-on-scroll"
        />

        <img
          src="https://assets.website-files.com/6266b5e20215f61058171191/627ad154b4003504b2925fa9_sustain.life-total-emissions.svg"
          alt="Card showing a company's total emissions: 3,174 MT CO2e"
          width="318"
          class="emissions-card animate-on-scroll"
        />
      </div>
    </div>
  );
};

export default Section1;
