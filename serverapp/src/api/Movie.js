import { movies } from '../actions';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Movies extends Component {
  componentDidMount() {
    this.props.getMovies();
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.movies.map((movie, i) => {
            return (
              <li key={i}>
                <Link to={`/movies/${movie.id}`}>
                  {movie.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  };
};

export default connect(mapStateToProps, { getMovies })(Movies);
const Movie = ({ params: { movieId } }) => {
    const movie = movies.find(
      movie => movie.id === parseInt(movieId, 10)
    );
  }
  
  Movie.propTypes = {
  params: PropTypes.shape({
    movieId: PropTypes.string.isRequired,
  }).isRequired,
};

export default Movie;