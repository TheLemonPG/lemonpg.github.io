import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLeaf,
  faMapMarkedAlt,
  faEnvelope,
  faPhoneAlt
} from "@fortawesome/free-solid-svg-icons";
import "../css/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className=" d-flex justify-content-center">
          <h2 className="text-center">
            {" "}
            {/* <FontAwesomeIcon icon={faLeaf} /> PLANT */}
            LemonPG
          </h2>
        </div>
        <div className=" d-flex justify-content-center">
          <p className="text-center">
            <FontAwesomeIcon icon={faMapMarkedAlt} />
            Kota, Rajasthan
            <FontAwesomeIcon icon={faPhoneAlt} />
            9672920043
            <FontAwesomeIcon icon={faEnvelope} />
            support@lemonpg.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
