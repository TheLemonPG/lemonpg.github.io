import React, { Component } from "react";
// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Rooms from "./pages/Rooms";
import Home from "./pages/home";
import SingleRoom from "./pages/SingleRoom";
import MyNavBar from "./components/Navbar";
import Items from "./data";
import { BrowserRouter as BR, Route, Switch } from "react-router-dom";

// class App extends Component {
//   constructor() {
//   super();
//   this.state = {
//     Items: Items
//   };
// }
//   render() {
//     // const featuredRooms = this.state.Items.filter(item => {
//     //   return (item.fields.featured===True);
//     // });
//     console.log(Items[0]);
//     return (
//       <BR>
//         <MyNavBar />
//         <Switch>
//           <Route exact path="/" component={<home featuredRooms={featuredRooms}/>} />
//           <Route exact path="/rooms" component={Rooms} />
//           <Route exact path="/rooms/:roomId" component={SingleRoom} />
//         </Switch>
//       </BR>
//     );
//   }
// }

class App extends Component {
  constructor() {
    super();
    this.state = {
      myItems: Items
    };
  }

  render() {
    console.log("items form app", this.state.myItems[0]);
    const featuredRooms = this.state.myItems.filter(item => {
      return item.fields.featured === true;
    });

    // let h = <home featuredRooms={featuredRooms} />;
    return (
      <BR>
        <MyNavBar />

        <Switch>
          <Route
            exact
            path="/lemonpg"
            render={() => <Home featuredRooms={featuredRooms} />}
          />
          <Route
            exact
            path="/lemonpg/rooms"
            render={() => <Rooms Rooms={this.state.myItems} />}
          />
          <Route
            exact
            path="/lemonpg/rooms/:roomId"
            render={props => (
              <SingleRoom {...props} rooms={this.state.myItems} />
            )}
          />
        </Switch>
      </BR>
    );
  }
}
export default App;
