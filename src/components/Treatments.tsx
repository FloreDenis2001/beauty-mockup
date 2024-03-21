import React from "react";
import image1 from "../assets/spa-service-02-768x533.jpg";
import image2 from "../assets/spa-service-04-768x533.jpg";
import image3 from "../assets/spa-service-06-768x536.jpg";
import pattern from "../assets/flowers2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpa } from "@fortawesome/free-solid-svg-icons";

const Treatments = () => {
  return (
    <section className="treatments">
      <div className="treatments__header">
        <p className="heading__subtitle">Tratamente de Relaxare</p>
        <h1 className="heading__title">Descoperă Ofertele Noastre</h1>
      </div>

      <div className="treatments__container">
        <div className="treatments__card">
           
           <img src={pattern} className="treatments__card__pattern" />
          <div className="treatments__card__img">
            <img src={image1} alt="spa" />

            <div className="iconBox treatments__card__img__icon ">
              <FontAwesomeIcon icon={faSpa} />
            </div>
          </div>
          <div className="treatments__card__info">
            <h2>Tratament Facial</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <button className="btn__text">Află mai multe →</button>
          </div>
        </div>
        <div className="treatments__card">
           
           <img src={pattern} className="treatments__card__pattern" />
          <div className="treatments__card__img">
            <img src={image2} alt="spa" />

            <div className="iconBox treatments__card__img__icon ">
              <FontAwesomeIcon icon={faSpa} />
            </div>
          </div>
          <div className="treatments__card__info">
            <h2>Îngrijire facială</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <button className="btn__text">Află mai multe →</button>
          </div>
        </div>
        <div className="treatments__card">
           
           <img src={pattern} className="treatments__card__pattern" />
          <div className="treatments__card__img">
            <img src={image3} alt="spa" />

            <div className="iconBox treatments__card__img__icon ">
              <FontAwesomeIcon icon={faSpa} />
            </div>
          </div>
          <div className="treatments__card__info">
            <h2>Hidroterapie</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <button className="btn__text">Află mai multe →</button>
          </div>
        </div>
      
      </div>
    </section>
  );
};

export default Treatments;
