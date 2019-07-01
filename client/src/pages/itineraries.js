import React from "react";
import { Component } from "react";
import { browserHistory } from "react-router";

/* 
 * This comonent is expected to take the city name from http route and tto 
 * list all iternararies for this city
 */
class Itinararies extends Component {
  constructor(props) {
    super(props)
    this.state = {itinararies: [] }
  }

  render() {
    console.log(this.state.itinararies)
    return ( this.state.itinararies && this.state.itinararies.map(i=> <div>{i}</div>) );
  }

  componentDidMount() {
    fetch( "http://localhost:5000/api/tinerary/search?city=" + this.props.match.params.city )
      .then(response =>response.json())

      .then(data => {
        console.log(data);
        this.setState({itinararies: data});
        console.log(data)});
  }

} /* end class itinararies */

export default Itinararies;
/* last line */