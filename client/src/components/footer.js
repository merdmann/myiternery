/**
 *
 * @param {*} prop
 */
import { Container, Row, Col } from 'react-grid-system';
import React from "react";
import Home from "./home.png"
import activeHome from "./homeActive.png"
import 'bootstrap/dist/css/bootstrap.css';


class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { connected: false };
  };

  render() {
    return(
    <div className="Footer">
    <Container>
    <Row>
      <Col><a href="./login">Login</a></Col>
      <Col></Col>
      <Col><a href="/create">New Account</a></Col>
    </Row>
    <Row>
    </Row>
    <Row>
      <Col></Col>
      <Col className="center"><div><img className="icon" src={this.state.connected?Home:activeHome} alt=""></img></div></Col>
      <Col></Col>
    </Row>
    </Container>
    </div>
  );
}
}

export default Footer;
