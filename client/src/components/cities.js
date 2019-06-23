/**
 * THis is a section.
 */
import React  from "react";
import Noimage from "../img/noimage.jpg"

/**
 * https://www.robinwieruch.de/react-fetching-data/
 */
     class Cities extends React.Component {
        constructor(props) {
           super(props)
           this.state = {"cities": [] }
        } 
 
        componentDidMount() {
                fetch('http://localhost:5000/api/cities/1') 
                  .then(response =>response.json())
                  .then(data => {this.setState({"cities": data}); console.log(data)});
        }
     
        render() {
            return this.state.cities.map(city =>{return <div className="cityImage">
                <span>{city.city}</span>
                <img src="{city.image!=null?city.image:Noimage}" alt={city.image}></img></div>})
        }
    } // end Cities
  
     export default Cities; 
