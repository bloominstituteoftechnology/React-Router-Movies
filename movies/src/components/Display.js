import React from 'react';
import { getMovies } from '../actions';
import { connect } from 'react-redux';
import { Component } from 'react';

class Display extends Component {
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
                <p>{`Title: ${movies.title}`}</p>
                <p>{`Director: ${movies.director}`}</p>
                <p>{`Metascore: ${movies.metascore}`}</p>
                <p>{`Stars: ${movies.stars}`}</p>
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

export default connect(mapStateToProps, { getMovies })(Display);
