/**
 * It prvides the visit link
 */
import { Container, Row, Col } from 'react-grid-system';
import React from "react";
import Home from "./home.png"
import activeHome from "./homeActive.png"

import circle_right from "./circledright.png"

 function Visit(prop) {
     return (
    <Container>
    <Row>
      <Col></Col>
      <Col><img src={circle_right} className="large-icon" alt=""></img></Col>
      <Col></Col>
    </Row>
    </Container>
    );
 }/* Visit */

 export default Visit;