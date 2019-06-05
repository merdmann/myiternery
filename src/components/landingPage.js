import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import Login  from "./login"
import Header from "./header";
import Burger from "./burger";
import Section from "./section";
import Screen from "./screen"
import Footer from "./footer"
import logo from "./MYtineraryLogo.png"
import Visit from "./visit"
import "./App.css";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <div>
          <Section layout="HeaderSection">
            <Header />
            <Login />
            <Burger />
          </Section>
          <div className="centered">
            <img className="logo" src={logo} alt="" />
            <p className="Greeting">
              Find your perfect trip, designed by insiders who know and love their
              cities.
              <Visit />
            </p>
          </div>
        </div>
        <Section layout="Flexbox">
          <Screen player="1" />
          <Screen player="2" />
          <Screen player="3" />
          <Screen player="4" />
        </Section>
        <Footer />
      </div>
    )
  }
}
export default LandingPage;


/* last line */