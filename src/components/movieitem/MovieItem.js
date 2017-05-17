import React from 'react';

const MovieItem = (props) => {
  
  let movieLi = props.movieItems.map((movie, index) => {
    return <li key={index}>{movie}</li>
  })

  return (
    <ul>
      {movieLi}
    </ul>
  )
}

export default MovieItem;
