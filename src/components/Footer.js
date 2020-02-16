import React from "react";
import { Container, Input } from "reactstrap";
import { Row, Col } from "reactstrap";
import "./Footer.scss";

const Footer = props => {
  return (
    <Container fluid className="footer py-5">
      <Row className="justify-content-center align-items-center">
        <Col xs={2} md={1} className="text-center">
          <a className="social" href="/" target="_blank">
            <i class="fab fa-facebook-f"></i>
          </a>
        </Col>
        <Col xs={2} md={1} className="text-center">
          <a className="social" href="/" target="_blank">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </Col>
        <Col xs={2} md={1} className="text-center">
          <a className="social" href="/" target="_blank">
            <i class="fab fa-youtube"></i>
          </a>
        </Col>
        <Col xs={2} md={1} className="text-center">
          <a className="social" href="/" target="_blank">
            <i class="fab fa-slideshare"></i>
          </a>
        </Col>
        <Col xs={2} md={1} className="text-center">
          <a className="social" href="/" target="_blank">
            <i class="fab fa-instagram"></i>
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
