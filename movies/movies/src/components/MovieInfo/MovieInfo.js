import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './MovieInfo.css';

const MovieInfo = (props) => {
  
  const movie = props.movies[Number(props.match.params.id)];
  
  if (movie === undefined)
    props.history.push("/");

  return ((movie !== undefined) ? (

    <div className="MovieInfo">
      <Link to="/">Go Back to List</Link>
      <div className="Movie__title">{ movie.title }</div>
      <div className="Movie__director">{ movie.director }</div>
      <div className="Movie__score">{ movie.metascore }</div>
      <div className="Movie__cast">{ movie.stars.join(", ") }</div>
    </div>

  ) : null);

};

const mapStateToProps = (state) => {  
  return {
    movies: state
  }
};

export default connect(mapStateToProps, {  })(MovieInfo);