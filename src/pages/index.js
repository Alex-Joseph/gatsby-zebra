import React from 'react'
import Link from 'gatsby-link'
import Carousel from '../components/Carousel'
const IndexPage = () => (
  <div style={Styles.container}>
    <Carousel />
  </div>
)

const Styles = {
  container: {
    height: "100vh",
    alignItems: "center",
    display: "flex",
    overflow: "hidden",
  }
}

export default IndexPage
