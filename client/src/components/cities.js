/**
 * THis component is expectd show the all the cities.
 */
import { BrowserRouter, Route, Link } from "react-router-dom";
import React   from "react";
import home from "../icons/home.png"
import styles  from "./cities.css"
import { directive } from "@babel/types";
import Img from 'react-images';

import Collapsible from 'react-collapsible';
 
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
        }
         
        /* https://hackernoon.com/passing-arguments-to-react-event-handlers-the-easy-way-3bf8e52f7705 
        */
        render() {
            console.log(this.state.cities);

            return this.state.cities.map(
              city => 
                <div className="cityImage center">
                  <Link to={`/4/${city.city_name}`} className="cityImage">
                    {city.city_name}
                  </Link>
                  <Collapsible trigger={city.city_name} accordionPosition="More info">
                    <img src={city.picture}></img> 
                  </Collapsible>
              </div>
            ); 
        }
    } // end Cities
  
     export default Cities; 
