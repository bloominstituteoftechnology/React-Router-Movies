import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
    this.HandleClick = this.HandleClick.bind(this)
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/movies')
      .then(response => {
        this.setState(() => ({ movies: response.data }));
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }
  HandleClick() {
    // alert('hey')
  }

  render() {
    return (
      <div className="movie-list">
        {this.state.movies.map(movie => (
          // console.log("Hey, inside map: ", movie),
          <MovieLinks key={movie.id} movie={movie} onClick={this.HandleClick}/>
          // <MovieDetails key={movie.id}  movie={movie}  />
        ))}
      </div>
    );
  }
}
const style = {
  // border: '1px solid red',
  margin: '5px 0px',
  justifyContent: 'center',
  display: 'flex'
}
function MovieLinks({ movie, onClick }) {
  const { title, director, metascore, stars } = movie;
  return (
    <div className="LinkURL" onClick={onClick} style={style} >
      <Link to={`/movies/${movie.id}`}>{title}</Link>, 

    </div>
  );
}

function MovieDetails({ movie }) {
  const { title, director, metascore, stars } = movie;
  return (
    <div className="movie-card" style={style} >
      <h2>{title}</h2>
      {/* <Link to='/movies:id' >{title}</Link>,  */}
      <div className="movie-director">
        {/* Director: <em>{director}</em> */}
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>

      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
    </div>
  );
}
