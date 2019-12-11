import React, { Component } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';

export default class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null
    };
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook
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
  
  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = () => {
  //   const addToSavedList = props.addToSavedList;
  //   addToSavedList(movie)
  // }
  componentWillReceiveProps(newProps){
    if(this.props.match.params.id !== newProps.match.params.id){
        this.fetchMovie(newProps.match.params.id);
     }
  }

  render(){
    if (!this.state.movie) {
    return <div>Loading movie information...</div>;
    }
    

  const {title, director, metascore, stars} = this.state.movie;
    return (
			<div className="save-wrapper">
				<MovieCard
					title={title}
					director={director}
					metascore={metascore}
					stars={stars }
				/>
			</div>
		);
	}
}
