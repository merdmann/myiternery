import home from "../icons/login.png";
import homeActive from "../icons/loggedin.png"

import React, { Component } from 'react';
/**
 * Login sign in the top left corner
 */
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = { connected: false };
  };

  render() { 
        return (<img className="icon left" src={this.state.connected ? home : homeActive} alt="" />);}
}

export default Login;
  