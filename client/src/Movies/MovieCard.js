import React from 'react';

class MovieCard extends React.Component{
  constructor(){
    super();
  }
  render(){
    return(
      <div className="save-wrapper">
        <div className="movie-card">
          <h2>{this.props.movie.title}</h2>
          <div className="movie-director">
            Director: <em>{this.props.movie.director}</em>
          </div>
          <div className="movie-metascore">
            Metascore: <strong>{this.props.movie.metascore}</strong>
          </div>
          <h3>Actors</h3>

          {this.props.movie.stars.map(star => (
            <div key={star} className="movie-star">
              {star}
            </div>
          ))}
        </div>
        <div className="save-button">Save</div>
      </div>
    )
  }
};

export default MovieCard;
