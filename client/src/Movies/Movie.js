import React, { Component } from 'react';
import MovieCard from './MovieCard';
import axios from 'axios';

export default class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {
        title: '',
        director: '',
        metascore: '',
        stars: []
      }
    };
  }

  componentDidMount() {
    const { match } = this.props
    const id = match.params.id;
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
     const { addToSavedList } = this.props
     addToSavedList(this.state.movie)
   }

  render() {

    
    if (!this.state.movie) {
      return <div>Loading movie information...</div>;
    }

    const { title, director, metascore, stars } = this.state.movie;

    return (
      <div className="save-wrapper">
        <MovieCard title={title}
                   director={director}
                   metascore={metascore}
                   stars={stars}
        />
        <div onClick={this.saveMovie} className="save-button">Save</div>
      </div>
    );
  }
}
