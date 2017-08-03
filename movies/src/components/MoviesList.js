import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getMovies } from '../actions';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class MoviesList extends Component {
  constructor() {
    super();
  }
  
  componentDidMount() {
    this.props.getMovies();
  }
  
  render() {
    return (
      <ul className="MovieNames">
        {this.props.movies.map((movie, i) => {
	  return (
	    <Link key={i} to={`/movies/${movie.id}`}>
              {movie.title}
            </Link>
	  );
	})}	    
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getMovies }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
