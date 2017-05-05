//write them as functions here in one file
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectMovie } from '../actions';
import { Link } from 'react-router-dom';

class MovieDescriptions extends Component {
  componentDidMount() {
    const movie = this.props.movies.filter(movie => movie.id === id)[0];
    this.props.selectMovie(movie);
    // if (movie === undefined) return;
    // this.props.selectMovie(movie);
  }

  render () {
    if (this.props.activeMovie === undefined) return (<div>Movie Not Found</div>);
    return (
      <div>
        {this.props.activeMovie.title}<br/>
        Directed By: {this.props.activeMovie.director}<br/>
        Starring: {this.props.activeMovie.stars}<br/> //??
        {this.props.activeMovie.description}<br/>
        {this.props.activeMovie.metascore}<br/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    activeMovie: state.activeMovie,
  };
};

export default connect(mapStateToProps, { selectMovie })(MovieDescriptions);
