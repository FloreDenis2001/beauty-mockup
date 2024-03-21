import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const MapsContainer = () => {
  return (
    <section className="map">
      <div className="map__iframe">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.317825345234!2d-81.37996168494507!3d28.53833598243783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e77a3c0f9e6a25%3A0x9d7e4c3c69f8e2a1!2sOrlando%20Eye!5e0!3m2!1sen!2sro!4v1630501725863!5m2!1sen!2sro"
          width="1000"
          height="550"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>

        <div className="map__openProgram">
          <div className="map__openProgram__header">
            <h2>Program</h2>
            <FontAwesomeIcon icon={faClock} />
          </div>

          <div className="map__openProgram__content">
            <div className="map__openProgram__content__box">
              <h4>Luni - Vineri</h4>
              <p>09:00 - 20:00</p>
            </div>

            <div className="map__openProgram__content__box">
              <h4>Sâmbătă</h4>
              <p>09:00 - 16:00</p>
            </div>

            <div className="map__openProgram__content__box">
              <h4>Duminică</h4>
              <p>Închis</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapsContainer;
