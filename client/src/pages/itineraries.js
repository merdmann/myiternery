import React from "react";
import { Component } from "react";
import Activity from "../components/activity"
import styles from "../pages/itinararies.css"
import Carousel from 'react-images';


/* 
 * This comonent is expected to take the city name from http route and tto 
 * list all iternararies for this city
 */
class Itinararies extends Component {
  constructor(props) {
    super(props)
    this.state = {itinararies: null, 
      urls: null 
    }
  }
   /*
   * Create the landmrk urls
   */
  createUrls(){
    let landmarks=this.state.itinararies.map(e => e.landmarks)
    let urls = [] 
    landmarks.map(lm => {return lm.forEach(element => {
         urls.push({src :element.url})      
        })
    })
    console.log(landmarks)
    console.log(urls)
    this.setState({urls})
  }

  render() {
      console.log(this.state.itinararies);
      return(this.state.itinararies && this.state.itinararies.map(it=>this.renderItinary(it)))
  }

  componentDidMount() {
    fetch("http://localhost:5000/api/tinerary/search?city=" + this.props.match.params.city )
      .then(response =>response.json())
      .then(data => {
        console.log(data);
        this.setState({itinararies: data })
        this.createUrls()
      });
  };
} /* class */

export default Itinararies;
/* last line */ 