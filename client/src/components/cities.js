/**
 * THis component is expectd show the all the cities.
 */
import { BrowserRouter, Route, Link } from "react-router-dom";
import React   from "react";
import Noimage from "../img/noimage.jpg"
import styles  from "./cities.css"
//import { browserHistory } from "react-router";    

/**
 * See:
 * https://www.robinwieruch.de/react-fetching-data/
 */
     class Cities extends React.Component {
        constructor(props) {
           super(props)
           this.state = {"cities": [],
                          city: "",
                          selected: "" }
        } 
 
        componentDidMount() {
                fetch( 'http://localhost:5000/api/search/cities?name=' + this.state.cities ) 
                  .then(response =>response.json())
                  .then(data => {this.setState({"cities": data}); console.log(data)});
        }

        /**
         * Open the collection of itinararies
         * @param {*} city 
         */
        handleClick(city_name) {
          console.log("HandleClick() "+city_name)
          this.setState({selected: city_name})
          console.log(this.state.selected)
          /* Fix see:
           * https://stackoverflow.com/questions/42701129/how-to-push-to-history-in-react-router-v4
           */
        }
         

        /* https://hackernoon.com/passing-arguments-to-react-event-handlers-the-easy-way-3bf8e52f7705 */
        render() {
            return this.state.cities.map(city => 
            <Link to={`/4/${city.city_name}`}>
            <div className="cityImage center" onClick={this.handleClick.bind(this,
              city.city_name)}>{city.city_name}</div> </Link>) 
        }
    } // end Cities
  
     export default Cities; 
