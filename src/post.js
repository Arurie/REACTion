
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {render} from 'react-dom';

class Post extends React.Component {
  render() {
    return (
      <div className="m-entry">
        <div className="m-h">
          <h1>{this.props.title}
          </h1>
        </div>
        <div className="m-p">
          <p>{this.props.entry}
          </p>
        </div>
      </div>
    )
  }
}

export default Post;
