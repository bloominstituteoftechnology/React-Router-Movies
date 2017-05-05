
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectMovie } from '../actions';
import { Link } from 'react-router-dom';

class MovieDescriptions extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    const movie = this.props.movies.filter(movie => movie.id === id)[0];
    if (movie === undefined) return;
    this.props.selectMovie(movie);
  }

  render () {
    if (this.props.selectedMovie === undefined) return (<div>Movie Not Found</div>);
    return (
      <div>
        {this.props.selectedMovie.title}<br/>
        Directed By: {this.props.selectedMovie.director}<br/>
        Starring: {this.props.selectedMovie.stars}<br/> //??
        {this.props.selectedMovie.description}<br/>
        {this.props.selectedMovie.metascore}<br/>
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
