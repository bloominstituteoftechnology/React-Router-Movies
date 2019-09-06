import React from 'react';
// import { NavLink } from 'react-router-dom';

const MovieCard = props => {
  const movie = props.movie;
  const { title, director, metascore, stars } =movie;
  return (
    <div className="save-wrapper">
      <div className="movie-card">
        <h2>{title}</h2>
        {/* <NavLink to='/movies/'>Next Movie</NavLink> */}
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
      {props.addToSavedList &&
      <div
        onClick={(event) => {
          event.preventDefault();
          props.addToSavedList(movie);
        }}
          className="save-button">Save</div>}
    </div>
  );
};

// function ActionLink() {
//   function handleClick(e) {
//     e.preventDefault();
//     console.log('The link was clicked.');
//   }

//   return (
//     <NavLink to={'/movies'}>
//       Next Movie
//     </NavLink>
//   );
// }
// {/* <NavLink to='/movies/3'>Next Movie</NavLink> */ }

export default MovieCard;

  // const save = (event) =>{
  //   event.preventDefault();
  //   props.addToSavedList(movie);
  // };


// <div onClick {save} className="save-button">Save</div>

// function routeToAvenger() {
//   props.history.push(`/avengers/${avenger.id}`)
// }

