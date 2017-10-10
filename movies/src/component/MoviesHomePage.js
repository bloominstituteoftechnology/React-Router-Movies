import React from 'react'
import {connect} from 'react-redux';
import {getMovies} from "../actions/Movies";
import Movie from './Movie';
import axios from 'axios';

class MoviesHomePage extends React.Component {
  componentDidMount() {
    console.log('didmount called', this.props.movies);
    this.props.getMovies();
  }

  render() {
    return (
      <ul>
        {this.props.movies.map((movie, index) => <li key={index}><Movie {...movie}/></li>)}
      </ul>
    );
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    getMovies: () => {
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