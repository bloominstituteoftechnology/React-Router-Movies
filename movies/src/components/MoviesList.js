import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovies } from '../actions';


class MoviesList extends Component {
  componentDidMount() {
    this.props.getMovies();
  }
  render() {
    return (
      <div>
        <ul>
          {this.props.movies.map((movie, i) => {
            return (
              <li key={i}>
                <p>{`Movie ${i+1}`}</p>
                <p>{`id: ${movie.id}`}</p>
                <p>{`Title: ${movie.title}`}</p>
                <p>{`Director: ${movie.director}`}</p>
                <p>{`metascore: ${movie.metascore}`}</p>
                <p>{`stars: ${movie.stars}`}</p>
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
    movies: state.movies
  };
};

export default connect(mapStateToProps, {getMovies})(MoviesList);
