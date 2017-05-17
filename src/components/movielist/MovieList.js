import React from 'react';
import MovieForm from '../movieform/MovieForm'
import MovieItem from '../movieitem/MovieItem'

class MovieList extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      movieDisplayed: props.movies
    }
  }

  movieSearch(e) {

    //prevState is the previous state before state is changing
    //props is props data from parent
    const searchQuery = e.target.value.toLowerCase()
    this.setState((prevState, props) => {
      let searchedMovies = props.movies.filter((movie) => {
        return movie.toLowerCase().includes(searchQuery)
      })
      return {
        movieDisplayed: searchedMovies
      }
    })


  }

  render() {

    let movieList = this.props.movies.map((movie, index) => {
      return <li key={index}>{movie}</li>
    })

    return (
      <div>
        <h1>My Movie List</h1>

        <MovieForm handleSearch={(e) =>this.movieSearch(e)}/>

        <MovieItem movieItems={this.state.movieDisplayed}/>

      </div>
    );
  }

}

export default MovieList;
