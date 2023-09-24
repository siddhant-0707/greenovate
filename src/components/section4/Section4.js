import React from "react";
import css from "./section4.module.css";
import { Button, Col, Container, Row } from "react-bootstrap";
const Section4 = () => {
  return (
    <Container
      className={`${css.main}`}
      fluid
      style={{ padding: "5rem 25rem 0" ,backgroundColor:"#f5e90a"}}
    >
      <Row>
        <Col>
          <h1 className={css.headingContent}>Start your path to net-zero.</h1>
          <Button variant="dark" href="/dashboard">Dashboard</Button>
        </Col>
        <Col >
          <img
            src="https://assets.website-files.com/6266b5e20215f61058171191/627d4a5ca9ef30f594e8b644_footer-image03.png"
            alt=""
            width={"100%"}
            height={"100%"}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Section4;
