import React, { Component } from 'react';
import './App.css';


export default class Cat extends Component {
    render() {
        return(
            <div>
                <img src="cats-cropped.png"/>
            </div>
            );
 }
}

//In JavaScript export default means that when you import a file, that's the thing it imports by default
//typically, types of things start with a capital letter
//instances of things start with a lowercase letter
//it's like a template 
//extending is inheriting 
//make a new class called cat and extend from the component class