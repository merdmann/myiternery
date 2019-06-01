import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from "react";
import "./App.css";
import logo from "./MYtineraryLogo.png"; // with import
import home from "./home.png";
import homeActive from "./homeActive.png";
import burger  from "./menu-button-of-three-horizontal-lines.png";

class LandingPage extends Component {
  render() {
    return (
        <div>
        <Section>
              <Header />
              <Login />
              <Burger />
        </Section>
          <div className="centered">
          <img className="logo" src={logo} alt="" />
            <p className="Greeting">
            Find your perfect trip, designed by insiders who know and love their
            cities.
            </p>
          </div>
          </div>
    )
  }
}

class Burger extends React.Component {
  render() {
    return <img className="icon right" src={burger} alt=""/>;
  }
}

class Login extends React.Component {
  constructor( props ){
    super(props);
    this.state = { connected : false}
  }
  render() { return ( <img className="icon left" src={this.state.connected ? home: homeActive } alt=""/> );}
}

//
// a simple fuctional component
//
function Header(props) {
 
  return <div className="Header"></div>;
}

export default LandingPage;

class Section extends React.Component {
  getChildContext() {
    return { some: "context" };
  }

  render() {
    return <div className="Section">{this.props.children}</div>;
  }
}
