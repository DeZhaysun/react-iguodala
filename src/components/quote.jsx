import React, { Component } from "react";

class Quote extends Component {
  state = {};
  render() {
    return (
      <div className="quote">
        <div className="openShot">
          "Of everyone on Golden State, open shot, the fate of the universe on
          the line or, the Martians have the death beam pointed at earth, you
          better hit it, <span className="bold">I WANT IGUODALA</span>.
          Iguodala's got ice water in his veins. Iguodala is that type of
          player."
        </div>
        <div className="max">- Max Kellerman, First Take</div>
      </div>
    );
  }
}

export default Quote;
