import {
  faCalendar,
  faFireFlameCurved,
  faSeedling,
  faSpa,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InformativBox = () => {
  return (
    <section className="informativBox">
      <div className="informativBox__item">
        <FontAwesomeIcon icon={faCalendar} />
        <div className="informativBox__item__content">
          <span>23</span>
          <p>Ani Experienta</p>
        </div>
      </div>
      <div className="informativBox__item">
        <FontAwesomeIcon icon={faSpa} />
        <div className="informativBox__item__content">
          <span>860</span>
          <p>Wellness & Spa</p>
        </div>
      </div>
      <div className="informativBox__item">
        <FontAwesomeIcon icon={faSeedling} />
        <div className="informativBox__item__content">
          <span>30</span>
          <p>Tratament cu plante</p>
        </div>
      </div>
      <div className="informativBox__item">
        <FontAwesomeIcon icon={faFireFlameCurved} />
        <div className="informativBox__item__content">
          <span>780</span>
          <p>Clienti Fericiti</p>
        </div>
      </div>
    </section>
  );
};

export default InformativBox;
