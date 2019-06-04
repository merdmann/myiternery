import React, { Component } from "react";

class Section extends React.Component {
    getChildContext() {
      return { some: "context" };
    }
  
    render() {
      return <div className="Section">{this.props.children}</div>;
    }
}

export default Section; 