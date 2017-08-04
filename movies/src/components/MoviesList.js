import React, { Component } from 'react';
import { getMovies } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class MoviesList extends Component {
  componentDidMount() {
  this.props.getMovies();
  }
  
  render() {
    return (
      <div>
        {this.props.movies.map((movies, i) => {
          return (
            <div key={i}>
              <Link to={`/movies/${movies.id}`}>
                <button onclick="movieInfo()">
                  {`${movies.title}`}
                </button>
              </Link>
            </div>
          );
        })}
        <Link to={`/new-movie`}><button>{'Add new movie'}</button></Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.moviesArray
  };
};

export default connect(mapStateToProps, { getMovies })(MoviesList);
