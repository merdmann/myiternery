/**
 * Create a footer in the style of V2.
 * @param {*} prop 
 */
import React from "react";
import Home from "./homeActive.png"

function Footer(prop) {
    return( <footer>
           <table className="fullPage">
           <tbody>
           <tr className="fullPage">
              <td className="fullPage">LOgin<a  href="./2/login">Login</a></td>
              <td className="fullPage"><img className="icon" src={Home} alt=""/></td>
              <td className="fullPage">Create<a href="./create">Create Account</a></td>
          </tr>
          </tbody>
          </table>
          </footer> );
}

export default Footer;
