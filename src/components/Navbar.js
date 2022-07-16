import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";

import "../css/navbar.css";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";


class MyNavbar extends Component {
  state = {};
  render() {
    return (
      <Navbar bg="gray" expand="lg" className="sticky-top mynavbar">
        <div className="container">
          <Navbar.Brand href="/lemonpg">
          <Redirect to="/lemonpg/"/>
            <img src={logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Link to="/lemonpg" className="mx-4">
                Home
              </Link>
              <Link to="/lemonpg/rooms" className="mx-4">
                Rooms
              </Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
      
    );
  }
}

export default MyNavbar;
