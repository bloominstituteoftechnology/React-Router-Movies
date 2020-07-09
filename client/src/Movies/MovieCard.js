import React from 'react'

const MovieCard = (props) => {
  const {title, director, metascore, stars, imgURL} = props.movie;
  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <img src={imgURL} alt="movie-poster" height={400} width={300}/>
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
  )
}

export default MovieCard