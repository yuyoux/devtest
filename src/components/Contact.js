import React from "react";
import { Container, Input } from "reactstrap";
import { Row, Col } from "reactstrap";
import "./Contact.scss";

const Contact = props => {
  return (
    <Container fluid className="contactcompo">
      <Row className="justify-content-center">
        <Col xs={12} md={6} className="px-5 py-5 text-center">
          <h2 className="title pb-2 pt-4">Stay in touch</h2>
          <p className="contact__content py-2">
            Each month we release a newsletter on how we do what we do. Lorem
            ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
          <Row className="justify-content-center">
            <Col xs={10} className="py-4 text-center">
              <Input placeholder="enter your email address..." />
            </Col>
          </Row>
          <div className="py-4">
            <a
              className="hyplink"
              href="https://newrepublique.com/work/"
              target="_blank"
            >
              SIGN UP TO OUR NEWSLETTER
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
