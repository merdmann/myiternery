/**
 * This will be the sliders at the bottom of the screen.
 */
import React from "react";
//import React, { Component } from 'react';

class Screen extends React.Component {
  constructor(props) {
    super(props);

    this.state = { next: 0,
                   img:[]};

    this.state.img.push("https://upload.wikimedia.org/wikipedia/commons/8/8d/Barcelona_collage.JPG");
    this.state.img.push("https://de.wikipedia.org/wiki/Barcelona#/media/File:Barcino,_de_Joan_Brossa.jpg");
    this.state.img.push("https://de.wikipedia.org/wiki/Barcelona#/media/File:Kathedrale_von_Barcelona.jpg");
    this.state.img.push("https://de.wikipedia.org/wiki/Barcelona#/media/File:Relleu_porta_Sant_Iu_esquerra.jpg")
  }; //constructor

  render() { 
  return (<div><span>{this.props.location}</span><img className={"ScreenLayout_"+ this.props.player} src={this.state.img[0]} alt="barcelona" /></div>);
  } // render
}

export default Screen;

// Screen End