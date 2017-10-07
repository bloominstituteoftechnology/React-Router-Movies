import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { displayMovies } from '../actions';

class AllMovies extends Component {
  componentDidMount(){
    this.props.displayMovies();
  }
  render() {
    return(
    <div>{this.props.movies.map((movie) => {
      const title = movie.title.split(' ').join('');
        return (
          <Link to={`/${movie.id}/${title}`} className="display-all_movies" key={movie.id}> 
            <p>Title: {movie.title}</p> 
          </Link>
        );
      })}</div>
    );
  }
};

const mapStateToProps = (state) => {
  return{
    movies: state.movies
  };
};

export default connect(mapStateToProps, {displayMovies}) (AllMovies);
