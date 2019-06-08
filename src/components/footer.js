/**
 * 
 * @param {*} prop 
 */
import React from "react";
import Home from "./homeActive.png"


function Footer(prop) {
    return( <footer>
           <a className="left" href="./2/login">Login</a>
           <img className="icon Center" src={Home} alt=""/>
           <a className="right" href="./create">Create Account</a>
          </footer> );

}

export default Footer;
