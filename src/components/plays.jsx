import React, { Component } from "react";
import raptors from "./../images/raptors.jpg";
import okc from "./../images/okc.jpg";
import hawks from "./../images/hawks.png";
import magic from "./../images/orlando.jpg";

class Plays extends Component {
  state = {};
  render() {
    return (
      <div id="clutch">
        <div className="clutchTitle">Clutch Plays</div>

        <div className="plays">
          <div className="info">
            <a
              href="https://www.youtube.com/watch?v=m9a5WibTZi8"
              target="_blank"
            >
              <img className="playImage" src={raptors} alt="" />
            </a>
            <div className="game">2019 vs Raptors</div>
          </div>
          <div className="info">
            <a
              href="https://www.youtube.com/watch?v=US6pVmJna0U"
              target="_blank"
            >
              <img className="playImage" src={okc} alt="" />
            </a>
            <div className="game">2013 vs Thunder</div>
          </div>
          <div className="info">
            <a
              href="https://www.youtube.com/watch?v=fLxvvc23Kgk"
              target="_blank"
            >
              <img className="playImage" src={hawks} alt="" />
            </a>
            <div className="game">2014 vs Hawks</div>
          </div>
          <div className="info">
            <a
              href="https://www.youtube.com/watch?v=3L8mNnWjlYk"
              target="_blank"
            >
              <img className="playImage" src={magic} alt="" />
            </a>
            <div className="game">2009 vs Magic</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Plays;
