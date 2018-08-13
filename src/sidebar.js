import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import rowComponent from './components/rowComponent/row.js';

class SideBar extends Component {
  render() {
    return (
      <div class="m-fixed">
        <div class="container d-none d-sm-block">
          <div class="row">
            <div class="col-sm-3 text-center m-sidebar">
              <div class="">
                <Row/>
                <img src="https://i.imgur.com/2nnc6CB.png" class="rounded-circle img-fluid" alt="Responsive image">
                <div class="row">
                  <br>
                </div>
                <a href="game.html" class="btn btn-secondary">Play!</a>
                <div class="row">
                  <br>
                </div>
                <a href="index.html" class="btn btn-dark">Home</a>
                <div class="row">
                  <br>
                </div>
                <a href="contact.html" class="btn btn-secondary">About</a>
                <div class="row">
                  <div style="width:60%; margin-left:20%;">
                    <br>
                    <a href="https://medium.com/@al11"><img src="https://i.imgur.com/fcuiTYS.png"  class="m-icon"></a>
                    <a href="https://www.instagram.com/airuri/"><img src="https://i.imgur.com/tP28Nch.png"  class="m-icon d-md-none"></a>
                    <a href="https://www.instagram.com/airuri/"><img src="https://i.imgur.com/KYHVw04.png"  class="m-icon d-none d-md-inline"></a>
                    <a href="https://twitter.com/MarbleNoseMouse"><img src="https://i.imgur.com/zdblWvN.png"  class="m-icon"></a>
                    <a href="https://www.linkedin.com/in/alii-cordes/"><img src="https://i.imgur.com/n4wcXMb.png"  class="m-icon d-md-none"></a>
                    <a href="https://www.linkedin.com/in/alii-cordes/"><img src="https://i.imgur.com/hlD54oC.png"  class="m-icon d-none d-md-inline"></a>
                    <a href="https://www.facebook.com/Skinparison/"><img src="https://i.imgur.com/y6h8elh.png"  class="m-icon"></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SideBar;
