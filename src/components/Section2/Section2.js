import React from "react";
import css from "./section2.module.css";
import { Container } from "react-bootstrap";

const Section2 = () => {
  return (
    <Container  className={`${css.Section2} ${css.main}`} fluid style={{ padding: "5rem 25rem 0",backgroundColor:"#c7dddf" }}>

   
      <p className={css.heading}>HOW IT WORKS</p>
      <h1 className={css.headingContent}>
        Future-proof your business— take climate action
      </h1>
      <div className="row">
        <div className="col text-col">
          <div className="row">
            <div className="col">
              <h1 className={css.number}>01</h1>
              <h1 className={css.number}>02</h1>
              <h1 className={css.number}>03</h1>
            </div>
            <div className="col">
              <p className={css.Contentheading}>Measure</p>
              <p className={css.content}>
                Get instant insights with your environmental data in one place.
              </p>
              <p className={css.Contentheading}>Manage</p>
              <p className={css.content}>
                Get personlized tips to meet yor targets
              </p>
              <p className={css.Contentheading}>Report</p>
              <p className={css.content}>
                Share your report and ask for expert advice
              </p>
            </div>
          </div>
        </div>
        <div className="col" style={{overflow:"hidden"}}>
          <img
            src="https://assets.website-files.com/6266b5e20215f61058171191/627ad60d82db71e0cc6a2cea_Sustain.Life-home-ui-m-01.svg"
            loading="lazy"
            alt="Cards showing net emissions less offsets and total emissions"
          
            className={`${css.img} ${css.image1}`}
            />
          <img
            src="https://assets.website-files.com/6266b5e20215f61058171191/627ad60d4bbe0c2467cb49ab_Sustain.Life-home-ui-m-02.svg"
            loading="lazy"
            alt="A card that shows a suppler score of 53 percent"
            className={`${css.img} ${css.image2}`}
            />
          <img
            src="https://assets.website-files.com/6266b5e20215f61058171191/627ad60db3986a9b8b1d2817_Sustain.Life-home-ui-r-03.svg"
            loading="lazy"
            alt="Sample Sustain.Life impact dashboard showing emissions, spend, and offsets"
            className={`${css.img} ${css.image3}`}
            />
        </div>
      </div>
    
            </Container>
  );
};

export default Section2;
