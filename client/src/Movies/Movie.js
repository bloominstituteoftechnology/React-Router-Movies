import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import MovieCard from './MovieCard';

export default class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null
    };
  }

  componentDidMount() {
    console.log('here i am in movie',this.props.match.params.movieId)
    const id = this.props.match.params.movieId;
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
  
  componentWillReceiveProps(newProps){
    if(this.props.match.params.id !== newProps.match.params.id){
      this.fetchMovie(newProps.match.params.id);
    }
  }

  saveMovie = () => {
    const addToSavedList = this.props.addToSavedList;
    addToSavedList(this.state.movie)
  }

  render() {

    if (!this.state.movie) {
      return <div>Loading movie information...</div>;
    }

    const { title, director, metascore, stars } = this.state.movie;
    return (
      <div className="save-wrapper">
        <Route  path='/movies/:id' render={()=><MovieCard movie={this.state.movie}/>}/>
        <div className="save-button">Save</div>
      </div>
    );
  }
}
