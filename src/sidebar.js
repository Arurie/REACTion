import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Row from './components/rowComponent/row.js';

class SideBar extends Component {
  render() {
    return (
      <div className="m-fixed">
        <div className="container d-none d-sm-block">
          <div className="row">
            <div className="col-sm-3 text-center m-sidebar">
              <div className="">
                <Row/>
                <img src="https://i.imgur.com/2nnc6CB.png" className="rounded-circle img-fluid" alt="Responsive image">
                <Row/>
                <a href="game.html" className="btn btn-secondary">Play!</a>
                <Row/>
                <a href="index.html" className="btn btn-dark">Home</a>
                <Row/>
                <a href="contact.html" className="btn btn-secondary">About</a>
                <div className="row">
                  <div style="width:60%; margin-left:20%;">
                    <br>
                    <a href="https://medium.com/@al11"><img src="https://i.imgur.com/fcuiTYS.png"  className="m-icon"></a>
                    <a href="https://www.instagram.com/airuri/"><img src="https://i.imgur.com/tP28Nch.png"  className="m-icon d-md-none"></a>
                    <a href="https://www.instagram.com/airuri/"><img src="https://i.imgur.com/KYHVw04.png"  className="m-icon d-none d-md-inline"></a>
                    <a href="https://twitter.com/MarbleNoseMouse"><img src="https://i.imgur.com/zdblWvN.png"  className="m-icon"></a>
                    <a href="https://www.linkedin.com/in/alii-cordes/"><img src="https://i.imgur.com/n4wcXMb.png"  className="m-icon d-md-none"></a>
                    <a href="https://www.linkedin.com/in/alii-cordes/"><img src="https://i.imgur.com/hlD54oC.png"  className="m-icon d-none d-md-inline"></a>
                    <a href="https://www.facebook.com/Skinparison/"><img src="https://i.imgur.com/y6h8elh.png"  className="m-icon"></a>
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
