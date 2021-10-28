import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="heroSection">
      <div className="heroContainer">
        <h1>Coder's Spot</h1>
        <h2>The spot to talk code!</h2>
        <Link to="/posts">Start Talking</Link>
      </div>
    </div>
  );
};

export default Hero;
