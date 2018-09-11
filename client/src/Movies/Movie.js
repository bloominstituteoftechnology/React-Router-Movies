import React, { Component } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import { Route } from 'react-router-dom';

export default class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null
    };
  }

  componentDidMount(props) {
    // change this line to grab the id passed on the URL
    
    const id = this.props.match.params.id;
    this.fetchMovie(id);
  }

  fetchMovie = id => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(response => {
        this.setState(() => ({ movie: response.data }));
      })
      .catch(error => {
        console.error(error);
      });
  };
  // Uncomment this code when you're ready for the stretch problems
  componentWillReceiveProps(newProps){
    if(this.props.match.params.id !== newProps.match.params.id){
      this.fetchMovie(newProps.match.params.id);
    }
  }

  saveMovie = () => {
    const addToSavedList = this.props.addToSavedList;
    addToSavedList(this.state.movie)
  }

  render(props) {

    if (!this.state.movie) {
      return <div>Loading movie information...</div>;
    }
  
    return (
      <div className="save-wrapper">
        <Route render={props => <MovieCard {...props} data={this.state.movie} />} />
        <div className="save-button" onClick={this.saveMovie}>Save</div>
      </div>
    );
  }
}
