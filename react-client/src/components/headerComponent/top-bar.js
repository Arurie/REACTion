import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TopBar extends Component {
  render() {
    return (
      <div class="m-topbar fixed-top text-center d-block d-sm-none">
        <a href="game.html" class="btn btn-secondary">Play Game</a>
        <a href="index.html" class="btn btn-dark">Home</a>
        <a href="contact.html" class="btn btn-secondary">About</a>
      </div>
      <div class="d-block d-sm-none">
        <br>
        <br>
      </div>
    )
  }
}

export default TopBar;
