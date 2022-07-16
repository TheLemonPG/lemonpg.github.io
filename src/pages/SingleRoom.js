import React, { Component } from "react";
import Head from "../components/Head";
import CustomButton from "../components/button";
import { Link } from "react-router-dom";
import "../css/singleroom.css";
import { Button, Row, Col } from "react-bootstrap";
import Footer from "../components/footer";

class SingleRoom extends Component {
  state = {
    id: null
  };
  // componentDidMount() {}
  render() {
    const id = this.props.match.params.roomId;
    console.log("props", this.props);
    const room = this.props.rooms.filter(item => item.sys.id == id)[0];
    console.log("room", room);

    return (
      <div>
        <Head
          title={room.fields.name}
          bg={room.fields.images[0].fields.file.url}
          btn={<CustomButton txt="Back To Rooms" to="lemonpg/rooms" />}
        />
        <div className="SR-imgs">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 ">
                <img src={room.fields.images[1].fields.file.url} />
              </div>
              <div className="col-lg-4 ">
                <img src={room.fields.images[2].fields.file.url} />
              </div>
              <div className="col-lg-4 ">
                <img src={room.fields.images[3].fields.file.url} />
              </div>
            </div>
          </div>
        </div>
        <div className="details">
          <div className="container">
            <div className="row">
              <div className="col-md-6 mr-5">
                <h4>Deatails</h4>
                <p>{room.fields.description}</p>
              </div>
              <div className="col-md-4 ml-5">
                <h4>Info</h4>
                <p>price : ${room.fields.price}</p>
                <p>Size : {room.fields.size} SQFT</p>
                <p>Max Capacity : {room.fields.capacity}</p>
                <p>{room.fields.pet ? "Pets Allowed" : "Pets Unallowed"}</p>
                <p>
                  {room.fields.breakfast
                    ? "Free Breakfast Included"
                    : "No Free Breakfast"}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="extras">
          <div className="container">
            <h5>Extras</h5>
            <div className="row">
              <div className="col-md-4">
                <p>-{room.fields.extras[0]}</p>
                <p>-{room.fields.extras[1]}</p>
                <p>-{room.fields.extras[2]}</p>
              </div>
              <div className="col-md-4">
                <p>-{room.fields.extras[3]}</p>
                <p>-{room.fields.extras[4]}</p>
              </div>
              <div className="col-md-4">
                <p>-{room.fields.extras[5]}</p>
                <p>-{room.fields.extras[6]}</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default SingleRoom;
