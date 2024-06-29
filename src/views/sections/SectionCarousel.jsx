import React, { useState, useEffect } from "react";
import "../../assets/css/style.css";
import { useNavigate } from "react-router-dom";
import bgimg from "../../assets/img/cartographer.png"
// reactstrap components
import {
  Card,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

// core components

const items = [
  {
    src: "",
    altText: "Somewhere",
    caption: "Somewhere",
  },
  {
    src: "",
    altText: "Somewhere else",
    caption: "Somewhere else",
  },
  {
    src:"",
    altText: "Here it is",
    caption: "Here it is",
  },
];

function SectionCarousel() {
  const [showCarousel, setShowCarousel] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const navigate = useNavigate();

  const onExiting = () => {
    setAnimating(true);
  };

  const onExited = () => {
    setAnimating(false);
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

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const handleClick = () => {
    navigate("/event");
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop;
      const triggerPosition = 0; // Adjust this value according to your needs
      setShowCarousel(scrollPosition > triggerPosition);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        style={{backgroundImage: `url(${bgimg})`, backgroundSize: "",backgroundColor:"black " }}
        className={`section pt-o `}
        id="carousel"
      >
        <Container className="">
          <h1 className="title" style={{ padding: "10px", color: "#F8FAE5" }}>
            Events
          </h1>
          <Row
            className={`in-out ${showCarousel ? "visible" : "hidden"}`}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Col className="ml-auto mr-auto ">
              <Card className="page-carousel croselsec">
                <Carousel
                  activeIndex={activeIndex}
                  next={next}
                  previous={previous}
                >
                  <CarouselIndicators
                    items={items}
                    activeIndex={activeIndex}
                    onClickHandler={goToIndex}
                  />
                  {items.map((item) => (
                    <CarouselItem
                      key={item.src}
                      onExiting={onExiting}
                      onExited={onExited}
                    >
                      <img
                        src={item.src}
                        alt={item.altText}
                        onClick={() => handleClick()}
                      />
                      <CarouselCaption
                        captionText={item.caption}
                        captionHeader=""
                      />
                    </CarouselItem>
                  ))}
                  <a
                    className="left carousel-control carousel-control-prev"
                    data-slide="prev"
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      previous();
                    }}
                    role="button"
                  >
                    <span className="fa fa-angle-left" />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="right carousel-control carousel-control-next"
                    data-slide="next"
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      next();
                    }}
                    role="button"
                  >
                    <span className="fa fa-angle-right" />
                    <span className="sr-only">Next</span>
                  </a>
                </Carousel>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionCarousel;
