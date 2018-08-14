import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TopBar from './top-bar.js';
import SideBar from './sidebar.js';
import Row from './row.js';
import Post from './post.js';
import './main.css'
import './bootstrap-v4/css/bootstrap.min.css'

export class Homepage extends React.Component {
  render() {
    return (
      <div className="container text-center m-fix">
        <TopBar/>
        <SideBar/>
        <div>
          <div className="row">
            <div className="m-fix col-12 col-sm-9 offset-sm-3 text-left">
              <Post title={"What is it?"} entry={"First entry"}/>
              <Post title={"Inspired By..."} entry={"Second entry"}/>
              <Post title={"Improving the Story Going Forward"} entry={"Third entry"}/>
              <Row/>
            </div>
          </div>
        </div>
      </div>



    );
  }
}
export default Homepage;
