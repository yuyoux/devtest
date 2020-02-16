import React, { Fragment } from "react";
import { Button, Row, Col } from "reactstrap";
import "./Home.sass";

const Home = props => {
  return (
    <Fragment>
      <Row>
        <Col md={2}>nav</Col>
        <Col md={10}>content</Col>
      </Row>
    </Fragment>
  );
};

export default Home;
