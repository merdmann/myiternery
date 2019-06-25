/**
 * THis is a section.
 */
import React  from "react";
import Noimage from "../img/noimage.jpg"
import { runInThisContext } from "vm";

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
     
        render() {
            return this.state.cities.map(city =>{return <div className="cityImage">
                <span>{city.city}</span>
                <img src="{city.image!=null?city.picture:Noimage}" alt={city.picture}></img></div>})
        }
    } // end Cities
  
     export default Cities; 
