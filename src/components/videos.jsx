import React, { Component } from "react";

class Videos extends Component {
  state = {
    url: this.props.url,
    thumbnail: this.props.thumbnail,
    title: this.props.title,
  };
  render() {
    console.log("props", this.props);
    return (
      <div className="info">
        <a href={this.state.url} target="_blank">
          <img className="playImage" src={this.state.thumbnail} alt="" />
        </a>
        <div className="game">{this.state.title}</div>
      </div>
    );
  }
}

export default Videos;
