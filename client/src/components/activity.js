import React from 'react';
import Carousel from 'react-images';

class Activty extends React.Component {
  constructor(props) {
    super(props)

    this.state = {views: []};
  }

  render() { 
    return (
        <Carousel views={this.props.views}></Carousel>
    );
  }
}

export default Activty;