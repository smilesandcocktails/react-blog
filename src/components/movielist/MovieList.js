import React from 'react';
import MovieForm from '../movieform/MovieForm'
import MovieItem from '../movieitem/MovieItem'

class MovieList extends React.Component {

  constructor(props) {
    super(props);

  }

  movieSearch() {
    alert('Searching')
  }

  render() {

    let movieList = this.props.movies.map((movie, index) => {
      return <li key={index}>{movie}</li>
    })

    return (
      <div>
        <h1>My Movie List</h1>

        <MovieForm handleSearch={(e) =>this.movieSearch(e)}/>

        <MovieItem movieItems={this.props.movies}/>

      </div>
    );
  }

}

export default MovieList;
