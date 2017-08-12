import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../Actions';
import { Link } from 'react-router-dom';


const linkStyles = {
  padding: '1rem',
  textDecoration: 'none',
}

class Movies extends Component {
  componentDidMount() {
    this.props.fetchMovies();
  }

  render () {
      return (
        <ul>
        {this.props.movies.map((movie) => {
          return (
          <Link style={linkStyles} to={`/movies/${movie}`} key={movie.id}>{`${movie.title}`}</Link>
          );
        })}
      </ul>
      )

  }


}

const mapStateToProps = (state) => {
  return {
      movies: state.movies
  };
};

export default connect(mapStateToProps, { fetchMovies })(Movies)

//export default Movies;


// id: 0,
// title: 'The Godfather',
// director: 'Francis Ford Coppola',
// metascore: 100,
// stars: ['Marlon Brando', 'Al Pacino', 'Robert Duvall'],