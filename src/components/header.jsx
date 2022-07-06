import React, { Component } from "react";
import "./../App.css";
import logo from "./../images/logo.PNG";

class Header extends Component {
  render() {
    return (
      <header>
        <a href="">
          <div className="logo">
            <img className="logoImage" src={logo} alt="" />
            <div className="headerTitle">
              Andre <span className="yellow">Iguodala</span>
            </div>
          </div>
        </a>

        <div className="headerLinks">
          <a className="links" href="#clutch">
            Clutch Plays
          </a>
          <a
            className="links"
            id="git"
            href="https://github.com/DeZhaysun/react-iguodala"
            target="_blank"
          >
            GitHub
          </a>
        </div>
      </header>
    );
  }
}

export default Header;
