/**
 * THis component is expectd show the all the cities.
 */
import { BrowserRouter, Route, Link } from "react-router-dom";
import React   from "react";
import home from "../icons/home.png"
import styles  from "./cities.css"
import Img from 'react-images';
import Collapsible from 'react-collapsible';
import TextInput from "./textinput"
import Header from "./header" 
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

        renderCity(city) {
          return ( <div>
              <div className="cityImage center">
                <Link to={`/4/${city.city_name}`} className="cityImage">
                  {city.city_name}
                </Link>
              </div>
          </div>
          );
        }
         
        render() {            
            return (
            <div>
            <Header/>
            <TextInput info="Name"/>
            + { this.state.cities.map(city=>this.renderCity(city))} 
            </div>
            );
      }
    } // end Cities
  
     export default Cities; 
