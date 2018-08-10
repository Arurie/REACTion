import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cat from './Cat.js';

class App extends Component {
  render() {
    var fox = "cute"
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{eval("fox")}</h1>
        </header>
        <p className="App-intro">
          <Cat/><br/>
          <Cat/><br/>
          <Cat/><br/>
          <Cat/><br/>
          <Cat/><br/>
        </p>
      </div>
    );
  }
}
//use 'eval' to log the user's 'saved' button branch name 
//you don't even need a library to use local storage: it's already there  
//localStorage.setItem("savePoint", "b17p3");
//but how to grab that value? 
//JSX is just a mix of html and js
//components make custom elements
//<p></p> is the same as <p/> with no babies
export default App;
