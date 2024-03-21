import {
  faFacebookF,
  faInstagram,
  faPinterest,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhoneAlt, faSearch, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactComponent as Logo } from "../assets/logo.svg";

import React from "react";

const Header = () => {
  return (
    <section className="header">
      <div className="header__details">
        <div className="header__details__left">
          <div className="header__details__left__box">
            <div className="iconBox">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <p className="text__describe">salon@company.com</p>
          </div>

          <div className="header__details__left__box">
            <div className="iconBox">
              <FontAwesomeIcon icon={faPhoneAlt} />
            </div>
            <p className="text__describe">+ 92 ( 8800 ) - 6930</p>
          </div>
        </div>
        <div className="header__details__right">
          <div className="iconList">
            <FontAwesomeIcon icon={faXTwitter} />
            <FontAwesomeIcon icon={faFacebookF} />
            <FontAwesomeIcon icon={faPinterest} />
            <FontAwesomeIcon icon={faInstagram} />
          </div>

          <div className="header__detilas__right__box">
            <button className="btn__main">BOOK NOW</button>
          </div>
        </div>
      </div>
      <div className="header__container">
        <div className="header__container__logo">
          <Logo />
        </div>

        <div className="header__container__nav">
          <ul>
            <li><a href="">Acasa</a></li>
            <li><a href="">Servicii</a></li>
            <li><a href="">Portofoliu</a></li>
            <li><a href="">About Us</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </div>

        <div className="header__container__actions">
        
                <FontAwesomeIcon icon={faSearch} />
        
        </div>
      </div>
    </section>
  );
};

export default Header;
