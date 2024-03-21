import React from "react";
import image from "../assets/image-1.png";
import pattern from "../assets/flower_page.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift } from "@fortawesome/free-solid-svg-icons";
const KnowUs = () => {
  return (
    <section className="knowUs">
      <div className="knowUs__container">
        <div className="knowUs__right">
          <img src={image} alt="image" />
        </div>
        <div className="knowUs__left">
          <div className="knowUs__left__title">
            <p className="heading__subtitle">Despre Noi</p>
            <h1 className="heading__title heading__title__3">
              Bun venit la Nume Beauty & Spa Center
            </h1>
          </div>
          <div className="knowUs__left__content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
              luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
              luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>

            <div className="knowUs__left__content__promo">
              <div className="knowUs__left__content__promo__item">
                <FontAwesomeIcon icon={faGift} />
                <div className="knowUs__left__content__promo__item__text">
                  <h3>Oferte speciale</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
              <div className="knowUs__left__content__promo__item">
                <FontAwesomeIcon icon={faGift} />
                <div className="knowUs__left__content__promo__item__text">
                  <h3>Oferte speciale</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="knowUs__left__btn">
            <button className="btn__main">Află mai multe</button>
          </div>
        </div>
        <img src={pattern} alt="pattern" className="knowUs__pattern" />
      </div>
    </section>
  );
};

export default KnowUs;
