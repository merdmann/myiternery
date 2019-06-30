/**
 * THis is a section.
 */
import React  from "react";
import Noimage from "../img/noimage.jpg"
import styles from "./cities.css"
/**
 * https://www.robinwieruch.de/react-fetching-data/
 */
     class Cities extends React.Component {
        constructor(props) {
           super(props)
           this.state = {"cities": [] }
        } 
 
        componentDidMount() {
                const myURL = new URL('http://localhost:5000/api/search');
                myURL.name = this.state.cities;

                fetch( 'http://localhost:5000/api/search/cities?name=' + this.state.cities ) 
                  .then(response =>response.json())
                  .then(data => {this.setState({"cities": data}); console.log(data)});
        }

        /**
         * Open the collection of iternararies
         * @param {*} city 
         */
        handleClick(city_name) {
          console.log("HandleClick()")
          console.log(city_name)
         }

        // https://hackernoon.com/passing-arguments-to-react-event-handlers-the-easy-way-3bf8e52f7705
        render() {
            return this.state.cities.map(city => <div className="cityImage center" onClick={this.handleClick.bind(this,
              city.city_name)}>{city.city_name}</div>) 
        }
    } // end Cities
  
     export default Cities; 
