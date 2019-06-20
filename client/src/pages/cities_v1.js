import React, { Component } from "react";
//import { BrowserRouter, Route, Link } from "react-router-dom";
//import { Container, Row, Col } from 'react-grid-system';


import Login  from "../components/login"
import Header from "../components/header";
import Burger from "../components/burger";
import Section from "../components/section";                                                                                                                                                                                                  
import Cities from "../components/cities"

class CitiesPage extends Component {
  render() {
    return (
        <div>
          <Section layout="HeaderLayout">
            <Header />
            <Login />
            <Burger />
          </Section>
          <Cities />
        </div>
    )
  }
}
export default CitiesPage;


/* last line */