import { React, useEffect } from "react";
import css from "./section1.module.css";
import { animateScroll as scroll } from "react-scroll";
import { Container, Row } from "react-bootstrap";

const Section1 = () => {
  return (
    <Container
      className={css.main}
      fluid
      style={{ backgroundColor: "#171f20", padding: "5rem 25rem 0" }}
    >
      <Row className={css.section1}>
        <Row className="section1-text pb-5">
          <h1>Comprehensive sustainability software for every business</h1>
          <p style={{ width: "40%" }}>
            Take the guesswork out of calculating your carbon footprint.
          </p>
        </Row>
        <Row>
          <div
            data-w-id="611a70db-6538-2d66-9cff-a0ab82655da3"
            className={css.imagecontainer}
          >
            <img
              src="https://assets.website-files.com/6266b5e20215f61058171191/627c10be3ada73fe5a3081a2_home_hero_image%201.png"
              loading="eager"
              width="475"
              sizes="(max-width: 479px) 99vw, 475px"
              srcset="https://assets.website-files.com/6266b5e20215f61058171191/627c10be3ada73fe5a3081a2_home_hero_image%201-p-500.png 500w, https://assets.website-files.com/6266b5e20215f61058171191/627c10be3ada73fe5a3081a2_home_hero_image%201-p-800.png 800w, https://assets.website-files.com/6266b5e20215f61058171191/627c10be3ada73fe5a3081a2_home_hero_image%201.png 900w"
              alt="Two people at a desk using sustainability software."
              class="animate-on-scroll"
              className={css.lifestyleimage}
            />
            <img
              src="https://assets.website-files.com/6266b5e20215f61058171191/627ad1ed392f2454ab401bfc_sustain.life-impact-dashboard.svg"
              loading="eager"
              width="500"
              alt="Graph dark green"
              class="impact-chart animate-on-scroll"
              className={css.impactchart}
            />
            <img
              src="https://assets.website-files.com/6266b5e20215f61058171191/627ad2568a01143856149c19_sustain.life-building-emissions.svg"
              width="243"
              alt="building price white"
              class="category-card animate-on-scroll"
              className={css.categorycard}
            />

            <img
              src="https://assets.website-files.com/6266b5e20215f61058171191/627ad154b4003504b2925fa9_sustain.life-total-emissions.svg"
              alt="Card showing a company's total emissions: 3,174 MT CO2e"
              width="318"
              class="emissions-card animate-on-scroll"
              className={css.emissionscard}
            />
          </div>
        </Row>
      </Row>
    </Container>
  );
};

export default Section1;
