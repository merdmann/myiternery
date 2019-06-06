/**
 * Based on:
 * https://www.youtube.com/watch?v=91F8reC8kvo&t=940s
 */

import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import LandingPage_V1 from "./pages/landingPage_V1"
import LandingPage_V2 from "./pages/landingPage_V2"



class App extends Component {
 render() {
    return (  
      <BrowserRouter>
        <switch>
        <Route path="/1" component={LandingPage_V1} />
        <Route path="/2" component={LandingPage_V2} />
        </switch>
      </BrowserRouter>
    );
  }
}

export default App;

/* last line */