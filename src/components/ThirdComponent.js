import React from "react";
import { Container } from "reactstrap";
import { Row, Col } from "reactstrap";
import Image from "../assests/Image_BrandDevelopment.jpg";
import "./ThirdComponent.scss";

const ThirdComponent = props => {
  return (
    <Container fluid className="thirdcompo">
      <Row>
        <Col xs={12} md={6} className="px-5 py-5 text-left">
          <h2 className="title pb-2 pt-5 px-4">
            Brand <br />
            Development
          </h2>
          <p className="lead content py-2 px-4">
            Our brand development process merges traditional brand planning
            methodologies with a new world digital approach to developing brand.
          </p>
          <p className="lead content pt-2 pb-5 px-4">
            Our process focuses on developing a brands position in market, tone
            or voice, personality and communication platform.
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
        <Col xs={12} md={6} className="px-0">
          <img
            src={Image}
            alt="DigitalBusiness"
            style={{ width: "100%", height: "100%" }}
          ></img>
        </Col>
      </Row>
    </Container>
  );
};

export default ThirdComponent;
