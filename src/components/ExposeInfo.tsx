import React from "react";
import image from "../assets/bg_our-scaled.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as Logo } from "../assets/logowhite.svg";

const ExposeInfo = () => {
  return (
    <section
      className="exposeInfo"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="exposeInfo__container">
        <div className="exposeInfo__content">
          <Logo className="logo" />
          <h2 className="heading__expo">
            Centrul Nostru Spa este o Adevărata Splendoare
          </h2>
          <div className="exposeInfo__container__btn">
            <button className="btn__main">Book Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExposeInfo;
