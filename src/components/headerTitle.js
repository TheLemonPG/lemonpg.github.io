import React, { Component } from "react";
import Line from "../components/line";
import { Row } from "react-bootstrap";
import "../css/headerTitle.css";
const HearderTilte = ({ txt }) => {
  return (
    <div className="HT">
      <Row className="d-flex justify-content-center">
        <h2
          className="text-center"
          style={{ color: "#000", fontWeight: "bold", letterSpacing: "2px" }}
        >
          {txt}
        </h2>
      </Row>
      <Row className="d-flex justify-content-center">
        <Line />
      </Row>
    </div>
  );
};

export default HearderTilte;
