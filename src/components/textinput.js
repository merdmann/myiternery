/**
 * Collect all Account information
 * https://reactjs.org/docs/forms.html
 * 
 * info as a commentary textplaced beside of field.
 */
import React from "react";

class TextInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            <span>{this.props.info}</span>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
        </form>
      );
    }
  }
 


  export default TextInput;