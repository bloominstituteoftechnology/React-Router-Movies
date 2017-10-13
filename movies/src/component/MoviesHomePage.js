import React from 'react'
import {connect} from 'react-redux';
import {getMovies} from "../actions/Movies";
import Movie from './Movie';
import AddMovie from './AddMovie';
import axios from 'axios';

class MoviesHomePage extends React.Component {
  componentDidMount() {
    console.log('didmount called', this.props.movies);
    this.props.getMovies();
  }

  render() {
    return (
      <div>
        <AddMovie handleOnSubmit={this.props.addMovie} length={this.props.movies.length}/>
        <ul>
          {this.props.movies.map((movie, index) => <li key={index}><Movie {...movie}/></li>)}
        </ul>
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    getMovies: () => {
      axios.get(`http://localhost:5000/movies`).then(response => dispatch(getMovies(response.data)));
    },
    addMovie: ({id = 0, title = 'untitled', director = 'unknown', metascore = 0, stars = []} = {}) => {
      console.log(id);
      axios.post(`http://localhost:5000/new-movie`, {id, title, director, stars}).then(() => alert('New movie added!'));
      axios.get(`http://localhost:5000/movies`).then(response => dispatch(getMovies(response.data)));
    }
  }
};

const mapStateToProps = (state) => {
  console.log('mapstate', state);
  return {
    movies: [...state.movies]
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesHomePage);