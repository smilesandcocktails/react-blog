import React from 'react';
import ReactDOM from 'react-dom';
// import Post from './Post';
import Todo from './Todo';
import './index.css';

// const post = {
//   title: "Dinosaurs are awesome",
//   author: "Stealthy Stegosaurus",
//   body: "Check this body property!",
//   comments: ["First!", "Great Post", "Hire this author now!"]
// }

const todo = {
  title: 'Things I should stop procrastinating',
  list: [
    { todo: 'Buy ice cream',
      vote: 2},
    { todo: 'Eat ice cream',
      vote: 5},
    { todo: 'Go to the gym',
      vote: 1}
    ]
}

ReactDOM.render(
  // <Post post={post} />,
  <Todo todo={todo} />,
  document.getElementById('root')
);
