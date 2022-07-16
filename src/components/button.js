import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import "../css/button.css";

const CustomButton = ({ txt, to }) => {
  let link = `/${to}`;
  return (
    <Link to={link}>
      <Button className="btn">{txt}</Button>
    </Link>
  );
};

export default CustomButton;
