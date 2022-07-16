import React, { Component } from "react";
import { Card, Col, Row } from "react-bootstrap";
import room_4_img from "../images/room-4.jpeg";
import CustomButton from "../components/button";

import "../css/roomItem.css";

const RoomItem = ({ img, price, name, roomId }) => {
  return (
    // <Col style={{ position: "relative" }}>
    // <Card className="roomcard shadow-lg col-sm-6 col-md-2 text-center ">
    //   <Card.Body>
    //     <div classname="imgCon">
    //       <img src={img}></img>
    //       <div className="pricebox">
    //         <p>
    //           {price} <br />
    //           <span>per night</span>
    //         </p>
    //       </div>
    //       <div class="middle">
    //         <div class="text">John Doe</div>
    //       </div>
    //     </div>
    //     <Card.Title>{name}</Card.Title>
    //   </Card.Body>
    // </Card>
    // </Col>
    <div className=" col-sm-5 col-md-3 card roomcard text-center shadow">
      <div className="card-body">
        <img src={img} className=""></img>
        <div className="pricebox">
          <p>
            {price} <br />
            <span className="PN">per night</span>
          </p>
        </div>
        <h5 className="card-title">{name}</h5>

        <div className="middle">
          <Row className="justify-content-center align-items-center">
            <Col>
              <CustomButton txt="Show Room" to={roomId} />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default RoomItem;
