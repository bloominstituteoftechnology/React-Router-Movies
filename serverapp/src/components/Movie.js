import React, { Component } from 'react';
import { connect } from 'react-redux';
import {showMovie} from '../actions';
import { Link } from 'react-router';
class Movie extends Component {
  componentDidMount() {
    this.props.showMovie(this.props.match.params.id);
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
    searchMovie: state.searchMovie,
  };
};

export default connect(mapStateToProps, { showMovie })(Movie);

// const Movie = ({ params: { movieId } }) => {
//     const movie = movies.find(
//       movie => movie.id === parseInt(movieId, 10)
//     );
//   }
  
//   Movie.propTypes = {
//   params: PropTypes.shape({
//     movieId: PropTypes.string.isRequired,
//   }).isRequired,
// };

// export default Movie;