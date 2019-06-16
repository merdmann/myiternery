import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import Login  from "../components/login"
import Header from "../components/header";
import Burger from "../components/burger";
import Section from "../components/section";
import Screen from "../components/screen"
import logo from "./MYtineraryLogo.png"
import Visit from "../components/visit"
import "../App.css";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <div>
          <Section layout="HeaderLayout">
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
        <p>Popular MYtinaries</p>
        <Section layout="Flexbox">
          <Screen player="1" location="barcelona: Gaudi in a Day" />
          <Screen player="2" location="New York: Brooklin Pizza"/>
          <Screen player="3" location="Amsterdam Red Light Green Llght"/>
          <Screen player="4" location="Paris Champange at the Eifel"/>
        </Section>
      </div>
    )
  }
}
export default LandingPage;


/* last line */