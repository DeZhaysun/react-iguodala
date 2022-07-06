import React, { Component } from "react";
import mainImage from "./../images/iguodala.webp";

class Description extends Component {
  state = {};
  render() {
    return (
      <div className="topBanner">
        <div className="description">
          <div className="name">
            <span className="yellow">Clutchest </span>
            <span className="blue">Player</span> of All Time
          </div>
          <div className="content">
            Andre Tyler Iguodala is an American professional basketball player
            for the Golden State Warriors of the National Basketball
            Association. The swingman was the NBA Finals MVP in 2015 (over Curry
            and LeBron), an NBA All-Star in 2012 and has been named to the NBA
            All-Defensive Team twice.
          </div>
        </div>
        <div>
          <img id="mainImage" src={mainImage} alt="iguodala" />
        </div>
      </div>
    );
  }
}

export default Description;
