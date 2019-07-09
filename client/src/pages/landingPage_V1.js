import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import Login  from "../components/login"
import Header from "../components/header";
import Burger from "../components/burger";
import Section from "../components/section";
import Screen from "../components/screen"
import logo from "./MYtineraryLogo.png"
import Visit from "../components/visit"
import Carousel from 'react-images';
import styled from 'styled-components';
import header from "../components/header";
import burger from "../components/burger";
import login  from "../components/login";

import { Container, Row, Col } from 'react-grid-system';
import "../App.css";
 
const Greeting = styled.div`
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    text-align: center;
    font-size: 160%;
`;

const images = [{ src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Statue_of_Liberty%2C_NY.jpg/330px-Statue_of_Liberty%2C_NY.jpg', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/BOA_Tower_Feb_2010.jpg/255px-BOA_Tower_Feb_2010.jpg' }];
const New_York_view = 
    [{  src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Statue_of_Liberty%2C_NY.jpg/330px-Statue_of_Liberty%2C_NY.jpg"}, 
      { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Edificio_Fuller_%28Flatiron%29_en_2010_desde_el_Empire_State_crop_boxin.jpg/225px-Edificio_Fuller_%28Flatiron%29_en_2010_desde_el_Empire_State_crop_boxin.jpg"},
      { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Empire_State_Building_from_the_Top_of_the_Rock.jpg/225px-Empire_State_Building_from_the_Top_of_the_Rock.jpg"},
      { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Empire_State_Building_day.jpg/330px-Empire_State_Building_day.jpg"},
      { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/BOA_Tower_Feb_2010.jpg/255px-BOA_Tower_Feb_2010.jpg"}
    ];

const Amsterdam_view = 
[
      { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Amsterdam_innenstadt.jpg/330px-Amsterdam_innenstadt.jpg"},
      { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Sex_theater_in_Amsterdam_%28red_light_district%29.JPG/330px-Sex_theater_in_Amsterdam_%28red_light_district%29.JPG"},
      { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Red-light_district_of_Amsterdam_by_day._2012.JPG/330px-Red-light_district_of_Amsterdam_by_day._2012.JPG"}
];

const Paris_view =
[
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg/241px-Tour_Eiffel_Wikimedia_Commons.jpg"},
  { src: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Caricature_Gustave_Eiffel.png" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Gustave_Eiffel_posant_au_sommet_de_la_tour.jpg/330px-Gustave_Eiffel_posant_au_sommet_de_la_tour.jpg"},
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Paris_1889_plakat.jpg/330px-Paris_1889_plakat.jpg"}
]

const Gaudi_view = 
[
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Arbeitsraum_Gaudi.jpg/330px-Arbeitsraum_Gaudi.jpg"},
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Sagradafamilia-overview.jpg/330px-Sagradafamilia-overview.jpg"},
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/CasaBatllo_0170.JPG/330px-CasaBatllo_0170.JPG" }
]

const customStyles = {
      header: (base, state) => ({
        ...base,
        borderBottom: '1px dotted pink',
        color: state.isFullscreen ? 'red' : 'blue',
        padding: 20,
      }),
      view: () => ({
        // none of react-images styles are passed to <View />
        height: 170,
        width: 327,
      })
}

class LandingPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <div>
        <Section layout="HeaderLayout">
        </Section>
      <header>
      </header>
        <img className="logo" src={logo} alt="" />
        <Greeting>
        <p>Find your perfect trip, designed by insiders who know and love their
           cities.</p>
        <Visit></Visit>
        </Greeting>
      </div>
    <Container>
  <Row>
    <Col sm={8}>
    Barcelona: Gaudi in a Day
     <Carousel  styles={customStyles}  views={Gaudi_view}/>
    </Col>
    <Col sm={8}>
    New York: Broklyn Pizza
    <Carousel  styles={customStyles}  views={New_York_view}/>
    </Col>
    Paris: Champange at the Eiffel
    <Carousel  styles={customStyles}  views={Paris_view}/>
    <Col sm={8}>
    Amsterdam: Red Light Green Light
    <Carousel  styles={customStyles}  views={Amsterdam_view}/>
    </Col>
    <Col sm={8}>
    </Col>
  </Row>
</Container>

      </div>
    )
  }
}
export default LandingPage;


/* last line */