import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.js';
import TopBar from './components/headerComponent/top-bar.js';
import SideBar from './components/headerComponent/sidebar.js';
import rowComponent from './components/rowComponent/row.js';
import Post from './components/postComponent/post.js';

export class Homepage extends React.Component {
  render() {
    return (
      <TopBar/>
      <SideBar/>
      <div class="container text-center">
        <div class="row">
          <div class="col-12 col-sm-9 offset-sm-3 text-left">
            <Post title={"What is it?"} entry={"First entry"}>
            <Post title={"Inspired By..."} entry={"Second entry"}>
            <Post title={"Improving the Story Going Forward"} entry={"Third entry"}>
            <Row/>
          </div>

        </div>
      </div>
    );
  }
}
export default Homepage;
