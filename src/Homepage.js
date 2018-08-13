import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TopBar from './top-bar.js';
import SideBar from './sidebar.js';
import Row from './row.js';
import Post from './post.js';

export class Homepage extends React.Component {
  render() {
    return (
      <div>
        <TopBar/>
        <SideBar/>
        <div className="container text-center">
          <div className="row">
            <div className="col-12 col-sm-9 offset-sm-3 text-left">
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
