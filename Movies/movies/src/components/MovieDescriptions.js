
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectMovie } from '../actions';
//import { Link } from 'react-router-dom';

class MovieDescriptions extends Component {
  componentDidMount() {
    console.log(this.props.movies);
    const movie = this.props.movies.filter(movie => movie.id === movie)[0];
    this.props.selectMovie(movie);
   if (movie === undefined) return;
    // this.props.selectMovie(movie);
  }

  render () {
    if (this.props.movie === undefined) return (<div>Movie Not Found</div>);
    return (
      <div>
        {this.props.movie.title}<br/>
        Directed By: {this.props.movie.director}<br/>
        Starring: {this.props.movie.stars}<br/> //??
        {this.props.movie.description}<br/>
        {this.props.movie.metascore}<br/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  };
};

export default connect(mapStateToProps, { selectMovie })(MovieDescriptions);
