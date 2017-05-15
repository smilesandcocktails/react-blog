import React, { Component } from 'react';
import logo from './logo.svg';
import './Post.css';


class Post extends Component {
  render() {
    let post = this.props.post
    console.log(post)
    return (
      <div className = "Post">
        <div>
          <h1 className="Post-h">{post.title}</h1>
          <p>{post.author}</p>
        </div>
        <p>{post.body}</p>
        <h3 className="Post-h">Comments</h3>
        <p>{post.comments[0]}</p>
      </div>
    );
  }
}

export default Post;
