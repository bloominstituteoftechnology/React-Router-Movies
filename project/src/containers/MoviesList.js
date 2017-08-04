import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovies } from '../actions'
import { Link } from 'react-router-dom';

class MoviesList extends Component {
  componentDidMount() {
    this.props.getMovies();
  }
  render () {
    console.log(this.props);
    return (
      <div>
        <ul>
          {this.props.film.map((movieInfo, index) => {
            return (
              <li key={index}>
                <Link to={`/movies/${index}`} className="Nav-link">{movieInfo.title}</Link>
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

export default connect(mapStateToProps, {getMovies})(MoviesList);