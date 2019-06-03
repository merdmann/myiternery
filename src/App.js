import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from "react";
import "./App.css";
import logo from "./MYtineraryLogo.png"; // with import
import home from "./home.png";
import homeActive from "./homeActive.png";
import burger from "./menu-button-of-three-horizontal-lines.png";
import visit from "./circledright.png";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <div>
          <Section>
            <Header />
            <Login />
            <AppRouter></AppRouter>
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
        <div className="Centered">
        <Visit />
        <Section>
          <Screen />
          <Screen />
          <Screen />
          <Screen />
        </Section>
        </div>
      </div>
    )
  }
}

class Burger extends React.Component {
  render() {
    return <img className="icon right" src={burger} alt="" />;
  }
}

class Visit extends React.Component {
  render() {
    return <img src={visit} className="Control centered" alt="" onClick={function () { alert("click"); }} />;
  }   
}

class Screen extends React.Component {
  render() {
    return <div className = "ScreenLayout"></div>
  }
}
class Login extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { connected: false }
  }
  render() { return (<imgLogin className="icon left" src={this.state.connected ? home : homeActive} alt="" />); }
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

/**
 * Do what is needed to register a new user
 */
function DoSignUP() {
  return <h2>SignUp</h2>;
}


function AppRouter() {
  return (  
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/signIn/">SignIN</Link>
            </li>
            <li>
              <Link to="/signUp/">SignUP</Link>
            </li>
          </ul>
        </nav>

        <Route path="/signIN/" component={Login} />
        <Route path="/signUP/" component={DoSignUP} />
      </div>
    </Router>
  );
}

/* last line */