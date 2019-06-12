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
      this.state = {value: ""};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) { 
      const id = this.props.id
      let o = { }
      o[id] = event.target.value; 
      console.log(o);

      this.setState(o );
    }
  
    handleSubmit(event) {
      console.log( this.state.value )
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