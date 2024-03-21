import React, { useState } from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";

const HeaderMobile: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navigation">
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toggle"
      />
      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>

      <div className="navigation__background">&nbsp;</div>

      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              <span>01</span>Acasa
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              <span>02</span>Servicii
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              <span>03</span>Portofoliu
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              <span>04</span>About Us
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              <span>05</span>Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderMobile;
