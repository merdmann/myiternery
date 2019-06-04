import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import Login  from "./login"
import Header from "./header";
import Burger from "./burger";
import Section from "./section";
import Screen from "./screen"
import logo from "./MYtineraryLogo.png"
import "./App.css";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <div>
          <Section>
            <Header />
            <Login />
            <Burger />
          </Section>
          <div className="centered">
            <img className="logo" src={logo} alt="" />
            <p className="Greeting">
              Find your perfect trip, designed by insiders who know and love their
              cities.
            </p>
          </div>
        </div>
        <div className="Centered">
        <Section>
          <Screen />
          <Screen />
          <Screen />
          <Screen />
        </Section>
        </div>
      </div>
    )
  }
}

export default LandingPage;


/* last line */