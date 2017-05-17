import React from 'react';

const MovieForm = (props) => (
  <form>
    <label>
      Search Movie: {'         '}
      <input type="text" placeholder="Search Movie" onChange={props.handleSearch}>
      </input>
    </label>
  </form>
)

export default MovieForm;
