import React from 'react';
import ReactDOM from 'react-dom';
// import Todo from './Todo';
// import Post from './components/post/Post';
// import MovieList from './components/movielist/MovieList'
import './index.css';
import App from './components/app/App'

const post = {
  title: "Dinosaurs are awesome",
  author: "Stealthy Stegosaurus",
  body: "Check this body property!",
  comments: ["First!", "Great Post", "Hire this author now!"]
}

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

const movies_arr = [
  'Empire Strikes Back',
  'In the Mood for Love',
  'Big Fish'
]

ReactDOM.render(
  // <Post post={post} />,
  // <Todo todo={todo} />,
  // <MovieList movies={movies_arr} />,
  <App movies={movies_arr} post={post} todo={todo}/>,
  document.getElementById('root')
);
