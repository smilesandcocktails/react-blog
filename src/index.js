import React from 'react';
import ReactDOM from 'react-dom';
import Post from './Post';
import './index.css';

const post = {
  title: "Dinosaurs are awesome",
  author: "Stealthy Stegosaurus",
  body: "Check this body property!",
  comments: ["First!", "Great Post", "Hire this author now!"]
}

ReactDOM.render(
  <Post post={post} />,
  document.getElementById('root')
);
