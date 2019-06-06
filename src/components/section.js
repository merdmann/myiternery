/**
 * THis is a section.
 */
import React  from "react";

class Section extends React.Component {
    getChildContext() {
      return { some: "context" };
    }
  
    render() {
      return <div className={this.props.layout}>{this.props.children}</div>;
    }
}

export default Section; 