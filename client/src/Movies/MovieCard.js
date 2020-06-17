import React from 'react';

const MovieCard = props => {
  const {movie, save} = props
  const { title, director, metascore, stars} = movie;

  const addMovie = () => {
    const addToSavedList = props.save;
    addToSavedList(movie)
  }

  return (
    <div className = "card">
      <h2>{title}</h2>
      <div className='director'>
        Director: <em>{director}</em>
      </div>
      <div className='metascore'>
        Metascore:<strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>
      {stars.map(star => (
        <div key={star} className="cast">
          {star}
        </div>
      ))}
      {save ? <div className="add-movie" onClick={addMovie}>Save</div>:null}
    </div>
  )
};

export default MovieCard;
