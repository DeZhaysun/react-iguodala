import React, { Component } from "react";
import raptors from "./../images/raptors.jpg";
import okc from "./../images/okc.jpg";
import hawks from "./../images/hawks.png";
import magic from "./../images/orlando.jpg";
import Videos from "./videos";

class Clutch extends Component {
  state = {
    vids: [
      {
        id: 1,
        url: "https://www.youtube.com/watch?v=m9a5WibTZi8",
        thumbnail: raptors,
        title: "2019 vs Raptors",
      },
      {
        id: 2,
        url: "https://www.youtube.com/watch?v=US6pVmJna0U",
        thumbnail: okc,
        title: "2013 vs Thunder",
      },
      {
        id: 3,
        url: "https://www.youtube.com/watch?v=fLxvvc23Kgk",
        thumbnail: hawks,
        title: "2014 vs Hawks",
      },
      {
        id: 4,
        url: "https://www.youtube.com/watch?v=3L8mNnWjlYk",
        thumbnail: magic,
        title: "2009 vs Magic",
      },
    ],
  };
  render() {
    return (
      <div id="clutch">
        <div className="clutchTitle">Clutch Plays</div>
        <div className="plays">
          {this.state.vids.map((vid) => (
            <Videos
              key={vid.id}
              url={vid.url}
              thumbnail={vid.thumbnail}
              title={vid.title}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Clutch;
