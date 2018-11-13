import React from "react";
// import { Link } from "react-router-dom";
import "./Jumbotron.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Jumbotron = props => (
    <div className="jumbotron">
      <div className="instructions">
      Click on every image once to win the game. Clicking more than once on the same item leads to a loss.
      </div>
    </div>
   
);

export default Jumbotron;