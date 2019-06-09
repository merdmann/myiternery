import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import Login  from "../components/login"
import Header from "../components/header";
import Burger from "../components/burger";
import Section from "../components/section";
import Footer from "../components/footer"
import logo from "./MYtineraryLogo.png"
import Visit from "../components/visit"

class LandingPage extends Component {
  render() {
    return (
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
          <section layout="Footer">
             <p className="Greeting">Want to build your own MYtinaerary</p>
          </section>
          <Footer></Footer>
        </div>
    )
  }
}
export default LandingPage;


/* last line */