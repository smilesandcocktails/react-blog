import React from 'react';
import MovieForm from '../movieform/MovieForm'
import MovieItem from '../movieitem/MovieItem'

class MovieList extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      movieDisplayed: [],
      favorites: []
    }
    this.fave = this.fave.bind(this)
  }

  movieSearch(e) {

    //prevState is the previous state before state is changing
    //props is props data from parent
    const searchQuery = e.target.value.toLowerCase()
    this.listMovies(searchQuery)
    // this.setState((prevState, props) => {
    //   console.log(prevState)
    //   console.log(this.state.movieDisplayed)
    //   let searchedMovies = this.state.movieDisplayed.filter((movie) => {
    //     return movie.toLowerCase().includes(searchQuery)
    //   })
    //   return {
    //     movieDisplayed: searchedMovies
    //   }
    // })
  }

  listMovies(something) {
    fetch('http://www.omdbapi.com/?s=' + something)
    .then((response) => {
      console.log('this is from the first then ', response)
      return response.json()
    })
    .then((json) => {
      console.log('this is the actual json', json)
      if (json.Search) {

        let results = json.Search
        let batmans = results.map((batmanMovie, index) => {
          return batmanMovie.Title
        })
        this.setState({
          movieDisplayed: batmans
        })
      }
      // need to update the sate based on the received json
    })
    .catch((err) => {
      alert(err)
    })
  }

  fave(e) {
    let title = e.target.value
    let updatedFavorites = this.state.favorites.slice()
    updatedFavorites.push(title)

    this.setState({
      favorites: updatedFavorites
    })
  }

  render() {

    let movieList = this.props.movies.map((movie, index) => {
      return <li key={index}>{movie}</li>
    })

    let favorites = this.state.favorites.map((fave,index) => {
      return <li key={fave}>{fave}</li>
    })

    return (
      <div>
        <h1>My Movie List</h1>

        <MovieForm handleSearch={(e) =>this.movieSearch(e)}/>

        <MovieItem movieItems={this.state.movieDisplayed} fave={this.fave}/>

        <div>
          <h3>Favorites</h3>
          <ul>
            <li>
              {favorites}
            </li>
          </ul>
        </div>

      </div>
    );
  }
  componentDidMount() {
    this.listMovies('powerpuff')
  }
}

export default MovieList;
