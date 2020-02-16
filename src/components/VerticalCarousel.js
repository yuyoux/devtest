import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselIndicators,
  Container,
  Row,
  Col,
  Media
} from "reactstrap";
import "./VerticalCarousel.scss";
import Banner1 from "../assests/HeroImage_OurServices.jpg";
import Banner2 from "../assests/HeroImage_BrandStrategy.jpg";
import Icon_CRO from "../assests/Icon_CRO.png";
import Icon_Strategy from "../assests/Icon_Strategy.png";
import Icon_UXDesign from "../assests/Icon_UXDesign.png";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";

const items = [
  {
    src: Banner1,
    altText: "Slide 1",
    caption: "Slide 1"
  },
  {
    src: Banner2,
    altText: "Slide 2",
    caption: "Slide 2"
  }
];

const VerticalCarousel = props => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const slides = items.map(item => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <Container fluid>
          {item.altText === "Slide 1" ? (
            <Row className="banner1 text-left align-items-center">
              <Col xs={12} md={6} className="px-5">
                <h2 className="title pb-2 pt-4 px-4">OUR SERVICES</h2>
                <p className="lead content py-2 px-4">
                  The imaginative crafting of psycology, art, technology and
                  business to create beautiful ideas, products and services.
                </p>
                <Row className="justify-content-start">
                  <Col className="text-center" xs={3}>
                    <Media object src={Icon_Strategy} alt="Icon_Strategy" />
                    <p className="banner__content text-center">
                      Branding,
                      <br /> Brand Strategy
                    </p>
                  </Col>
                  <Col className="text-center pl-0" xs={4}>
                    <Media object src={Icon_CRO} alt="Icon_CRO" />
                    <p className="banner__content">
                      Conversation <br /> Rate Optimisation
                    </p>
                  </Col>
                  <Col className="text-center pl-0 " xs={3}>
                    <Media object src={Icon_UXDesign} alt="Icon_UXDesign" />
                    <p className="banner__content">
                      UX, Design, <br /> Development
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          ) : (
            <Row className="banner2 text-left align-items-center">
              <Col xs={12} md={6} className="px-5">
                <h2 className="title pb-2 pt-5 px-4">Brand Strategy</h2>
                <p className="lead content py-2 px-4">
                  Our brand development process merges traditional brand
                  planning methodologies with a new world digital approach to
                  developing brand. Our process focuses on developing a brands
                  position in market, personality and communication platform.
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
          )}
        </Container>
      </CarouselItem>
    );
  });

  return (
    <ReactScrollWheelHandler
      upHandler={() => next()}
      downHandler={() => previous()}
    >
      <Carousel activeIndex={activeIndex} className="verticalCarousel">
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
      </Carousel>
    </ReactScrollWheelHandler>
  );
};

export default VerticalCarousel;
