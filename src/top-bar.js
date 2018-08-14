import React, { Component } from 'react';
import './main.css'

class TopBar extends Component {
  render() {
    return (
      <div>
        <div className="m-topbar fixed-top text-center d-block d-sm-none">
          <a href="game.html" className="btn btn-secondary">Play Game</a>
          <a href="index.html" className="btn btn-dark">Home</a>
          <a href="contact.html" className="btn btn-secondary">About</a>
        </div>
        <div className="d-block d-sm-none">
          <br/>
          <br/>
        </div>
      </div>
    )
  }
}

export default TopBar;
