import React from 'react';
import Todo from '../todo/Todo';
import Post from '../post/Post';
import MovieList from '../movielist/MovieList'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends React.Component {

  render() {
    return (
      <div>
        <Router>
          <div>
            <Link to="/">Home</Link> {'         '}
            <Link to="/movies">Movies</Link> {'         '}
            <Link to="/posts">Posts</Link> {'         '}
            <Link to="/todos">Todos</Link> {'         '}
            <Route
              exact path="/"
              component={
                () => <MovieList movies={this.props.movies} />
              }
            />
            <Route
              path="/movies"
              component={
                () => <MovieList movies={this.props.movies} />
              }
            />
            <Route
              path="/posts"
              component={
                () => <Post post={this.props.post} />
              }
            />
            <Route
              path="/todos"
              component={
                () => <Todo todo={this.props.todo} />
              }
            />

          </div>
        </Router>
      </div>
    );
  }
}

export default App;
