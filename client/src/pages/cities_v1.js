import React, { Component } from "react";

import Cities from "../components/cities"
import Itinararies from "../pages/itineraries";
import Footer from "../components/footer";
class CitiesPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <div>
          <Cities />
        </div>
    )
  }
}
export default CitiesPage;


/* last line */