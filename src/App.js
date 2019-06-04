import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";

import home from "./components/landingPage"
import login from "./components/login.js"
import Footer from "./components/footer.js"

class App extends Component {
 render() {
    return (  
      <BrowserRouter>
        <Route path="/home" component={home} />
      </BrowserRouter>
    );
  }
}

export default App;

/* last line */