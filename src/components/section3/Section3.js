import React from "react";
import css from "./section3.module.css";
import { Col, Container, Row } from "react-bootstrap";
const Section3 = () => {
  return (
    <Container
      className={`${css.section3} ${css.main} pb-5`}
      fluid
      style={{ padding: "5rem 25rem 0" }}
    >
      <Row>
        <Row>
          <p className={css.heading}>WHY GREENOVATE?</p>
        </Row>
        <Row>
          <Col xs={8}>
            <h1 className={css.headingContent}>
              The sustainability management software for top institutions
            </h1>

            <p className={css.data}>
            Our personlized enviromental reports helps institutions meet their targets easily and help them become friendly for enviroment.
            </p>
            <p className={css.data1}>Greenovate</p>
            <img
              className={css.broker}
              loading="lazy"
              height="32"
              alt="Interactive Brokers logo"
              src="https://assets.website-files.com/6266b5e20215f61058171191/62793df31bebd9a3eb1e63a9_logo-interactivebrokers.svg"
            />
          </Col>
          <Col style={{overflow:"hidden"}}  xs={4}>
            <img className={css.imgDown} src="./img.png" alt="" />
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default Section3;
