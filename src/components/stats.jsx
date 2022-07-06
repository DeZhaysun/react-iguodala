import React, { Component } from "react";

class Stats extends Component {
  state = {};
  render() {
    return (
      <div className="signUp">
        <div className="container">
          <div className="stats">
            <div>
              <span className="bold">Statistics</span>
            </div>
            <div className="weak">Check out Iguodala's Statistics on ESPN</div>
          </div>

          <a
            href="https://www.espn.com/nba/player/_/id/2386/andre-iguodala"
            target="_blank"
          >
            <button>Stats</button>
          </a>
        </div>
      </div>
    );
  }
}

export default Stats;
