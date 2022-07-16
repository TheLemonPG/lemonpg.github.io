import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "../css/serviceCard.css";

const CardItem = ({ icon, title, txt }) => {
  return (
    <Card className="cardItem text-center my-2">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{txt}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardItem;
