
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectMovie } from '../actions';
import { Link } from 'react-router-dom';

class MovieDescriptions extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    const movie = this.props.movies.filter(movie => movie.id.toString() === id)[0];
    if (movie === undefined) return;
    this.props.selectMovie(movie);
  }

  render () {
    if (this.props.selectedMovie === undefined) return (<div>Movie Not Found</div>);
    return (
      <div>
        Position in Queue: {this.props.selectedMovie.id+1}<br/>
        Title: {this.props.selectedMovie.title}<br/>
        Year Released: {this.props.selectedMovie.year}<br/>
        Genre: {this.props.selectedMovie.genre}<br/>
        Runtime: {this.props.selectedMovie.runtime}<br/>
        Rating: {this.props.selectedMovie.rating}<br/>
        Directed By: {this.props.selectedMovie.director}<br/>
        Starring: {this.props.selectedMovie.stars}<br/>
        Summary: {this.props.selectedMovie.description}<br/>
        Metascore: {this.props.selectedMovie.metascore}<br/>
        User Rating: {this.props.selectedMovie.userrating}<br/>
        <Link to='/new-movie'>Add A Movie</Link><br/>
        <Link to='/movies'>Back To List</Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    selectedMovie: state.selectedMovie,
  };
};

export default connect(mapStateToProps, { selectMovie })(MovieDescriptions);
