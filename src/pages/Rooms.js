import React, { Component } from "react";
import Head from "../components/Head";
import room1 from "../images/room-1.jpeg";
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import HeaderTile from "../components/headerTitle";
import RoomItem from "../components/roomItem";
import Footer from "../components/footer";
import "../css/rooms.css";

class Rooms extends Component {
  constructor() {
    super();
    this.state = {
      type: "all",
      capacity: 99,
      price: 3000,
      size: 3000,
      breakfast: false,
      pets: false,
      capacityvisibility: "invisible",
      pricevisibility: "invisible",
      sizevisibility: "invisible"
    };
  }

  handleFilter = e => {
    console.log("breakfast=", this.state.breakfast);

    console.log("filter changed e.target.name=", e.target.name);
    console.log("filter changed e.target.value=", e.target.value);
    console.log("state=", this.state);

    const name = e.target.name;
    const value = e.target.value;
    switch (name) {
      case "type":
        this.setState({ type: value });
        break;
      case "capacity":
        this.setState({ capacity: value, capacityvisibility: "visible" });
        break;
      case "price":
        this.setState({ price: value, pricevisibility: "visible" });
        break;
      case "size":
        this.setState({ size: value, sizevisibility: "visible" });
        break;
      case "breakfast":
        this.setState({ breakfast: !this.state.breakfast });
        break;
      case "pets":
        this.setState({ pets: !this.state.pets });

        break;
    }
  };

  render() {
    let breakfast = this.state.breakfast;
    let pets = this.state.pets;
    let price = this.state.price;
    let type = this.state.type;
    let capacity = this.state.capacity;
    let size = this.state.size;

    const filterdRooms = this.props.Rooms.filter(room => {
      if (type === "all") {
        return (
          room.fields.breakfast === breakfast &&
          room.fields.pets === pets &&
          room.fields.capacity <= capacity &&
          room.fields.size <= size &&
          room.fields.price <= price
        );
      } else {
        return (
          room.fields.type === type &&
          room.fields.breakfast === breakfast &&
          room.fields.pets === pets &&
          room.fields.capacity < capacity &&
          room.fields.size < size &&
          room.fields.price < price
        );
      }
    });
    return (
      <div>
        <Head
          title="Our Rooms"
          bg={room1}
          btn={
            <Link to="/lemonpg">
              <Button>Return Home</Button>
            </Link>
          }
        />

        <div className="FR">
          <div className="container">
            <HeaderTile txt="Search Rooms" />
          </div>

          <div className="Seracher">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-5 col-md-3 text-center my-2">
                  <h5>Room Type</h5>
                  <div className="d-flex justify-content-center">
                    <select
                      className="form-control form-control-sm"
                      onChange={this.handleFilter}
                      name="type"
                    >
                      {/* <Form.Control as="select"> */}
                      <option value="all">All</option>
                      <option value="family">Family</option>
                      <option value="double">Double</option>
                      <option value="single">Single</option>
                      <option value="presidential">Presidential</option>
                    </select>
                    {/* </Form.Control> */}
                  </div>
                </div>

                {/* <div className="col-5 col-md-3 text-center my-2">
                  <h5>capacity</h5>
                  <div className="d-flex justify-content-center">
                    <select
                      className="form-control form-control-sm"
                      onChange={this.handleFilter}
                      name="capacity"
                    >
                      <option value="0">All</option>
                      <option value="1">Family</option>
                      <option value="2">Double</option>
                      <option value="3">Single</option>
                    </select>
                  </div>
                </div> */}

                <div className="col-5 col-md-2 text-center my-2">
                  <h5>
                    Capacity{" "}
                    <span className={this.state.capacityvisibility}>
                      {this.state.capacity}
                    </span>{" "}
                  </h5>
                  <input
                    type="range"
                    className="form-control-range"
                    id="formControlRange"
                    onChange={this.handleFilter}
                    min="1"
                    max="6"
                    name="capacity"
                  ></input>
                </div>

                <div className="col-5 col-md-2 text-center my-2">
                  <h5>
                    Price{" "}
                    <span className={this.state.pricevisibility}>
                      {this.state.price}
                    </span>{" "}
                  </h5>
                  <input
                    type="range"
                    className="form-control-range"
                    id="formControlRange"
                    onChange={this.handleFilter}
                    min="1"
                    max="1000"
                    name="price"
                  ></input>
                </div>

                <div className="col-5 col-md-2 text-center my-2">
                  <h5>
                    Room Size{" "}
                    <span className={this.state.sizevisibility}>
                      {this.state.size}
                    </span>
                  </h5>
                  <input
                    type="range"
                    className="form-control-range"
                    id="formControlRange"
                    onChange={this.handleFilter}
                    min="1"
                    max="2000"
                    name="size"
                  ></input>
                </div>

                <div className="col-5 col-md-2 my-2">
                  <div className="form-check  d-flex justify-content-center">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="defaultCheck1"
                      value="breakfast"
                      onChange={this.handleFilter}
                      name="breakfast"
                    />
                    <label
                      className="form-check-label ml-5"
                      htmlFor="defaultCheck1"
                    >
                      Breakfast
                    </label>
                  </div>

                  <div className="form-check  d-flex justify-content-center">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="pets"
                      id="defaultCheck1"
                      onChange={this.handleFilter}
                      name="pets"
                    />
                    <label
                      className="form-check-label ml-2"
                      htmlFor="defaultCheck1"
                    >
                      Pets
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container frcards">
            <div className="row justify-content-center">
              {filterdRooms.map(room => {
                return (
                  <RoomItem
                    key={room.sys.id}
                    img={room.fields.images[0].fields.file.url}
                    price={room.fields.price}
                    name={room.fields.name}
                    roomId={"lemonpg/rooms/" + room.sys.id}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Rooms;
