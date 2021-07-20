import React from 'react';

export default  function MovieCard (props) {
  console.log(props.movie)
  if (!props.movie) {
    return <div>Loading movie information...</div>;
  }

  const { title, director, metascore, stars } = props.movie;
  console.log(props.movie.title)

  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>

    { stars ? <div><h3>Actors</h3>
        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))} </div> : <div></div>}

    
        <div className="save-button">Save</div>
    </div>
  );
}

