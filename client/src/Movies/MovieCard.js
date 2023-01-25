import React from 'react';

export default function MovieCard({ movie }) {
  const { title, director, metascore, stars } = movie;

  const renderTitle = () => {
    return <h2>{title}</h2>;
  };

  const renderDirector = () => {
    return (
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
    );
  };

  const renderMetaScore = () => {
    return (
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    );
  };

  const renderStars = () => {
    return (
      <>
        {stars && <h3>Actors</h3>}
        {stars?.map((star) => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </>
    );
  };

  return (
    <div className="movie-card">
      {renderTitle()}
      {renderDirector()}
      {renderMetaScore()}
      {renderStars()}
    </div>
  );
}
