/**
 * This will be the sliders at the bottom of the screen showing poular
 * prodcts.
 */
import React from "react";

class Screen extends React.Component {
  constructor(props) {
    super(props);

    this.state = { next: 0,
                   img:[]};

    this.state.img.push("https://cdn.pixabay.com/photo/2016/03/24/07/31/spain-1276209__340.jpg");
    this.state.img.push("https://www.istockphohttps://cdn.pixabay.com/photo/2015/09/23/15/29/barcelona-953904__340.jpg");
    this.state.img.push("https://cdn.pixabay.com/photo/2015/03/18/22/35/barcelona-680182__340.jpg")
  }; //constructor

  render() {
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }
    
    const rnd = getRandomInt( this.state.img.length ) 

    console.log(rnd);
    return (<img className={"ScreenLayout_"+ this.props.player} src={this.state.img[rnd]} alt="barcelona" />);
  } // render
}

export default Screen;

// Screen End