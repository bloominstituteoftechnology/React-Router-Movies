import React from 'react';
import { connect } from 'react-redux';
import { getMovies } from '../actions';
import './MovieInfo.css';

class MovieInfo extends React.Component {
  componentDidMount() {
    this.props.getMovies();
  }
  render() {
    const { movies } = this.props;
    const id = this.props.match.params.id;
    if (movies[id] === undefined) return null;
    return (
      <div className="poster_wrap">
        <div className="img_wrapper">
          <img className="img_poster" src={movies[id].poster} />
        </div>
        <div className="movie_details">
          <div className="metascore_wrap">
            <span className="metascore">
              {movies[id].metascore}
            </span>
          </div>
          <h1 className="details_creds">Movie Details & Credits</h1>
          <p className="studio_release">{movies[id].studio}{' │ '}{movies[id].release}</p>
          <p>
            <span className="bold">Starring:</span>{' '}
            {movies[id].stars
              .map((star, i) => <span key={i}>{star}</span>)
              .reduce((prev, curr) => [prev, ', ', curr])}
          </p>
          <p>
            <span className="bold">Summary:</span> {movies[id].summary}
          </p>
          <p>
            <span className="bold">Directed by:</span> {movies[id].director}<br />
            <span className="bold">Genres:</span> {movies[id].genre
              .map((genre, i) => <span key={i}>{genre}</span>)
              .reduce((prev, curr) => [prev, ', ', curr])}<br />
            <span className="bold">Rating:</span> {movies[id].rating} <br />
            <span className="bold">Runtime:</span> {movies[id].runtime} {'min'}
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state
  };
};

export default connect(mapStateToProps, { getMovies })(MovieInfo);
