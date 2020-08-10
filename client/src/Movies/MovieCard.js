import React from 'react';

const MovieCard = props => {
  //const {cardData} = props; // See comment in MovieList.js for explanation why I removed this line
  const { cardTitle, cardDir, cardMeta, cardStars } = props;
  return (
    <div className="movie-card">
      <h2>{cardTitle}</h2>
      <div className="movie-director">
        Director: <em>{cardDir}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{cardMeta}</strong>
      </div>
      <h3>Actors</h3>

      {cardStars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
    </div>
  );
};

export default MovieCard;