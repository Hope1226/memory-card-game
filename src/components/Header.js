import React from "react";

const Header = (props) => {
  const {score, bestScore} = props;

  return(
    <header>
      <hgroup>
        <h1 className="hero-txt">Pokemon Memory Game</h1>
        <h3>Get points by clicking on a card without repeating the previous move</h3>
      </hgroup>
      <div className="scores">
        <p>Current Score: <span>{score}</span></p>
        <p>Best Score: <span>{bestScore}</span></p>
      </div>
    </header>
  );
};

export default Header;