import React from "react";
import { Container, Row, Col } from "reactstrap";
import Image from "../assests/Image_DigitalBusiness.jpg";
import "./SecondComponent.scss";

const SecondComponent = props => {
  return (
    <Container fluid className="secondcompo">
      <Row>
        <Col xs={12} md={6}>
          <img
            src={Image}
            alt="DigitalBusiness"
            style={{ width: "100%", height: "100%" }}
          ></img>
        </Col>
        <Col xs={12} md={6} className="px-5 py-5 text-left">
          <h2 className="title pb-2 pt-4 px-4">
            Digital Business
            <br /> Strategy
          </h2>
          <p className="lead content py-2 px-4">
            We work with many organisations to research and assess potential
            digital, mobile and new technology business models that can help
            them differentiate, create new revenues or reduce the cost of
            delivery.
          </p>
          <p className="lead content pt-2 pb-4 px-4">
            Many organisations that approach us don’t have the background, skill
            or know how to identify and assess how their organisation can take
            advantage of digital opportunities.
          </p>
          <div className="px-4">
            <a
              className="hyplink"
              href="https://newrepublique.com/work/"
              target="_blank"
            >
              VIEW RELATED WORK
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SecondComponent;
