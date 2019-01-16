import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class MovieCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: null
    };
  }
  componentDidMount() {
    // change this line to grab the id passed on the URL
    let id = this.getID();

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
  // componentWillReceiveProps(newProps){
  //   if(this.props.match.params.id !== newProps.match.params.id){
  //     this.fetchMovie(newProps.match.params.id);
  //   }
  // }

  // saveMovie = () => {
  //   const addToSavedList = this.props.addToSavedList;
  //   addToSavedList(this.state.movie)
  // }

  getID = () => {
    if(this.props.match && this.props.match.params.id) {
      return this.props.match.params.id;
    } else {
      return this.props.movie.id;
    }
  }

  render() {
    if (!this.state.movie) {
      return <div>Loading movie information...</div>;
    }

    const { title, director, metascore, stars } = this.state.movie;

    let id = this.getID();

    return (
      <Link to={`/movies/${id}`} >
        <div className="save-wrapper">
          <div className="movie-card">
            <h2>{title}</h2>
            <div className="movie-director">
              Director: <em>{director}</em>
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
          <div className="save-button">Save</div>
        </div>
      </Link>
    );
  }
};

export default MovieCard;
