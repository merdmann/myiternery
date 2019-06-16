/**
 * This complete the Form
 */
import React  from "react";

class Form extends React.Component {
  
handleSubmit(event) {
    event.preventDefault();
}

  render() {
    return  <form onSubmit={this.handleSubmit}>
              {this.props.children}
              <input type="submit"></input>
            </form>
  }
}

export default Form; 