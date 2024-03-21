import React from "react";
import image from "../assets/massage_bg.png";
import image2 from "../assets/background-footer.png";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faPinterest, faXTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <section className="footer">
      <div
        className="footer__header"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "auto",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center right",
        }}
      ></div>

      <div
        className="footer__container"
        style={{
          backgroundImage: `url(${image2})`,
          backgroundPosition: "bottom center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="footer__container__actions">
          <div className="footer__container__actions__subscribe">
            <div className="footer__container__actions__subscribe__title">
              <p>help@salon.com</p>
              <span>+ 92 ( 8800 ) - 6930</span>
            </div>

            <div className="footer__container__actions__subscribe__input">
              <input type="text" placeholder="Email address" />
              <FontAwesomeIcon icon={faPaperPlane} />
            </div>
          </div>

          <div className="footer__container__actions__links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="">Acasa</a>
              </li>
              <li>
                <a href="">Servicii</a>
              </li>
              <li>
                <a href="">Portofoliu</a>
              </li>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer__container__actions__timming">
            <h3>Orar</h3>
            <p>Luni - Vineri: 09:00 - 20:00</p>
            <p>Sâmbătă: 09:00 - 16:00</p>
            <p>Duminică: Închis</p>
          </div>

          <div className="footer__container__actions__socialMedia">
            <div className="footer__container__actions__socialMedia__icons">
                <FontAwesomeIcon icon={faXTwitter} />
                <FontAwesomeIcon icon={faFacebookF} />
                <FontAwesomeIcon icon={faPinterest} />
                <FontAwesomeIcon icon={faInstagram} />
            </div>
            <div className="footer__container__actions__socialMedia__address">
                <p>123, New Lenox Chicago, IL 60606</p>
                <p>United States</p>
            </div>
          </div>
        </div>
        <div className="footer__container__bottom">
          <div className="footer__container__bottom__content">
            <p>© 2024 Flore Denis. All Rights Reserved</p>
          </div>
          <div className="footer__container__bottom__content">
            <p>Terms Of Use</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
