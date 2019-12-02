/**
 * Jut show the burger on the right top side.
 */
import burger from "../icons/burger.png";
import React from "react";
import Popup from "reactjs-popup";

import styled from 'styled-components';
import icon from "../icons/burger.png"

const Icon = styled.img`
    margin-left: auto;
    margin-right: auto;
    width: 32px;
    height: 32px
    background-color: red;
  `;


class Burger extends React.Component {
  render() {
    return (
      <div>>
      <Popup trigger={<button> Trigger</button>} position="right center">
        <div>Popup content here !!</div>
      </Popup>
      <img src={icon}></img>
      </div>
    );
  }
}

export default Burger;

