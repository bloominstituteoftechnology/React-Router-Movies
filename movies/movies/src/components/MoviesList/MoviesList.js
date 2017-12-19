import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovies } from '../../actions';

import axios from 'axios';
import MovieItem from '../MovieItem/MovieItem';

import './MoviesList.css';

class MovieList extends Component {

  componentDidMount() {
    
    this.props.getMovies();

  }

  handleClick = (index) => {

    this.props.history.push(`/movies/${ index }`);
    
  }

  render() {

    return (
      <div className="Movies">
        {
          this.props.movies.map((movie, index) => {

            return (<MovieItem key={ movie.id } index={ index + 1 } 
                               title={ movie.title } director={ movie.director }
                               onClick={ () => { this.handleClick(index) } }
                                />);

          })
        }
      </div>
    );

  }

}

const mapStateToProps = (state) => {  
  return {
    movies: state
  }
};

export default connect(mapStateToProps, { getMovies })(MovieList);