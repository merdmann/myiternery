/**
 * It prvides the visit link
 */
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Container, Row, Col } from 'react-grid-system';
import React from "react";

import circle_right from "../icons/go.png"

 function Visit(prop) {
     return (
    <Container>
    <Row>
      <Col></Col>
      <Link to={"/3/"}>
      <Col><img src={circle_right} className="large-icon" alt=""></img></Col>
      </Link>  
      <Col></Col>
    </Row>
    </Container>
    );
 }/* Visit */

 export default Visit;