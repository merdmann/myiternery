/**
 * Based on:
 * https://www.youtube.com/watch?v=91F8reC8kvo&t=940s
 */

import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";

import LandingPage from "./components/landingPage"
//import login from "./components/login.js"

class App extends Component {
 render() {
    return (  
      <BrowserRouter>
        <Route path="/home" component={LandingPage} />
      </BrowserRouter>
    );
  }
}

export default App;

/* last line */