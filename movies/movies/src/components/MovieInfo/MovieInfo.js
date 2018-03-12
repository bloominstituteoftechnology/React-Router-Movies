import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

import './MovieInfo.css';

class MovieInfo extends Component {
  
  state = {
    movie: {
      title: "",
      director: "",
      metascore: "",
      stars: []
    }
  };

  componentDidMount() {
  
    const promise = axios.get(`http://localhost:5000/api/movies/${ this.props.match.params.id }`);

    promise.then((response) => {

      this.setState({
        movie: response.data
      });

    });

  }

  render() {
        
    return (

      <div className="MovieInfo">
        <Link to="/">Go Back to List</Link>
        <br/>
        <div className="Movie__title">{ this.state.movie.title }</div>
        <div className="Movie__director">{ this.state.movie.director }</div>
        <div className="Movie__score">{ this.state.movie.metascore }</div>
        <div className="Movie__cast">{ this.state.movie.stars.join(", ") }</div>
      </div>

    );

  }
};

export default MovieInfo;