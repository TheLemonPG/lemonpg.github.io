import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import CustomButton from "../components/button";
import Head from "../components/Head";
import HeaderTile from "../components/headerTitle";
import defaultBog from "../images/defaultBcg.jpeg";
import CardIem from "../components/serviceCard";
import RoomItem from "../components/roomItem";
import Footer from "../components/footer";
import "../css/home.css";

const Home = ({ featuredRooms }) => {
  return (
    <div>
      <Head
        title="Budget Friendly Rooms In Your City"
        subtitle="Rooms Starting at Rs 3000"
        bg={defaultBog}
        btn={<CustomButton txt="Our Rooms" to="lemonpg/rooms" />}
      />

      

      <div className="FR">
        <div className="container">
          <HeaderTile txt="Featured Rooms" />
        </div>
        <div className="container frcards">
          {/* <Row>
            <Col>
              <RoomItem />
            </Col>
            <Col>
              <RoomItem />
            </Col>
            <Col>
              <RoomItem />
            </Col>
          </Row> */}
          <div className="row justify-content-center">
            {featuredRooms.map(room => {
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
      <div className="services">
        <div className="container">
          <HeaderTile txt="Services" />
        </div>
        <div className="cards">
          <div className="container">
            <Row className="justify-content-center">
              <Col xs={10} sm={6} lg className="text-center">
                <CardIem
                  title="Easy Shipping"
                  txt=""
                />
              </Col>
              <Col xs={10} sm={6} lg className="text-center">
                <CardIem
                  title="Residental Security"
                  txt=" "
                />
              </Col>
              <Col xs={10} sm={6} lg className="Free Shuttle">
                <CardIem
                  title="Fraud Proof"
                  txt=" "
                />
              </Col>
              <Col xs={10} sm={6} lg className="text-center">
                <CardIem
                  title="Best Match"
                  txt=" "
                />
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

// export default class home extends Component {
//   render() {
//     return (
//       <div>
//         <Head
//           title="Luxurious Rooms"
//           subtitle="Deluxe Rooms Starting at 299$"
//           bg={defaultBog}
//           btn={
//             <Link to="/rooms">
//               <Button
//                 variant="primary"
//                 style={{
//                   backgroundColor: "#af9a7d",
//                   textTransform: "uppercase"
//                 }}
//               >
//                 Our Rooms
//               </Button>
//             </Link>
//           }
//         />

//         <div className="services">
//           <div className="container">
//             <HeaderTile txt="Services" />
//           </div>
//           <div className="cards">
//             <div className="container">
//               <Row>
//                 <Col xs={12} sm={6} md className="text-center">
//                   <CardIem
//                     title="Easy Shipping"
//                     txt=" "
//                   />
//                 </Col>
//                 <Col xs={12} sm={6} md className="text-center">
//                   <CardIem
//                     title="Residental Security"
//                     txt=". "
//                   />
//                 </Col>
//                 <Col xs={12} sm={6} md className="Free Shuttle">
//                   <CardIem
//                     title="Fraud Proof"
//                     txt=".   "
//                   />
//                 </Col>
//                 <Col xs={12} sm={6} md className="text-center">
//                   <CardIem
//                     title="Best Match"
//                     txt=". "
//                   />
//                 </Col>
//               </Row>
//             </div>
//           </div>
//         </div>

//         <div className="FR">
//           <div className="container">
//             <HeaderTile txt="Featured Rooms" />
//           </div>
//           <div className="container frcards">
//             <Row>
//               <Col>
//                 <RoomItem />
//               </Col>
//               <Col>
//                 <RoomItem />
//               </Col>
//               <Col>
//                 <RoomItem />
//               </Col>
//             </Row>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// // export default home;
