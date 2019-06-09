import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import axios from 'axios';

const Movie = props => {
  const [movie, setMovie] = useState(null);

  const fetchMovie = id => {
    axios.get(`http://localhost:5000/api/movies/${id}`).then(res => {
      setMovie(res.data);
    });
  };

  useEffect(() => {
    const id = props.match.params.id;
    fetchMovie(id);
    // eslint-disable-next-line
  }, []);

  // Uncomment this code when you're ready for the stretch problems
  // componentWillReceiveProps(newProps){
  //   if(this.props.match.params.id !== newProps.match.params.id){
  //     this.fetchMovie(newProps.match.params.id);
  //   }
  // }

  const saveMovie = () => {
    props.addToSavedList(movie);
  };

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return (
    <div className='save-wrapper'>
      <MovieCard movie={movie} saveMovie={saveMovie} />
    </div>
  );
};

export default Movie;
