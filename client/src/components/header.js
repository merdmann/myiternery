import React from "react";
import styled from 'styled-components';
import login from "../icons/home.png"
import burger from "../icons/menu-button-of-three-horizontal-lines.png"
 
const Page = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 32px;
  max-height: 32px;
  background: lightgray;
`;
class Header extends React.Component {
    render() {
      return(
      <div>
      <Page>
      <img className="icon" src={login} />
      <img className="icon right" src={burger} />    
      </Page>
      </div>
      ) 
    }
  }


export default Header;