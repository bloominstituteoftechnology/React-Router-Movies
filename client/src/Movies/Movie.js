import React, { Component } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';

export default class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null,
    };
  }

// didn't touch lines 5-11

  componentDidMount() {
    const id = this.props.match.params.id; // I totally stole this from line 30 and was pleasantly surprised when it worked
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
// didn't touch this part, either

  
// Uncomment this code when you're ready for the stretch problems
  componentWillReceiveProps(newProps){
    if(this.props.match.params.id !== newProps.match.params.id)    {
      this.fetchMovie(newProps.match.params.id);
    }
  }
// didn't touch any of this code after I uncommented it

  saveMovie = () => {
    const addToSavedList = this.props.addToSavedList;
    addToSavedList(this.state.movie);
  }
// didn't touch any of this code after I uncommented it

  render() {
    if (!this.state.movie) {
      return <div>Loading movie information...</div>;
    }

    return (
      <div className="save-wrapper">
        <MovieCard movie={this.state.movie} />
        <div className="save-button" onClick={this.saveMovie}>Save</div>
      </div>
    ); 	
  }
}
// I agonized over this render for a long time. The first part (lines 48-50) was already there. I think this returns the text if there is no movie in state.
// Otherwise, the render returns a MovieCard displaying info about any movies in state and then saves them if the user clicks on them.
