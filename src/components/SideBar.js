import React from 'react'
import Link from 'gatsby-link'
import Bon from '../images/bon.jpg'


const SideBar = () => (
  <div style={Styles.container}>
    <Link to="/" style={Styles.pm}>
      <h1>Bonnie</h1>
      <div style={Styles.pm}>Artist/Creator</div>
    </Link>
    <Link to="/" style={Styles.link} className="hover-link">Home</Link>
    <Link to="/about/" style={Styles.link} className="hover-link">About</Link>
    <Link to="/contact/" style={Styles.link} className="hover-link">Contact</Link>
  </div>
)

const Styles = {
  container: {
    width: "20vw",
    backgroundColor: "#00000080"
  },
  link: {
    display: "flex",
    justifyContent: "center",
    height: "5vh",
    color: "white",
    transition: "0.3s ease-in-out",
    fontFamily: "Permanent Marker, cursive",
    background: "transparent"
  },
  pm: {
    fontFamily: "Permanent Marker, cursive",
    color: "white",
    textAlign: "center"
  }
}

export default SideBar
