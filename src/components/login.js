import React from "react";
import home from "./home.png";
import homeActive from "./homeActive.png";

function Login () {
    return (<img className="icon left" src={this.state.connected ? home : homeActive} alt="" />); 
}

export default Login;