import React, { Component } from "react";
import "../css/head.css";
import { Jumbotron, Container, Button, Row } from "react-bootstrap";
import Line from "../components/line";

const Head = ({ title, subtitle, btn, bg }) => {
  return (
    <div>
      <Jumbotron
        fluid
        className="myjumbotron d-flex align-items-center"
        style={{ backgroundImage: "url(" + bg + ")" }}
      >
        <Container className="mycontainer  justify-content-center  w-50">
          <Row
            className="justify-content-center text-center"
            style={{ marginLeft: "0px", marginRight: "0px" }}
          >
            <h1 className="text-wrap">{title}</h1>
          </Row>

          <Row
            className="justify-content-center text-center"
            style={{ marginLeft: "0px", marginRight: "0px" }}
          >
            <Line />
          </Row>
          <Row
            className="justify-content-center text-center"
            style={{ marginLeft: "0px", marginRight: "0px" }}
          >
            <p className="text-wrap">{subtitle}</p>
          </Row>
          <Row className="justify-content-center">{btn}</Row>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Head;
