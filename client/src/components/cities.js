/**
 * THis is a section.
 */
import React  from "react";

/**
 * https://www.robinwieruch.de/react-fetching-data/
 */
     class Cities extends React.Component {
        constructor(props) {
           super(props)
           this.state = {"cities": null}
        } 

        componentDidMount() {
                fetch('http://localhost:5000/api/cities/1')
                  .then(response => response.json())
                  .then(data => this.setState({"cites": data}));
        }
     
        render() {
            return this.state.cities.map( function(i){
                  return <img src="{i}" alt="" />})
        }
    } // end cities

     
     export default Cities; 
     
     