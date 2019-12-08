/**
 * Based on:
 * https://www.youtube.com/watch?v=91F8reC8kvo&t=940s
 */

import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
//import { browserHistory } from "react-router";
import LandingPage_V1 from "./pages/landingPage_V1"
import LandingPage_V2 from "./pages/landingPage_V2"
import createAccount from "./pages/createAccount"
import Cities_V1 from "./pages/cities_v1"
import Itinerary from "./pages/itineraries"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <switch>
          <Route path="/1" component={LandingPage_V1} />
          <Route path="/2" component={LandingPage_V2} />
          <Route path="/3" component={Cities_V1} />
          <Route path="/4/:city" component={Itinerary} />
          <Route path="/create" component={createAccount} />"
        </switch>
      </BrowserRouter>
    );
  }
}

export default App;

/* last line */