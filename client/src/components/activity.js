import React from 'react';
import Carousel from 'react-images';



class Activty extends React.Component {
  constructor(props) {
    super(props)

    console.log(props.views)
  } 

  render() { 
    return (
        <Carousel/>
    );
  }
}

export default Activty;