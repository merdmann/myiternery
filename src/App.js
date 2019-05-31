import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from "react";
import "./App.css";
import logo from "./MYtineraryLogo.png"; // with import
import Home from "./home.png";
import HomeActive from "./homeActive.png";

class Login extends Component {
  State = {
    userName: null
  };
  render() {
    return (
      <img
        src={this.state.userName == null ? Home : HomeActive}
        className="icon"
        alt=""
      />
    );
  }
}

class LandingPage extends Component {
  render() {
    return (
      <div>
        <login />
        <div className="centered">
          <img className="logo" src={logo} alt="" />
          <p className="Greeting">
            Find your perfect trip, designed by insiders who know and love their
            cities.{" "}
          </p>{" "}
        </div>{" "}
      </div>
    );
  }
}

export default LandingPage;
