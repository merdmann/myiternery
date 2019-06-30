import React from "react";
import { Composition } from 'atomic-layout'
 
// Define layout areas as a string
const areasMobile = `
  thumbnail
  header
  footer
`
 
// Responsive areas? Built-in!
const areasTablet = `
  thumbnail header
  thumbnail footer
`

const Itineraries = ({ title, imageUrl, actions }) => (
  <Composition areas={areasMobile} areasMd={areasTablet} gutter={20}>
    {/* Get React components based on provided areas */}
    {({ Thumbnail, Header, Footer }) => (
      <React.Fragment>
        <Thumbnail>
          <img src="./../icons/public-transport-subway.png" alt="" />
        </Thumbnail>
        <Header as="h1">h1 Hallo Welt</Header>
        <Footer padding={10} paddingMd={20}>
          {actions}
        </Footer>
      </React.Fragment>
    )}
  </Composition>
)
 
export default Itineraries;

/* last line */