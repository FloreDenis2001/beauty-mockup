import React from "react";
import { Carousel } from "react-bootstrap";
import image1 from "../assets/background-revslider-05.jpg";
import image2 from "../assets/background-revslider-06.jpg";
import image3 from "../assets/background-revslider-07.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "../scss/components/_carousel.scss";
import { ReactComponent as Logo } from "../assets/logowhite.svg";

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="carousel-item-overlay">
          <img className="d-block w-100" src={image2} alt="Second slide" />
        </div>
        <Carousel.Caption className="text-center">
          <Logo className="logo" />
          <div>
            <p className="text__carousel">Relaxare totală</p>
            <h3 className="heading__carousel">Serenity Spa</h3>
          </div>
          <button className="btn__main">Află mai multe</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-item-overlay">
          <img className="d-block w-100" src={image1} alt="First slide" />
        </div>
        <Carousel.Caption className="text-center">
          <Logo className="logo" />
          <div>
            <p className="text__carousel">Relaxare profundă</p>
            <h3 className="heading__carousel">Zen Spa</h3>
          </div>
          <button className="btn__main">Află mai multe</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-item-overlay">
          <img className="d-block w-100" src={image3} alt="Third slide" />
        </div>
        <Carousel.Caption className="text-center">
          <Logo className="logo" />
          <div>
            <p className="text__carousel">Reechilibrare și relaxare</p>
            <h3 className="heading__carousel">Tranquil Touch</h3>
          </div>
          <button className="btn__main">Află mai multe</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
