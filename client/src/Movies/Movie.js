import React, { Component } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';

export default class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null,
    };
  } // didn't touch this

  componentDidMount() {
    const id = this.props.match.params.id; // I totally stole this from line 30 and was very pleased when it worked
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
  }; // didn't touch this part, either

  
  // Uncomment this code when you're ready for the stretch problems
  componentWillReceiveProps(newProps){
    if(this.props.match.params.id !== newProps.match.params.id)    {
      this.fetchMovie(newProps.match.params.id);
    }
   } // didn't touch any of this code after I uncommented it

  saveMovie = () => {
    const addToSavedList = this.props.addToSavedList;
    addToSavedList(this.state.movie);
  } // didn't touch any of this code after I uncommented it

  render() {
    if (!this.state.movie) {
      return <div>Loading movie information...</div>;
    }

    return (
      <div className="save-wrapper">
        <MovieCard movie={this.state.movie} />
        <div className="save-button" onClick={this.saveMovie}>Save</div>
      </div>
    ); 	//this is one of those things where I tried about 16 different variations before it finally worked
        //I am nothing if not persistent
  }
}
