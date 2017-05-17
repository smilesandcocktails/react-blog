import React from 'react';

const MovieItem=(props)=> {

  let movieLi = props.movieItems.map((movie, index) => {
    return<div key={index}>
      <li >{movie}</li><button onClick={(e) => props.fave(e)} value={movie}>Fave</button>
    </div>
    {/* return <li><img src={movie} alt=''/></li> */}
  })

  return (
    <ul>
      {movieLi}
    </ul>
  )
}

export default MovieItem;
