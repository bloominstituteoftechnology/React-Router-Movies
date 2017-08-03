import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovies } from '../actions'
import { bindActionCreaters } from 'redux';

class MoviesList extends Component {
  componentDidMount() {
    this.props.getFilms();
  }
  render () {
    return (
      <div>
        <ul>
          {this.props.film.map((titulo, i) => {
            return (
              <li key={i}>
                <p>{`film ${i + 1}`}</p>
                <p>{`title ${movies.title}`}</p>
                <p>{`director: ${movies.director}`}</p>
                <p>{`metascore: ${movies.metascore}`}</p>
                <p>{`stars: ${movies.stars}`}</p>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    film: state.movies
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreaters({getFilms: getMovies}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);