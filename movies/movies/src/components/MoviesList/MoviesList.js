import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

import './MoviesList.css';

class MovieList extends Component {

  state = {
    movies: []
  };

  componentDidMount() {
        
    const promise = axios.get('http://localhost:5000/api/movies');

    promise.then((response) => {

      this.setState({
        movies: response.data
      });

    });

  }

  handleClick = (index) => {

    this.props.history.push(`/movies/${ index }`);
    
  }

  render() {

    return (
      <div className="Movies">
        {
          this.state.movies.map((movie, index) => {
            return (
              <div key={ index } className="Movie__item" onClick={ () => { this.handleClick(index) } }>
                <div className="Movie__title">
                  <span className="index">{ index + 1 }.</span>
                  <Link to={ "/movies/" + index }>{ movie.title }</Link>
                </div>              
              </div>
            );
          })
        }
        <Link to="/new-movie">Add New Movie</Link>
      </div>
    );

  }

}

export default MovieList;