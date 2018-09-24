import React from "react";
import "./Navbar.css";

const Navbar = props => (
  <nav className="navbar fixed-top justify-content-between navbar-expand-lg navbar-dark">
    <h1 className="navbar-brand">Clicky Game</h1>
    <h1 id="score">Score: {props.score} | Your Best: {props.maxscore}</h1>
  </nav>
);

export default Navbar;