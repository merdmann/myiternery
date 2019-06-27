/**
 * Collect all Account information
 * https://reactjs.org/docs/forms.html
 *
 * info as a commentary textplaced beside of field.
 */
import React from "react";
import Cities from "../components/cities"

class TextInput extends React.Component {
    constructor(props) {
      super(props);
      this.input = "";
      this.test = 123;
      this.state = {value: ""};
      this.timer=null;
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
      const id = this.props.id
      let ch = event.target.value;

      let o = { }
      o[id] = ch;
      console.log(o)

      this.setState({value: ch});
    }

    done() {
      console.log(this.state);
//      Cities.forceUpdate( () => { console.log("forceUpdata callback")})
    }

    componentWillMount () {
      console.log(this.id)
        this.timer = setInterval(this.done,1000 );
    }

    render() {
      return (
        <form >
          <label>
            <span>{this.props.info}</span>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
        </form>
      );
    }
  }



  export default TextInput;