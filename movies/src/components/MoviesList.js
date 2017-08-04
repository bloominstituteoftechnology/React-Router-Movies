import React from 'react';
import { getMovies } from '../actions';
import { connect } from 'react-redux';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import Display from './Display'

class MoviesList extends Component {
  componentDidMount() {
  this.props.getMovies();
  }


  
  render() {
    return (
      <div>
        <ul>
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
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  };
};

export default connect(mapStateToProps, { getMovies })(MoviesList);
