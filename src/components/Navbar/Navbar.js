import React from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <nav className="navbar navbar-expand-lg">
    <div className="navbar-brand" to="/">
      Clicky Game
    </div>
    <div className="score">
      Score:  {props.score}  |    High Score: {props.highScore}   |   {props.alert}
    </div>
  </nav>
);

export default Navbar;