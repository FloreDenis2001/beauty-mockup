import React from "react";
import image from "../assets/bg_2-scaled.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Experience = () => {
  return (
    <section
      className="experience"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="experience__container">
        <div className="experience__left">
          <p className="heading__subtitle">CUM TE PUTEM RĂSFĂȚA?</p>
          <h1 className="heading__title heading__title__2">
            Descoperă Diversitatea Masajelor Noastre
          </h1>

          <div className="experience__left__btn">
            <button className="btn__main">Află mai multe</button>
          </div>
        </div>
        <div className="experience__right">
          <ul>
            <li>
              <div className="iconBox">
                {" "}
                <FontAwesomeIcon icon={faCheck} />
              </div>

              <a href="">Aroma Therapy</a>
            </li>
            <li>
              <div className="iconBox">
                {" "}
                <FontAwesomeIcon icon={faCheck} />
              </div>

              <a href="">Sauna Relax</a>
            </li>
            <li>
              <div className="iconBox">
                {" "}
                <FontAwesomeIcon icon={faCheck} />
              </div>

              <a href="">Geothermal Spa</a>
            </li>
            <li>
              <div className="iconBox">
                {" "}
                <FontAwesomeIcon icon={faCheck} />
              </div>

              <a href="">Body Massage</a>
            </li>
            <li>
              <div className="iconBox">
                {" "}
                <FontAwesomeIcon icon={faCheck} />
              </div>

              <a href="">Body Wrap</a>
            </li>
            <li>
              <div className="iconBox">
                {" "}
                <FontAwesomeIcon icon={faCheck} />
              </div>

              <a href="">Hand & Feet</a>
            </li>
            <li>
              <div className="iconBox">
                {" "}
                <FontAwesomeIcon icon={faCheck} />
              </div>

              <a href="">Face Masks</a>
            </li>
            <li>
              <div className="iconBox">
                {" "}
                <FontAwesomeIcon icon={faCheck} />
              </div>

              <a href="">Hydro Therapy</a>
            </li>
            <li>
              <div className="iconBox">
                {" "}
                <FontAwesomeIcon icon={faCheck} />
              </div>

              <a href="">Hot Stone</a>
            </li>
            <li>
              <div className="iconBox">
                {" "}
                <FontAwesomeIcon icon={faCheck} />
              </div>

              <a href="">Spring Water</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
