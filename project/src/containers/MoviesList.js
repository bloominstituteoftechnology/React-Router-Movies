import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovies } from '../actions'
import { bindActionCreators } from 'redux';

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
                <p>{`title ${titulo.title}`}</p>
                <p>{`director: ${titulo.director}`}</p>
                <p>{`metascore: ${titulo.metascore}`}</p>
                <p>{`stars: ${titulo.stars}`}</p>
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
  return bindActionCreators({getFilms: getMovies}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);