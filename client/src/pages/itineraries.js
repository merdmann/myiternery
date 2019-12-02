import React from "react";
import { Component } from "react";
import styles from "../pages/itinararies.css"
import Carousel from 'react-images';
import Img from 'react-images';
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

  /**
   * THis fetches the itinararies fo a given city given in the 
   * page arguments city.
   */
  componentDidMount() {
    fetch("http://localhost:5000/api/tinerary/search?city=" + this.props.match.params.city )
      .then(response =>response.json())
      .then(data => {
        console.log(data);
        this.setState({itinararies: data })
        this.createUrls()
      });
  };

  /**
   * 
   * @param {*} it 
   * Render a single itinary. 
   */
  renderItinary(it) {
    return( <div>
            <img src={it.picture}></img>
            <div>{it.creator.name}</div>
            <h3>{it.description}</h3>
            <span>liked {it.liked}</span>
            <span className="infoText">Likes:{it.liked}</span>
            <span className="infoText">Duration: {it.duration}hrs </span>
            <span className="infoText">Cost: {it.cost}$</span><br></br>
            <span className="infoText">{it.activity.map(t=><span className="tags">{"#"+t}</span>)}</span>
            <div className="infoText">{it.landmarks.map( l => <span className="tags">{l.name}</span>)}</div>
            {this.state.urls &&  <Carousel  className="infoText" views={this.state.urls}/>}
            </div> );
  }

  render() {
      return(this.state.itinararies && this.state.itinararies.map(it=>this.renderItinary(it)))
  }

} /* class */

export default Itinararies;
/* last line */ 