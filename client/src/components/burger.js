/**
 * Jut show the burger on the right top side.
 */
import burger from "./menu-button-of-three-horizontal-lines.png";
import React from "react";

import styled from 'styled-components';
 
const Icon = styled.img`
    margin-left: auto;
    margin-right: auto;
    width: 32px;
    height: 32px
    background-color: red;
  `;


class Burger extends React.Component {
      render() {
            return <img src={burger} alt=""/>;
      }
}

export default Burger;

